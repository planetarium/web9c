import { Address as LibplanetAccountAddress } from "@planetarium/account";
import { BencodexDictionary } from "@planetarium/bencodex";
import { z } from "zod";
import { getRawState } from "./getRawState";

export const InventoryType = z.array(z.instanceof(BencodexDictionary));
type ItemType = "Consumable" | "Costume" | "Equipment" | "Material";
interface ItemBase<TItemType extends ItemType, TItemSubType extends string> {
  itemType: TItemType;
  elementalType: string;
  grade: number;
  id: number;
  itemId: string | null;
  itemSubType: TItemSubType;
  requiredBlockIndex: number | null;
}

export type Item = Equipment | Material | Costume | Consumable;

const ALL_MATERIAL_ITEM_SUB_TYPES = [
  "EquipmentMaterial",
  "FoodMaterial",
  "MonsterPart",
  "NormalMaterial",
  "Hourglass",
  "ApStone",
] as const;
type MaterialItemSubType = (typeof ALL_MATERIAL_ITEM_SUB_TYPES)[number];
export type Material = ItemBase<"Material", MaterialItemSubType>;

const ALL_CONSUMABLE_ITEM_SUB_TYPES = ["Food"] as const;
type ConsumableItemSubType = (typeof ALL_CONSUMABLE_ITEM_SUB_TYPES)[number];
export type Consumable = ItemBase<"Consumable", ConsumableItemSubType>;

const ALL_COSTUME_ITEM_SUB_TYPES = [
  "FullCostume",
  "HairCostume",
  "EarCostume",
  "EyeCostume",
  "TailCostume",
  "Title",
] as const;
type CostumeItemSubType = (typeof ALL_COSTUME_ITEM_SUB_TYPES)[number];
export type Costume = ItemBase<"Costume", CostumeItemSubType>;

const ALL_EQUIPMENT_ITEM_SUB_TYPES = [
  "Weapon",
  "Armor",
  "Belt",
  "Necklace",
  "Ring",
] as const;
type EquipmentItemSubType = (typeof ALL_EQUIPMENT_ITEM_SUB_TYPES)[number];
export interface Equipment extends ItemBase<"Equipment", EquipmentItemSubType> {
  level: number;
}

function isValidItemSubType<T extends readonly string[]>(
  x: string,
  list: T
): x is T[number] {
  return list.includes(x);
}

function isValidEquipmentItemSubType(x: string): x is EquipmentItemSubType {
  return isValidItemSubType(x, ALL_EQUIPMENT_ITEM_SUB_TYPES);
}

function isValidMaterialItemSubType(x: string): x is MaterialItemSubType {
  return isValidItemSubType(x, ALL_MATERIAL_ITEM_SUB_TYPES);
}

function isValidCostumeItemSubType(x: string): x is CostumeItemSubType {
  return isValidItemSubType(x, ALL_COSTUME_ITEM_SUB_TYPES);
}

function isValidConsumableItemSubType(x: string): x is ConsumableItemSubType {
  return isValidItemSubType(x, ALL_CONSUMABLE_ITEM_SUB_TYPES);
}

async function deriveAvatarInventoryAddress(
  address: LibplanetAccountAddress
): Promise<LibplanetAccountAddress> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode("inventory"),
    { name: "HMAC", hash: "SHA-1" },
    false,
    ["sign"]
  );

  const result = await crypto.subtle.sign("HMAC", key, address.toBytes());
  return LibplanetAccountAddress.fromBytes(new Uint8Array(result));
}

export async function getAvatarInventory(address: LibplanetAccountAddress) {
  const inventoryAddress = await deriveAvatarInventoryAddress(address);
  const rawState = await getRawState(inventoryAddress);

  const parsedInventory = InventoryType.parse(rawState);
  function itemMapToObject(item: BencodexDictionary): Item {
    const rawItemId = item.get("itemId") || item.get("item_id");
    const rawRequiredBlockIndex = (item.get("requiredBlockIndex") ||
      item.get("rbi")) as number | undefined;
    const itemType = item.get("item_type") as string;
    const itemSubType = item.get("item_sub_type") as string;

    const base = {
      // buffSkills: rawBuffSkills === undefined ? null : rawBuffSkills,
      elementalType: item.get("elemental_type") as string,
      grade: Number(item.get("grade")),
      id: Number(item.get("id")),
      itemId:
        rawItemId === undefined
          ? null
          : Buffer.from(rawItemId as Uint8Array).toString("hex"),
      requiredBlockIndex:
        rawRequiredBlockIndex === undefined ? null : rawRequiredBlockIndex,
    };
    if (itemType === "Equipment" && isValidEquipmentItemSubType(itemSubType)) {
      const level = item.get("level") as bigint;
      return {
        ...base,
        itemType,
        itemSubType,
        level: Number(level),
      };
    }

    if (
      itemType === "Consumable" &&
      isValidConsumableItemSubType(itemSubType)
    ) {
      return {
        ...base,
        itemType,
        itemSubType,
      };
    }

    if (itemType === "Costume" && isValidCostumeItemSubType(itemSubType)) {
      return {
        ...base,
        itemType,
        itemSubType,
      };
    }

    if (itemType === "Material" && isValidMaterialItemSubType(itemSubType)) {
      return {
        ...base,
        itemType,
        itemSubType,
      };
    }

    throw new Error(`${itemType} && ${itemSubType}`);
  }

  return parsedInventory.map((x) => {
    return {
      item: itemMapToObject(x.get("item") as BencodexDictionary),
      count: Number(x.get("count") as bigint),
    };
  });
}

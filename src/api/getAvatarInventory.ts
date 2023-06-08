import { Address as LibplanetAccountAddress } from "@planetarium/account";
import { BencodexDictionary } from "@planetarium/bencodex";
import { z } from "zod";
import { getRawState } from "./getRawState";

export const InventoryType = z.array(z.instanceof(BencodexDictionary));
type ItemType = "Consumable" | "Costume" | "Equipment" | "Material";
interface ItemBase<T extends ItemType> {
  itemType: T;
  elementalType: string;
  grade: number;
  id: number;
  itemId: string | null;
  itemSubType: string;
  requiredBlockIndex: number | null;
}

export type Item = Equipment | Material | Costume | Consumable;

export type Material = ItemBase<"Material">;
export type Consumable = ItemBase<"Consumable">;
export type Costume = ItemBase<"Costume">;

export interface Equipment extends ItemBase<"Equipment"> {
  level: number;
}

function isValidItemType(
  x: string
): x is "Equipment" | "Material" | "Costume" | "Consumable" {
  return (
    x === "Equipment" ||
    x === "Material" ||
    x === "Costume" ||
    x === "Consumable"
  );
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
    if (!isValidItemType(itemType)) {
      throw new Error();
    }

    const base = {
      // buffSkills: rawBuffSkills === undefined ? null : rawBuffSkills,
      elementalType: item.get("elemental_type") as string,
      grade: Number(item.get("grade")),
      id: Number(item.get("id")),
      itemId:
        rawItemId === undefined
          ? null
          : Buffer.from(rawItemId as Uint8Array).toString("hex"),
      itemSubType: item.get("item_sub_type") as string,
      itemType,
      requiredBlockIndex:
        rawRequiredBlockIndex === undefined ? null : rawRequiredBlockIndex,
    };
    if (itemType === "Equipment") {
      const level = item.get("level") as bigint;
      return {
        ...base,
        level: Number(level),
      };
    }

    if (itemType === "Consumable") {
      return {
        ...base,
        itemType: "Consumable",
      };
    }

    if (itemType === "Costume") {
      return {
        ...base,
        itemType: "Costume",
      };
    }

    if (itemType === "Material") {
      return {
        ...base,
        itemType: "Material",
      };
    }

    throw new Error();
  }

  return parsedInventory.map((x) => {
    return {
      item: itemMapToObject(x.get("item") as BencodexDictionary),
      count: Number(x.get("count") as bigint),
    };
  });
}

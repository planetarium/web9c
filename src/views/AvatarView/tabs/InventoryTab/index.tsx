import { Address as LibplanetAccountAddress } from "@planetarium/account";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import {
  Consumable,
  Costume,
  Equipment,
  Item,
  Material,
  useAvatarInventory,
} from "../../../../hooks/useAvatarInventory";
import ConsumableTab from "./tabs/ConsumableTab";
import CostumeTab from "./tabs/CostumeTab";
import EquipmentTab from "./tabs/EquipmentTab";
import MaterialTab from "./tabs/MaterialTab";
import { useEffect, useState } from "react";

function isEquipment(x: Item): x is Equipment {
  return x.itemType === "Equipment";
}

function isCostume(x: Item): x is Costume {
  return x.itemType === "Costume";
}

function isConsumablePair(pair: {
  item: Item;
  count: number;
}): pair is { item: Consumable; count: number } {
  return pair.item.itemType === "Consumable";
}

function isMaterialPair(pair: {
  item: Item;
  count: number;
}): pair is { item: Material; count: number } {
  return pair.item.itemType === "Material";
}

type ItemId = string;

interface InventoryContentProps {
  avatarInventoryAddress: LibplanetAccountAddress;
  selectedItems: ItemId[];
  onSelectItem: (itemId: ItemId) => void;
}

function InventoryContent({
  avatarInventoryAddress,
  selectedItems,
  onSelectItem,
}: InventoryContentProps) {
  const inventory = useAvatarInventory(avatarInventoryAddress);

  if (inventory == null) {
    return <p>Loading avatar state...</p>;
  }

  return (
    <Tabs>
      <TabList>
        <Tab className="inline-block rounded-1xl shadow-md p-4">
          <h3>Equipments</h3>
        </Tab>
        <Tab className="inline-block rounded-1xl shadow-md p-4">
          <h3>Costumes</h3>
        </Tab>
        <Tab className="inline-block rounded-1xl shadow-md p-4">
          <h3>Consumable</h3>
        </Tab>
        <Tab className="inline-block rounded-1xl shadow-md p-4">
          <h3>Material</h3>
        </Tab>
      </TabList>
      <TabPanel>
        <EquipmentTab
          items={inventory.map((x) => x.item).filter(isEquipment)}
          selectedItemIds={selectedItems}
          onClickItem={onSelectItem}
        />
      </TabPanel>
      <TabPanel>
        <CostumeTab items={inventory.map((x) => x.item).filter(isCostume)} />
      </TabPanel>
      <TabPanel>
        <ConsumableTab items={inventory.filter(isConsumablePair)} />
      </TabPanel>
      <TabPanel>
        <MaterialTab items={inventory.filter(isMaterialPair)} />
      </TabPanel>
    </Tabs>
  );
}

interface InventoryProps {
  avatarAddress: LibplanetAccountAddress;
  selectedItems: ItemId[];
  onSelectItem: (itemId: ItemId) => void;
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

export default function InventoryTab({
  avatarAddress,
  ...props
}: InventoryProps) {
  const [avatarInventoryAddress, setAvatarInventoryAddress] =
    useState<LibplanetAccountAddress | null>();

  useEffect(() => {
    (async () => {
      deriveAvatarInventoryAddress(avatarAddress).then(
        setAvatarInventoryAddress
      );
    })();
  }, [avatarAddress]);

  if (avatarInventoryAddress == null) {
    return <p>Deriving avatar inventory address...</p>;
  }

  return (
    <InventoryContent
      avatarInventoryAddress={avatarInventoryAddress}
      {...props}
    />
  );
}

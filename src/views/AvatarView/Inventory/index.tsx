import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import {
  Consumable,
  Costume,
  Equipment,
  Item,
  Material,
} from "../../../graphql";
import ConsumableTab from "./tabs/ConsumableTab";
import CostumeTab from "./tabs/CostumeTab";
import EquipmentTab from "./tabs/EquipmentTab";
import MaterialTab from "./tabs/MaterialTab";

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

interface InventoryProps {
  inventory: { item: Item; count: number }[];
}

export default function Inventory({ inventory }: InventoryProps) {
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

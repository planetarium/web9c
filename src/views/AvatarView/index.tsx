import { Layout } from "../../layouts/Layout";
import { Address } from "@planetarium/account";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import {
  Consumable,
  Costume,
  Equipment,
  getAvatarInventory,
  Item,
  Material,
} from "../../graphql";
import { useInterval } from "../../hooks/useInterval";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import MaterialTab from "./Inventory/tabs/MaterialTab";
import ConsumableTab from "./Inventory/tabs/ConsumableTab";
import EquipmentTab from "./Inventory/tabs/EquipmentTab";
import CostumeTab from "./Inventory/tabs/CostumeTab";

export default function AvatarView() {
  const navigate = useNavigate();
  const { address: rawAddress } = useParams<{ address: string }>();

  const [state, setState] = useState<{
    inventory: Awaited<ReturnType<typeof getAvatarInventory>>;
  } | null>(null);

  if (rawAddress === undefined) {
    navigate("/");
  }

  useInterval(async () => {
    // eslint-disable-next-line
    const address = Address.fromHex(rawAddress!);
    const inventory = await getAvatarInventory(address);

    setState({
      inventory,
    });
  }, 2000);

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

  return (
    <Layout>
      <h1>Avatar</h1>
      <h2>Inventory</h2>
      {state == null ? (
        <p>Loading...</p>
      ) : (
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
              items={state.inventory.map((x) => x.item).filter(isEquipment)}
            />
          </TabPanel>
          <TabPanel>
            <CostumeTab
              items={state.inventory.map((x) => x.item).filter(isCostume)}
            />
          </TabPanel>
          <TabPanel>
            <ConsumableTab items={state.inventory.filter(isConsumablePair)} />
          </TabPanel>
          <TabPanel>
            <MaterialTab items={state.inventory.filter(isMaterialPair)} />
          </TabPanel>
        </Tabs>
      )}
    </Layout>
  );
}

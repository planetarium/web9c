import { Layout } from "../../layouts/Layout";
import { Address } from "@planetarium/account";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import InventoryTab from "./tabs/InventoryTab";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import BattleTab from "./tabs/BattleTab";

export default function AvatarView() {
  const navigate = useNavigate();
  const { address: rawAddress } = useParams<{ address: string }>();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  if (rawAddress === undefined) {
    navigate("/");
  }

  function onSelectItem(itemId: string) {
    const index = selectedItems.findIndex((v) => v == itemId);
    if (index === -1) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems([
        ...selectedItems.slice(0, index),
        ...selectedItems.slice(index + 1),
      ]);
    }
  }

  if (rawAddress === null || rawAddress === undefined) {
    return <p>Address not given. '/avatar/:address'</p>;
  }

  return (
    <Layout>
      <h1>Avatar</h1>
      <Tabs>
        <TabList>
          <Tab className="inline-block rounded-1xl shadow-md p-4">
            <h2>Inventory</h2>
          </Tab>
          <Tab className="inline-block rounded-1xl shadow-md p-4">
            <h2>Battle</h2>
          </Tab>
        </TabList>
        <TabPanel>
          <InventoryTab
            avatarAddress={Address.fromHex(rawAddress)}
            selectedItems={selectedItems}
            onSelectItem={onSelectItem}
          />
        </TabPanel>
        <TabPanel>
          <BattleTab equipments={selectedItems} avatarAddress={rawAddress} />
        </TabPanel>
      </Tabs>
    </Layout>
  );
}

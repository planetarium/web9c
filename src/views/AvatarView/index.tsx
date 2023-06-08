import { Layout } from "../../layouts/Layout";
import { Address } from "@planetarium/account";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { getAvatarInventory } from "../../api";
import { useInterval } from "../../hooks/useInterval";
import InventoryTab from "./tabs/InventoryTab";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import BattleTab from "./tabs/BattleTab";

export default function AvatarView() {
  const navigate = useNavigate();
  const { address: rawAddress } = useParams<{ address: string }>();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

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

  if (rawAddress == null) {
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
          {state == null ? (
            <p>Loading...</p>
          ) : (
            <InventoryTab
              inventory={state.inventory}
              selectedItems={selectedItems}
              onSelectItem={onSelectItem}
            />
          )}
        </TabPanel>
        <TabPanel>
          {state == null ? (
            <p>Loading...</p>
          ) : (
            <BattleTab equipments={selectedItems} avatarAddress={rawAddress} />
          )}
        </TabPanel>
      </Tabs>
    </Layout>
  );
}

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

  function isConsumable(x: Item): x is Consumable {
    return x.itemType === "Consumable";
  }

  function isMaterial(x: Item): x is Material {
    return x.itemType === "Material";
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
            {...state.inventory
              .map((x) => x.item)
              .filter(isEquipment)
              .map((x) => (
                <div
                  className="p-1 border-4 w-32 h-20 inline-block"
                  key={x.itemId}
                >
                  <img
                    className="w-16 h-16 inline"
                    src={`https://raw.githubusercontent.com/planetarium/NineChronicles/development/nekoyume/Assets/Resources/UI/Icons/Item/${x.id}.png`}
                  />
                  <span>+{x.level}</span>
                </div>
              ))}
          </TabPanel>
          <TabPanel>
            {...state.inventory
              .map((x) => x.item)
              .filter(isCostume)
              .map((x) => (
                <div
                  className="p-1 border-4 w-32 h-20 inline-block"
                  key={x.itemId}
                >
                  <img
                    className="w-16 h-16 inline"
                    src={`https://raw.githubusercontent.com/planetarium/NineChronicles/development/nekoyume/Assets/Resources/UI/Icons/Item/${x.id}.png`}
                  />
                </div>
              ))}
          </TabPanel>
          <TabPanel>
            {...state.inventory
              .filter(({ item }) => isConsumable(item))
              .map(({ item, count }) => (
                <div
                  className="p-1 border-4 w-32 h-20 inline-block"
                  key={item.itemId}
                >
                  <img
                    className="w-16 h-16 inline"
                    src={`https://raw.githubusercontent.com/planetarium/NineChronicles/development/nekoyume/Assets/Resources/UI/Icons/Item/${item.id}.png`}
                  />
                  <span>{count}</span>
                </div>
              ))}
          </TabPanel>
          <TabPanel>
            {...state.inventory
              .filter(({ item }) => isMaterial(item))
              .map(({ item, count }) => (
                <div
                  className="p-1 border-4 w-32 h-20 inline-block"
                  key={item.itemId}
                >
                  <img
                    className="w-16 h-16 inline"
                    src={`https://raw.githubusercontent.com/planetarium/NineChronicles/development/nekoyume/Assets/Resources/UI/Icons/Item/${item.id}.png`}
                  />
                  <span>{count}</span>
                </div>
              ))}
          </TabPanel>
        </Tabs>
      )}
    </Layout>
  );
}

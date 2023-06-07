import { Layout } from "../../layouts/Layout";
import { Address } from "@planetarium/account";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import {
  getAvatarInventory,
} from "../../graphql";
import { useInterval } from "../../hooks/useInterval";
import Inventory from "./Inventory";

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

  return (
    <Layout>
      <h1>Avatar</h1>
      <h2>Inventory</h2>
      {state == null ? (
        <p>Loading...</p>
      ) : (
        <Inventory inventory={state.inventory} />
      )}
    </Layout>
  );
}

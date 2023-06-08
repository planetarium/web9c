import { Address, Guid } from "@planetarium/lib9c-wasm";
import { useForm } from "react-hook-form";
import { sendHackAndSlashTransaction } from "../../../../api";
import Button from "../../../../components/ui/Button";
import InputField from "../../../../components/ui/InputField";
import useAccountContext from "../../../../hooks/useAccountContext";
import { useState } from "react";

function bytesToHex(arr: Uint8Array) {
  return Buffer.from(arr).toString("hex");
}

function arrToGuid(arr: Uint8Array): Guid {
  const raw =
    bytesToHex(arr.slice(0, 4)) +
    "-" +
    bytesToHex(arr.slice(4, 6)) +
    "-" +
    bytesToHex(arr.slice(6, 8)) +
    "-" +
    bytesToHex(arr.slice(8, 10)) +
    "-" +
    bytesToHex(arr.slice(10));
  return new Guid(raw);
}

interface BattleTabProps {
  avatarAddress: string;
  equipments: string[];
}

interface Inputs {
  stageId: number;
  worldId: number;
  apStoneCount: number;
  totalPlayCount: number;
}

export default function BattleTab({
  avatarAddress,
  equipments,
}: BattleTabProps) {
  const { register, handleSubmit } = useForm<Inputs>();
  const { privateKey } = useAccountContext();
  const [txId, setTxId] = useState<string | null>(null);

  if (privateKey === null) {
    return <p>Login required.</p>;
  }

  return (
    <div>
      <h2>Stake</h2>
      <form
        onSubmit={handleSubmit(
          ({ stageId, worldId, apStoneCount, totalPlayCount }) => {
            sendHackAndSlashTransaction(
              privateKey,
              new Address(avatarAddress),
              stageId,
              worldId,
              equipments.map((x) => {
                console.log(x);
                return arrToGuid(Buffer.from(x, "hex"));
              }),
              [],
              [],
              [],
              totalPlayCount,
              apStoneCount
            ).then((x) => setTxId(Buffer.from(x).toString("hex")));
          }
        )}
      >
        <div className="my-2">
          <label htmlFor="worldId">World</label>
          <InputField
            type="number"
            {...register("worldId", { required: true, valueAsNumber: true })}
          />
        </div>

        <div className="my-2">
          <label htmlFor="stageId">Stage</label>
          <InputField
            type="number"
            {...register("stageId", { required: true, valueAsNumber: true })}
          />
        </div>

        <div className="my-2">
          <label htmlFor="totalPlayCount">Count to play (Repeat)</label>
          <InputField
            type="number"
            value="1"
            {...register("totalPlayCount", {
              required: true,
              valueAsNumber: true,
            })}
          />
        </div>

        <div className="my-2">
          <label htmlFor="apStoneCount">AP Stone count to use</label>
          <InputField
            type="number"
            value="0"
            {...register("apStoneCount", {
              required: true,
              valueAsNumber: true,
            })}
          />
        </div>

        <Button type="submit" className="p-2 bg-black text-white">
          Run
        </Button>
      </form>
      {txId && <p>{txId}</p>}
    </div>
  );
}

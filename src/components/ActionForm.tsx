import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { Slot } from "./ui/Slot";
import { FC, useEffect, useMemo, useState } from "react";
import { useAtom } from "jotai";
import { Action } from "../store/action";
import {
  Address,
  Currency,
  transfer_asset3,
  stake2,
} from "@planetarium/lib9c-wasm";
import { Account } from "../store/account";
import { BencodexDictionary, decode, encode } from "@planetarium/bencodex";
import { Uint8ArrayToHex } from "../utils/Uint8Array";

const UNKNOWN_ACTION = "" as const;

export function ActionForm() {
  const [actionType, setActionType] = useState<string>(UNKNOWN_ACTION);

  return (
    <Slot>
      <Heading size="md">Action</Heading>
      <Select
        placeholder="Select action type."
        onChange={(e) => setActionType(e.currentTarget.value)}
      >
        <option value="transfer_asset3">Transfer Asset</option>
        <option value="stake2">Stake</option>
      </Select>
      <ActionFieldForm actionType={actionType} />
      <Button bgColor="green.100">Action Gen</Button>
      <GetBencodexButton />
    </Slot>
  );
}

function GetBencodexButton() {
  const [action] = useAtom(Action);
  const hexadecimalStringAction = useMemo(() => {
    return Uint8ArrayToHex(encode(action));
  }, [action]);

  const toast = useToast();

  if (action === null) {
    return <></>;
  }

  return (
    <Button
      disabled={action === null}
      bgColor="blue.100"
      onClick={() => {
        navigator.clipboard.writeText(hexadecimalStringAction);
        toast({
          title: "Copied to clipboard.",
          description: "Action hexadecimal string copied to clipboard.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }}
    >
      Get Bencodex
    </Button>
  );
}

function ActionFieldForm({ actionType }: { actionType: string }) {
  if (actionType === UNKNOWN_ACTION) {
    return <StakeForm />;
  }

  if (actionType === "transfer_asset3") {
    return <TransferAssetForm />;
  }
  if (actionType === "stake2") {
    return <StakeForm />;
  }

  return <Slot>Should be implemented.</Slot>;
}

function TransferAssetForm() {
  const [action, setAction] = useAtom(Action);
  const [account] = useAtom(Account);
  const [recipientString, setRecipientString] = useState<string>();
  const [amount, setAmount] = useState<number>();
  const [memo, setMemo] = useState<string>();

  if (action !== null) {
    console.debug(
      "ACTION",
      action,
      Array.from((action as BencodexDictionary).values())
    );
  }

  const recipient = useMemo<Address | undefined>(() => {
    if (recipientString === undefined) {
      return undefined;
    }

    try {
      return new Address(recipientString);
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }, [recipientString]);

  useEffect(() => {
    if (recipient && amount && account.address) {
      setAction(
        decode(
          transfer_asset3({
            sender: new Address(account.address.toString()),
            recipient,
            amount: {
              currency: new Currency({
                ticker: "NCG",
                decimalPlaces: 2,
                minters: [
                  new Address("0x47d082a115c63e7b58b1532d20e631538eafadde"),
                ],
              }),
              sign: 1,
              majorUnit: String(amount),
              minorUnit: "00",
            },
            memo: memo || "EMPTY",
          })
        )
      );
    }
  }, [recipient, amount, memo]);

  return (
    <Slot>
      <FormControl>
        <FormLabel>Recipient</FormLabel>
        <Input
          required={true}
          isInvalid={
            recipientString !== undefined &&
            !/^0x[0-9a-fA-F]{40}$/.test(recipientString)
          }
          type="string"
          value={recipientString ?? ""}
          onChange={(e) => setRecipientString(e.target.value)}
        />
        <FormLabel>Amount</FormLabel>
        <Input
          required={true}
          type="number"
          value={amount ?? ""}
          onChange={(e) =>
            setAmount(
              e.target.value === undefined ? undefined : Number(e.target.value)
            )
          }
        />
        <FormLabel>Memo</FormLabel>
        <Input
          type="string"
          value={memo ?? ""}
          onChange={(e) => setMemo(e.target.value)}
        />
      </FormControl>
    </Slot>
  );
}

const StakeForm: FC = () => {
  const [action, setAction] = useAtom(Action);
  const [amount, setAmount] = useState<number>();

  useEffect(() => {
    if (!amount) return;

    const encodedAction = stake2({ amount: `${amount}` });
    const action = decode(encodedAction);

    setAction(action);
  }, [amount, action, setAction]);

  return (
    <Slot>
      <FormControl>
        <FormLabel>Amount</FormLabel>
        <Input
          required={true}
          type="number"
          value={amount ?? ""}
          onChange={(e) =>
            setAmount(
              e.target.value !== undefined ? Number(e.target.value) : undefined
            )
          }
        />
      </FormControl>
    </Slot>
  );
};

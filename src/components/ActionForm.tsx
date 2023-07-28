import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useQuery } from "urql";
import { Slot } from "./ui/Slot";
import { ChangeEvent, FC, useEffect, useMemo, useState } from "react";
import { useAtom } from "jotai";
import { Action } from "../store/action";
import { Address, Currency } from "@planetarium/lib9c-wasm";
import { Lib9c } from "@planetarium/lib9c-wasm/dotnet";
import { Account } from "../store/account";
import { BencodexDictionary, decode, encode } from "@planetarium/bencodex";
import { Uint8ArrayToHex } from "../utils/Uint8Array";
import { GetAvatarStatusDocument } from "../graphql/graphql";

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

export const ActionForm = () => {
  const [selectedAction, setSelectedAction] = useState("");
  const [inputs, setInputs] = useState({});

  const actionTypes = Lib9c.Wasm.getAllActionTypes();

  const handleActionChange = (event: { target: { value: any } }) => {
    const actionType = event.target.value;
    setSelectedAction(actionType);
    console.log(event.target.value);
    console.log(Lib9c.Wasm.getAvailableInputs(actionType));
    const inputsForAction = JSON.parse(
      Lib9c.Wasm.getAvailableInputs(actionType)
    );
    setInputs(inputsForAction);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    setInputs({
      ...inputs,
      [inputName]: event.target.value,
    });
  };

  return (
    <Slot>
      <Heading size="md">Action</Heading>
      <Select value={selectedAction} onChange={handleActionChange}>
        <option value="">Select an action</option>
        {actionTypes.map((actionType) => (
          <option key={actionType} value={actionType}>
            {actionType}
          </option>
        ))}
      </Select>

      {Object.keys(inputs).map((inputName) => (
        <div key={inputName}>
          <label>{inputName}</label>
          <input
            type="text"
            value={inputs[inputName]}
            onChange={(event) => handleInputChange(event, inputName)}
          />
          <Button bgColor="green.100">Action Gen</Button>
          <GetBencodexButton />
        </div>
      ))}
    </Slot>
  );
};

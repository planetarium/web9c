import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useEffect, useRef, useState } from "react";
import { navigate } from "vite-plugin-ssr/client/router";
import { Title } from "../components/Title";
import { useAtom } from "jotai";
import { Keystore } from "../store/keystore";
import { isKeyObject } from "../utils/web3-account";
import { Web3KeyObject } from "@planetarium/account-web3-secret-storage";
export { Page };

function Page() {
  const [keystore, setKeystore] = useAtom(Keystore);
  const [keyFile, setKeyFile] = useState<Web3KeyObject>();
  const [passphrase, setPassphrase] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  const inputFileRef = useRef<HTMLInputElement>(null);

  const toast = useToast();

  /*
  const { setKeystore, setAccount } = useMainMutations();

  const inputFileRef = useRef<HTMLInputElement>(null);


  useEffect(() => readKeyFile(worker, keyFile), [keyFile]);

  // Set Keystore on Worker Message
  useEffect(() => {
    if (message?.key === "KEY_FILE_READ") {
      setKeystore(message.data.content);
    }

    if (message?.key === "ERROR_KEY_FILE_READ") {
      toast({
        title: "Error",
        description: "Failed to read key file. Please try again.",
        status: "error",
      });
    }
  }, [message]);
*/
  function readFile() {
    const files = inputFileRef.current?.files;
    if (!files || files.length !== 1) {
      toast({
        title: "Error",
        description: "No keyfile has been selected.",
        status: "error",
      });
      return;
    }
    const keyfile = files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== "string") {
        toast({
          title: "Error",
          description: "Failed to read keyfile.",
          status: "error",
        });
        return;
      }

      const parsedResult = JSON.parse(result);
      debugger;
      if (!isKeyObject(parsedResult)) {
        toast({
          title: "Error",
          description: "Keyfile is not in valid Web3 Secret Storage Format.",
          status: "error",
        });
        return;
      }
      setKeyFile(parsedResult);
      return;
    };
    reader.readAsText(keyfile);
  }

  const authenticate = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!keyFile) {
      setLoading(false);
      toast({
        title: "Error",
        description: "No keyfile has been imported.",
        status: "error",
      });
      return;
    }

    if (!passphrase) {
      setLoading(false);
      toast({
        title: "Error",
        description: "Please enter your passphrase.",
        status: "error",
      });
      return;
    }

    try {
      const account = (keystore, passphrase);
      setAccount(account, await account.getPublicKey());
    } catch (e: unknown) {
      setLoading(false);

      if (!(e instanceof Error)) {
        toast({
          title: "Error",
          description:
            "Unknown error occured while getting account from key file. Please try again.",
          status: "error",
        });
        return;
      }

      toast({
        title: "Error",
        description: e.message,
        status: "error",
      });
    }

    setLoading(false);
  };

  return (
    <Container
      as={Flex}
      flexDir="column"
      rounded="2xl"
      shadow="2xl"
      p="6"
      gap="4"
    >
      <Title />
      <Flex as="form" gap="3" flexDir="column" onSubmit={authenticate}>
        <FormControl isRequired>
          <FormLabel>Web3 Secret Storage File</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FontAwesomeIcon} icon={faFile} textColor="gray.500" />
            </InputLeftElement>
            <Input
              type="text"
              readOnly
              value={keyFile ? keyFile.name : ""}
              placeholder="Select a keyfile..."
              onChange={() => {
                void 0;
              }}
              onClick={() =>
                inputFileRef.current && inputFileRef.current.click()
              }
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Passphrase</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FontAwesomeIcon} icon={faKey} textColor="gray.500" />
            </InputLeftElement>
            <Input
              type="password"
              value={passphrase}
              onChange={(e) => setPassphrase(e.target.value)}
              placeholder="Passphrase"
              disabled={!keystore}
            />
          </InputGroup>
        </FormControl>
        <Input
          type="file"
          display="none"
          ref={inputFileRef}
          onChange={(e) => {
            if (e.target.files && e.target.files.length === 1) {
              readFile();
            }
          }}
        />
        <Button
          w="full"
          type="submit"
          isDisabled={!keystore || !passphrase}
          isLoading={isLoading}
        >
          Authenticate
        </Button>
      </Flex>
    </Container>
  );
}

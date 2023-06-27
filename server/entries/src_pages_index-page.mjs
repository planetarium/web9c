import { jsxs, jsx } from "react/jsx-runtime";
import { useToast, Container, Flex, FormControl, FormLabel, InputGroup, InputLeftElement, Icon, Input, Button } from "@chakra-ui/react";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";
import { navigate } from "vite-plugin-ssr/client/router";
import { A as Account, T as Title, c as createWeb3Account } from "../chunks/chunk-6198eb0c.js";
import { useAtom } from "jotai";
import { Address } from "@planetarium/account";
import "../chunks/chunk-44355a5e.js";
import "@planetarium/account-web3-secret-storage";
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function isKeyId(keyId) {
  return !!keyId.match(UUID_PATTERN);
}
function isKeyObject(json) {
  if (typeof json !== "object" || json == null || !("version" in json) || json.version !== 3 || !("id" in json) || typeof json.id !== "string" || !isKeyId(json.id) || !("address" in json) || typeof json.address !== "string") {
    return false;
  }
  try {
    Address.fromHex(json.address, true);
  } catch (e) {
    return false;
  }
  return "crypto" in json && typeof json.crypto === "object" && isKeyObjectCipher(json.crypto) && isKeyObjectKdf(json.crypto);
}
function isKeyObjectCipher(json) {
  return typeof json === "object" && json != null && "cipher" in json && json.cipher === "aes-128-ctr" && "cipherparams" in json && typeof json.cipherparams === "object" && json.cipherparams != null && "iv" in json.cipherparams && typeof json.cipherparams.iv === "string" && "ciphertext" in json && typeof json.ciphertext === "string" && "mac" in json && typeof json.mac === "string";
}
function isKeyObjectKdf(json) {
  if (typeof json !== "object" || json == null || !("kdf" in json)) {
    return false;
  }
  switch (json.kdf) {
    case "pbkdf2":
      return "kdfparams" in json && typeof json.kdfparams === "object" && json.kdfparams != null && "c" in json.kdfparams && typeof json.kdfparams.c === "number" && "dklen" in json.kdfparams && typeof json.kdfparams.dklen === "number" && "prf" in json.kdfparams && json.kdfparams.prf === "hmac-sha256" && "salt" in json.kdfparams && typeof json.kdfparams.salt === "string";
    case "scrypt":
      return "kdfparams" in json && typeof json.kdfparams === "object" && json.kdfparams != null && "dklen" in json.kdfparams && typeof json.kdfparams.dklen === "number" && "n" in json.kdfparams && typeof json.kdfparams.n === "number" && "p" in json.kdfparams && typeof json.kdfparams.p === "number" && "r" in json.kdfparams && typeof json.kdfparams.r === "number" && "salt" in json.kdfparams && typeof json.kdfparams.salt === "string";
    default:
      return false;
  }
}
function Page() {
  var _a, _b, _c;
  const [account, setAccount] = useAtom(Account);
  const [keyFile, setKeyFile] = useState();
  const [passphrase, setPassphrase] = useState("");
  const [isLoading, setLoading] = useState(false);
  const inputFileRef = useRef(null);
  const toast = useToast();
  function readFile() {
    var _a2;
    const files = (_a2 = inputFileRef.current) == null ? void 0 : _a2.files;
    if (!files || files.length !== 1) {
      toast({
        title: "Error",
        description: "No keyfile has been selected.",
        status: "error"
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
          status: "error"
        });
        return;
      }
      const parsedResult = JSON.parse(result);
      if (!isKeyObject(parsedResult)) {
        toast({
          title: "Error",
          description: "Keyfile is not in valid Web3 Secret Storage Format.",
          status: "error"
        });
        return;
      }
      setKeyFile(parsedResult);
    };
    reader.readAsText(keyfile);
  }
  const authenticate = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!keyFile) {
      setLoading(false);
      toast({
        title: "Error",
        description: "No keyfile has been imported.",
        status: "error"
      });
      return;
    }
    if (!passphrase) {
      setLoading(false);
      toast({
        title: "Error",
        description: "Please enter your passphrase.",
        status: "error"
      });
      return;
    }
    try {
      const account2 = createWeb3Account(keyFile, () => passphrase);
      const publicKey = await account2.getPublicKey();
      const address = await account2.getAddress();
      setAccount({
        account: account2,
        publicKey,
        address
      });
      navigate("/main");
    } catch (e2) {
      setLoading(false);
      if (!(e2 instanceof Error)) {
        toast({
          title: "Error",
          description: "Unknown error occured while getting account from key file. Please try again.",
          status: "error"
        });
        return;
      }
      toast({
        title: "Error",
        description: e2.message,
        status: "error"
      });
    }
    setLoading(false);
  };
  return /* @__PURE__ */ jsxs(
    Container,
    {
      as: Flex,
      flexDir: "column",
      rounded: "2xl",
      shadow: "2xl",
      p: "6",
      gap: "4",
      children: [
        /* @__PURE__ */ jsx(Title, {}),
        /* @__PURE__ */ jsxs(Flex, { as: "form", gap: "3", flexDir: "column", onSubmit: authenticate, children: [
          /* @__PURE__ */ jsxs(FormControl, { isRequired: true, children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Web3 Secret Storage File" }),
            /* @__PURE__ */ jsxs(InputGroup, { children: [
              /* @__PURE__ */ jsx(InputLeftElement, { pointerEvents: "none", children: /* @__PURE__ */ jsx(Icon, { as: FontAwesomeIcon, icon: faFile, textColor: "gray.500" }) }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  readOnly: true,
                  value: keyFile ? ((_c = (_b = (_a = inputFileRef.current) == null ? void 0 : _a.files) == null ? void 0 : _b.item(0)) == null ? void 0 : _c.name) ?? "" : "",
                  placeholder: "Select a keyfile...",
                  onChange: () => {
                  },
                  onClick: () => inputFileRef.current && inputFileRef.current.click()
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs(FormControl, { isRequired: true, children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Passphrase" }),
            /* @__PURE__ */ jsxs(InputGroup, { children: [
              /* @__PURE__ */ jsx(InputLeftElement, { pointerEvents: "none", children: /* @__PURE__ */ jsx(Icon, { as: FontAwesomeIcon, icon: faKey, textColor: "gray.500" }) }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "password",
                  value: passphrase,
                  onChange: (e) => setPassphrase(e.target.value),
                  placeholder: "Passphrase",
                  disabled: !account
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "file",
              display: "none",
              ref: inputFileRef,
              onChange: (e) => {
                if (e.target.files && e.target.files.length === 1) {
                  readFile();
                }
              }
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              w: "full",
              type: "submit",
              isDisabled: !account || !passphrase,
              isLoading,
              children: "Authenticate"
            }
          )
        ] })
      ]
    }
  );
}
export {
  Page
};

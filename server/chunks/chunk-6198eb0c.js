import { jsxs, jsx } from "react/jsx-runtime";
import { Link, Text } from "@chakra-ui/react";
import { S as SvgWeb9C } from "./chunk-44355a5e.js";
import { atom } from "jotai";
import { Web3Account } from "@planetarium/account-web3-secret-storage";
function Title() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col place-content-center place-items-center gap-1", children: [
    /* @__PURE__ */ jsx(Link, { href: "https://github.com/planetarium/web9c", children: /* @__PURE__ */ jsx(SvgWeb9C, { className: "w-24 bg-transparent" }) }),
    /* @__PURE__ */ jsx(
      Text,
      {
        as: "span",
        display: "block",
        fontSize: "28px",
        lineHeight: "32px",
        fontWeight: "light",
        children: "Web9c"
      }
    )
  ] });
}
const Account = atom({
  address: null,
  publicKey: null,
  account: null
});
function createWeb3Account(key, passphraseGetter) {
  const getter = passphraseGetter || (() => "UNUSED");
  const account = new Web3Account(key, {
    configurePassphrase: () => Promise.resolve(getter()),
    authenticate: (_, firstAttempt) => firstAttempt ? Promise.resolve(getter()) : Promise.reject(
      new Error(
        "Possibly invalid Passphrase. Web3 Secret Storage decryption failed."
      )
    )
  });
  return account;
}
export {
  Account as A,
  Title as T,
  createWeb3Account as c
};

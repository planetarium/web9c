import { Address } from "@planetarium/account";

type KeyId = string;

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isKeyId(keyId: string): keyId is KeyId {
  return !!keyId.match(UUID_PATTERN);
}

type Web3KeyObjectKdf =
  | {
      kdf: "pbkdf2";
      kdfparams: {
        c: number;
        dklen: number;
        prf: "hmac-sha256";
        salt: string;
      };
    }
  | {
      kdf: "scrypt";
      kdfparams: {
        dklen: number;
        n: number;
        p: number;
        r: number;
        salt: string;
      };
    };

type Web3KeyObjectCipher = {
  cipher: "aes-128-ctr";
  cipherparams: {
    iv: string;
  };
  ciphertext: string;
  mac: string;
};

interface Web3KeyObject {
  version: 3;
  id: KeyId;
  address: string;
  crypto: Web3KeyObjectCipher & Web3KeyObjectKdf;
}

export function isKeyObject(json: unknown): json is Web3KeyObject {
  if (
    typeof json !== "object" ||
    json == null ||
    !("version" in json) ||
    json.version !== 3 ||
    !("id" in json) ||
    typeof json.id !== "string" ||
    !isKeyId(json.id) ||
    !("address" in json) ||
    typeof json.address !== "string"
  ) {
    return false;
  }

  try {
    Address.fromHex(json.address, true);
  } catch (e) {
    return false;
  }

  return (
    "crypto" in json &&
    typeof json.crypto === "object" &&
    isKeyObjectCipher(json.crypto) &&
    isKeyObjectKdf(json.crypto)
  );
}

function isKeyObjectCipher(json: unknown): json is Web3KeyObjectCipher {
  return (
    typeof json === "object" &&
    json != null &&
    "cipher" in json &&
    json.cipher === "aes-128-ctr" &&
    "cipherparams" in json &&
    typeof json.cipherparams === "object" &&
    json.cipherparams != null &&
    "iv" in json.cipherparams &&
    typeof json.cipherparams.iv === "string" &&
    "ciphertext" in json &&
    typeof json.ciphertext === "string" &&
    "mac" in json &&
    typeof json.mac === "string"
  );
}

function isKeyObjectKdf(json: unknown): json is Web3KeyObjectKdf {
  if (typeof json !== "object" || json == null || !("kdf" in json)) {
    return false;
  }

  switch (json.kdf) {
    case "pbkdf2":
      return (
        "kdfparams" in json &&
        typeof json.kdfparams === "object" &&
        json.kdfparams != null &&
        "c" in json.kdfparams &&
        typeof json.kdfparams.c === "number" &&
        "dklen" in json.kdfparams &&
        typeof json.kdfparams.dklen === "number" &&
        "prf" in json.kdfparams &&
        json.kdfparams.prf === "hmac-sha256" &&
        "salt" in json.kdfparams &&
        typeof json.kdfparams.salt === "string"
      );

    case "scrypt":
      return (
        "kdfparams" in json &&
        typeof json.kdfparams === "object" &&
        json.kdfparams != null &&
        "dklen" in json.kdfparams &&
        typeof json.kdfparams.dklen === "number" &&
        "n" in json.kdfparams &&
        typeof json.kdfparams.n === "number" &&
        "p" in json.kdfparams &&
        typeof json.kdfparams.p === "number" &&
        "r" in json.kdfparams &&
        typeof json.kdfparams.r === "number" &&
        "salt" in json.kdfparams &&
        typeof json.kdfparams.salt === "string"
      );

    default:
      return false;
  }
}

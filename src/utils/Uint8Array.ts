export function Uint8ArrayToHex(array: Uint8Array) {
  return Array.from(array)
    .map((i) => i.toString(16).padStart(2, '0'))
    .join('');
}

export function HexToUint8Array(hexString: string) {
  const data = hexString
    .match(/.{1,2}/g)
    ?.map((byte: string) => parseInt(byte, 16));

  if (!data) {
    return new Uint8Array();
  }

  return Uint8Array.from(data);
}

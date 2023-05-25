export function bytesToHex(uint8: Uint8Array): string {
  return uint8.reduce(function (memo, i) {
    return memo + ("0" + i.toString(16)).slice(-2);
  }, "");
}

export function hexToBytes(hex: string): Uint8Array {
    return new Uint8Array(hex.match(/../g)!.map(h=>parseInt(h,16)));
}

import { atom } from "jotai";
import { Value } from "@planetarium/bencodex";

export const Action = atom<Value | null>(null);

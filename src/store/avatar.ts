import { atom } from "jotai";

type AvatarStateType = {
  name: string;
  level: number;
  actionPoint: number;
  address: string;
};

export const Avatar = atom<AvatarStateType | null>(null);

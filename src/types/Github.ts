import { Language } from "types/Language";

export type Languages = { name: Language; value: number }[];

export type Github = {
  id: number;
  title: string;
  description: string;
  star: number;
  fork: number;
  languages: Languages;
};

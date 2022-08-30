import { Image } from "types/Image";

export type Portfolio = {
  id: string;
  title: string;
  description: string;
  image: Image;
  startAt: string;
  endAt: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
};

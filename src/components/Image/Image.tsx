import { AspectRatio } from "@mantine/core";
import NextImage from "next/image";
import { FC } from "react";

type Props = {
  url: string;
  height: number;
  width: number;
};

export const Image: FC<Props> = ({ url, height, width }) => {
  return (
    <AspectRatio ratio={width / height}>
      <NextImage src={url} width="100%" layout="fill" objectFit="cover" alt="" />
    </AspectRatio>
  );
};

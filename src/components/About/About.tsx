import { Stack, Text } from "@mantine/core";
import { SegmentTitle } from "components/Title";
import { FC } from "react";

export const About: FC = () => {
  return (
    <Stack spacing={0}>
      <SegmentTitle>About</SegmentTitle>
      <Text size={24} mt={0} mb={24} component="h3">
        Lightsound Shimabu
      </Text>
      <Text>
        ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
      </Text>
    </Stack>
  );
};

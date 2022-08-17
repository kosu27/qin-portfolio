import { Container, Space, Stack, Text } from "@mantine/core";
import { Layout } from "components/templates/Layout";
import { SegmentTitle } from "components/Title";
import { useMediaQuery } from "lib/mantine";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={0}>
        <SegmentTitle>About</SegmentTitle>
        <Text size={20} mb={20} component="h3">
          Lightsound Shimabu
        </Text>
        <Text>
          ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
        </Text>
      </Stack>
    </Layout>
  );
};

export default About;

import { Center, ScrollArea, Space, Stack } from "@mantine/core";
import { SegmentButton } from "components/Button";
import { SegmentTitle } from "components/Title";
import { TwitterItem } from "components/Twitter/TwitterItem";
import { useMediaQuery } from "lib/mantine";
import { FC } from "react";
import { Twitter } from "types/Twitter";

type Props = {
  tweets: Twitter[];
};

export const TwitterTweet: FC<Props> = ({ tweets }) => {
  const isDesktop = useMediaQuery("sm");
  return (
    <Stack spacing={0}>
      <SegmentTitle>Twitter</SegmentTitle>
      <ScrollArea style={{ height: isDesktop ? 880 : 400 }}>
        <Stack spacing={24}>
          {tweets.map((tweet) => (
            <TwitterItem key={tweet.id} twitter={tweet} />
          ))}
        </Stack>
      </ScrollArea>

      <Space h={24} />
      <Center mt={8}>
        <SegmentButton display="View on Twitter" />
      </Center>
    </Stack>
  );
};

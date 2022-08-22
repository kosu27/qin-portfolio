import { Center, Space, Stack } from "@mantine/core";
import { SegmentButton } from "components/Button";
import { SegmentTitle } from "components/Title";
import { TwitterItem } from "components/Twitter/TwitterItem";
import { FC } from "react";
import { Twitter } from "types/Twitter";

type Props = {
  tweet: Twitter[];
};

export const TwitterTweet: FC<Props> = ({ tweet }) => {
  const items = tweet.slice(0, 3);

  return (
    <Stack spacing={0}>
      <SegmentTitle>Twitter</SegmentTitle>
      <Stack spacing={56}>
        {items.map((tweet) => (
          <TwitterItem key={tweet.id} twitter={tweet} />
        ))}
      </Stack>
      <Space h={40} />
      <Center mt={8}>
        <SegmentButton display="View on Twitter" />
      </Center>
    </Stack>
  );
};

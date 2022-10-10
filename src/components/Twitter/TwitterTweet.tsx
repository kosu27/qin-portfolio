import { Anchor, Center, ScrollArea, Space, Stack } from "@mantine/core";
import axios from "axios";
import { SegmentButton } from "components/Button";
import { SegmentTitle } from "components/Title";
import { TwitterItem } from "components/Twitter/TwitterItem";
import { FC } from "react";
import useSWR from "swr";
import { Twitter } from "types/Twitter";

const twitterFetcher = async (key: string): Promise<Twitter[]> => {
  const twitterUserId = process.env.MY_TWITTER_USER_ID as string;
  const url = `/api/user-tweets/${twitterUserId}`;
  const res = await axios.get(url);
  return res.data;
};

type Props = {
  scrollHeight: number;
};

export const TwitterTweet: FC<Props> = ({ scrollHeight }) => {
  const { data, error } = useSWR("tweets", twitterFetcher, {});
  if (error) return <div>Failed to get data</div>;
  if (!data) return <div>Loading...</div>;

  const twitterUrl = `https://twitter.com/${data[0].userId}`;

  return (
    <Stack spacing={0}>
      <SegmentTitle>Twitter</SegmentTitle>
      <ScrollArea style={{ height: scrollHeight }}>
        <Stack spacing={24}>
          {data.map((tweet) => (
            <TwitterItem key={tweet.id} twitter={tweet} />
          ))}
        </Stack>
      </ScrollArea>

      <Space h={24} />
      <Anchor href={twitterUrl} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
        <Center mt={8}>
          <SegmentButton display="View on Twitter" />
        </Center>
      </Anchor>
    </Stack>
  );
};

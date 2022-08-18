import { Avatar, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import { FC } from "react";
import { Twitter } from "types/Twitter";

type Props = {
  twitter: Twitter;
};

export const TwitterItem: FC<Props> = ({ twitter }) => {
  return (
    <Group spacing={16} align="start" noWrap={true}>
      <Avatar src={twitter.userIcon} radius="lg" />
      <Stack spacing={4}>
        <Group spacing={8}>
          <Text size={16} weight="bold">
            {twitter.userName}
          </Text>
          <Text>{`@${twitter.userId}・${twitter.created_at}`}</Text>
          <Text>{twitter.tweet}</Text>
        </Group>
      </Stack>
    </Group>
  );
};

import {
  Avatar,
  Group,
  Stack,
  Text,
  TypographyStylesProvider,
  useMantineTheme,
} from "@mantine/core";
import { FC } from "react";
import { Twitter } from "types/Twitter";
import { textToHtml } from "utils/htmlTransform";

type Props = {
  twitter: Twitter;
};

export const TwitterItem: FC<Props> = ({ twitter }) => {
  const theme = useMantineTheme();
  return (
    <Group spacing={16} align="start" noWrap={true}>
      <Avatar src={twitter.userIcon} radius="xl" />
      <Stack spacing={4}>
        <Group spacing={8}>
          <Text size={16} weight="bold">
            {twitter.userName}
          </Text>
          <Text
            size={12}
            weight="bold"
            color={theme.colors.dark[2]}
          >{`@${twitter.userId}・${twitter.createdAt}`}</Text>
        </Group>
        <TypographyStylesProvider>
          <div
            dangerouslySetInnerHTML={{
              __html: textToHtml(twitter.tweet),
            }}
          />
        </TypographyStylesProvider>
      </Stack>
    </Group>
  );
};

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
              __html:
                "<p>📣 新サービス「Noway Form」をリリースしました！</p><p>Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormsでやっていたことがNotionだけで完結します✌✨</p><p>試しに使っていただけると幸いです😊</p>< p > <a>https://www.noway-form.com/ja</a></p>",
            }}
          />
        </TypographyStylesProvider>
      </Stack>
    </Group>
  );
};

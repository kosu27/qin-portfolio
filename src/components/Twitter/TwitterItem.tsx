import { Avatar, Group, Stack, Text, TypographyStylesProvider } from "@mantine/core";
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
          <Text>{`@${twitter.userId}・${twitter.createdAt}`}</Text>
          <TypographyStylesProvider>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<p>📣 新サービス「Noway Form」をリリースしました！</p><p>Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormsでやっていたことがNotionだけで完結します✌✨</p><p>試しに使っていただけると幸いです😊</p><p><a>https://www.noway-form.com/ja</a></p>",
              }}
            />
          </TypographyStylesProvider>
        </Group>
      </Stack>
    </Group>
  );
};

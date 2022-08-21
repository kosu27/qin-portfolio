import { ColorSwatch, Group, Progress, Stack, Text, useMantineTheme } from "@mantine/core";
import { GithubData } from "components/Github/GithubData";
import { FC } from "react";
import { Github } from "types/Github";

type Props = {
  github: Github;
};

export const GithubItem: FC<Props> = ({ github }) => {
  const theme = useMantineTheme();
  return (
    <Stack spacing={4}>
      <Text size={20} weight="bold">
        {github.title}
      </Text>
      <Text size={16}>{github.description}</Text>
      <Group spacing={20}>
        <GithubData name="star" value={117} />
        <GithubData name="fork" value={18} />
      </Group>

      <Progress
        sections={[
          { value: 65.5, color: "#3178C6" },
          { value: 33.7, color: "#F1E05A" },
          { value: 0.8, color: "#EDEDED" },
        ]}
      />
      <Group spacing={16}>
        <Group spacing={6}>
          <ColorSwatch color="#3178C6" size={6} />
          <Text size="xs" weight={700}>
            TypeScript
          </Text>
          <Text size="xs" color={theme.colors.dark[2]} weight={700}>
            {65.5}%
          </Text>
        </Group>
        <Group spacing={6}>
          <ColorSwatch color="#F1E05A" size={6} />
          <Text size="xs" weight={700}>
            JavaScript
          </Text>
          <Text size="xs" color={theme.colors.dark[2]} weight={700}>
            {33.7}%
          </Text>
        </Group>
        <Group spacing={6}>
          <ColorSwatch color="#EDEDED" size={6} />
          <Text size="xs" weight={700}>
            Other
          </Text>
          <Text size="xs" color={theme.colors.dark[2]} weight={700}>
            {0.8}%
          </Text>
        </Group>
      </Group>
    </Stack>
  );
};

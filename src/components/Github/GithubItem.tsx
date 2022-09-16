import { Group, Stack, Text } from "@mantine/core";
import { GithubData } from "components/Github/GithubData";
import { GithubLanguage } from "components/Github/GithubLanguage";
import { FC } from "react";
import { Github } from "types/Github";

type Props = {
  github: Github;
};

export const GithubItem: FC<Props> = ({ github }) => {
  return (
    <Stack spacing={8}>
      <Text size={20} weight="bold">
        {github.title}
      </Text>
      <Text size={16}>{github.description}</Text>
      <Group spacing={20}>
        <GithubData name="star" value={117} />
        <GithubData name="fork" value={18} />
      </Group>
      <GithubLanguage language={github.languages} />
    </Stack>
  );
};

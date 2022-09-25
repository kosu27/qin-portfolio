import { Anchor, Group, Stack, Text } from "@mantine/core";
import { GithubData } from "components/Github/GithubData";
import { GithubLanguage } from "components/Github/GithubLanguage";
import { useText } from "lib/mantine";
import { FC } from "react";
import { Repository } from "types/Repository";

type Props = {
  repository: Repository;
};

export const GithubItem: FC<Props> = ({ repository }) => {
  const textColor = useText();
  return (
    <Anchor
      href={repository.url}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Stack spacing={8}>
        <Text size={18} weight="bold" color={textColor}>
          {repository.name}
        </Text>
        <Text size={16} color={textColor}>
          {repository.description}
        </Text>
        <Group spacing={18}>
          <GithubData name="star" value={repository.stargazerCount} />
          <GithubData name="fork" value={repository.forkCount} />
        </Group>
        <GithubLanguage languages={repository.languages} repository={repository} />
      </Stack>
    </Anchor>
  );
};

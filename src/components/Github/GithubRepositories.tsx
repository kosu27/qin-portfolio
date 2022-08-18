import { Center, Stack } from "@mantine/core";
import { SegmentButton } from "components/Button";
import { GithubItem } from "components/Github/GithubItem";
import { SegmentTitle } from "components/Title";
import { FC } from "react";
import { Github } from "types/Github";

type Props = {
  repositories: Github[];
};

export const GithubRepositories: FC<Props> = ({ repositories }) => {
  const items = repositories.slice(0, 5);

  return (
    <Stack spacing={0}>
      <SegmentTitle>Github</SegmentTitle>
      <Stack spacing={20}>
        {items.map((repository) => (
          <GithubItem key={repository.id} github={repository} />
        ))}
        <Center mt={8}>
          <SegmentButton display="View on Github" />
        </Center>
      </Stack>
    </Stack>
  );
};

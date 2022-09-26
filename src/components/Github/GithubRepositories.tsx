import { useQuery } from "@apollo/client";
import { Anchor, Center, ScrollArea, Stack } from "@mantine/core";
import { SegmentButton } from "components/Button";
import { GithubItem } from "components/Github/GithubItem";
import { SegmentTitle } from "components/Title";
import { repositoryLanguagesQuery } from "lib/github/query.graphql";
import { useMediaQuery } from "lib/mantine";
import { FC } from "react";
import { GetRepositoryLanguagesQuery } from "types/Github";
import { Repository } from "types/Repository";
import { queryRepositories } from "utils/repositoriesQuery";

type Props = {
  repositories: Repository[];
};

export const GithubRepositories: FC<Props> = ({ repositories }) => {
  const isDesktop = useMediaQuery("sm");
  const { data } = useQuery<GetRepositoryLanguagesQuery>(repositoryLanguagesQuery, {
    variables: { repositoriesFirst: 10, languagesFirst: 10 },
  });

  const items: Repository[] = data ? queryRepositories(data) : repositories;
  const githubUrl = data ? (data.viewer.url as string) : "";

  return (
    <Stack spacing={0}>
      <SegmentTitle>Github</SegmentTitle>
      <Stack spacing={24}>
        <ScrollArea style={{ height: isDesktop ? 880 : 400 }} pr={24}>
          <Stack spacing={40}>
            {items.map((repository) => (
              <GithubItem key={repository.id} repository={repository} />
            ))}
          </Stack>
        </ScrollArea>
        <Anchor
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Center mt={8}>
            <SegmentButton display="View on Github" />
          </Center>
        </Anchor>
      </Stack>
    </Stack>
  );
};

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GetRepositoryLanguagesQuery } from "types/Github";
import { repositoryLanguagesQuery } from "lib/github/query.graphql";

export const githubClient = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: { authorization: `Bearer${process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN}` },
  cache: new InMemoryCache(),
});

export const fetchRepositories = async () => {
  const result = await githubClient.query<GetRepositoryLanguagesQuery>({
    query: repositoryLanguagesQuery,
    variables: { repositoriesFirst: 10, languagesFirst: 10 },
  });
  return result.data;
};

import { GetRepositoryLanguagesQuery } from "types/Github";
import { Language, Repository } from "types/Repository";

export const queryRepositories = (data: GetRepositoryLanguagesQuery): Repository[] => {
  return (
    data.viewer.repositories.nodes?.map((repository) => ({
      id: repository?.id ?? "",
      name: repository?.name ?? "",
      totalSize: repository?.languages?.totalSize ?? 0,
      description: repository?.description ?? "",
      url: repository?.url ?? "",
      forkCount: repository?.forkCount ?? 0,
      stargazerCount: repository?.stargazerCount ?? 0,
      languages:
        repository?.languages?.edges?.map((language) => {
          const languageInfo: Language = {
            name: language?.node.name ?? "",
            color: language?.node.color ?? "",
            size: language?.size ?? 0,
          };
          return languageInfo;
        }) ?? [],
    })) ?? []
  );
};

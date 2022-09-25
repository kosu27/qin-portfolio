import type { GetStaticProps, NextPage } from "next";
import { Layout } from "components/templates/Layout";
import { Contents } from "components/Content/Contents";
import { Blog } from "types/Blog";
import { Portfolio } from "types/Portfolio";
import { Twitter } from "types/Twitter";
import { SWRConfig } from "swr";
import { Blogs } from "components/Blog";
import { Portfolios } from "components/Portfolio";
import { TwitterTweet } from "components/Twitter";
import { GithubRepositories } from "components/Github";
import { microCMSClient } from "lib/microCMS/client";
import { fetchTweets } from "lib/twitter/client";
import { ApolloProvider } from "@apollo/client";
import { fetchRepositories, githubClient } from "lib/github/client";
import { Repository } from "types/Repository";
import { queryRepositories } from "utils/repositoriesQuery";

type Props = {
  blogs: Blog[];
  portfolios: Portfolio[];
  repositories: Repository[];
  twitter: Twitter[];
};

const Home: NextPage<Props> = ({ blogs, portfolios, repositories, twitter }) => {
  return (
    <Layout withTitle>
      <Contents
        blogs={<Blogs blogs={blogs} isAll={false} />}
        portfolios={<Portfolios portfolios={portfolios} isAll={false} />}
        tweets={
          <SWRConfig value={{ fallback: twitter }}>
            <TwitterTweet />
          </SWRConfig>
        }
        repositories={
          <ApolloProvider client={githubClient}>
            <GithubRepositories repositories={repositories} />
          </ApolloProvider>
        }
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await microCMSClient.get({
    endpoint: "blog",
    queries: { orders: "-publishedAt" },
  });

  const portfolioData = await microCMSClient.get({
    endpoint: "portfolio",
    queries: { orders: "-publishedAt" },
  });

  const twitterUserId = process.env.MY_TWITTER_USER_ID;
  const twitterResponse = await fetchTweets(twitterUserId);
  if (twitterResponse.errors !== undefined || twitterResponse.data === undefined) {
    throw new Error("ツイートを取得できませんでした");
  }

  const tweets = twitterResponse.data!;

  const data = await fetchRepositories();
  const repositories = queryRepositories(data);

  const props: Props = {
    blogs: blogData.contents,
    portfolios: portfolioData.contents,
    repositories: repositories,
    twitter: tweets,
  };

  return {
    props: props,
    revalidate: 600,
  };
};

export default Home;

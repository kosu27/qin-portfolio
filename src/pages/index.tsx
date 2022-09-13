import type { GetStaticProps, NextPage } from "next";
import { Layout } from "components/templates/Layout";
import { Contents } from "components/Content/Contents";
import { Blog } from "types/Blog";
import { Portfolio } from "types/Portfolio";
import { Github } from "types/Github";
import { Twitter } from "types/Twitter";
import axios from "axios";
import useSWR from "swr";
import { Blogs } from "components/Blog";
import { Portfolios } from "components/Portfolio";
import { TwitterTweet } from "components/Twitter";
import { GithubRepositories } from "components/Github";
import { microCmsclient } from "lib/microCMS/client";

type Props = {
  blogs: Blog[];
  portfolios: Portfolio[];
  repositories: Github[];
  twitter: Twitter[];
};

const twitterFetch = async (url: string): Promise<Twitter[]> => {
  const res = await axios.get(url);
  return res.data;
};

const Home: NextPage<Props> = (props) => {
  const twitterUserId = process.env.MY_TWITTER_USER_ID;
  const twitterResult = useSWR(`/api/user-tweets/${twitterUserId}`, twitterFetch, {
    fallbackData: props.twitter,
  });
  const tweets = twitterResult.data ?? [];

  return (
    <Layout withTitle>
      <Contents
        blogs={<Blogs blogs={props.blogs} isAll={false} />}
        portfolios={<Portfolios portfolios={props.portfolios} isAll={false} />}
        tweets={<TwitterTweet tweets={tweets} />}
        repositories={<GithubRepositories repositories={repositories} />}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await microCmsclient.get({
    endpoint: "blog",
    queries: { orders: "-publishedAt" },
  });

  const portfolioData = await microCmsclient.get({
    endpoint: "portfolio",
    queries: { orders: "-publishedAt" },
  });

  const props: Props = {
    blogs: blogData.contents,
    portfolios: portfolioData.contents,
    repositories: [],
    twitter: [],
  };

  return {
    props: props,
    revalidate: 600,
  };
};

export default Home;

const repositories: Github[] = Array.from(new Array(30)).map((_, i) => ({
  id: i + 1,
  title: "lightsound/nexst-tailwind",
  description: "Next.js starter template.",
  star: 117,
  fork: 18,
  languages: [
    {
      name: "TypeScript",
      value: 1500,
    },
    {
      name: "JavaScript",
      value: 1000,
    },
    {
      name: "Ruby",
      value: 1200,
    },
    {
      name: "PHP",
      value: 400,
    },
    {
      name: "Go",
      value: 100,
    },
    {
      name: "Python",
      value: 100,
    },
    {
      name: "Other",
      value: 100,
    },
  ],
}));

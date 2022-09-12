import type { GetStaticProps, NextPage } from "next";
import { Layout } from "components/templates/Layout";
import { Contents } from "components/Content/Contents";
import { atom, useSetRecoilState } from "recoil";
import { Blog } from "types/Blog";
import { Portfolio } from "types/Portfolio";
import { Github } from "types/Github";
import { Twitter } from "types/Twitter";
import { client } from "lib/microCMS/client";
import axios from "axios";
import useSWR from "swr";

type Props = {
  blogs: Blog[];
  portfolios: Portfolio[];
  github: Github[];
  twitter: Twitter[];
};

const twitterFetch = async (url: string): Promise<Twitter[]> => {
  const res = await axios.get(url);
  return res.data;
};

const Home: NextPage<Props> = (props) => {
  const twitterUserId = process.env.NEXT_PUBLIC_MY_TWITTER_USER_ID;
  const twitterResult = useSWR(`/api/user-tweets/${twitterUserId}`, twitterFetch, {
    fallbackData: props.twitter,
  });
  const tweets = twitterResult.data ?? [];

  return (
    <Layout withTitle>
      <Contents />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await client.get({
    endpoint: "blog",
    queries: { orders: "-publishedAt" },
  });

  const portfolioData = await client.get({
    endpoint: "portfolio",
    queries: { orders: "-publishedAt" },
  });

  const props: Props = {
    blogs: blogData.contents,
    portfolios: portfolioData.contents,
    github: [],
    twitter: [],
  };

  return {
    props: props,
    revalidate: 500,
  };
};

export default Home;

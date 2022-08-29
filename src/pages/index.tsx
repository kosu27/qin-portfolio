import type { GetStaticProps, NextPage } from "next";
import { Layout } from "components/templates/Layout";
import { Contents } from "components/Content/Contents";
import { atom, useSetRecoilState } from "recoil";
import { Blog } from "types/Blog";
import { Portfolio } from "types/Portfolio";
import { Github } from "types/Github";
import { Twitter } from "types/Twitter";
import { client } from "lib/microCMS/client";

type Props = {
  blogs: Blog[];
  portfolios: Portfolio[];
  github: Github[];
  twitter: Twitter[];
};

export const contentState = atom<Props>({
  key: "TopContents",
  default: {
    blogs: [],
    portfolios: [],
    github: [],
    twitter: [],
  },
});

const Home: NextPage<Props> = (props) => {
  const topContents = useSetRecoilState(contentState);
  topContents(props);
  return (
    <Layout withTitle>
      <Contents />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
    queries: { orders: "-publishedAt" },
  });

  const props: Props = {
    blogs: data.content,
    portfolios: [],
    github: [],
    twitter: [],
  };

  return {
    props: props,
  };
};

export default Home;

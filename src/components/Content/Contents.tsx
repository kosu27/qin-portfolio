import { SimpleGrid, Space } from "@mantine/core";
import { Blogs } from "components/Blog/Blogs";
import { GithubRepositories } from "components/Github/GithubRepositories";
import { Portfolios } from "components/Portfolio/Portfolios";
import { TwitterTweet } from "components/Twitter/TwitterTweet";
import { useMediaQuery } from "lib/mantine";
import { FC } from "react";
import { Twitter } from "types/Twitter";
import { Blog } from "types/Blog";
import { Github } from "types/Github";
import { Portfolio } from "types/Portfolio";
import TopPageBlog from "components/Blog/TopPageBlog";

const blogs: Blog[] = Array.from(new Array(10)).map((_, i) => ({
  id: `${i + 1}`,
  title: "This is a header",
  content:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  createdAt: "2022/7/11",
  updatedAt: "2022/7/11",
  publishedAt: "2022/7/11",
}));

const portfolios: Portfolio[] = Array.from(new Array(30)).map((_, i) => ({
  id: i + 1,
  title: "IT KINGDOM",
  description:
    "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
  startAt: "2021/10/11",
  endAt: "2021/12/4",
}));

const GithubDatas: Github[] = Array.from(new Array(30)).map((_, i) => ({
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
      name: "Other",
      value: 100,
    },
  ],
}));

const tweets: Twitter[] = Array.from(new Array(30)).map((_, i) => ({
  id: i + 1,
  userName: "こす",
  userId: "kosueng",
  userIcon:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
  tweet:
    "📣 新サービス「Noway Form」をリリースしました！\n\nNoway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormsでやっていたことがNotionだけで完結します✌✨\n\n試しに使っていただけると幸いです😊\nhttps://www.noway-form.com/ja",
  createdAt: "2021/10/11",
}));

export const Contents: FC = () => {
  const isDesktop = useMediaQuery("sm");
  const space = isDesktop ? 60 : 20;

  return (
    <>
      <TopPageBlog />
      <Blogs blogs={blogs} isAll={false} />
      <Space h={space} />
      <Portfolios isAll={false} portfolios={portfolios} />
      <Space h={space} />
      {isDesktop && (
        <SimpleGrid cols={2} spacing={80}>
          <GithubRepositories repositories={GithubDatas} />
          <TwitterTweet tweet={tweets} />
        </SimpleGrid>
      )}
      {isDesktop || (
        <>
          <GithubRepositories repositories={GithubDatas} />
          <Space h={space} />
          <TwitterTweet tweet={tweets} />
        </>
      )}
    </>
  );
};

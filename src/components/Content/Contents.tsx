import { Container, Space } from "@mantine/core";
import { Blogs } from "components/Blog/Blogs";
import { Portfolios } from "components/Portfolio/Portfolios";
import { useMediaQuery } from "lib/mantine";
import { FC } from "react";
import { Blog } from "types/Blog";
import { Portfolio } from "types/Portfolio";

const blogs: Blog[] = Array.from(new Array(10)).map((_, i) => ({
  id: i + 1,
  title: "This is a header",
  contents:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  created_at: "2022/7/11",
}));

const portfolios: Portfolio[] = Array.from(new Array(30)).map((_, i) => ({
  id: i + 1,
  title: "IT KINGDOM",
  description:
    "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
  start_at: "2021/10/11",
  end_at: "2021/12/4",
}));

export const Contents: FC = () => {
  const isDesktop = useMediaQuery("sm");
  const pX = isDesktop ? 240 : 16;
  const space = isDesktop ? 100 : 60;

  return (
    <Container mx={0} px={pX} size={99999}>
      <Blogs blogs={blogs} isGeneral={false} />
      <Portfolios isGeneral={false} portfolios={portfolios} />
      <Space h={space} />
    </Container>
  );
};

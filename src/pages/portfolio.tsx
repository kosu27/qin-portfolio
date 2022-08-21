import { Portfolios } from "components/Portfolio";
import { Layout } from "components/templates/Layout";
import { GetStaticProps, NextPage } from "next";
import { Portfolio } from "types/Portfolio";

type Props = {
  portfolios: Portfolio[];
};

const Portfolio: NextPage<Props> = ({ portfolios }) => {
  return (
    <Layout>
      <Portfolios portfolios={portfolios} isGeneral={true} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const portfolios: Portfolio[] = Array.from(new Array(30)).map((_, i) => ({
    id: i + 1,
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    startAt: "2021/10/11",
    endAt: "2021/12/4",
  }));

  return {
    props: {
      portfolios: portfolios,
    },
    revalidate: 60,
  };
};

export default Portfolio;

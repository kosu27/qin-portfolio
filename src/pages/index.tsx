import type { NextPage } from "next";
import { Layout } from "components/templates/Layout";
import { TitleZone } from "components/TitleZone";
import { Contents } from "components/Contents";

const Home: NextPage = () => {
  return (
    <Layout>
      <TitleZone />
      <Contents />
    </Layout>
  );
};

export default Home;

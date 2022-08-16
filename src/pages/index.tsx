import type { NextPage } from "next";
import { Layout } from "components/templates/Layout";
import { TitleZone } from "components/Title/TitleZone";
import { Contents } from "components/Content/Contents";

const Home: NextPage = () => {
  return (
    <Layout>
      <TitleZone />
      <Contents />
    </Layout>
  );
};

export default Home;

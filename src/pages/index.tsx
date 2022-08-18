import type { NextPage } from "next";
import { Layout } from "components/templates/Layout";
import { Contents } from "components/Content/Contents";

const Home: NextPage = () => {
  return (
    <Layout isTitle={true}>
      <Contents />
    </Layout>
  );
};

export default Home;

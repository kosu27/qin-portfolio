import { About } from "components/About";
import { Layout } from "components/templates/Layout";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default AboutPage;

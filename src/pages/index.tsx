import type { NextPage } from "next";
import { Header } from "components/Header";
import { TitleZone } from "components/TitleZone";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <TitleZone />
    </div>
  );
};

export default Home;

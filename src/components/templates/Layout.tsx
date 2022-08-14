import type { NextPage } from "next";
import { Header } from "components/Header";
import { TitleZone } from "components/TitleZone";
import { Footer } from "components/Footer";

export const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <TitleZone />
      <Footer height={60} />
    </div>
  );
};

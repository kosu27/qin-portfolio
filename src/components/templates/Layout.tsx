import type { NextPage } from "next";
import { Header } from "components/Header/Header";
import { TitleZone } from "components/Title/TitleZone";
import { Footer } from "components/Footer/Footer";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer height={60} />
    </div>
  );
};

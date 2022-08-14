import {
  AppShell,
  Aside,
  Burger,
  Footer,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";
import { Header } from "src/components/Header";
import { TitleZone } from "src/components/TitleZone";

const Home: NextPage = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Header />
      <TitleZone />
    </div>
  );
};

export default Home;

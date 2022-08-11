import { AppShell, useMantineTheme } from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <AppShell
        styles={{
          main: {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
      ></AppShell>
    </div>
  );
};

export default Home;

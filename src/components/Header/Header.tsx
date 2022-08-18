import {
  Group,
  Text,
  Header as MantineHeader,
  Burger,
  Paper,
  useMantineTheme,
  Drawer,
  Stack,
} from "@mantine/core";
import NextLink from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { useMediaQuery } from "lib/mantine";
import { DarkModeButton } from "components/Button/DarkModeButton";
import { FC } from "react";

export const Header: FC = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const isDesktop = useMediaQuery("md");
  const pX = isDesktop ? 224 : 16;
  const theme = useMantineTheme();

  const links = [
    {
      link: "/about",
      label: "About",
    },
    {
      link: "/blog",
      label: "Blog",
    },
    {
      link: "/portfolio",
      label: "Portfolio",
    },
    {
      link: "/contact",
      label: "Contact",
    },
  ];

  const items = links.map((link) => (
    <NextLink key={link.label} href={link.link}>
      <Text size={18} weight={700} className="rounded-sm cursor-pointer" onClick={() => close()}>
        {link.label}
      </Text>
    </NextLink>
  ));

  const burger = (
    <Burger opened={opened} color={opened ? theme.white : theme.black} onClick={toggle} size="sm" />
  );

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => close()}
        withCloseButton={false}
        title={burger}
        size="100%"
        styles={(theme) => ({
          header: {
            paddingLeft: pX,
            height: 60,
            marginBottom: 0,
          },
          drawer: {
            backgroundColor: theme.colors.pink[6],
            color: theme.white,
          },
        })}
      >
        <Stack spacing={16} pl={20}>
          {items}
        </Stack>
      </Drawer>
      <MantineHeader
        height={60}
        px={pX}
        withBorder={false}
        style={{
          backgroundColor: opened ? theme.colors.pink[6] : theme.white,
          border: 0,
          zIndex: 1,
        }}
      >
        <Group
          position="apart"
          className="flex justify-center items-center h-full w-full"
          color={theme.white}
        >
          {isDesktop || burger}
          <NextLink href={"/"} passHref>
            <Text size={18} weight={700}>
              Kosu IT University
            </Text>
          </NextLink>

          <Group spacing={16}>
            {isDesktop && items}
            <DarkModeButton />
          </Group>
        </Group>
      </MantineHeader>
    </>
  );
};

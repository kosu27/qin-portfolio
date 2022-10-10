import {
  Group,
  Text,
  Header as MantineHeader,
  Burger,
  useMantineTheme,
  Drawer,
  Stack,
} from "@mantine/core";
import NextLink from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { DarkModeButton } from "components/Button/DarkModeButton";
import { FC } from "react";
import { pagesPath } from "utils/$path";
import { useMediaQuery } from "lib/mantine";

export const Header: FC = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const isDesktop = useMediaQuery("md");
  const pX = isDesktop ? 224 : 16;
  const theme = useMantineTheme();
  const textColor = theme.colorScheme === "dark" ? theme.white : theme.colors.dark[7];
  const headerColor = isDesktop ? textColor : theme.white;
  const burgerColor = opened ? theme.white : textColor;
  const burger = <Burger opened={opened} color={burgerColor} onClick={toggle} size="sm" />;

  const links = [
    {
      link: pagesPath.about.$url(),
      label: "About",
    },
    {
      link: pagesPath.blog.$url(),
      label: "Blog",
    },
    {
      link: pagesPath.portfolio.$url(),
      label: "Portfolio",
    },
    {
      link: pagesPath.contact.$url(),
      label: "Contact",
    },
  ];

  const items = links.map((link) => (
    <NextLink key={link.label} href={link.link}>
      <Text
        size="sm"
        weight={700}
        color={headerColor}
        style={{ borderRadius: "2px", cursor: "pointer" }}
        onClick={() => close()}
      >
        {link.label}
      </Text>
    </NextLink>
  ));

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
        <Stack spacing={16} pl={24}>
          {items}
        </Stack>
      </Drawer>
      <MantineHeader
        height={60}
        px={pX}
        withBorder={false}
        style={{
          border: 0,
          zIndex: 1,
        }}
      >
        <Group
          position="apart"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
          color={theme.white}
        >
          {isDesktop || burger}
          <NextLink href={"/"} passHref>
            <Text size={18} weight={700} style={{ cursor: "pointer" }} component="a">
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

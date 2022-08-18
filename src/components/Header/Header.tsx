import {
  createStyles,
  Group,
  Text,
  Header as MantineHeader,
  Burger,
  Paper,
  useMantineTheme,
} from "@mantine/core";
import NextLink from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { useMediaQuery } from "lib/mantine";
import { DarkModeButton } from "components/Button/DarkModeButton";
import { FC } from "react";

const useStyles = createStyles((theme) => ({
  link: {
    borderRadius: theme.radius.sm,
    cursor: "pointer",

    [theme.fn.smallerThan("md")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
      color: theme.white,
    },
  },

  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  dropdown: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
    backgroundColor: theme.colors.pink[6],
    height: "100%",

    [theme.fn.largerThan("sm")]: {
      display: "none",
      borderWidth: 0,
    },
  },
}));

export const Header: FC = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();
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
      <Text size={18} weight={700} className={classes.link} onClick={() => close()}>
        {link.label}
      </Text>
    </NextLink>
  ));

  return (
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
        color={opened ? theme.colors.pink[6] : theme.white}
      >
        {isDesktop || (
          <Burger
            opened={opened}
            color={opened ? theme.white : theme.black}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            style={{ zIndex: 1 }}
          />
        )}

        {opened || (
          <NextLink href={"/"} passHref>
            <Text size={18} weight={700}>
              Kosu IT University
            </Text>
          </NextLink>
        )}

        <Group spacing={16}>
          {isDesktop && items}
          <DarkModeButton isDisplay={!opened} />
        </Group>

        {opened && <Paper className={classes.dropdown}>{items}</Paper>}
      </Group>
    </MantineHeader>
  );
};

import React from "react";
import { Center, createStyles, Text } from "@mantine/core";

type Props = {
  height: number;
};

const useStyle = createStyles((theme) => ({
  inside: {
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[3]
    }`,
  },
}));

export const Footer: React.FC<Props> = ({ height }) => {
  const { classes } = useStyle();

  return (
    <footer className={`w-full px-4 h-[${height}px]`}>
      <div className={classes.inside}></div>
      <Center style={{ height: height }}>
        <Text size={8} color="dimmed" weight="bold">
          © 2022 Kosu IT University
        </Text>
      </Center>
    </footer>
  );
};

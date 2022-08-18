import { Group, Text, useMantineTheme } from "@mantine/core";
import { IconGitFork, IconStar } from "@tabler/icons";
import { FC } from "react";

type Props = {
  name: "star" | "fork";
  value: number;
};

export const GithubData: FC<Props> = ({ name, value }) => {
  const theme = useMantineTheme();
  const icon = () => {
    {
      switch (name) {
        case "star":
          return <IconStar stroke={1.5} size={16} color={theme.colors.dark[2]} />;
        case "fork":
          return <IconGitFork stroke={1.5} size={16} color={theme.colors.dark[2]} />;
        default:
          const check: never = name;
      }
    }
  };
  return (
    <Group spacing={4} align="center">
      {icon()}
      <Text size={12} color={theme.colors.dark[2]} weight="bold">
        {value}
      </Text>
    </Group>
  );
};

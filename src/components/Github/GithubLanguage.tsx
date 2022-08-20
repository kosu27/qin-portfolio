import { Progress, Stack, useMantineTheme } from "@mantine/core";
import { FC } from "react";
import { Language } from "types/Language";

type Props = {
  language: Language;
};

export const GithubLanguage: FC<Props> = ({ language }) => {
  const theme = useMantineTheme();

  return (
    <Stack>
      <Progress size="md" radius="xl" />
    </Stack>
  );
};

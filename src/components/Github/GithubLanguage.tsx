import { Group, Progress, Space, Stack, Text, useMantineTheme } from "@mantine/core";
import { languageColors } from "lib/github/languageColors";
import { FC } from "react";
import { Languages } from "types/Github";

type Props = {
  language: Languages;
};

export const GithubLanguage: FC<Props> = ({ language }) => {
  const theme = useMantineTheme();
  const total = language
    .map((languages) => languages.value)
    .reduce((sum, element) => sum + element, 0);
  const languageParams = language.map((languages) => {
    const percent = Math.floor((languages.value / total) * 1000) / 10;
    const color = languageColors[languages.name];

    return { name: languages.name, value: percent, color: color };
  });

  return (
    <Stack>
      <Progress
        radius="xl"
        sections={languageParams.map((language) => {
          return { value: language.value, color: language.color };
        })}
      />
      <Group spacing={0}>
        {languageParams.map((language) => {
          return (
            <Group key={language.name} spacing={6}>
              <div
                style={{
                  height: 6,
                  width: 6,
                  borderRadius: "50%",
                  backgroundColor: language.color,
                }}
              />
              <Text size={12} weight="bold">
                {language.name}
              </Text>
              <Text size={12} weight="bold" color={theme.colors.dark[2]}>
                {`${language.value}%`}
              </Text>
              <Space w={16} />
            </Group>
          );
        })}
      </Group>
    </Stack>
  );
};

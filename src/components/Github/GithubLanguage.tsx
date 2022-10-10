import { Group, Progress, Space, Stack, Text, useMantineTheme } from "@mantine/core";
import { useText } from "lib/mantine";
import { FC } from "react";
import { Language, Repository } from "types/Repository";

type Props = {
  languages: Language[];
  repository: Repository;
};

type LanguageParams = {
  name: string;
  value: number;
  color: string;
};

export const GithubLanguage: FC<Props> = ({ languages, repository }) => {
  const theme = useMantineTheme();
  const textColor = useText();
  const total = repository.totalSize;
  const languageParams = languages.map<LanguageParams>((language: Language) => {
    const percent = Math.floor((language.size / total) * 1000) / 10;
    const color = language.color;

    return { name: language.name, value: percent, color: color };
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
          const radius = 6;
          return (
            <Group key={language.name} spacing={6}>
              <div
                style={{
                  height: radius,
                  width: radius,
                  borderRadius: "50%",
                  backgroundColor: language.color,
                }}
              />
              <Text size={12} weight="bold" color={textColor}>
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

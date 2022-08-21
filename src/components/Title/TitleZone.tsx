import { Container, Group, Space, Stack, Text, Title } from "@mantine/core";
import { SocialButton } from "components/Button/SocialButton";
import { TitleDescription } from "components/Title/TitleDescription";
import { TitleText } from "components/Title/TitleText";
import { useMediaQuery } from "lib/mantine";
import { FC } from "react";

export const TitleZone: FC = () => {
  const isDesktop = useMediaQuery("sm");
  const pX = isDesktop ? 224 : 16;
  const pY = isDesktop ? 85.5 : 53.5;

  return (
    <Container
      mx={0}
      px={pX}
      py={pY}
      size={99999}
      sx={(theme) => ({
        backgroundColor: theme.colors.pink[6],
        width: "100%",
      })}
    >
      {isDesktop && (
        <Group position="apart">
          <Stack>
            <TitleText />
            <TitleDescription />
          </Stack>
          <SocialButton />
        </Group>
      )}
      {isDesktop || (
        <Stack spacing={4}>
          <TitleText />
          <TitleDescription />
          <Space h={40} />
          <SocialButton />
        </Stack>
      )}
    </Container>
  );
};

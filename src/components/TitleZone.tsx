import { Container, Group, Space, Stack, Text, Title } from "@mantine/core";
import { SocialButton } from "components/SocialButton";
import { useMediaQuery } from "lib/mantine";

export const TitleZone: React.FC = () => {
  const isDesktop = useMediaQuery("sm");
  const pX = isDesktop ? 224 : 16;
  const pY = isDesktop ? 85.5 : 53.5;

  return (
    <>
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
              <Title>
                <Text color="white" weight="bold" size={isDesktop ? 36 : 28}>
                  Kosu IT University
                </Text>
              </Title>
              <Text color="white" weight="bold" size={18}>
                こすのポートフォリオのためのページです
              </Text>
            </Stack>
            <SocialButton />
          </Group>
        )}
        {isDesktop || (
          <Stack spacing={4}>
            <Title>
              <Text color="white" weight="bold" size={isDesktop ? 36 : 28}>
                Kosu IT University
              </Text>
            </Title>
            <Text color="white" weight="bold" size={18}>
              こすのポートフォリオのためのページです
            </Text>
            <Space h={40} />
            <SocialButton />
          </Stack>
        )}
      </Container>
    </>
  );
};

import { Container, Text, Title } from "@mantine/core";
import { useMediaQuery } from "src/lib/mantine";

export const TitleZone = () => {
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
        <Title>
          <Text color="white">Kosu IT University</Text>
        </Title>
      </Container>
    </>
  );
};

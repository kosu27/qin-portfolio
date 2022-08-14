import { Container } from "@mantine/core";
import { Blog } from "components/Blog";
import { Portfolio } from "components/Portfolio";
import { useMediaQuery } from "lib/mantine";

export const Contents: React.FC = () => {
  const isDesktop = useMediaQuery("sm");
  const pX = isDesktop ? 240 : 16;

  return (
    <Container mx={0} px={pX}>
      <Blog isGeneral={false} />
      <Portfolio isGeneral={false} />
    </Container>
  );
};

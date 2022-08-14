import { Container } from "@mantine/core";
import { Blogs } from "components/Blogs";
import { Portfolio } from "components/Portfolio";
import { useMediaQuery } from "lib/mantine";
import { Blog } from "types/Blog";

const blogs: Blog[] = Array.from(new Array(10)).map((_, i) => ({
  id: i,
  title: "This is a header",
  contents:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  created_at: "2022/7/11",
}));

export const Contents: React.FC = () => {
  const isDesktop = useMediaQuery("sm");
  const pX = isDesktop ? 240 : 16;

  return (
    <Container mx={0} px={pX} size={99999}>
      <Blogs blogs={blogs} isGeneral={false} />
      <Portfolio isGeneral={false} />
    </Container>
  );
};

import { Container, Text } from "@mantine/core";
import { format, parseISO } from "date-fns";
import { SegmentTitle } from "components/Title";
import { client } from "lib/microCMS/client";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { BlogType } from "pages/blog";

type Props = BlogType & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  return (
    <Container>
      <SegmentTitle>{props.title}</SegmentTitle>
      <Text>{format(parseISO(props.publishedAt as string), "yyyy.MM.dd")}</Text>
      <Text dangerouslySetInnerHTML={{ __html: props.body }} />
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (ctx) => {
  if (!ctx.params) {
    return { notFound: true };
  }

  const data = await client.getListDetail<BlogType>({
    endpoint: "blog",
    contentId: ctx.params.id,
  });

  return {
    props: data,
  };
};

export default BlogId;

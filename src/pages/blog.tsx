import { Blogs } from "components/Blog";
import { Layout } from "components/templates/Layout";
import { GetStaticProps, NextPage } from "next";
import { Blog } from "types/Blog";

type Props = {
  blogs: Blog[];
};

const BlogPage: NextPage<Props> = ({ blogs }) => {
  return (
    <Layout>
      <Blogs blogs={blogs} isGeneral={true} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const blogs: Blog[] = Array.from(new Array(10)).map((_, i) => ({
    id: i + 1,
    title: "This is a header",
    contents:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    createdAt: "2022/7/11",
  }));

  return {
    props: {
      blogs: blogs,
    },
    revalidate: 60,
  };
};

export default BlogPage;

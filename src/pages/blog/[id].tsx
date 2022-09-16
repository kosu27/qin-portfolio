import { BlogDisplay } from "components/Blog";
import { Layout } from "components/templates/Layout";
import { microCMSClient } from "lib/microCMS/client";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Blog, BlogAnswer } from "types/Blog";

type Props = {
  blog: Blog;
};

type Path = {
  id: string;
};

const BlogDetailPage: NextPage<Props> = ({ blog }) => {
  return (
    <Layout>
      <BlogDisplay blog={blog} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<Path> = async () => {
  const data: BlogAnswer = await microCMSClient.get({
    endpoint: "blog",
  });
  const blogs = data.contents;
  const paths = blogs.map((blog) => {
    return {
      params: {
        id: blog.id,
      },
    };
  });
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const id = ctx.params?.id as string;
  try {
    const blog: Blog = await microCMSClient.get({
      endpoint: "blog",
      contentId: id,
    });

    return {
      props: {
        blog: blog,
      },
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default BlogDetailPage;

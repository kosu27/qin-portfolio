import { Blogs } from "components/Blog";
import { Layout } from "components/templates/Layout";
import { NextPage } from "next";
import { Blog } from "types/Blog";

type Props = {
  blogs: Blog[];
};

const Blog: NextPage<Props> = ({ blogs }) => {
  return (
    <Layout>
      <Blogs blogs={blogs} isGeneral={true} />
    </Layout>
  );
};

export default Blog;

import { Center, Loader, Text } from "@mantine/core";
import { Layout } from "components/templates/Layout";
import { useRequestBlog } from "lib/swr/useRequestBlog";
import { GetStaticProps, NextPage } from "next";
import { Blog } from "types/Blog";
import InfiniteScroll from "react-infinite-scroller";
import { Blogs } from "components/Blog";

const BlogPage: NextPage = () => {
  const { blogs, error, size, setSize, isLoadingMore, isReachingEnd } = useRequestBlog();

  const loadMore = () => {
    if (!isLoadingMore && !isReachingEnd) {
      setSize(size + 1);
    }
  };

  if (error) {
    return (
      <Center>
        <Text color="red">ブログ記事の取得に失敗しました</Text>
      </Center>
    );
  }

  return (
    <Layout>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={!isReachingEnd}
        threshold={500}
        loader={
          <Center key={"loading"} mt={24}>
            <Loader />
          </Center>
        }
      >
        <Blogs blogs={blogs} isGeneral={true} />
      </InfiniteScroll>
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
      blogItems: blogs,
    },
    revalidate: 60,
  };
};

export default BlogPage;

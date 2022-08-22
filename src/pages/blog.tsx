import { Center, Loader, Text } from "@mantine/core";
import { Layout } from "components/templates/Layout";
import { NextPage } from "next";
import InfiniteScroll from "react-infinite-scroller";
import { Blogs } from "components/Blog";
import { useRequestBlog } from "lib/swr/useRequestBlog";

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
        <Blogs blogs={blogs} isAll={true} />
      </InfiniteScroll>
    </Layout>
  );
};

export default BlogPage;

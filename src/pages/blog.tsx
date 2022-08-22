import { Center, Loader, Text } from "@mantine/core";
import { Layout } from "components/templates/Layout";
import { useRequestBlog } from "lib/swr/useRequestBlog";
import { NextPage } from "next";
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

export default BlogPage;

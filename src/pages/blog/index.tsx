import { Center, Loader, Text } from "@mantine/core";
import { Blogs } from "components/Blog";
import { Layout } from "components/templates/Layout";
import { client } from "lib/microCMS/client";
import { useRequestBlog } from "lib/swr/useRequestBlog";
import { GetStaticProps, NextPage } from "next";
import InfiniteScroll from "react-infinite-scroller";
import { Blog } from "types/Blog";

type Props = {
  blogs: Blog[];
};

const BlogIndex: NextPage<Props> = ({ blogs }) => {
  const { items, error, isLoadingMore, size, setSize, isReachingEnd } = useRequestBlog(blogs);

  const loadMore = () => {
    if (!isLoadingMore && !isReachingEnd) {
      setSize(size + 1);
    }
  };
  if (error) {
    return (
      <Layout>
        <Center>
          <Text color="red">ブログ記事の取得に失敗しました</Text>
        </Center>
      </Layout>
    );
  }

  return (
    <Layout>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={!isReachingEnd}
        threshold={100}
        loader={
          <Center key={"loading"} mt={24}>
            <Loader />
          </Center>
        }
      >
        <Blogs blogs={items} isAll />
      </InfiniteScroll>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
    queries: { orders: "-publishedAt" },
  });

  const props: Props = {
    blogs: data.contents,
  };

  return {
    props: props,
  };
};

export default BlogIndex;

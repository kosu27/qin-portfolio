import { Center, Loader, Text } from "@mantine/core";
import { Layout } from "components/templates/Layout";
import { GetStaticProps, NextPage } from "next";
import InfiniteScroll from "react-infinite-scroller";
import { Blogs } from "components/Blog";
import { useRequestBlog } from "lib/swr/useRequestBlog";
import { client } from "lib/microCMS/client";
import { Blog } from "types/Blog";

type Props = {
  blogs: Blog[];
};

const BlogPage: NextPage<Props> = ({ blogs }) => {
  const { items, error, size, setSize, isLoadingMore, isReachingEnd } = useRequestBlog(blogs);

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
        threshold={100}
        loader={
          <Center key={"loading"} mt={24}>
            <Loader />
          </Center>
        }
      >
        <Blogs blogs={items} isAll={true} />
      </InfiniteScroll>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "blog", queries: { orders: "-publishedAt" } });
  const props: Props = {
    blogs: data.contents,
  };
  return {
    props: props,
  };
};

export default BlogPage;

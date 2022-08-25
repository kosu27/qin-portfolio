import { Center, Loader, Text } from "@mantine/core";
import { Layout } from "components/templates/Layout";
import { GetStaticProps, NextPage } from "next";
import InfiniteScroll from "react-infinite-scroller";
import { Blogs } from "components/Blog";
import { useRequestBlog } from "lib/swr/useRequestBlog";
import { client } from "lib/microCMS/client";
import { MicroCMSListResponse } from "microcms-js-sdk";

export type BlogType = {
  title: string;
  body: string;
};

export type Props = MicroCMSListResponse<BlogType>;

const BlogPage: NextPage<Props> = (props) => {
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  return {
    props: data,
  };
};

export default BlogPage;

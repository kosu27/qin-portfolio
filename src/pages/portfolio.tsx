import { Center, Loader, Text } from "@mantine/core";
import { Portfolios } from "components/Portfolio";
import { Layout } from "components/templates/Layout";
import { microCmsclient } from "lib/microCMS/client";
import { useRequestPortfolio } from "lib/swr/useRequestPortfolio";
import { GetStaticProps, NextPage } from "next";
import InfiniteScroll from "react-infinite-scroller";
import { Portfolio } from "types/Portfolio";

type Props = {
  portfolios: Portfolio[];
};

const PortfolioPage: NextPage<Props> = ({ portfolios }) => {
  const { items, error, isLoadingMore, size, setSize, isReachingEnd } =
    useRequestPortfolio(portfolios);

  const loadMore = () => {
    if (!isLoadingMore && !isReachingEnd) {
      setSize(size + 1);
    }
  };

  if (error) {
    return (
      <Layout>
        <Center>
          <Text color="red">ポートフォリオの取得に失敗しました。</Text>
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
        <Portfolios portfolios={items} isAll />
      </InfiniteScroll>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await microCmsclient.get({
    endpoint: "portfolio",
    queries: { orders: "-publishedAt" },
  });

  const props: Props = {
    portfolios: data.contents,
  };

  return {
    props: props,
  };
};

export default PortfolioPage;

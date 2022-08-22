import { Center, Loader, Text } from "@mantine/core";
import { Portfolios } from "components/Portfolio";
import { Layout } from "components/templates/Layout";
import { useRequestPortfolio } from "lib/swr/useRequestPortfolio";
import { NextPage } from "next";
import InfiniteScroll from "react-infinite-scroller";

const PortfolioPage: NextPage = () => {
  const { portfolios, error, isLoadingMore, size, setSize, isReachingEnd } = useRequestPortfolio();

  const loadMore = () => {
    if (!isLoadingMore && !isReachingEnd) {
      setSize(size + 1);
    }
  };

  if (error) {
    return (
      <Center>
        <Text color="red">ポートフォリオの取得に失敗しました。</Text>
      </Center>
    );
  }

  return (
    <Layout>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={!isReachingEnd}
        threshold={200}
        loader={
          <Center key={"loading"} mt={24}>
            <Loader />
          </Center>
        }
      >
        <Portfolios portfolios={portfolios} isGeneral={true} />
      </InfiniteScroll>
    </Layout>
  );
};

export default PortfolioPage;

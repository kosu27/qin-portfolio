import { Center, Grid, Space, Stack } from "@mantine/core";
import { PortfolioItem } from "components/Portfolio//PortfolioItem";
import { SegmentButton } from "components/Button/SegmentButton";
import { SegmentTitle } from "components/Title/SegmentTitle";
import { FC } from "react";
import { Portfolio } from "types/Portfolio";
import { useMediaQuery } from "lib/mantine";
import { NextLink } from "@mantine/next";
import { pagesPath } from "utils/$path";

type Props = {
  isAll: boolean;
  portfolios: Portfolio[];
};

export const Portfolios: FC<Props> = ({ isAll, portfolios }) => {
  const isDesktop = useMediaQuery("sm");
  const items = isAll ? portfolios : portfolios.slice(0, 6);

  return (
    <Stack spacing={0}>
      <SegmentTitle>Portfolio</SegmentTitle>
      <Grid gutter={24}>
        {items.map((portfolio) => (
          <Grid.Col key={portfolio.id} span={isDesktop ? 4 : 12}>
            <PortfolioItem portfolio={portfolio} />
          </Grid.Col>
        ))}
      </Grid>
      <Space h={32} />
      {isAll || (
        <NextLink href={pagesPath.portfolio.$url()} passHref>
          <Center>
            <SegmentButton display="View All" />
          </Center>
        </NextLink>
      )}
    </Stack>
  );
};

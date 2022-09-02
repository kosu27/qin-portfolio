import { Center, SimpleGrid, Space, Stack } from "@mantine/core";
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
      <SimpleGrid
        breakpoints={[
          { minWidth: 768, cols: 2, spacing: "md" },
          { minWidth: 1280, cols: 3, spacing: "lg" },
        ]}
      >
        {items.map((portfolio) => (
          <PortfolioItem key={portfolio.id} portfolio={portfolio} />
        ))}
      </SimpleGrid>
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

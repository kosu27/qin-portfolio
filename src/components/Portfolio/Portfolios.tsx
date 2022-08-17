import { Center, SimpleGrid, Space } from "@mantine/core";
import { PortfolioItem } from "components/Portfolio//PortfolioItem";
import { SegmentButton } from "components/Button/SegmentButton";
import { SegmentTitle } from "components/Title/SegmentTitle";
import { FC } from "react";
import { Portfolio } from "types/Portfolio";
import { useMediaQuery } from "lib/mantine";

type Props = {
  isGeneral: boolean;
  portfolios: Portfolio[];
};

export const Portfolios: FC<Props> = ({ isGeneral, portfolios }) => {
  const items = isGeneral ? portfolios : portfolios.slice(0, 6);

  return (
    <>
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
      <Space h={28} />
      {isGeneral || (
        <Center>
          <SegmentButton display="View All" />
        </Center>
      )}
    </>
  );
};

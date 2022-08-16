import { Center, SimpleGrid, Space } from "@mantine/core";
import { PortfolioItem } from "components/PortfolioItem";
import { SegmentButton } from "components/SegmentButton";
import { SegmentTitle } from "components/SegmentTitle";
import { FC } from "react";
import { Portfolio } from "types/Portfolio";

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

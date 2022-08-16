import { Center, SimpleGrid, Space } from "@mantine/core";
import { PortfolioItem } from "components/PortfolioItem";
import { SegmentButton } from "components/SegmentButton";
import { SegmentTitle } from "components/SegmentTitle";

type Props = {
  isGeneral: boolean;
};

export const Portfolio: React.FC<Props> = ({ isGeneral }) => {
  return (
    <>
      <SegmentTitle>Portfolio</SegmentTitle>
      <SimpleGrid
        breakpoints={[
          { minWidth: 768, cols: 2, spacing: "md" },
          { minWidth: 1280, cols: 3, spacing: "lg" },
        ]}
      >
        {[...Array(6)].map((_, i) => (
          <PortfolioItem key={i} />
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

import { SegmentTitle } from "components/SegmentTitle";

type Props = {
  isGeneral: boolean;
};

export const Portfolio: React.FC<Props> = ({ isGeneral }) => {
  return (
    <>
      <SegmentTitle>Portfolio</SegmentTitle>
    </>
  );
};

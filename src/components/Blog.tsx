import { SegmentTitle } from "components/SegmentTitle";

type Props = {
  isGeneral: boolean;
};

export const Blog: React.FC<Props> = ({ isGeneral }) => {
  return (
    <>
      <SegmentTitle>Blog</SegmentTitle>
    </>
  );
};

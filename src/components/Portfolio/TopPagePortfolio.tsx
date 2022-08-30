import { Portfolios } from "components/Portfolio/Portfolios";
import { contentState } from "pages";
import { selector, useRecoilValue } from "recoil";

const portfolioState = selector({
  key: "TopPortfolios",
  get: ({ get }) => {
    const topContents = get(contentState);
    return topContents.portfolios;
  },
});

export const TopPagePortfolio = () => {
  const portfolios = useRecoilValue(portfolioState);
  return <Portfolios isAll={false} portfolios={portfolios} />;
};

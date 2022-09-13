import { SimpleGrid, Space } from "@mantine/core";
import { useMediaQuery } from "lib/mantine";
import { FC } from "react";

type Props = {
  blogs: JSX.Element;
  portfolios: JSX.Element;
  tweets: JSX.Element;
  repositories: JSX.Element;
};

export const Contents: FC<Props> = ({ blogs, portfolios, tweets, repositories }) => {
  const isDesktop = useMediaQuery("sm");
  const space = isDesktop ? 60 : 20;

  return (
    <>
      {blogs}
      <Space h={space} />
      {portfolios}
      <Space h={space} />
      {isDesktop && (
        <SimpleGrid cols={2} spacing={80}>
          {repositories}
          {tweets}
        </SimpleGrid>
      )}
      {isDesktop || (
        <>
          {repositories}
          <Space h={space} />
          {tweets}
        </>
      )}
    </>
  );
};

/* eslint-disable jsx-a11y/alt-text */
import { Stack, Text, useMantineTheme } from "@mantine/core";
import { Image } from "components/Image";
import { FC } from "react";
import { Portfolio } from "types/Portfolio";

type Props = {
  portfolio: Portfolio;
};

export const PortfolioItem: FC<Props> = ({ portfolio }) => {
  const theme = useMantineTheme();
  return (
    <Stack spacing={8} pb={16}>
      <Image width={314} height={148} url={portfolio.image?.url} />
      <Text size={24} weight="bold" mt={8}>
        {portfolio.title}
      </Text>
      <Text size={16} lineClamp={4}>
        {portfolio.description}
      </Text>
      <Text size={12} weight="bold" color={theme.colors.dark[3]}>
        {portfolio.startAt} - {portfolio.endAt}
      </Text>
    </Stack>
  );
};

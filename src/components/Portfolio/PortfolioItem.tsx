import { Image, Stack, Text, useMantineTheme } from "@mantine/core";
import { FC } from "react";
import { Portfolio } from "types/Portfolio";

type Props = {
  portfolio: Portfolio;
};

export const PortfolioItem: FC<Props> = ({ portfolio }) => {
  const theme = useMantineTheme();
  return (
    <Stack spacing="md" pb={16}>
      <Image src="https://picsum.photos/315/184?grayscale" alt="Portfolio" />
      <Text size={24} weight="bold" mt={8}>
        {portfolio.title}
      </Text>
      <Text size={16}>{portfolio.description}</Text>
      <Text size={12} weight="bold" color={theme.colors.dark[3]}>
        {portfolio.startAt} - {portfolio.endAt}
      </Text>
    </Stack>
  );
};

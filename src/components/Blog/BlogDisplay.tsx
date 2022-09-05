import { Space, Stack, Text, TypographyStylesProvider, useMantineTheme } from "@mantine/core";
import { SegmentTitle } from "components/Title";
import { dateFormatted } from "lib/dayJs/day";
import { FC } from "react";
import { Blog } from "types/Blog";

type Props = {
  blog: Blog;
};

export const BlogDisplay: FC<Props> = ({ blog }) => {
  const theme = useMantineTheme();
  return (
    <Stack spacing={0}>
      <SegmentTitle>{blog.title}</SegmentTitle>
      <Text size={12} color={theme.colors.dark[2]}>
        {dateFormatted(blog.publishedAt!, "YYYY/MM/DD")}
      </Text>
      <Space h={8} />
      <TypographyStylesProvider sx={{ overflowWrap: "break-word" }}>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </TypographyStylesProvider>
    </Stack>
  );
};

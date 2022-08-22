import { Stack, Text, useMantineTheme } from "@mantine/core";
import { FC } from "react";
import { Blog } from "types/Blog";

type Props = {
  blog: Blog;
};

export const BlogItem: FC<Props> = ({ blog }) => {
  const theme = useMantineTheme();

  return (
    <Stack spacing={4}>
      <Text my={0} component="h3" size={24}>
        {blog.title}
      </Text>
      <Text size={16}>{blog.contents}</Text>
      <Text size={12} color={theme.colors.dark[2]} weight="bold">
        {blog.createdAt}
      </Text>
    </Stack>
  );
};

import { Stack, Text, useMantineTheme } from "@mantine/core";
import { Blog } from "types/Blog";

type Props = {
  blog: Blog;
};

export const BlogItem: React.FC<Props> = ({ blog }) => {
  const theme = useMantineTheme();

  return (
    <Stack spacing={8}>
      <Text my={0} component="h3" size={20}>
        {blog.title}
      </Text>
      <Text size={16}>{blog.contents}</Text>
      <Text size={12} color={theme.colors.dark[2]} weight="bold">
        {blog.created_at}
      </Text>
    </Stack>
  );
};

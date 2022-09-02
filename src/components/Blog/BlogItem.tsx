import { Stack, Text, useMantineTheme } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { dateFormatted } from "lib/dayJs/day";
import { FC } from "react";
import { Blog } from "types/Blog";
import { pagesPath } from "utils/$path";
// import { htmlToText } from "utils/htmlTransform";

type Props = {
  blog: Blog;
};

export const BlogItem: FC<Props> = ({ blog }) => {
  const theme = useMantineTheme();

  return (
    <Stack spacing={4}>
      <NextLink href={pagesPath.blog._id(blog.id).$url()} passHref prefetch={false}>
        <Text my={0} component="h3" size={24}>
          {blog.title}
        </Text>
      </NextLink>
      <Text size={16} lineClamp={3}>
        {/* {htmlToText(blog.content)} */}
        {blog.content}
      </Text>
      <Text size={12} color={theme.colors.dark[2]} weight="bold">
        {dateFormatted(blog.publishedAt!, "YYYY/MM/DD")}
      </Text>
    </Stack>
  );
};

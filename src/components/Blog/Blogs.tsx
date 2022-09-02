import { Center, Stack } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { BlogItem } from "components/Blog/BlogItem";
import { SegmentButton } from "components/Button/SegmentButton";
import { SegmentTitle } from "components/Title/SegmentTitle";
import { FC } from "react";
import { Blog } from "types/Blog";
import { pagesPath } from "utils/$path";

type Props = {
  blogs: Blog[];
  isAll: boolean;
};

export const Blogs: FC<Props> = ({ blogs, isAll }) => {
  const items = isAll ? blogs : blogs.slice(0, 5);
  return (
    <Stack spacing={0}>
      <SegmentTitle>Blog</SegmentTitle>
      <Stack spacing={24}>
        {items.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
        {isAll || (
          <NextLink href={pagesPath.blog.$url()} passHref>
            <Center mt={24}>
              <SegmentButton display="View All" />
            </Center>
          </NextLink>
        )}
      </Stack>
    </Stack>
  );
};

import { Center, Stack } from "@mantine/core";
import { BlogItem } from "components/Blog/BlogItem";
import { SegmentButton } from "components/Button/SegmentButton";
import { SegmentTitle } from "components/Title/SegmentTitle";
import { FC } from "react";
import { Blog } from "types/Blog";

type Props = {
  blogs: Blog[];
  isGeneral: boolean;
};

export const Blogs: FC<Props> = ({ blogs, isGeneral }) => {
  const items = isGeneral ? blogs : blogs.slice(0, 5);
  return (
    <Stack spacing={0}>
      <SegmentTitle>Blog</SegmentTitle>
      <Stack spacing={24}>
        {items.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
        {isGeneral || (
          <Center mt={24}>
            <SegmentButton display="View All" />
          </Center>
        )}
      </Stack>
    </Stack>
  );
};

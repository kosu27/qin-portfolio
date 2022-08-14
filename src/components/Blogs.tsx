import { Center, Stack } from "@mantine/core";
import { BlogItem } from "components/BlogItem";
import { SegmentButton } from "components/SegmentButton";
import { SegmentTitle } from "components/SegmentTitle";
import { Blog } from "types/Blog";

type Props = {
  blogs: Blog[];
  isGeneral: boolean;
};

export const Blogs: React.FC<Props> = ({ blogs, isGeneral }) => {
  const items = isGeneral ? blogs : blogs.slice(0, 5);
  return (
    <>
      <SegmentTitle>Blog</SegmentTitle>
      <Stack>
        {items.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </Stack>
      {isGeneral || (
        <Center>
          <SegmentButton display="View All" />
        </Center>
      )}
    </>
  );
};

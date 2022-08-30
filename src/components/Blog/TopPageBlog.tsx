/* eslint-disable react-hooks/rules-of-hooks */
import { Blogs } from "components/Blog/Blogs";
import { contentState } from "pages";
import { selector, useRecoilValue } from "recoil";

const blogState = selector({
  key: "TopBlog",
  get: ({ get }) => {
    const topContents = get(contentState);
    return topContents.blogs;
  },
});

export const TopPageBlog = () => {
  const blogs = useRecoilValue(blogState);
  return <Blogs blogs={blogs} isAll={false} />;
};

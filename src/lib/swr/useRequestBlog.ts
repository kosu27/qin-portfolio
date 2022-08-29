// https://swr.vercel.app/ja/examples/infinite-loading
// https://www.ibrahima-ndaw.com/blog/data-fetching-in-nextjs-using-useswr/
// https://zenn.dev/syu/articles/1aeebcf13172d1

import { client } from "lib/microCMS/client";
import useSWRInfinite from "swr/infinite";
import { Blog } from "types/Blog";

const fetcher = async (pageStr: string) => {
  const page = Number(pageStr);
  const countPage = 10;
  const data = await client.get({
    endpoint: "blog",
    queries: { orders: "-publishedAt", limit: countPage, offset: countPage * (page - 1) },
  });
  return data.content;
};

export const useRequestBlog = (initialData: Blog[]) => {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `${index + 1}`,
    fetcher,
    { fallbackData: initialData }
  );

  const items = data ? ([] as Blog[]).concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isReachingEnd = data?.slice(-1)[0]?.length === 0;

  return { items, error, mutate, size, setSize, isValidating, isLoadingMore, isReachingEnd };
};

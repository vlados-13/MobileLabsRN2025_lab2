import { useState } from "react";

const useLoadMore = (initialData, fetchMoreData) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreData = async () => {
    if (loading) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newData = [
      ...data,
      ...fetchMoreData(page).map((item, index) => ({
        ...item,
        id: `${item.id}_${page * 10 + index}`,
      })),
    ];
    setData(newData);
    setPage((prevPage) => prevPage + 1);
    setLoading(false);
  };

  return { data, loading, loadMoreData };
};

export default useLoadMore;

import { createSearchParams, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <input
      value={searchParams.newsId}
      onChange={(e) => {
        setSearchParams(createSearchParams({ newsId: e.target.value }));
      }}
      placeholder="검색할 뉴스 ID를 입력하세요."
    />
  );
};

export default Search;
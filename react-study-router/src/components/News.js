import { Link } from "react-router-dom";

const News = () => {
  return (
    <div>
      <h2>React News</h2>
      <p>React에 대한 News를 모아놓은 페이지입니다.</p>
      <ol>
        <li>
          <Link to="1">△△일보</Link>
        </li>
        <li>
          <Link to="2">☆☆뉴스</Link>
        </li>
      </ol>
    </div>
  );
};

export default News;

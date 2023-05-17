import { useParams } from "react-router-dom";

const data = {
  1: {
    publisher: "△△일보",
    title: "React! 풀스택을 꿈꾸며!"
  },
  2: {
    publisher: "☆☆뉴스",
    title: "바닐라 Javascript의 반란!"
  }
};

const NewsData = () => {
  const params = useParams();
  const newsData = data[params.newsId];

  return (
    <div>
      <h2>React News</h2>
      {newsData ? (
        <div>
          <h2>{newsData.publisher}</h2>
          <p>{newsData.title}</p>
        </div>
      ) : (
        <p>존재하지 않는 뉴스입니다.</p>
      )}
    </div>
  );
};

export default NewsData;

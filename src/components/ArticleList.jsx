import React from "react";
import Article from "./Article";

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles?.map((el) => (
        <Article key={el.id} article={el} />
      ))}
    </div>
  );
};

export default ArticleList;

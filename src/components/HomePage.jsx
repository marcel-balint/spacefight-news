import React from "react";
import ArticleList from "./ArticleList";

const HomePage = ({ articles }) => {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
};

export default HomePage;

import React from "react";
import ArticleList from "./ArticleList";

const HomePage = ({ articles, changePge, page }) => {
  return (
    <>
      <ArticleList articles={articles} changPage={changePge} page={page} />
    </>
  );
};

export default HomePage;

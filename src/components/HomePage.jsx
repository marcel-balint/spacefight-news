import React from "react";
import ArticleList from "./ArticleList";
import BlogList from "./BlogList";

const HomePage = ({ articles, blogs, changePge, page }) => {
  return (
    <>
      <ArticleList articles={articles} changPage={changePge} page={page} />
      <BlogList blogs={blogs} />
    </>
  );
};

export default HomePage;

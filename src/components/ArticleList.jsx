import React from "react";
import Article from "./Article";
import { Link } from "react-router-dom";

const ArticleList = ({ articles, changPage, page }) => {
  const number = page;
  const numberString = number.toString(); // Convert the number to a string
  const firstDigit = numberString.charAt(0); // Get the first character (digit) as a string

  return (
    <div className="article-list">
      {articles?.map((el) => (
        <Link to={`/article/${el.id}`} key={el.id}>
          {" "}
          <Article article={el} />
        </Link>
      ))}
      <div className="pagination-bts">
        <button onClick={() => changPage("prev")}>prev</button>
        {firstDigit}
        <button onClick={() => changPage("next")}>next</button>
      </div>
    </div>
  );
};

export default ArticleList;

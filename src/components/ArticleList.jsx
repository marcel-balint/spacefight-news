import React from "react";
import Article from "./Article";
import { Link } from "react-router-dom";

import "./ArticleList.css";

const ArticleList = ({ articles, changPage, page }) => {
  const number = page;
  const numberString = number.toString(); // Convert the number to a string
  const firstDigit = numberString.charAt(0); // Get the first character (digit) as a string

  return (
    <>
      <div>
        <div className="article-list">
          {articles?.map((el) => (
            <Link className="card" to={`/article/${el.id}`} key={el.id}>
              {" "}
              <Article article={el} />
            </Link>
          ))}
        </div>
        <div className="pagination-bts">
          <button onClick={() => changPage("prev")}>prev</button>
          {firstDigit}
          <button onClick={() => changPage("next")}>next</button>
        </div>
      </div>
    </>
  );
};

export default ArticleList;

import React from "react";

const Article = ({ article }) => {
  return (
    <div>
      <div className="image">
        <img
          src={article.imageUrl}
          style={{ width: "400px", height: "300px" }}
          alt="Image"
        />
      </div>
      <h2>{article.title}</h2>
      <p>
        <small>Published {article.publishedAt}</small>
      </p>
    </div>
  );
};

export default Article;

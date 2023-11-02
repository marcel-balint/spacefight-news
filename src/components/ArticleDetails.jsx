import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ArticleDetails = () => {
  const [articleDetails, setArticleDetails] = useState(null);
  const { id } = useParams();

  const getArticleDetails = async () => {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${id}`
      );
      const data = await response.json();
      console.log(data);
      setArticleDetails(data);
    } catch (error) {
      console.log("Something is wrong here..", error);
    }
  };

  useEffect(() => {
    getArticleDetails();
  }, []);
  return (
    <div>
      <Link to={`/`}>Back to home page</Link>
      <div className="image">
        <img
          src={articleDetails?.imageUrl}
          style={{ width: "400px", height: "300px" }}
          alt="Image"
        />
      </div>
      <h2>{articleDetails?.title}</h2>
      <p>
        <small>Published {articleDetails?.publishedAt}</small>
      </p>
      <p>From : {articleDetails?.newsSite}</p>
      <div className="summary">
        <p>{articleDetails?.summary}</p>
      </div>
      <a href={articleDetails?.url} target="_blank">
        more info
      </a>
    </div>
  );
};

export default ArticleDetails;

import React from "react";

const Blog = ({ blog }) => {
  return (
    <div
      className="blog"
      style={{ borderTop: "1px solid", marginTop: ".5rem" }}
    >
      <a href={blog.url} target="_blank">
        <h2>{blog?.title}</h2>
        <p>
          Published at: <i>{blog?.publishedAt}</i>
        </p>
      </a>
    </div>
  );
};

export default Blog;

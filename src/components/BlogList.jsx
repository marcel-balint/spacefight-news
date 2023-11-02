import React from "react";
import Blog from "./Blog";

const BlogList = ({ blogs }) => {
  return (
    <>
      <div className="blog-list">
        {blogs?.map((el) => (
          <div key={el.id}>
            <Blog blog={el} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArticleDetails from "./components/ArticleDetails";

import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);

  const getArticles = async () => {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles?_start=${page}&_limit=${10}`
      );
      const data = await response.json();
      console.log(data);
      setArticles(data);
    } catch (error) {
      console.log("Something is wrong here..", error);
    }
  };

  useEffect(() => {
    getArticles();
  }, [page]);

  const changePge = (page) => {
    page === "next" && setPage((prevValue) => prevValue + 10);
    page === "prev" &&
      setPage((prevValue) => (prevValue > 0 ? prevValue - 10 : prevValue));
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage articles={articles} changePge={changePge} page={page} />
          }
        />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </>
  );
}

export default App;

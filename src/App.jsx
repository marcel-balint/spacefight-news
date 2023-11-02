import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";

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
      <HomePage articles={articles} changePge={changePge} page={page} />
    </>
  );
}

export default App;

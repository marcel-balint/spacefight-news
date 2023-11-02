import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles?_start=${1}&_limit=${10}`
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
  }, []);
  return (
    <>
      <HomePage articles={articles} />
    </>
  );
}

export default App;

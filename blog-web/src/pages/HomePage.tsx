import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "../components/Card";
import { Article } from "../dummy";

export const HomePage = () => {
  const { push } = useHistory();
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/articles")
      .then(({ data }) => setArticles(data));
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="p-4">
        <button
          className="bg-indigo-600 text-white rounded-md px-4 py-2"
          onClick={() => push("/articles/add")}
        >
          새로 작성
        </button>
      </div>
      <div className="grid grid-cols-3 gap-x-2 gap-y-4 m-2 mt-8">
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Article } from "../dummy";

export const ArticlePage = () => {
  const { goBack } = useHistory();
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article>();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles/${id}`)
      .then(({ data }) => setArticle(data));
  }, [id]);

  if (!article) return <>404, Not Found</>;
  return (
    <>
      <button onClick={goBack}>뒤로가기</button>
      <h1>{article.title}</h1>
      <img src={article.thumbnail} alt="thumbnail" />
      <p className="text-gray-500 text-sm">{article.content}</p>
    </>
  );
};

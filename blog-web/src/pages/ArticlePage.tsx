import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { articles } from "../dummy";

export const ArticlePage = () => {
  const { goBack } = useHistory();
  const { id } = useParams<{ id: string }>();
  const article = articles.find((article) => article.id === Number(id));

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

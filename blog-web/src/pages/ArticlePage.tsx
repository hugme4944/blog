import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../dummy";

export const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((article) => article.id === Number(id));

  if (!article) return <>404, Not Found</>;
  return (
    <>
      <h1>{article.title}</h1>
      <img src={article.thumbnail} alt="thumbnail" />
      <p className="text-gray-500 text-sm">{article.content}</p>
    </>
  );
};

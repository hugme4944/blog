import React from "react";
import { FC } from "react";
import { useHistory } from "react-router-dom";
import { Article } from "../dummy";

interface CardProps {
  article: Article;
}

export const Card: FC<CardProps> = ({ article }) => {
  const { push } = useHistory();

  return (
    <button
      className="text-left"
      onClick={() => push(`/articles/${article.id}`)}
    >
      <img src={article.thumbnail} alt="thumbnail" />
      <p className="text-gray-800 text-xl">{article.title}</p>
      <p className="text-gray-500 text-sm truncate">{article.content}</p>
    </button>
  );
};

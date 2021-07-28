import React from "react";
import { FC } from "react";

interface CardProps {
  title: string;
  content: string;
  thumbnail: string;
}

export const Card: FC<CardProps> = ({ title, content, thumbnail }) => {
  return (
    <button className="text-left">
      <img src={thumbnail} alt="thumbnail" />
      <p className="text-gray-800 text-xl">{title}</p>
      <p className="text-gray-500 text-sm truncate">{content}</p>
    </button>
  );
};

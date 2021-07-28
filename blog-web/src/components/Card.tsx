import React from "react";
import { FC } from "react";

interface CardProps {
  title: string;
}

export const Card: FC<CardProps> = ({ title }) => {
  return <div>{title}</div>;
};

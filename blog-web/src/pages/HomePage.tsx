import React from "react";
import { Card } from "../components/Card";
import { articles } from "../dummy";

export const HomePage = () => {
  return (
    <>
      <h1>블로그</h1>
      <p>제 블로그입니다.</p>

      <div>
        {articles.map((article) => (
          <Card key={article.id} title={article.title} />
        ))}
      </div>
    </>
  );
};

import React from "react";
import { Card } from "../components/Card";
import { articles } from "../dummy";

export const HomePage = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex items-end">
        <h1 className="text-4xl text-gray-800">블로그</h1>
        <p className="ml-4 text-xl text-gray-500">제 블로그입니다.</p>
      </div>

      <div className="grid grid-cols-3 gap-x-2 gap-y-4 m-2">
        {articles.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            content={article.content}
            thumbnail={article.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

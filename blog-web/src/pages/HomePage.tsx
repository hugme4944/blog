import React from "react";
import { Card } from "../components/Card";
import { articles } from "../dummy";

export const HomePage = () => {
  return (
    <>
      {/* Header */}
      <div className="sticky top-0 p-2 w-full h-14 bg-white shadow-lg">
        <div className="w-full max-w-screen-lg mx-auto flex items-end">
          <h1 className="text-4xl text-gray-800">블로그</h1>
          <p className="ml-4 text-xl text-gray-500">제 블로그입니다.</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-3 gap-x-2 gap-y-4 m-2 mt-8">
          {articles.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  );
};

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const ArticleAddPage = () => {
  const { goBack } = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <div className="max-w-lg mx-auto pt-12 flex flex-col space-y-4">
        <h1>새로 작성</h1>
        <input
          className="border rounded-md border-gray-200 p-2"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border rounded-md border-gray-200 p-2"
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="bg-indigo-600 text-white rounded-md px-4 py-2"
          onClick={async () => {
            await axios.post("http://localhost:8000/articles", {
              title,
              content,
            });
            goBack();
          }}
        >
          저장
        </button>
      </div>
    </>
  );
};

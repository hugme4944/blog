import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ArticleAddPage } from "./pages/ArticleAddPage";
import { ArticlePage } from "./pages/ArticlePage";
import { HomePage } from "./pages/HomePage";
import { recentState } from "./plugins/ridge";

function App() {
  const recent = recentState.useValue();

  return (
    <>
      <div className="sticky top-0 p-2 w-full h-14 bg-white shadow-lg">
        <div className="w-full max-w-screen-lg mx-auto flex items-end">
          <h1 className="text-4xl text-gray-800">블로그</h1>
          <p className="ml-4 text-xl text-gray-500">제 블로그입니다.</p>
          <div className="ml-4">
            <p>최근 방문한 페이지: {recent?.title}</p>
          </div>
        </div>
      </div>

      <BrowserRouter>
        <Switch>
          <Route path="/articles/add" component={ArticleAddPage} />
          <Route path="/articles/:id" component={ArticlePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

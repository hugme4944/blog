import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ArticleAddPage } from "./pages/ArticleAddPage";
import { ArticlePage } from "./pages/ArticlePage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/articles/add" component={ArticleAddPage} />
        <Route path="/articles/:id" component={ArticlePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

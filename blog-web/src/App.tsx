import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ArticlePage } from "./pages/ArticlePage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/articles" component={ArticlePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Card } from "./components/Card";

function App() {
  return (
    <div>
      <h1>Blog</h1>
      <p>My Blog Service</p>
      <Card title="제목 1" />
      <Card title="제목 2" />
      <Card title="제목 3" />
      <Card title="제목 4" />
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import NextPage from "./NextPage";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/next" exact component={NextPage} />
    </BrowserRouter>
  );
}

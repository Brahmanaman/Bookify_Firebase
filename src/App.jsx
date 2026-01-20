import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="max-w-350 pt-3 m-auto">
      <Routes>
        <Route path="/" element={<h1>Hello</h1>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
};

export default App;

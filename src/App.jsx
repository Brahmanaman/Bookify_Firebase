import { Route } from "react-router";
import { Routes } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="max-w-350 pt-3 m-auto">
      <Routes>
        <Route path="/" element={<h1>Hello</h1>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
};

export default App;

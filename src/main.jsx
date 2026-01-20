import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { FirebaseProvider } from "./context/Firebase.jsx";
import { BrowserRouter } from "react-router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </BrowserRouter>,
);

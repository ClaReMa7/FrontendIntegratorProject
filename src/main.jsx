import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
// import "./styles/custom.css";
// import "./styles/styles.css";
import "./App.css";
import "./styles/Button.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

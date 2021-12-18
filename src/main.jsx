import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/* const API_KEY = import.meta.env.API_KEY;

if (!API_KEY) {
  console.error('[error]: The "API_KEY" environment variable is required');
}
 */
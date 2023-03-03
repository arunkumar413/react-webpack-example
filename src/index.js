import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// const el = document.getElementById("app");
const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App />, el);

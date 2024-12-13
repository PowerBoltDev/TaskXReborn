import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TaskManagementApp from "./App"; // Make sure this matches your file name

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskManagementApp />
  </React.StrictMode>
);

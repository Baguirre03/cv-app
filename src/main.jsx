import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import General from "./section.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <General section="general"></General>
  </React.StrictMode>,
);

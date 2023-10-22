import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "@components/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  // <Provider storeStep={storeStep}>
    <App />
  // </Provider>
  // </React.StrictMode>
);

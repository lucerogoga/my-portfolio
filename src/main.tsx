import { ViteReactSSG } from "vite-react-ssg/single-page";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const createRoot = ViteReactSSG(<App />);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

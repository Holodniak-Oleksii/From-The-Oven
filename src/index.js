import React from "react";
import ReactDOM from "react-dom/client";
import "react-loading-skeleton/dist/skeleton.css";
import { Provider } from "react-redux";
import "./assets/scss/index.scss";
import Theme from "./assets/scss/theme/theme";
import Router from "./router";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <Provider store={store}>
        <Router />
      </Provider>
    </Theme>
  </React.StrictMode>
);

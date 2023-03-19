import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  // PROVIDING STORE TO ALL THE COMPONENTS TO BE USED AND GET THE ACCESS FOR OUR STORE.
  <Provider store={store}>
    <App />
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Client from "./hoc/Socketio";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Client render={(props) => <App {...props} />} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

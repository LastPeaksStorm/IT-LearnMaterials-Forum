import './index.less'
import React from 'react'
import App from "./components/App";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)

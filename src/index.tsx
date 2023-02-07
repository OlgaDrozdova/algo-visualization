//import React from 'react';
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from './store';
import reportWebVitals from "./reportWebVitals";
import '@fontsource/comfortaa/cyrillic.css';
import ReactDOM from "react-dom";


//const rootEl = document.getElementById("app") as HTMLElement;
//const root = createRoot(rootEl);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("app"),
);

//reportWebVitals();

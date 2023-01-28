//import React from 'react';
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from './store';
import reportWebVitals from "./reportWebVitals";
import '@fontsource/comfortaa/cyrillic.css';


const rootEl = document.getElementById("root") as HTMLElement;
const root = createRoot(rootEl);

root.render(
  <Provider store={ store }>
    <App />
  </Provider>
);

reportWebVitals();

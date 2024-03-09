import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CartContextProvider from "./context/cart-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </BrowserRouter>
);

reportWebVitals();

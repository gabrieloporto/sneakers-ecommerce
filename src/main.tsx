import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.tsx";
import { UIProvider } from "./context/UIContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UIProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UIProvider>
  </React.StrictMode>
);

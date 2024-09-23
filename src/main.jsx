import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./tailwind.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./i18n";
import "./index.css";
import { LoginProvider } from "./context/LoginContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </StrictMode>
);

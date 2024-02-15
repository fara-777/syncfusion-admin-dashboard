// Geri kalan uygulama başlatma kodu
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjW39bcXZXRWRdWEF1WA=="
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

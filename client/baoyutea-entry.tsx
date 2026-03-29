import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ColabBaoyuTeaPage from "./src/pages/ColabBaoyuTeaPage";
import "./src/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ColabBaoyuTeaPage />
  </StrictMode>
);

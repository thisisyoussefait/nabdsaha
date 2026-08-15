import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Tarif from "./pages/Tarif.jsx";
import Ahamiya from "./pages/Ahamiya.jsx";
import Bahth from "./pages/Bahth.jsx";
import Maqal from "./pages/Maqal.jsx";
import Sabahak from "./pages/Sabahak.jsx";
import CalculatorPage from "./pages/CalculatorPage.jsx";
import Layout from "./components/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/tarif" element={<Tarif />} />
          <Route path="/ahamiya" element={<Ahamiya />} />
          <Route path="/bahth" element={<Bahth />} />
          <Route path="/maqal" element={<Maqal />} />
          <Route path="/sabahak" element={<Sabahak />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

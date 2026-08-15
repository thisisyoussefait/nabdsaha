import React from "react";
import { Link } from "react-router-dom";
import Calculator from "../components/Calculator.jsx";

export default function CalculatorPage() {
  return (
    <main><div className="container" style={{ paddingTop: 32 }}>
      <p className="breadcrumb"><Link to="/">نبض الصحة</Link> ← حاسبة اللياقة</p>
      <div className="section-head">
        <span className="eyebrow">الخدمة المجانية</span>
        <h1>حاسبة اللياقة: مؤشر كتلة الجسم + السعرات اليومية</h1>
      </div>
      <Calculator />
    </div></main>
  );
}

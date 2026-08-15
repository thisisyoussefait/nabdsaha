import React from "react";
import { Link } from "react-router-dom";
import Calculator from "./components/Calculator.jsx";

const CLUSTERS = [
  ["/tarif", "تعريف", "ما هي الصحة واللياقة البدنية؟ تعريف دقيق ومبسط.", "تعريف الصحة واللياقة البدنية"],
  ["/ahamiya", "أهمية", "لماذا تُعتبر اللياقة البدنية استثماراً يومياً؟", "اهمية الصحة واللياقة البدنية"],
  ["/bahth", "بحث علمي", "بحث شامل بصيغة أكاديمية جاهزة للاستخدام.", "بحث عن الصحة واللياقة البدنية"],
  ["/maqal", "مقال", "خطوات عملية لبدء نمط حياة صحي من اليوم.", "مقال عن الصحة واللياقة البدنية"],
  ["/sabahak", "صباحك صحة ولياقة", "روتين صباحي بسيط من 20 دقيقة.", "صباحك صحة ولياقة"],
  ["/calculator", "الخدمة", "حاسبة مجانية لمؤشر كتلة الجسم والسعرات.", "حاسبة اللياقة"],
];

export default function App() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">دليل الصحة واللياقة البدنية الشامل</span>
            <h1>الصحة واللياقة البدنية: خريطة كاملة تفهمها وتطبّقها من اليوم</h1>
            <p className="lead">
              تعريف، أهمية، بحث علمي مبسّط، مقالات، وأداة مجانية تحسب مؤشرك
              ومعدل حرقك للسعرات مباشرة داخل متصفحك — بدون تسجيل وبدون إرسال
              أي بيانات لأي خادم.
            </p>
            <div className="hero-actions">
              <Link to="/calculator"><button className="btn btn-primary">جرّب حاسبة اللياقة 🔥</button></Link>
              <Link to="/tarif"><button className="btn btn-ghost">ابدأ من التعريف</button></Link>
            </div>
          </div>
          <div className="wheel-wrap">
            <svg viewBox="0 0 400 400" role="img" aria-label="خريطة موضوع الصحة واللياقة البدنية">
              <g stroke="#D7DED6" strokeWidth="2">
                <line x1="200" y1="200" x2="350" y2="200" />
                <line x1="200" y1="200" x2="275" y2="70" />
                <line x1="200" y1="200" x2="125" y2="70" />
                <line x1="200" y1="200" x2="50" y2="200" />
                <line x1="200" y1="200" x2="125" y2="330" />
                <line x1="200" y1="200" x2="275" y2="330" />
              </g>
              <circle cx="200" cy="200" r="56" fill="#1F6F5C" />
              <text x="200" y="196" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800">الصحة</text>
              <text x="200" y="216" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800">واللياقة</text>
            </svg>
            <p className="wheel-caption">خريطة الموضوع</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">وحدات الموضوع</span>
            <h2>استكشف الصحة واللياقة البدنية من كل زاوية</h2>
          </div>
          <div className="grid-3">
            {CLUSTERS.map(([href, tag, desc, title]) => (
              <div className="card" key={href}>
                <span className="tag">{tag}</span>
                <h3><Link to={href}>{title}</Link></h3>
                <p>{desc}</p>
                <Link className="more" to={href}>اقرأ المزيد ←</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator">
        <div className="container">
          <Calculator />
        </div>
      </section>
    </main>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Maqal() {
  return (
    <main><div className="container">
      <p className="breadcrumb"><Link to="/">نبض الصحة</Link> ← مقال عن الصحة واللياقة البدنية</p>
      <article className="article">
        <span className="eyebrow">مقال</span>
        <h1>مقال عن الصحة واللياقة البدنية: كيف تبدأ اليوم</h1>
        <h2>التغذية قبل التمرين</h2>
        <p>أضف خضراً أو فاكهة لكل وجبة، وقلّل السكريات المُصنّعة تدريجياً.</p>
        <h2>حركة يومية</h2>
        <p>المشي، صعود الدرج، أو 10 دقائق تمدد صباحي — خطوات حقيقية نحو لياقة أفضل.</p>
        <h2>تتبّع تقدمك</h2>
        <p>استعمل <Link to="/calculator">حاسبة اللياقة</Link> وأعد القياس كل أسبوعين.</p>
        <div className="kw-cloud">
          <span>مقال عن الصحة واللياقة البدنية</span><span>موضوع عن الصحة واللياقة البدنية</span>
        </div>
      </article>
    </div></main>
  );
}

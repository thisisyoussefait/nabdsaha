import React from "react";
import { Link } from "react-router-dom";

export default function Sabahak() {
  return (
    <main><div className="container">
      <p className="breadcrumb"><Link to="/">نبض الصحة</Link> ← صباحك صحة ولياقة</p>
      <article className="article">
        <span className="eyebrow">روتين يومي</span>
        <h1>صباحك صحة ولياقة: 20 دقيقة تغيّر يومك</h1>
        <h2>0-5 دقائق</h2>
        <p>كوب ماء + تمدد خفيف للرقبة والظهر والساقين.</p>
        <h2>5-15 دقيقة</h2>
        <p>مشي سريع، أو 3 جولات قرفصاء وضغط، أو نزول وصعود الدرج.</p>
        <h2>15-20 دقيقة</h2>
        <p>فطور متوازن: بروتين + كربوهيدرات بطيئة + فاكهة.</p>
        <div className="kw-cloud">
          <span>صباحك صحة ولياقة</span><span>صحه ولياقه</span>
        </div>
      </article>
    </div></main>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Tarif() {
  return (
    <main><div className="container">
      <p className="breadcrumb"><Link to="/">نبض الصحة</Link> ← تعريف الصحة واللياقة البدنية</p>
      <article className="article">
        <span className="eyebrow">وحدة التعريف</span>
        <h1>تعريف الصحة واللياقة البدنية</h1>
        <p>
          الصحة هي حالة اكتمال السلامة البدنية والنفسية والاجتماعية، وليست مجرد غياب
          المرض. أما اللياقة البدنية فهي قدرة الجسم على أداء المجهود اليومي والرياضي
          بكفاءة، دون تعب مفرط، مع الاحتفاظ بطاقة احتياطية.
        </p>
        <h2>عناصر اللياقة البدنية</h2>
        <ul>
          <li>التحمل القلبي التنفسي</li>
          <li>القوة العضلية</li>
          <li>المرونة</li>
          <li>التركيب الجسمي</li>
          <li>التوازن والرشاقة</li>
        </ul>
        <div className="kw-cloud">
          <span>الصحة واللياقة</span><span>الصحه واللياقه</span><span>اللياقه والصحه</span>
        </div>
      </article>
    </div></main>
  );
}

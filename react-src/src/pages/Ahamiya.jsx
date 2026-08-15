import React from "react";
import { Link } from "react-router-dom";

export default function Ahamiya() {
  return (
    <main><div className="container">
      <p className="breadcrumb"><Link to="/">نبض الصحة</Link> ← أهمية الصحة واللياقة البدنية</p>
      <article className="article">
        <span className="eyebrow">وحدة الأهمية</span>
        <h1>أهمية الصحة واللياقة البدنية</h1>
        <p>
          النشاط البدني المنتظم يقلل خطر أمراض القلب والسكري، يقوّي العظام والعضلات،
          ويحسّن جودة النوم. كما يُفرز الجسم هرمونات الإندورفين التي تقلل التوتر
          وتحسّن المزاج.
        </p>
        <h2>أرقام توضّح الصورة</h2>
        <ul>
          <li>150 دقيقة أسبوعياً من النشاط المعتدل كافية لتحسين الصحة العامة.</li>
          <li>6000-8000 خطوة يومياً ترتبط بانخفاض مخاطر صحية متعددة.</li>
          <li>7-9 ساعات نوم ركيزة لا تقل أهمية عن التمرين.</li>
        </ul>
        <div className="kw-cloud">
          <span>اهمية الصحة واللياقة البدنية</span><span>صحة ولياقة بدنية</span>
        </div>
      </article>
    </div></main>
  );
}

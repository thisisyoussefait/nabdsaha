import React from "react";
import { Link } from "react-router-dom";

export default function Bahth() {
  return (
    <main><div className="container">
      <p className="breadcrumb"><Link to="/">نبض الصحة</Link> ← بحث عن الصحة واللياقة البدنية</p>
      <article className="article">
        <span className="eyebrow">صيغة أكاديمية</span>
        <h1>بحث عن الصحة واللياقة البدنية</h1>
        <h2>مقدمة</h2>
        <p>تُعد الصحة واللياقة البدنية من أهم القضايا التي يوليها الإنسان المعاصر اهتماماً متزايداً.</p>
        <h2>محاور البحث</h2>
        <ul>
          <li>تعريف الصحة واللياقة البدنية ومكوناتها</li>
          <li>العوامل المؤثرة: التغذية، النوم، النشاط، الوراثة</li>
          <li>طرق قياس اللياقة البدنية</li>
          <li>نتائج قلة النشاط البدني</li>
          <li>توصيات عملية</li>
        </ul>
        <h2>خاتمة</h2>
        <p>الاستثمار في الصحة واللياقة البدنية ضرورة وقائية واقتصادية على المدى البعيد.</p>
        <div className="kw-cloud">
          <span>بحث عن الصحه واللياقه البدنيه</span><span>وحدة الصحة واللياقة البدنية</span>
        </div>
      </article>
    </div></main>
  );
}

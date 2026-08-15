import React, { useState } from "react";
import { runCalculator } from "../utils/fitness.js";

const initial = { gender: "male", age: "", weight: "", height: "", activity: "sedentary", goal: "maintain" };

export default function Calculator() {
  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault(); // لا يوجد إرسال فعلي — الحساب محلي بالكامل
    const { age, weight, height } = form;
    if (!age || !weight || !height) {
      setError("المرجو تعمير جميع الخانات بأرقام صحيحة.");
      setResult(null);
      return;
    }
    setError("");
    setResult(
      runCalculator({
        gender: form.gender,
        age: parseFloat(age),
        weight: parseFloat(weight),
        height: parseFloat(height),
        activity: form.activity,
        goal: form.goal,
      })
    );
  }

  return (
    <div className="tool-panel">
      <span className="eyebrow" style={{ background: "rgba(255,255,255,.12)", borderColor: "transparent", color: "#DCE9E3" }}>
        الخدمة المجانية
      </span>
      <h2>حاسبة اللياقة: مؤشر كتلة الجسم + احتياجك اليومي من السعرات</h2>
      <p className="lead">أدخل بياناتك واحصل على نتيجتك فوراً — كل الحساب يتم داخل متصفحك.</p>

      <form onSubmit={handleSubmit} className="tool-grid">
        <div>
          <div className="field">
            <label>الجنس</label>
            <select value={form.gender} onChange={(e) => update("gender", e.target.value)}>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
          </div>
          <div className="field">
            <label>العمر (سنة)</label>
            <input type="number" min="10" max="100" placeholder="مثال: 22"
              value={form.age} onChange={(e) => update("age", e.target.value)} required />
          </div>
          <div className="field">
            <label>الوزن (كلغ)</label>
            <input type="number" min="30" max="250" placeholder="مثال: 70"
              value={form.weight} onChange={(e) => update("weight", e.target.value)} required />
          </div>
          <div className="field">
            <label>الطول (سم)</label>
            <input type="number" min="100" max="230" placeholder="مثال: 175"
              value={form.height} onChange={(e) => update("height", e.target.value)} required />
          </div>
          <div className="field">
            <label>مستوى النشاط</label>
            <select value={form.activity} onChange={(e) => update("activity", e.target.value)}>
              <option value="sedentary">قليل الحركة (عمل مكتبي)</option>
              <option value="light">نشاط خفيف (1-3 أيام رياضة)</option>
              <option value="moderate">نشاط متوسط (3-5 أيام)</option>
              <option value="active">نشاط عالي (6-7 أيام)</option>
              <option value="very_active">مجهود بدني مكثف يومياً</option>
            </select>
          </div>
          <div className="field">
            <label>الهدف</label>
            <select value={form.goal} onChange={(e) => update("goal", e.target.value)}>
              <option value="lose">خسارة الوزن</option>
              <option value="maintain">الحفاظ على الوزن</option>
              <option value="gain">زيادة الوزن (كتلة عضلية)</option>
            </select>
          </div>
          {error && <p style={{ color: "#F2A93B", fontSize: ".85rem" }}>{error}</p>}
          <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
            احسب الآن
          </button>
        </div>

        <div>
          {result && (
            <div className="result-box">
              <div className="row"><span>مؤشر كتلة الجسم (BMI)</span><strong className="big" style={{ fontSize: "1.4rem" }}>{result.bmi.toFixed(1)}</strong></div>
              <div className="row"><span>التصنيف</span><strong style={{ color: result.category.color }}>{result.category.label}</strong></div>
              <div className="row"><span>الأيض الأساسي (BMR)</span><strong>{result.bmr.toLocaleString("ar")}</strong></div>
              <div className="row"><span>احتياجك اليومي حسب هدفك</span><strong className="big" style={{ fontSize: "1.4rem" }}>{result.target.toLocaleString("ar")}</strong> سعرة</div>
              <div className="row" style={{ borderBottom: "none" }}><span>الماء المُوصى به يومياً</span><strong>{result.water}</strong> لتر</div>
            </div>
          )}
          <p className="note-privacy">🔒 خصوصيتك محفوظة: الحساب يتم بالكامل داخل جهازك، دون إرسال أي بيانات لأي خادم.</p>
        </div>
      </form>
    </div>
  );
}

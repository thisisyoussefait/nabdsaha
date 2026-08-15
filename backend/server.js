// backend/server.js
// ملاحظة مهمة: خدمة حاسبة اللياقة (BMI/السعرات) تعمل بالكامل في المتصفح
// (انظر js/main.js أو react-src/src/utils/fitness.js) ولا تستدعي هذا الخادم إطلاقاً.
// هذا الباك-إند اختياري ومخصص فقط لوظائف مستقبلية لا علاقة لها بالخدمة نفسها،
// مثل التسجيل في النشرة البريدية.

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// تخزين مؤقت في الذاكرة فقط (للتجربة/التطوير)
const subscribers = new Set();

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "nabd-siha-backend" });
});

// اشتراك اختياري في النشرة البريدية — لا علاقة له بحاسبة اللياقة
app.post("/api/newsletter", (req, res) => {
  const { email } = req.body || {};
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "بريد إلكتروني غير صحيح" });
  }
  subscribers.add(email);
  res.json({ ok: true, message: "تم الاشتراك بنجاح" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`nabd-siha backend listening on http://localhost:${PORT}`);
});

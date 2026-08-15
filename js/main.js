/* =========================================================
   خدمة "حاسبة اللياقة" — الحساب كامل يتم داخل المتصفح فقط.
   لا يتم إرسال أي بيانات لأي خادم (لا fetch ولا XHR هنا إطلاقاً).
   ========================================================= */
(function () {
  "use strict";

  function computeBMI(weightKg, heightCm) {
    const h = heightCm / 100;
    return weightKg / (h * h);
  }

  function bmiCategory(bmi) {
    if (bmi < 18.5) return { label: "نقص في الوزن", color: "#F2A93B" };
    if (bmi < 25) return { label: "وزن طبيعي", color: "#1F6F5C" };
    if (bmi < 30) return { label: "زيادة في الوزن", color: "#E4572E" };
    return { label: "سمنة", color: "#B33018" };
  }

  // معادلة Mifflin-St Jeor لحساب الأيض الأساسي (BMR)
  function computeBMR(gender, weightKg, heightCm, age) {
    const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
    return gender === "male" ? base + 5 : base - 161;
  }

  const ACTIVITY = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9,
  };

  const GOAL_ADJUST = {
    lose: -500,
    maintain: 0,
    gain: 300,
  };

  function initCalculator() {
    const form = document.getElementById("fitness-calc-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // مهم: نمنع أي إرسال افتراضي للنموذج

      const gender = form.gender.value;
      const age = parseFloat(form.age.value);
      const weight = parseFloat(form.weight.value);
      const height = parseFloat(form.height.value);
      const activity = form.activity.value;
      const goal = form.goal.value;

      if (!age || !weight || !height) {
        document.getElementById("calc-error").textContent =
          "المرجو تعمير جميع الخانات بأرقام صحيحة.";
        document.getElementById("calc-results").hidden = true;
        return;
      }
      document.getElementById("calc-error").textContent = "";

      const bmi = computeBMI(weight, height);
      const cat = bmiCategory(bmi);
      const bmr = computeBMR(gender, weight, height, age);
      const tdee = bmr * ACTIVITY[activity];
      const target = Math.round(tdee + GOAL_ADJUST[goal]);
      const water = (weight * 0.033).toFixed(1);

      document.getElementById("res-bmi").textContent = bmi.toFixed(1);
      document.getElementById("res-bmi-label").textContent = cat.label;
      document.getElementById("res-bmi-label").style.color = cat.color;
      document.getElementById("res-cal").textContent = target.toLocaleString("ar");
      document.getElementById("res-bmr").textContent = Math.round(bmr).toLocaleString("ar");
      document.getElementById("res-water").textContent = water;

      document.getElementById("calc-results").hidden = false;
    });
  }

  document.addEventListener("DOMContentLoaded", initCalculator);
})();

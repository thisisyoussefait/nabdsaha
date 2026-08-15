// كل الحسابات هنا محلية بالكامل — لا يوجد أي fetch أو استدعاء API.

export function computeBMI(weightKg, heightCm) {
  const h = heightCm / 100;
  return weightKg / (h * h);
}

export function bmiCategory(bmi) {
  if (bmi < 18.5) return { label: "نقص في الوزن", color: "#F2A93B" };
  if (bmi < 25) return { label: "وزن طبيعي", color: "#1F6F5C" };
  if (bmi < 30) return { label: "زيادة في الوزن", color: "#E4572E" };
  return { label: "سمنة", color: "#B33018" };
}

export function computeBMR(gender, weightKg, heightCm, age) {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return gender === "male" ? base + 5 : base - 161;
}

export const ACTIVITY = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

export const GOAL_ADJUST = { lose: -500, maintain: 0, gain: 300 };

export function runCalculator({ gender, age, weight, height, activity, goal }) {
  const bmi = computeBMI(weight, height);
  const bmr = computeBMR(gender, weight, height, age);
  const tdee = bmr * ACTIVITY[activity];
  const target = Math.round(tdee + GOAL_ADJUST[goal]);
  const water = (weight * 0.033).toFixed(1);
  return { bmi, category: bmiCategory(bmi), bmr: Math.round(bmr), target, water };
}

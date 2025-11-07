import { useState, useEffect } from "react";
import { User, Scale, Syringe } from "lucide-react";

const drugs = [
  {
    id: "paracetamol",
    name: "استامینوفن (پاراستامول)",
    unit: "mg/kg",
    range: [10, 15],
    maxPerDoseMg: 1000,
    maxPerDayMg: 4000,
    notes:
      "حداکثر ۴ گرم در روز برای بزرگسالان. در نارسایی کبدی احتیاط شود. حداقل فاصله بین دوزها ۴–۶ ساعت.",
  },
  {
    id: "ibuprofen",
    name: "ایبوپروفن",
    unit: "mg/kg",
    range: [5, 10],
    maxPerDoseMg: 800,
    maxPerDayMg: 2400,
    notes:
      "در بیماری‌های کلیوی، زخم معده فعال یا بارداری (سه‌ماهه سوم) منع مصرف دارد. همراه غذا مصرف شود.",
  },
  {
    id: "amoxicillin",
    name: "آموکسی‌سیلین",
    unit: "mg/kg/day",
    range: [45, 90],
    divided: 2,
    maxPerDoseMg: 1000,
    maxPerDayMg: 4000,
    notes:
      "دوز روزانه بر حسب mg/kg/day است و به ۲–۳ دوز منقسم می‌شود. طبق اندیکاسیون تنظیم شود.",
  },
];

function formatNumber(n) {
  return new Intl.NumberFormat("fa-IR").format(Math.round(n));
}

function PatientForm({ onCalculate }) {
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(70);
  const [drug, setDrug] = useState(drugs[0].id);

  useEffect(() => {
    handleCalculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCalculate = () => {
    const selected = drugs.find((d) => d.id === drug);
    if (!selected || !weight || weight <= 0) return;

    let result = {};

    if (selected.id === "amoxicillin") {
      // mg/kg/day divided into doses
      const dailyLow = selected.range[0] * weight;
      const dailyHigh = selected.range[1] * weight;
      const perDoseLow = dailyLow / (selected.divided || 2);
      const perDoseHigh = dailyHigh / (selected.divided || 2);

      result = {
        title: selected.name,
        perDose: `${formatNumber(perDoseLow)} تا ${formatNumber(perDoseHigh)} mg هر ${selected.divided ? Math.round(24 / selected.divided) : 12} ساعت`,
        perDay: `${formatNumber(dailyLow)} تا ${formatNumber(dailyHigh)} mg در روز`,
        maxPerDose: selected.maxPerDoseMg ? `${formatNumber(selected.maxPerDoseMg)} mg` : null,
        maxPerDay: selected.maxPerDayMg ? `${formatNumber(selected.maxPerDayMg)} mg` : null,
        notes: selected.notes,
      };
    } else {
      // mg/kg per dose
      const perDoseLow = selected.range[0] * weight;
      const perDoseHigh = selected.range[1] * weight;
      const maxPerDose = selected.maxPerDoseMg ? Math.min(perDoseHigh, selected.maxPerDoseMg) : perDoseHigh;

      result = {
        title: selected.name,
        perDose: `${formatNumber(perDoseLow)} تا ${formatNumber(perDoseHigh)} mg در هر دوز`,
        perDay: selected.maxPerDayMg ? `حداکثر ${formatNumber(selected.maxPerDayMg)} mg در روز` : null,
        maxPerDose: selected.maxPerDoseMg ? `${formatNumber(selected.maxPerDoseMg)} mg` : null,
        maxPerDay: selected.maxPerDayMg ? `${formatNumber(selected.maxPerDayMg)} mg` : null,
        notes: selected.notes,
      };
    }

    onCalculate({
      age,
      weight,
      drug: selected.name,
      ...result,
    });
  };

  return (
    <div className="w-full bg-white/80 backdrop-blur rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium flex items-center gap-2">
            <User className="w-4 h-4 text-gray-500" /> سن (سال)
          </label>
          <input
            type="number"
            min={0}
            className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 text-right"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium flex items-center gap-2">
            <Scale className="w-4 h-4 text-gray-500" /> وزن (کیلوگرم)
          </label>
          <input
            type="number"
            min={1}
            className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 text-right"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium flex items-center gap-2">
            <Syringe className="w-4 h-4 text-gray-500" /> دارو
          </label>
          <select
            className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3"
            value={drug}
            onChange={(e) => setDrug(e.target.value)}
          >
            {drugs.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleCalculate}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow-sm"
        >
          محاسبه
        </button>
      </div>
    </div>
  );
}

export default PatientForm;

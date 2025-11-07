import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

function Row({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 border-b last:border-none">
      <span className="text-gray-600 text-sm">{label}</span>
      <span className="font-medium text-right">{value}</span>
    </div>
  );
}

function DoseResult({ result }) {
  if (!result) return null;

  return (
    <section className="w-full bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">نتیجه محاسبه</h3>
        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
      </div>

      <div className="space-y-2">
        <Row label="دارو" value={result.title} />
        <Row label="سن" value={`${result.age} سال`} />
        <Row label="وزن" value={`${result.weight} کیلوگرم`} />
        <Row label="دوز پیشنهادی هر نوبت" value={result.perDose} />
        {result.perDay && <Row label="مقدار روزانه" value={result.perDay} />}
        {result.maxPerDose && <Row label="حداکثر هر دوز" value={result.maxPerDose} />}
        {result.maxPerDay && <Row label="حداکثر روزانه" value={result.maxPerDay} />}
      </div>

      {result.notes && (
        <div className="mt-4 text-xs text-amber-700 bg-amber-50 border border-amber-200 p-3 rounded-md flex items-start gap-2">
          <Info className="w-4 h-4 mt-0.5" />
          <p className="leading-relaxed">{result.notes}</p>
        </div>
      )}

      <div className="mt-4 text-xs text-red-700 bg-red-50 border border-red-200 p-3 rounded-md flex items-start gap-2">
        <AlertTriangle className="w-4 h-4 mt-0.5" />
        <p>
          این محاسبات ممکن است برای همه بیماران مناسب نباشد. بر اساس شرایط بالینی، عملکرد کبد/کلیه، تداخلات
          و راهنماهای بومی تنظیم کنید و قبل از تجویز با پزشک معالج هماهنگ شوید.
        </p>
      </div>
    </section>
  );
}

export default DoseResult;

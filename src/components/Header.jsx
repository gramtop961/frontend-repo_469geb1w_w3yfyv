import { Pill, Info } from "lucide-react";

function Header() {
  return (
    <header className="w-full max-w-4xl mx-auto text-center">
      <div className="flex items-center justify-center gap-3 mb-3">
        <Pill className="w-7 h-7 text-indigo-600" />
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">محاسبه‌گر دوز دارویی</h1>
      </div>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
        این ابزار به شما کمک می‌کند بر اساس وزن بیمار، دوز پیشنهادی دارو را محاسبه کنید. این محاسبه صرفاً آموزشی است و جایگزین نظر پزشک نیست.
      </p>
      <div className="mt-3 inline-flex items-start gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 px-3 py-2 rounded-md">
        <Info className="w-4 h-4 mt-0.5" />
        <span>
          قبل از تجویز، وضعیت بالینی، عملکرد کبد و کلیه، تداخلات دارویی و دستورالعمل‌های محلی را بررسی کنید.
        </span>
      </div>
    </header>
  );
}

export default Header;

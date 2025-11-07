import { BookOpen, Shield } from "lucide-react";

function InfoPanel() {
  return (
    <aside className="w-full bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-gray-200 p-4 md:p-6">
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-semibold">نکات بالینی مهم</h3>
      </div>
      <ul className="list-disc pr-5 space-y-2 text-sm text-gray-700 leading-relaxed">
        <li>برای کودکان، سن به تنهایی معیار مناسبی نیست؛ وزن و وضعیت رشد اهمیت دارد.</li>
        <li>در نارسایی کلیه/کبد، دوزها باید بر اساس کلیرانس کراتینین یا امتیاز Child-Pugh تنظیم شوند.</li>
        <li>توجه به حداکثر دوز در هر نوبت و حداکثر دوز روزانه ضروری است.</li>
        <li>درصورت وجود حساسیت دارویی یا تداخلات، از جایگزین مناسب استفاده کنید.</li>
      </ul>
      <div className="mt-4 flex items-start gap-2 text-xs text-gray-600">
        <Shield className="w-4 h-4 mt-0.5" />
        <p>این نرم‌افزار برای آموزش طراحی شده و جایگزین قضاوت بالینی یا دستور پزشک نیست.</p>
      </div>
    </aside>
  );
}

export default InfoPanel;

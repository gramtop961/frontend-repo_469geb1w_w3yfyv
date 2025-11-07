import { useState } from "react";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import DoseResult from "./components/DoseResult";
import InfoPanel from "./components/InfoPanel";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <Header />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <PatientForm onCalculate={setResult} />
            <DoseResult result={result} />
          </div>
          <div>
            <InfoPanel />
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-gray-500">
          ساخته‌شده برای اهداف آموزشی — همیشه با راهنماهای بالینی معتبر تطبیق دهید.
        </footer>
      </div>
    </div>
  );
}

export default App;

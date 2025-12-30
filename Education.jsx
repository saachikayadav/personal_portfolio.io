import React from "react";
import { Wrench } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-4xl font-bold text-gray-100 border-b-4 border-pink-500 pb-2 inline-block">
        Academic Background
      </h2>

      <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-100">
              {portfolioData.education.institution}
            </h3>
            <p className="text-pink-500 font-semibold text-lg">
              {portfolioData.education.degree}
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-300 font-bold">{portfolioData.education.dates}</p>
            <p className="text-gray-500 italic">{portfolioData.education.location}</p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <span className="px-4 py-1 bg-pink-500 text-black rounded-full font-black text-xl tracking-tighter">
            GPA {portfolioData.education.gpa}
          </span>
          <span className="text-gray-500 text-sm italic underline decoration-pink-500/50 underline-offset-4">
            Cumulative Performance
          </span>
        </div>

        <div className="mt-8">
          <h4 className="text-gray-200 font-bold mb-4 flex items-center gap-2">
            <Wrench size={18} className="text-pink-500" />
            Key Coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {portfolioData.education.coursework.map((c, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-gray-300 rounded-lg text-sm hover:border-pink-500 transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Award } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-4xl font-bold text-gray-100 border-b-4 border-pink-500 pb-2 inline-block">
        Skills & Recognition
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-zinc-900/30 p-8 rounded-3xl border border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-black text-gray-600 uppercase tracking-[0.2em] mb-4">
                Programming
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.languages.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-zinc-800 text-gray-100 rounded-lg border border-zinc-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-gray-600 uppercase tracking-[0.2em] mb-4">
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.frameworks.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-zinc-800 text-gray-100 rounded-lg border border-zinc-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-sm font-black text-gray-600 uppercase tracking-[0.2em] mb-4">
                Libraries & Analysis
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.libraries.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-zinc-800 text-gray-100 rounded-lg border border-zinc-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
            <Award className="text-pink-500" /> Honors
          </h3>

          {portfolioData.awards.map((a, i) => (
            <div key={i} className="p-5 bg-zinc-900/50 rounded-2xl border border-zinc-800">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-pink-400">{a.name}</h4>
                <span className="text-xs text-gray-600 font-mono">{a.year}</span>
              </div>
              <p className="text-sm text-gray-200 font-medium mb-1">{a.org}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

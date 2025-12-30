import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-4xl font-bold text-gray-100 border-b-4 border-pink-500 pb-2 inline-block">
        Experience
      </h2>

      <div className="space-y-6">
        {portfolioData.experience.map((exp, idx) => (
          <div
            key={idx}
            className="relative pl-8 border-l-2 border-zinc-800 hover:border-pink-500 transition-colors py-4 group"
          >
            <div className="absolute -left-2 top-8 w-4 h-4 bg-zinc-900 border-2 border-zinc-800 group-hover:border-pink-500 rounded-full transition-colors"></div>

            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-2xl font-bold text-gray-100">{exp.title}</h3>
              <span className="text-pink-500 font-bold">{exp.dates}</span>
            </div>

            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-400 font-semibold">{exp.company}</p>
              <span className="text-gray-600 text-sm uppercase tracking-widest">
                {exp.location}
              </span>
            </div>

            <ul className="space-y-2 text-gray-400 list-disc list-inside">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

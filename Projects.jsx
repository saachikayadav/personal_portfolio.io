import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-4xl font-bold text-gray-100 border-b-4 border-pink-500 pb-2 inline-block">
        Technical Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-pink-500/50 transition-all group"
          >
            <h3 className="text-xl font-bold text-gray-100 group-hover:text-pink-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-pink-500 mt-1 font-mono">{project.tech}</p>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm list-disc list-inside">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

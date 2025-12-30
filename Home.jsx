import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Home({ setCurrentPage }) {
  return (
    <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <img
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-pink-500 shadow-2xl"
          src="1729323206155.jpeg"
          alt={portfolioData.name}
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="inline-block animate-wave mr-3">👋</span>
          Hi, I'm <span className="text-pink-500">{portfolioData.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto">
          {portfolioData.title}
        </p>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
          {portfolioData.bio}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setCurrentPage("projects")}
          className="bg-pink-500 text-black px-8 py-3 rounded-full font-bold hover:bg-pink-400 transition-all shadow-lg shadow-pink-500/20"
        >
          View Projects
        </button>
        <button
          onClick={() => setCurrentPage("chat")}
          className="border border-zinc-700 px-8 py-3 rounded-full font-bold hover:bg-zinc-800 transition-all"
        >
          Talk to AI
        </button>
      </div>
    </div>
  );
}

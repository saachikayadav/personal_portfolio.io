import React from "react";
import { navItems } from "../data/navItems";

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] md:relative md:bottom-auto md:left-auto md:translate-x-0 md:mb-12">
      <div className="bg-zinc-900/90 backdrop-blur-2xl border border-zinc-800 rounded-full p-2 flex items-center shadow-2xl gap-1 overflow-x-auto no-scrollbar md:justify-center max-w-[95vw]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
              currentPage === item.id
                ? "bg-pink-500 text-black shadow-lg shadow-pink-500/20"
                : "text-gray-400 hover:text-white hover:bg-zinc-800"
            }`}
          >
            <item.icon size={16} />
            <span className={currentPage === item.id ? "block" : "hidden md:block"}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

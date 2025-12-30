import React from "react";
import Navbar from "./Navbar";

export default function Layout({ currentPage, setCurrentPage, children, name }) {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-pink-500 selection:text-black">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 md:px-12 md:py-16 flex flex-col gap-8">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <main className="flex-grow">{children}</main>

        <footer className="text-center py-8 text-xs text-gray-600 font-mono tracking-widest uppercase">
          &copy; {new Date().getFullYear()} {name} • Purdue University
        </footer>
      </div>

      {/* Global styles originally in <style> */}
      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          display: inline-block;
          animation: wave 2s linear infinite;
          transform-origin: 70% 70%;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

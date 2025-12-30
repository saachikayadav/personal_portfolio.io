import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto space-y-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-100 border-b-4 border-pink-500 pb-2 inline-block">
          Get In Touch
        </h2>
        <p className="text-gray-500">I'm currently looking for new opportunities and would love to hear from you!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href={`mailto:${portfolioData.contact.email}`}
          className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-pink-500 transition-all group"
        >
          <Mail className="mx-auto text-pink-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
          <h4 className="text-sm font-black text-gray-600 uppercase mb-2">Email</h4>
          <p className="text-lg font-bold break-all">{portfolioData.contact.email}</p>
        </a>

        <a
          href={portfolioData.contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-blue-500 transition-all group"
        >
          <Linkedin className="mx-auto text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
          <h4 className="text-sm font-black text-gray-600 uppercase mb-2">LinkedIn</h4>
          <p className="text-lg font-bold">saachika-yadav</p>
        </a>

        <a
          href={portfolioData.contact.github}
          target="_blank"
          rel="noreferrer"
          className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-gray-500 transition-all group"
        >
          <Github className="mx-auto text-gray-100 mb-4 group-hover:scale-110 transition-transform" size={32} />
          <h4 className="text-sm font-black text-gray-600 uppercase mb-2">GitHub</h4>
          <p className="text-lg font-bold">saachikayadav</p>
        </a>

        <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800">
          <div className="w-10 h-10 bg-pink-500 text-black flex items-center justify-center rounded-full mx-auto mb-4 font-bold text-xs uppercase tracking-tighter">
            Loc
          </div>
          <h4 className="text-sm font-black text-gray-600 uppercase mb-2">Location</h4>
          <p className="text-lg font-bold">West Lafayette, IN</p>
        </div>
      </div>
    </div>
  );
}

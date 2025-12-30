import React, { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import { askGemini } from "../utils/gemini";

export default function ChatAI() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (query) => {
    if (!query.trim()) return;

    setIsLoading(true);
    setMessages((prev) => [...prev, { text: query, sender: "user" }]);

    try {
      const answer = await askGemini(query);
      setMessages((prev) => [...prev, { text: answer, sender: "assistant" }]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { text: "Error: Could not connect to AI Assistant.", sender: "assistant" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-100 mb-2">AI Assistant</h2>
        <p className="text-gray-500">Ask anything about Saachika's experience at BASF, Purdue, or her projects.</p>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="h-[450px] overflow-y-auto p-6 flex flex-col gap-4 scrollbar-hide">
          {messages.length === 0 && (
            <div className="my-auto text-center space-y-4">
              <div className="bg-zinc-900 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-pink-500">
                <MessageSquare size={32} />
              </div>
              <p className="text-gray-600 max-w-xs mx-auto">
                Welcome! I'm an AI trained on Saachika's professional history. Try asking "What was her role at Power Grid?"
              </p>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-pink-500 text-black font-bold rounded-tr-none"
                    : "bg-zinc-900 text-gray-200 border border-zinc-800 rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl rounded-tl-none animate-pulse text-gray-500 text-xs font-bold uppercase tracking-widest">
                Thinking...
              </div>
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const query = e.target.query.value;
            if (query) {
              handleSendMessage(query);
              e.target.reset();
            }
          }}
          className="p-4 bg-zinc-900 border-t border-zinc-800 flex gap-2"
        >
          <input
            name="query"
            autoComplete="off"
            placeholder="Ask me something..."
            className="flex-grow bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-colors"
          />
          <button type="submit" className="bg-pink-500 text-black p-3 rounded-xl hover:bg-pink-400 transition-colors">
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

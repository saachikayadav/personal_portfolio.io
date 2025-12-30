import { geminiSystemInstruction } from "../data/geminiSystemInstruction";

/**
 * Calls Gemini API. Keep your API key OUT of GitHub:
 * - Vite: use import.meta.env.VITE_GEMINI_API_KEY
 * - CRA: use process.env.REACT_APP_GEMINI_API_KEY
 */
export async function askGemini(query) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // for Vite
  if (!apiKey) {
    throw new Error("Missing VITE_GEMINI_API_KEY in environment variables.");
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: query }] }],
      systemInstruction: { parts: [{ text: geminiSystemInstruction }] }
    })
  });

  const result = await response.json();
  const answer = result?.candidates?.[0]?.content?.parts?.[0]?.text;
  return answer || "I couldn't process that response.";
}

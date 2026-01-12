
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getGeminiResponse = async (prompt: string, systemInstruction: string = "") => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction || "당신은 세계 최고의 팔로워십 코치 에바(Eva)입니다. 사용자는 데미안(Demian)의 제자입니다. 친절하고 전문적인 한국어로 답변하세요.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "죄송합니다. 에바가 잠시 생각에 잠겼어요. 다시 시도해 주세요!";
  }
};


import { GoogleGenAI } from "@google/genai";
import { GeneratedResult } from "../types";
import { OFFICIAL_RULES } from "../constants";

export type ScenarioType = 
  | 'text_to_video' 
  | 'consistency' 
  | 'camera_motion' 
  | 'template' 
  | 'story' 
  | 'extension' 
  | 'sound' 
  | 'one_shot' 
  | 'editing' 
  | 'music_sync';

const SCENARIO_INSTRUCTIONS: Record<ScenarioType, string> = {
  text_to_video: "Standard Mode: Focus on continuous action, physics compliance, and temporal progression.",
  consistency: "Consistency Mode: Maintain character/object identity across frames. Use '@Image(Ref)' as placeholder.",
  camera_motion: "Camera Mode: Focus on complex camera moves (e.g., 'Orbiting', 'Dolly Zoom', 'Crane Up').",
  template: "Template Mode: Clone video style. Use '@Video(Style)' as reference.",
  story: "Story Mode: Define a clear sequence of events (e.g., '0s: start, 3s: turn head, 5s: smile').",
  extension: "Extension Mode: Smoothly continue from a last frame. Use '@Image(LastFrame)' as start.",
  sound: "Sound Mode: Audio-reactive video. Syntax: '[Audio Rhythm: Fast]'.",
  one_shot: "One-Shot Mode: Long continuous take, no cuts, fluid transitions.",
  editing: "Editing Mode: 'Change [Object A] to [Object B] while keeping motion'.",
  music_sync: "Music Sync Mode: Visuals match the beat. Placeholder: '@Audio(Track)'."
};

const REVERSE_ENGINEER_SYSTEM_PROMPT = `
# Role
你是 **AI 视觉取证与高保真复刻专家**。你拥有“显微镜级”的观察力，能够像法医一样拆解一段视频的每一帧细节。
你的核心任务不是“模仿”或“洗稿”，而是**“克隆”**。你需要通过分析输入的视频画面，输出一段极度精准的提示词，使得 AI 视频生成模型（如 Sora/Runway/Midjourney）生成的画面在**人物特征、物体材质、光影精确位置、运镜速度**上与原视频保持 **1:1 的视觉一致性**。

# Core Goal
通过深度分析视频内容，输出一段 **1000字以内** 的自然语言提示词。这段提示词必须能够指导生成模型重现原视频的每一个视觉与听觉细节，**严禁进行模糊化或通用化处理**。

# Chain of Thought (分析逻辑)
1.  **特征锁定 (Feature Locking)**：拒绝泛化，精确描述主体特征。
2.  **光影拓扑 (Lighting Topology)**：分析光源方向、色温、对比度。
3.  **摄影机参数反推 (Camera Reverse Engineering)**：推测焦段、光圈、运镜方式。
4.  **微动态捕捉 (Micro-Motion)**：关注毫秒级的细微动作。

# Output Principles
1.  **绝对写实 (Photorealism)**。
2.  **拒绝模糊词汇**。
3.  **纯自然语言输出**。
4.  **违禁词技术规避**。

# Output Format
Return JSON: { "promptZh": "...", "promptEn": "..." }
`;

export const generatePrompts = async (
  userInput: string, 
  language: 'en' | 'zh' = 'en', 
  scenario: ScenarioType = 'text_to_video',
  customKnowledge: string = ''
): Promise<GeneratedResult> => {
  
  // Use VITE_ prefix for client-side env variables
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Gemini API Key is missing. Please set VITE_GEMINI_API_KEY in your .env file.");
  }

  const ai = new GoogleGenAI({ apiKey });
  const scenarioInstruction = SCENARIO_INSTRUCTIONS[scenario];
  
  const knowledgeBase = customKnowledge.trim() 
    ? `${OFFICIAL_RULES}\n\n### ADDITIONAL USER RULES:\n${customKnowledge}` 
    : OFFICIAL_RULES;

  const systemInstruction = `
    # ROLE: Seedance Storyboard Expert (V2.0)
    ## MISSION: Transform input into professional Seedance 2.0 prompts.
    ## SCENARIO: ${scenario} - ${scenarioInstruction}
    ## KNOWLEDGE BASE:
    ${knowledgeBase}
    
    ## OUTPUT FORMAT (JSON ONLY):
    {
      "summary": "...",
      "summaryZh": "...",
      "promptEn": "...",
      "promptZh": "...",
      "suggestions": ["..."],
      "suggestionsZh": ["..."],
      "tips": ["..."],
      "tipsZh": ["..."]
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ role: "user", parts: [{ text: `Generate a storyboard for: "${userInput}"` }] }],
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.4, 
      }
    });

    return JSON.parse(response.text) as GeneratedResult;
  } catch (error) {
    console.error("Generation error:", error);
    throw error;
  }
};

export const reverseEngineerVideo = async (
  input: { type: 'file', data: string, mimeType: string } | { type: 'url', url: string },
  timeRange?: { start: string, end: string },
  additionalNotes?: string
): Promise<{ promptZh: string, promptEn: string }> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("API Key missing");

  const ai = new GoogleGenAI({ apiKey });
  let promptText = "Analyze this video footage strictly. Return JSON with 'promptZh' and 'promptEn'.";
  
  if (timeRange) promptText += ` Focus on ${timeRange.start} to ${timeRange.end}.`;
  if (additionalNotes) promptText += `\nNotes: ${additionalNotes}`;

  const parts: any[] = [];
  if (input.type === 'file') {
    parts.push({ inlineData: { data: input.data, mimeType: input.mimeType } });
    parts.push({ text: promptText });
  } else {
    parts.push({ text: `Analyze video at: ${input.url}. \n${promptText}` });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", 
      contents: [{ role: "user", parts: parts }],
      config: {
        systemInstruction: REVERSE_ENGINEER_SYSTEM_PROMPT,
        temperature: 0.2, 
        responseMimeType: "application/json",
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Reverse Engineering Error:", error);
    throw error;
  }
};

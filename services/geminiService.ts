
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

const GRSAI_API_KEY = (import.meta as any).env?.VITE_GRSAI_API_KEY || "sk-13321bc9536c40ba9e26506d0f86b5dd";
const GRSAI_HOST = (import.meta as any).env?.VITE_GRSAI_HOST || "https://grsaiapi.com";

export const generatePrompts = async (
  userInput: string, 
  language: 'en' | 'zh' = 'en', 
  scenario: ScenarioType = 'text_to_video',
  customKnowledge: string = ''
): Promise<GeneratedResult> => {
  
  const scenarioInstruction = SCENARIO_INSTRUCTIONS[scenario];
  
  const knowledgeBase = customKnowledge.trim() 
    ? `${OFFICIAL_RULES}\n\n### ADDITIONAL USER RULES:\n${customKnowledge}` 
    : OFFICIAL_RULES;

  const systemInstruction = `
    # ROLE: Seedance Storyboard Expert (V2.0)
    ## MISSION: Transform input into professional Seedance 2.0 prompts.
    ## LANGUAGE: ${language}
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
    const response = await fetch(`${GRSAI_HOST}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GRSAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gemini-3.1-pro",
        messages: [
          { role: "system", content: systemInstruction },
          { role: "user", content: `Generate a storyboard for: "${userInput}"` }
        ],
        stream: false
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `API Error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    // Clean up potential markdown code blocks
    const jsonStr = content.replace(/```json\n?|```/g, '').trim();
    return JSON.parse(jsonStr) as GeneratedResult;
  } catch (error) {
    console.error("Generation error:", error);
    throw error;
  }
};

export const generateImage = async (prompt: string, aspectRatio: string = "16:9"): Promise<string> => {
  try {
    const response = await fetch(`${GRSAI_HOST}/v1/draw/nano-banana`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GRSAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "nano-banana-pro",
        prompt: prompt,
        aspectRatio: aspectRatio,
        imageSize: "2K",
        shutProgress: true
      })
    });

    if (!response.ok) {
      throw new Error(`Image API Error: ${response.status}`);
    }

    const data = await response.json();
    if (data.status === 'succeeded' && data.results?.[0]?.url) {
      return data.results[0].url;
    } else if (data.status === 'failed') {
      throw new Error(data.error || data.failure_reason || "Image generation failed");
    } else {
      throw new Error("Unexpected image generation response");
    }
  } catch (error) {
    console.error("Image generation error:", error);
    throw error;
  }
};

export const reverseEngineerVideo = async (
  input: { type: 'file', data: string, mimeType: string } | { type: 'url', url: string },
  timeRange?: { start: string, end: string },
  additionalNotes?: string
): Promise<{ promptZh: string, promptEn: string }> => {
  let promptText = "Analyze this video footage strictly. Return JSON with 'promptZh' and 'promptEn'.";
  if (timeRange) promptText += ` Focus on ${timeRange.start} to ${timeRange.end}.`;
  if (additionalNotes) promptText += `\nNotes: ${additionalNotes}`;

  const messages: any[] = [
    { role: "system", content: "You are an AI Visual Forensic Expert. Analyze video content to reverse engineer prompts." }
  ];

  if (input.type === 'url') {
    messages.push({ role: "user", content: `Analyze video at: ${input.url}. \n${promptText}` });
  } else {
    messages.push({ role: "user", content: `[Video Data Provided] \n${promptText}` });
  }

  try {
    const response = await fetch(`${GRSAI_HOST}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GRSAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gemini-3.1-pro",
        messages: messages,
        stream: false
      })
    });

    if (!response.ok) throw new Error(`Reverse Engineering API Error: ${response.status}`);

    const data = await response.json();
    const content = data.choices[0].message.content;
    const jsonStr = content.replace(/```json\n?|```/g, '').trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Reverse Engineering Error:", error);
    throw error;
  }
};

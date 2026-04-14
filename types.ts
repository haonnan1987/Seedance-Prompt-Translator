
export interface StoryboardResult {
  summary: string;      // English Summary
  summaryZh: string;    // Chinese Summary
  promptEn: string;     // The main storyboard prompt code (includes Visual + Audio)
  promptZh: string;     // Translated storyboard prompt (includes Visual + Audio)
  suggestions: string[]; // English Asset suggestions
  suggestionsZh: string[]; // Chinese Asset suggestions
  tips: string[];       // English Technical usage tips
  tipsZh: string[];     // Chinese Technical usage tips
}

export type GeneratedResult = StoryboardResult;

export interface Template {
  id: string;
  title: string;
  description: string;
  image: string; // Acts as the main media source (Video URL or Image URL)
  videoPreview?: string; // Optional specific preview
  duration: string;
  engine: string;
  likes: string;
  tags: string[];
  aspectRatio: string; // e.g. "16:9", "9:16"
  parameters: string[]; // e.g. ["--ar 16:9", "--v 6.0"]
  promptEnglish: string;
  promptChinese: string;
  author: string;
  authorUrl?: string; // Link to the original source
}

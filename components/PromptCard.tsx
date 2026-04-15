
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GeneratedResult } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface PromptCardProps {
  data: GeneratedResult;
}

export const PromptCard: React.FC<PromptCardProps> = ({ data }) => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const currentSummary = language === 'en' ? data.summary : data.summaryZh;
  const currentPrompt = language === 'en' ? data.promptEn : data.promptZh;
  const currentSuggestions = language === 'en' ? data.suggestions : data.suggestionsZh;
  const currentTips = language === 'en' ? data.tips : data.tipsZh;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto space-y-6"
    >
      {/* Summary Card */}
      <div className="bg-surface-glass backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-icons-round text-electric-lime">psychology</span>
          <h3 className="text-xl font-bold text-white/90">{t.results.understanding}</h3>
        </div>
        <p className="text-white/70 leading-relaxed font-light italic">
          "{currentSummary}"
        </p>
      </div>

      {/* Main Prompt Card */}
      <div className="bg-surface-glass backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-3">
            <span className="material-icons-round text-electric-lime">auto_awesome</span>
            <h3 className="text-xl font-bold text-white/90">{t.results.storyboard}</h3>
          </div>
          <button 
            onClick={() => handleCopy(currentPrompt, 'main')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              copied === 'main' ? 'bg-electric-lime text-black' : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            <span className="material-icons-round text-sm">
              {copied === 'main' ? 'check' : 'content_copy'}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">
              {copied === 'main' ? t.card.copied : t.modal.copy}
            </span>
          </button>
        </div>
        <div className="p-8 bg-black/20">
          <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-electric-lime/90 selection:bg-electric-lime selection:text-black">
            {currentPrompt}
          </pre>
        </div>
      </div>

      {/* Grid for Suggestions and Tips */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Suggestions */}
        <div className="bg-surface-glass backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-icons-round text-electric-lime">inventory_2</span>
            <h3 className="text-lg font-bold text-white/90">{t.results.suggestions}</h3>
          </div>
          <ul className="space-y-3">
            {currentSuggestions.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-lime mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Tips */}
        <div className="bg-surface-glass backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-icons-round text-electric-lime">lightbulb</span>
            <h3 className="text-lg font-bold text-white/90">{t.results.tips}</h3>
          </div>
          <ul className="space-y-3">
            {currentTips.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                <span className="material-icons-round text-xs text-electric-lime mt-0.5 shrink-0">bolt</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

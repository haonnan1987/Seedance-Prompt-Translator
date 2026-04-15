
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Template } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface TemplateModalProps {
  template: Template;
  onClose: () => void;
  onLoad: (template: Template) => void;
}

export const TemplateModal: React.FC<TemplateModalProps> = ({ template, onClose, onLoad }) => {
  const { t } = useLanguage();
  const [copiedEn, setCopiedEn] = useState(false);
  const [copiedCn, setCopiedCn] = useState(false);
  const [isCollected, setIsCollected] = useState(false);

  const copyToClipboard = (text: string, setCopied: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCollection = () => {
    setIsCollected(!isCollected);
  };

  // Helper to check for video extensions
  const isVideo = (url: string) => {
    return /\.(mp4|webm|ogg)$/i.test(url);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-void-black border border-white/10 rounded-2xl w-full max-w-6xl h-[85vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white/50 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors backdrop-blur-md"
        >
          <span className="material-icons-round">close</span>
        </button>

        {/* Left: Video/Image Preview */}
        <div className="w-full md:w-3/5 bg-black/95 flex items-center justify-center relative overflow-hidden group h-1/2 md:h-full">
          
          {/* Ambient Background (Blurred) */}
          {isVideo(template.image) ? (
             <video 
               src={template.image} 
               className="absolute inset-0 w-full h-full object-cover opacity-30 blur-2xl scale-125"
               muted loop autoPlay
             />
          ) : (
             <img 
                src={template.image} 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-30 blur-2xl scale-125 transition-transform duration-700" 
                alt=""
             />
          )}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

          {/* Main Media Container */}
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
             {isVideo(template.image) ? (
                <video 
                  src={template.image} 
                  className="w-full h-full object-contain shadow-2xl relative z-10 rounded-md" 
                  controls
                  autoPlay
                  loop
                />
             ) : (
                <img 
                  src={template.image} 
                  alt={template.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain shadow-2xl relative z-10 rounded-md" 
                />
             )}
             
             {/* Play Button Overlay (Only for images acting as video placeholders) */}
             {!isVideo(template.image) && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                   <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg">
                     <span className="material-icons-round text-4xl text-white ml-2">play_arrow</span>
                   </div>
                </div>
             )}
          </div>
          
          {/* Video Controls Overlay (Visual only, for vibe) */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 text-white/80 z-30 pointer-events-none">
            <span className="material-icons-round">play_arrow</span>
            <div className="h-1 bg-white/20 rounded-full flex-grow">
               <div className="h-full w-1/3 bg-electric-lime rounded-full relative"></div>
            </div>
            <span className="text-xs font-mono">{template.duration}</span>
            <span className="material-icons-round">volume_up</span>
            <span className="material-icons-round">fullscreen</span>
          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col overflow-y-auto bg-void-black border-l border-white/5 no-scrollbar h-1/2 md:h-full">
          
          {/* Header Section */}
          <div className="mb-6 flex items-start justify-between gap-4 pr-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3 leading-tight">{template.title}</h2>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 font-medium">
                 {/* Author Link */}
                 <span className="flex items-center gap-1">
                    <span className="material-icons-round text-base">person</span>
                    {template.authorUrl ? (
                      <a 
                        href={template.authorUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-electric-lime underline decoration-white/20 hover:decoration-electric-lime transition-all"
                      >
                        {template.author}
                      </a>
                    ) : (
                      <span>{template.author}</span>
                    )}
                 </span>

                 <span className="w-1 h-1 rounded-full bg-white/20"></span>
                 <span className="flex items-center gap-1 text-electric-lime/80">
                    <span className="material-icons-round text-base">psychology</span>
                    {t.modal.model}: Seedance 2.0
                 </span>
              </div>
            </div>
            
            <button 
              onClick={toggleCollection}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-sm font-medium group ${
                isCollected 
                  ? 'bg-pink-500/10 border-pink-500/50 text-pink-500 hover:bg-pink-500/20' 
                  : 'border-white/10 hover:bg-white/5 text-white/70 hover:text-white'
              }`}
            >
                <span className={`material-icons-round text-lg transition-colors ${
                  isCollected ? 'text-pink-500' : 'group-hover:text-pink-500'
                }`}>
                  {isCollected ? 'favorite' : 'favorite_border'}
                </span>
                <span>{isCollected ? t.modal.collected : t.modal.collect}</span>
            </button>
          </div>

          <div className="space-y-6 flex-grow">
            
            {/* Tags (Keywords) Section */}
            <div>
              <div className="flex flex-wrap gap-2">
                {template.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-sm font-medium text-white/80 transition-colors cursor-default border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* English Prompt */}
            <div className="bg-black/50 rounded-xl p-4 border border-white/5 group hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold text-electric-lime uppercase tracking-widest">{t.modal.promptEn}</h3>
                <button 
                  onClick={() => copyToClipboard(template.promptEnglish, setCopiedEn)}
                  className="text-white/30 hover:text-white transition-colors"
                >
                  <span className="material-icons-round text-sm">
                    {copiedEn ? 'check' : 'content_copy'}
                  </span>
                </button>
              </div>
              <p className="text-sm text-white/80 font-mono leading-relaxed selection:bg-electric-lime/20">
                {template.promptEnglish}
              </p>
            </div>

            {/* Chinese Prompt */}
            <div className="bg-black/50 rounded-xl p-4 border border-white/5 group hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold text-violet-400 uppercase tracking-widest">{t.modal.promptCn}</h3>
                <button 
                   onClick={() => copyToClipboard(template.promptChinese, setCopiedCn)}
                   className="text-white/30 hover:text-white transition-colors"
                >
                  <span className="material-icons-round text-sm">
                    {copiedCn ? 'check' : 'content_copy'}
                  </span>
                </button>
              </div>
              <p className="text-sm text-white/80 font-mono leading-relaxed selection:bg-violet-500/20">
                {template.promptChinese}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <button 
              onClick={() => onLoad(template)}
              className="w-full py-4 rounded-xl bg-electric-lime hover:bg-white text-black font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.modal.load}
              <span className="material-icons-round">arrow_forward</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface KnowledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialValue: string;
  onSave: (value: string) => void;
}

export const KnowledgeModal: React.FC<KnowledgeModalProps> = ({ isOpen, onClose, initialValue, onSave }) => {
  const { t } = useLanguage();
  const [content, setContent] = useState(initialValue);

  const handleSave = () => {
    onSave(content);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl bg-void-black border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-3">
            <span className="material-icons-round text-electric-lime">menu_book</span>
            <div>
              <h3 className="text-xl font-bold text-white">{t.knowledge.title}</h3>
              <p className="text-xs text-white/40">{t.knowledge.subtitle}</p>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors">
            <span className="material-icons-round">close</span>
          </button>
        </div>

        <div className="p-6 flex-grow overflow-y-auto">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={t.knowledge.placeholder}
            className="w-full h-64 bg-black/20 border border-white/10 rounded-2xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-electric-lime/50 transition-colors font-mono text-sm resize-none"
          />
        </div>

        <div className="p-6 border-t border-white/5 bg-white/5 flex justify-end gap-3">
          <button 
            onClick={() => setContent('')}
            className="px-6 py-2 rounded-full text-sm font-medium text-white/40 hover:text-white transition-colors"
          >
            {t.knowledge.clear}
          </button>
          <button 
            onClick={handleSave}
            className="px-8 py-2 rounded-full bg-electric-lime text-black font-bold text-sm hover:bg-white transition-all shadow-neon"
          >
            {t.knowledge.save}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

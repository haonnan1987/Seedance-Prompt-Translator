
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface FeaturesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeaturesModal: React.FC<FeaturesModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

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
        className="relative w-full max-w-3xl bg-void-black border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-3">
            <span className="material-icons-round text-electric-lime">stars</span>
            <h3 className="text-xl font-bold text-white">{t.features.title}</h3>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors">
            <span className="material-icons-round">close</span>
          </button>
        </div>

        <div className="p-8 overflow-y-auto">
          <p className="text-white/60 mb-8 leading-relaxed">
            {t.features.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {t.features.list.map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-electric-lime/30 transition-colors group">
                <h4 className="text-electric-lime font-bold mb-2 group-hover:translate-x-1 transition-transform">{feature.title}</h4>
                <p className="text-sm text-white/50 mb-4">{feature.desc}</p>
                <div className="text-xs font-mono text-electric-lime/70 bg-electric-lime/5 px-3 py-2 rounded-lg">
                  {feature.result}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-electric-lime/10 to-transparent border border-electric-lime/20">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="material-icons-round text-electric-lime text-sm">auto_fix_high</span>
              Pro Tip
            </h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Combine "Consistency Control" with "Camera & Motion" mode to create cinematic character studies that remain stable throughout complex movements.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

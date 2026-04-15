
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface DocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocsModal: React.FC<DocsModalProps> = ({ isOpen, onClose }) => {
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
            <span className="material-icons-round text-electric-lime">description</span>
            <h3 className="text-xl font-bold text-white">{t.nav.docs}</h3>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors">
            <span className="material-icons-round">close</span>
          </button>
        </div>

        <div className="p-8 overflow-y-auto prose prose-invert max-w-none">
          <div className="space-y-8">
            <section>
              <h4 className="text-electric-lime font-bold text-lg mb-4 uppercase tracking-wider">Seedance 2.0 Syntax</h4>
              <div className="bg-black/20 rounded-2xl p-6 border border-white/5 font-mono text-sm space-y-4">
                <p className="text-white/80"><span className="text-electric-lime">@Image1</span> - Reference to the first uploaded image for consistency.</p>
                <p className="text-white/80"><span className="text-electric-lime">@Video1</span> - Reference to a style template video.</p>
                <p className="text-white/80"><span className="text-electric-lime">[Action: ...]</span> - Specific motion instruction.</p>
                <p className="text-white/80"><span className="text-electric-lime">[Camera: ...]</span> - Camera movement command.</p>
              </div>
            </section>

            <section>
              <h4 className="text-electric-lime font-bold text-lg mb-4 uppercase tracking-wider">Best Practices</h4>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-electric-lime/10 flex items-center justify-center text-electric-lime text-xs shrink-0">1</span>
                  <p className="text-white/60 text-sm">Always start with a clear subject description before adding complex motion or style tags.</p>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-electric-lime/10 flex items-center justify-center text-electric-lime text-xs shrink-0">2</span>
                  <p className="text-white/60 text-sm">Use consistency tags (@Image) to maintain character identity across multiple generations.</p>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-electric-lime/10 flex items-center justify-center text-electric-lime text-xs shrink-0">3</span>
                  <p className="text-white/60 text-sm">Combine camera movements for more dynamic results (e.g., [Camera: Orbit and Zoom]).</p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

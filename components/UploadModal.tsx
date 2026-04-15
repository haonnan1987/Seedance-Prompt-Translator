
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Template } from '../types';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (template: Template) => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    promptEnglish: '',
    promptChinese: '',
    author: '',
    tags: '',
    duration: '10s',
    aspectRatio: '16:9'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTemplate: Template = {
      id: Math.random().toString(36).substr(2, 9),
      ...formData,
      likes: '0',
      engine: 'Seedance 2.0',
      tags: formData.tags.split(',').map(t => t.trim()),
      parameters: [`--ar ${formData.aspectRatio}`]
    };
    onSubmit(newTemplate);
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
            <span className="material-icons-round text-electric-lime">add_circle</span>
            <div>
              <h3 className="text-xl font-bold text-white">{t.upload.title}</h3>
              <p className="text-xs text-white/40">{t.upload.subtitle}</p>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors">
            <span className="material-icons-round">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider">{t.upload.form.title}</label>
              <input 
                required
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-lime/50 transition-colors"
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider">{t.upload.form.author}</label>
              <input 
                required
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-lime/50 transition-colors"
                value={formData.author}
                onChange={e => setFormData({...formData, author: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-white/40 uppercase tracking-wider">{t.upload.form.video}</label>
            <input 
              required
              placeholder="https://..."
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-lime/50 transition-colors"
              value={formData.image}
              onChange={e => setFormData({...formData, image: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-white/40 uppercase tracking-wider">{t.upload.form.promptEn}</label>
            <textarea 
              required
              className="w-full h-24 bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-lime/50 transition-colors resize-none font-mono text-sm"
              value={formData.promptEnglish}
              onChange={e => setFormData({...formData, promptEnglish: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-white/40 uppercase tracking-wider">{t.upload.form.promptCn}</label>
            <textarea 
              required
              className="w-full h-24 bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-lime/50 transition-colors resize-none font-mono text-sm"
              value={formData.promptChinese}
              onChange={e => setFormData({...formData, promptChinese: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-white/40 uppercase tracking-wider">{t.upload.form.tags}</label>
            <input 
              placeholder="Cinematic, Cyberpunk, Nature..."
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-lime/50 transition-colors"
              value={formData.tags}
              onChange={e => setFormData({...formData, tags: e.target.value})}
            />
          </div>
        </form>

        <div className="p-6 border-t border-white/5 bg-white/5 flex justify-end gap-3">
          <button 
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-full text-sm font-medium text-white/40 hover:text-white transition-colors"
          >
            {t.upload.form.cancel}
          </button>
          <button 
            onClick={handleSubmit}
            className="px-8 py-2 rounded-full bg-electric-lime text-black font-bold text-sm hover:bg-white transition-all shadow-neon"
          >
            {t.upload.form.submit}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

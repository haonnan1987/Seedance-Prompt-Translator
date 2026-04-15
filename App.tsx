
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generatePrompts, ScenarioType } from './services/geminiService';
import { GeneratedResult, Template } from './types';
import { PromptCard } from './components/PromptCard.tsx';
import { TemplateLibrary } from './components/TemplateLibrary.tsx';
import { TemplateModal } from './components/TemplateModal.tsx';
import { KnowledgeModal } from './components/KnowledgeModal.tsx';
import { DocsModal } from './components/DocsModal.tsx';
import { FeaturesModal } from './components/FeaturesModal.tsx';
import { UploadModal } from './components/UploadModal.tsx';
import { ReverseModal } from './components/ReverseModal.tsx';
import { MagneticButton } from './components/MagneticButton.tsx';
import { TEMPLATES as INITIAL_TEMPLATES } from './constants';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Knowledge Base State
  const [knowledgeContent, setKnowledgeContent] = useState("");
  const [isKnowledgeModalOpen, setIsKnowledgeModalOpen] = useState(false);

  // Docs Modal State
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);

  // Features Modal State
  const [isFeaturesModalOpen, setIsFeaturesModalOpen] = useState(false);

  // Upload Modal State
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Reverse Engineering Modal State
  const [isReverseModalOpen, setIsReverseModalOpen] = useState(false);

  // Scenario State
  const [selectedScenario, setSelectedScenario] = useState<ScenarioType>('text_to_video');
  const [isScenarioDropdownOpen, setIsScenarioDropdownOpen] = useState(false);
  const scenarioDropdownRef = useRef<HTMLDivElement>(null);

  // Modal State
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  // Templates State
  const [templates, setTemplates] = useState<Template[]>(INITIAL_TEMPLATES);

  // Focus effect for input
  const [isFocused, setIsFocused] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (scenarioDropdownRef.current && !scenarioDropdownRef.current.contains(event.target as Node)) {
        setIsScenarioDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleGenerate = async () => {
    if (!inputValue.trim()) return;
    
    setLoading(true);
    setError(null);
    setShowResult(false);

    try {
      const data = await generatePrompts(inputValue, language, selectedScenario, knowledgeContent);
      setResult(data);
      setShowResult(true);
    } catch (err: any) {
      setError(err.message || "Failed to generate prompts. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleTemplateClick = (template: Template) => {
    setSelectedTemplate(template);
  };

  const handleLoadTemplate = (template: Template) => {
    setInputValue(template.promptEnglish);
    setSelectedTemplate(null); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddTemplate = (newTemplate: Template) => {
    setTemplates(prev => [newTemplate, ...prev]);
  };

  const scenarios: { key: ScenarioType; icon: string }[] = [
    { key: 'text_to_video', icon: 'movie_creation' },
    { key: 'consistency', icon: 'face' },
    { key: 'camera_motion', icon: 'videocam' },
    { key: 'template', icon: 'style' },
    { key: 'story', icon: 'auto_stories' },
    { key: 'extension', icon: 'playlist_add' },
    { key: 'sound', icon: 'graphic_eq' },
    { key: 'one_shot', icon: 'linear_scale' },
    { key: 'editing', icon: 'edit' },
    { key: 'music_sync', icon: 'music_note' },
  ];

  return (
    <div className="min-h-screen bg-void-black text-white relative overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-glow/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-electric-lime/5 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="fixed inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-10 pointer-events-none"></div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-xl border-b border-white/5 bg-void-black/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-lime to-lime-dim flex items-center justify-center text-neural-violet font-bold text-xl shadow-neon">
              S
            </div>
            <span className="text-xl font-semibold tracking-tight text-white/90">
              Seedance <span className="text-electric-lime text-sm font-light opacity-80">2.0</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden md:flex items-center gap-2 bg-surface-glass px-1 py-1 rounded-full border border-white/5 backdrop-blur-md">
                <button 
                  onClick={() => setIsUploadModalOpen(true)}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-black/40 text-white/70 border border-white/5 shadow-sm transition-all hover:bg-electric-lime hover:text-black hover:border-electric-lime flex items-center gap-2"
                >
                  <span className="material-icons-round text-sm">add_circle</span>
                  {t.nav.create}
                </button>
                <button 
                  onClick={() => setIsReverseModalOpen(true)}
                  className="px-4 py-1.5 rounded-full text-sm font-medium text-pink-400 bg-black/40 hover:bg-pink-500 hover:text-white transition-all flex items-center gap-2 border border-pink-500/20 shadow-[0_0_10px_rgba(236,72,153,0.1)]"
                >
                  <span className="material-icons-round text-sm">fingerprint</span>
                  {t.nav.reverse}
                </button>
                <button 
                  onClick={() => setIsFeaturesModalOpen(true)}
                  className="px-4 py-1.5 rounded-full text-sm font-medium text-white/50 hover:text-electric-lime hover:bg-white/5 transition-all flex items-center gap-1"
                >
                  <span className="material-icons-round text-sm">stars</span>
                  {t.nav.features}
                </button>
                <button 
                  onClick={() => setIsDocsModalOpen(true)}
                  className="px-4 py-1.5 rounded-full text-sm font-medium text-white/50 hover:text-electric-lime hover:bg-white/5 transition-all flex items-center gap-1"
                >
                  <span className="material-icons-round text-sm">description</span>
                  {t.nav.docs}
                </button>
                <button 
                  onClick={() => setIsKnowledgeModalOpen(true)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    knowledgeContent ? 'bg-electric-lime/20 text-electric-lime' : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="material-icons-round text-sm">menu_book</span>
                  {t.nav.knowledge}
                  {knowledgeContent && <span className="w-1.5 h-1.5 rounded-full bg-electric-lime animate-pulse"/>}
                </button>
             </div>
             
             {/* Language Switcher */}
             <div className="flex items-center bg-surface-glass rounded-full border border-white/5 p-1 relative">
                <div 
                   className={`absolute top-1 bottom-1 w-[34px] bg-white/10 rounded-full transition-all duration-300 ${language === 'en' ? 'left-1' : 'left-[38px]'}`}
                ></div>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`relative z-10 w-[34px] h-[26px] flex items-center justify-center text-xs font-bold transition-colors ${language === 'en' ? 'text-white' : 'text-white/40 hover:text-white/80'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('zh')}
                  className={`relative z-10 w-[34px] h-[26px] flex items-center justify-center text-xs font-bold transition-colors ${language === 'zh' ? 'text-white' : 'text-white/40 hover:text-white/80'}`}
                >
                  中
                </button>
             </div>

             <button className="w-10 h-10 rounded-full bg-surface-glass hover:bg-surface-glass-hover border border-white/5 flex items-center justify-center text-white/70 transition-colors">
                <span className="material-icons-round">account_circle</span>
             </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-12 pb-24 flex flex-col items-center">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-4xl text-center mb-16"
        >
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-lime/10 border border-electric-lime/20 text-electric-lime text-xs font-medium mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-electric-lime animate-pulse"></span>
              {t.hero.tag}
           </div>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              {t.hero.title_1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-lime to-white">{t.hero.title_2}</span>
           </h1>
           <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 font-light leading-relaxed">
              {t.hero.subtitle}
           </p>

           {/* Input Capsule */}
           <div className="relative group w-full max-w-3xl mx-auto z-20">
              
              {/* Dynamic Mode Hint Pill - APPEARS ABOVE INPUT */}
              <AnimatePresence mode="wait">
                 <motion.div
                   key={selectedScenario}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-lime/10 border border-electric-lime/20 text-electric-lime text-xs font-medium shadow-neon whitespace-nowrap"
                 >
                    <span className="material-icons-round text-sm">info_outline</span>
                    {t.scenarios.hints[selectedScenario]}
                 </motion.div>
              </AnimatePresence>

              <motion.div 
                animate={{ 
                  opacity: isFocused ? 0.4 : 0.2,
                  scale: isFocused ? 1.05 : 1
                }}
                className="absolute -inset-1 bg-gradient-to-r from-electric-lime/20 to-violet-glow/40 rounded-full blur transition-all duration-500"
              />
              <motion.div 
                animate={{ scale: isFocused ? 1.02 : 1 }}
                className={`relative flex items-center bg-black/40 backdrop-blur-xl border ${isFocused ? 'border-electric-lime/50 shadow-neon' : 'border-white/10'} rounded-full p-2 pl-2 transition-all duration-300 shadow-2xl`}
              >
                 {/* Scenario Dropdown Trigger */}
                 <div className="relative" ref={scenarioDropdownRef}>
                    <button 
                      onClick={() => setIsScenarioDropdownOpen(!isScenarioDropdownOpen)}
                      className="flex items-center gap-2 bg-black/40 hover:bg-black/60 border border-white/10 rounded-full pl-3 pr-4 py-3 transition-colors mr-2 group/trigger"
                    >
                       <span className={`material-icons-round text-xl ${isFocused ? 'text-electric-lime' : 'text-white/60 group-hover/trigger:text-white'}`}>
                         {scenarios.find(s => s.key === selectedScenario)?.icon}
                       </span>
                       <span className="text-sm font-medium text-white/90 max-w-[100px] truncate md:max-w-none">
                         {t.scenarios.options[selectedScenario]}
                       </span>
                       <span className="material-icons-round text-sm text-white/40">expand_more</span>
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isScenarioDropdownOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-[#120F1D] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 p-2"
                        >
                           <div className="text-xs font-bold text-white/30 px-3 py-2 uppercase tracking-wider">{t.scenarios.label}</div>
                           <div className="max-h-60 overflow-y-auto no-scrollbar space-y-1">
                             {scenarios.map((s) => (
                               <button
                                 key={s.key}
                                 onClick={() => {
                                   setSelectedScenario(s.key);
                                   setIsScenarioDropdownOpen(false);
                                 }}
                                 className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-colors ${
                                   selectedScenario === s.key 
                                     ? 'bg-electric-lime text-black font-bold' 
                                     : 'text-white/70 hover:bg-white/5 hover:text-white'
                                 }`}
                               >
                                  <span className="material-icons-round text-lg">{s.icon}</span>
                                  <div className="flex flex-col text-left">
                                      <span>{t.scenarios.options[s.key]}</span>
                                  </div>
                                  {selectedScenario === s.key && <span className="material-icons-round text-sm ml-auto">check</span>}
                                </button>
                             ))}
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>

                 {/* DYNAMIC PLACEHOLDER BASED ON MODE */}
                 <input 
                    className="flex-grow bg-transparent border-none text-white text-lg placeholder-white/20 focus:ring-0 font-light py-4 focus:outline-none min-w-0"
                    placeholder={t.scenarios.placeholders[selectedScenario]}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                 />
                 <div className="hidden md:flex items-center gap-2 pr-4 pl-2 border-l border-white/10">
                    <button className="text-white/40 hover:text-electric-lime transition-colors p-2 rounded-full hover:bg-white/5">
                       <span className="material-icons-round text-xl">mic</span>
                    </button>
                    <button className="text-white/40 hover:text-electric-lime transition-colors p-2 rounded-full hover:bg-white/5">
                       <span className="material-icons-round text-xl">image</span>
                    </button>
                 </div>
              </motion.div>
           </div>

           {/* Action Button */}
           <div className="mt-10 flex justify-center h-16">
             <AnimatePresence mode='wait'>
                {loading ? (
                   <motion.div
                     key="loading"
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.8 }}
                     className="flex items-center gap-3 text-electric-lime"
                   >
                     <span className="w-2 h-2 bg-electric-lime rounded-full animate-bounce"></span>
                     <span className="w-2 h-2 bg-electric-lime rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                     <span className="w-2 h-2 bg-electric-lime rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                     <span className="ml-2 text-sm font-medium">{t.hero.loading}</span>
                   </motion.div>
                ) : (
                  <MagneticButton 
                    key="button"
                    onClick={handleGenerate}
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-electric-lime px-10 py-4 text-void-black font-bold text-lg transition-all hover:bg-white focus:outline-none focus:ring-2 focus:ring-electric-lime focus:ring-offset-2 focus:ring-offset-neural-violet"
                  >
                     <span className="relative z-10 flex items-center gap-2">
                        {t.hero.generate}
                        <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
                     </span>
                     <div className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100 mix-blend-overlay"></div>
                  </MagneticButton>
                )}
             </AnimatePresence>
           </div>
           
           {error && (
             <motion.p initial={{opacity: 0}} animate={{opacity: 1}} className="text-red-400 mt-4 text-sm font-mono bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg">
               {error}
             </motion.p>
           )}
        </motion.div>

        {/* Single Storyboard Result View */}
        <AnimatePresence>
          {showResult && result && (
             <div className="w-full mb-24">
               <PromptCard data={result} />
             </div>
          )}
        </AnimatePresence>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>

        {/* Template Library */}
        <TemplateLibrary templates={templates} onSelect={handleTemplateClick} />

      </main>

      {/* Template Modal */}
      <AnimatePresence>
        {selectedTemplate && (
          <TemplateModal 
            template={selectedTemplate} 
            onClose={() => setSelectedTemplate(null)} 
            onLoad={handleLoadTemplate} 
          />
        )}
      </AnimatePresence>

      {/* Features Modal */}
      <AnimatePresence>
        {isFeaturesModalOpen && (
          <FeaturesModal 
            isOpen={isFeaturesModalOpen}
            onClose={() => setIsFeaturesModalOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Docs Modal */}
      <AnimatePresence>
        {isDocsModalOpen && (
          <DocsModal 
            isOpen={isDocsModalOpen}
            onClose={() => setIsDocsModalOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Reverse Engineering Modal */}
      <AnimatePresence>
        {isReverseModalOpen && (
          <ReverseModal
            isOpen={isReverseModalOpen}
            onClose={() => setIsReverseModalOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Knowledge Base Modal */}
      <AnimatePresence>
        {isKnowledgeModalOpen && (
          <KnowledgeModal 
            isOpen={isKnowledgeModalOpen}
            onClose={() => setIsKnowledgeModalOpen(false)}
            initialValue={knowledgeContent}
            onSave={setKnowledgeContent}
          />
        )}
      </AnimatePresence>

      {/* Upload Inspiration Modal */}
      <AnimatePresence>
        {isUploadModalOpen && (
          <UploadModal
            isOpen={isUploadModalOpen}
            onClose={() => setIsUploadModalOpen(false)}
            onSubmit={handleAddTemplate}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

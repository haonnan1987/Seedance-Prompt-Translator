
import React, { useState, useMemo } from 'react';
import { Template } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface TemplateLibraryProps {
  templates: Template[];
  onSelect: (template: Template) => void;
}

export const TemplateLibrary: React.FC<TemplateLibraryProps> = ({ templates, onSelect }) => {
  const { t } = useLanguage();
  const [activeTabKey, setActiveTabKey] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Map keys to English values for filtering if needed, and labels for display
  const tabs = [
    { key: 'all', label: t.library.tabs.all, filter: 'All Templates' },
    { key: 'cinematic', label: t.library.tabs.cinematic, filter: 'Movie' },
    { key: 'anime', label: t.library.tabs.anime, filter: 'Anime' },
    { key: 'drama', label: 'Drama', filter: 'Drama' },
    { key: 'meme', label: 'Meme', filter: 'Meme' },
    { key: 'threed', label: t.library.tabs.threed, filter: '3D' },
    { key: 'abstract', label: t.library.tabs.abstract, filter: 'Abstract' },
    { key: 'nature', label: t.library.tabs.nature, filter: 'Nature' },
    { key: 'cyberpunk', label: t.library.tabs.cyberpunk, filter: 'Cyberpunk' }
  ];

  const filteredTemplates = useMemo(() => {
    const activeTabFilter = tabs.find(tab => tab.key === activeTabKey)?.filter || 'All Templates';

    return templates.filter(template => {
      const matchesTab = activeTabFilter === 'All Templates' || 
                         template.tags.some(tag => tag.toLowerCase().includes(activeTabFilter.toLowerCase())) ||
                         template.title.toLowerCase().includes(activeTabFilter.toLowerCase());
      
      const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesTab && matchesSearch;
    });
  }, [activeTabKey, searchQuery, tabs, templates]);

  // Helper to check for video extensions
  const isVideo = (url: string) => {
    return /\.(mp4|webm|ogg)$/i.test(url);
  };

  return (
    <section className="w-full mt-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">{t.library.title}</h2>
          <p className="text-white/40">{t.library.subtitle}</p>
        </div>
        <div className="relative w-full md:w-96">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 material-icons-round text-white/30">search</span>
          <input 
            type="text" 
            placeholder={t.library.search}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-electric-lime/50 transition-colors"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
        {tabs.map((tab) => (
          <button 
            key={tab.key}
            onClick={() => setActiveTabKey(tab.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border ${
              activeTabKey === tab.key
                ? 'bg-electric-lime/20 text-electric-lime border-electric-lime/30' 
                : 'bg-black/40 hover:bg-black/60 text-white/70 border-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Masonry Layout (Waterfall) using CSS Columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {filteredTemplates.map((template) => (
          <div 
            key={template.id} 
            className="group relative rounded-xl overflow-hidden bg-surface-glass border border-white/5 hover:border-electric-lime/30 transition-all duration-300 cursor-pointer break-inside-avoid shadow-lg"
            onClick={() => onSelect(template)}
          >
            {/* Media Container with variable height based on content */}
            <div className="relative overflow-hidden bg-black/50">
              {isVideo(template.image) ? (
                 <video 
                   src={template.image} 
                   className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                   muted 
                   loop 
                   autoPlay 
                   playsInline
                   style={{ display: 'block' }}
                 />
              ) : (
                <img 
                  src={template.image} 
                  alt={template.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ display: 'block' }} // Prevents bottom gap
                />
              )}
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <button className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-icons-round text-white text-3xl">play_arrow</span>
                </button>
              </div>

              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-white/80 border border-white/10">
                {template.duration}
              </div>
              
              {/* Bottom Content overlaid on image for waterfall look */}
              <div className="absolute bottom-0 left-0 right-0 p-4 pt-12 bg-gradient-to-t from-black to-transparent pointer-events-none">
                 {template.id === '1' && (
                    <span className="inline-block px-2 py-0.5 mb-2 bg-electric-lime text-black text-[10px] font-bold uppercase rounded-sm">Featured</span>
                 )}
                 <div className="flex items-center gap-2 mb-1">
                   <h3 className="font-bold text-white text-lg leading-tight group-hover:text-electric-lime transition-colors">{template.title}</h3>
                 </div>
                 <p className="text-xs text-white/60 line-clamp-2 mb-0">{template.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredTemplates.length === 0 && (
         <div className="text-center py-20 text-white/40">
            {t.library.noResults}
         </div>
      )}
      
      {filteredTemplates.length > 0 && (
         <div className="mt-12 text-center">
            <button className="text-sm text-white/40 hover:text-white transition-colors border-b border-white/10 hover:border-white pb-1">
               {t.library.loadMore}
            </button>
         </div>
      )}
    </section>
  );
};

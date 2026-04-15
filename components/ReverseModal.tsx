
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { reverseEngineerVideo } from '../services/geminiService';

interface ReverseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReverseModal: React.FC<ReverseModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ promptZh: string, promptEn: string } | null>(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      let analysisResult;
      if (activeTab === 'upload' && file) {
        const reader = new FileReader();
        const base64Promise = new Promise<string>((resolve) => {
          reader.onload = () => resolve((reader.result as string).split(',')[1]);
        });
        reader.readAsDataURL(file);
        const base64Data = await base64Promise;
        analysisResult = await reverseEngineerVideo({
          type: 'file',
          data: base64Data,
          mimeType: file.type
        });
      } else if (activeTab === 'url' && videoUrl) {
        analysisResult = await reverseEngineerVideo({
          type: 'url',
          url: videoUrl
        });
      }

      if (analysisResult) {
        setResult(analysisResult);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
        className="relative w-full max-w-4xl bg-void-black border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-3">
            <span className="material-icons-round text-electric-lime">fingerprint</span>
            <div>
              <h3 className="text-xl font-bold text-white">{t.reverse.title}</h3>
              <p className="text-xs text-white/40">{t.reverse.subtitle}</p>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors">
            <span className="material-icons-round">close</span>
          </button>
        </div>

        <div className="p-8 overflow-y-auto space-y-8">
          {/* Tabs */}
          <div className="flex bg-black/40 p-1 rounded-2xl w-fit mx-auto border border-white/5">
            <button 
              onClick={() => setActiveTab('upload')}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'upload' ? 'bg-white/10 text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}
            >
              {t.reverse.uploadTab}
            </button>
            <button 
              onClick={() => setActiveTab('url')}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'url' ? 'bg-white/10 text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}
            >
              {t.reverse.urlTab}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              {activeTab === 'upload' ? (
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="aspect-video rounded-3xl border-2 border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 hover:border-electric-lime/30 transition-all group overflow-hidden relative"
                >
                  {previewUrl ? (
                    <video src={previewUrl} className="w-full h-full object-cover" controls />
                  ) : (
                    <>
                      <span className="material-icons-round text-4xl text-white/20 mb-4 group-hover:scale-110 transition-transform">cloud_upload</span>
                      <p className="text-sm text-white/40 text-center px-8">{t.reverse.dropzone}</p>
                    </>
                  )}
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="video/*" />
                </div>
              ) : (
                <div className="space-y-4">
                  <input 
                    placeholder="https://..."
                    className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-electric-lime/50 transition-colors"
                    value={videoUrl}
                    onChange={e => setVideoUrl(e.target.value)}
                  />
                </div>
              )}

              <button 
                disabled={loading || (activeTab === 'upload' ? !file : !videoUrl)}
                onClick={handleAnalyze}
                className="w-full py-4 rounded-2xl bg-electric-lime text-black font-bold text-lg hover:bg-white transition-all shadow-neon disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    {t.reverse.analyzing}
                  </>
                ) : (
                  <>
                    <span className="material-icons-round">bolt</span>
                    {t.reverse.analyze}
                  </>
                )}
              </button>
            </div>

            {/* Result Section */}
            <div className="bg-black/20 rounded-3xl border border-white/10 p-6 flex flex-col h-full min-h-[300px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-white/40 uppercase tracking-wider">{t.reverse.result}</span>
                {result && (
                  <button 
                    onClick={() => navigator.clipboard.writeText(result.promptEn)}
                    className="text-electric-lime hover:text-white transition-colors flex items-center gap-1 text-xs font-bold"
                  >
                    <span className="material-icons-round text-sm">content_copy</span>
                    {t.reverse.copy}
                  </button>
                )}
              </div>
              
              <div className="flex-grow overflow-y-auto">
                {result ? (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-electric-lime/50 uppercase tracking-widest">EN</p>
                      <p className="text-sm text-white/80 leading-relaxed font-mono">{result.promptEn}</p>
                    </div>
                    <div className="h-px bg-white/5" />
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-electric-lime/50 uppercase tracking-widest">ZH</p>
                      <p className="text-sm text-white/80 leading-relaxed">{result.promptZh}</p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-white/20">
                    <span className="material-icons-round text-4xl mb-2">visibility_off</span>
                    <p className="text-sm">No results yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

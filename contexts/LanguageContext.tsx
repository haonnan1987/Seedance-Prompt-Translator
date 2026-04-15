
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'en' | 'zh';

export const translations = {
  en: {
    nav: {
      create: "Upload Inspiration",
      library: "Library",
      settings: "Settings",
      knowledge: "Rules Config",
      docs: "Official Docs",
      features: "Features Guide",
      reverse: "Hit Reversal"
    },
    hero: {
      tag: "AI Engine Online",
      title_1: "Translate Imagination",
      title_2: "Into Reality",
      subtitle: "Describe your vision in plain English or Chinese. Our neural engine will architect the perfect prompt structure for Seedance 2.0.",
      placeholder: "Describe your vision...",
      generate: "Generate Prompts",
      loading: "Thinking..."
    },
    scenarios: {
      label: "Mode",
      options: {
        text_to_video: "Text to Video",
        consistency: "Consistency Control",
        camera_motion: "Camera & Motion",
        template: "Template Cloning",
        story: "Plot/Story",
        extension: "Video Extension",
        sound: "Sound Control",
        one_shot: "One-Shot (Long Take)",
        editing: "Video Editing",
        music_sync: "Music Sync"
      },
      hints: {
        text_to_video: "Focus on Subject, Action, and Environment.",
        consistency: "Upload reference image (named Image1) to lock face/character.",
        camera_motion: "Describe camera moves like 'Pan', 'Zoom', 'Orbit'.",
        template: "Upload a video to clone its rhythm and transition style.",
        story: "Define a timeline sequence (e.g., '0s: start, 5s: end').",
        extension: "Upload the last frame of a video to extend it smoothly.",
        sound: "Describe audio atmosphere or upload a track for sync.",
        one_shot: "Describe a continuous scene without cuts.",
        editing: "Describe what to change while keeping the rest same.",
        music_sync: "Actions will be matched to the audio beat."
      },
      placeholders: {
        text_to_video: "A cyberpunk detective walking in rain, neon lights...",
        consistency: "Girl from @Image1 sitting in a cafe, smiling...",
        camera_motion: "Orbit shot around a red sports car drifting...",
        template: "Reference @Video1 for style, show a cat jumping...",
        story: "0-5s: Wakes up. 5-10s: Drinks coffee...",
        extension: "Continue from @Image1, camera pulls back to reveal city...",
        sound: "A horror scene with [Sound: Creepy footsteps]...",
        one_shot: "Continuous tracking shot following a bird...",
        editing: "Change the red dress to a blue suit...",
        music_sync: "Dancer moves in sync with @Audio1..."
      }
    },
    results: {
      understanding: "Understanding Confirmation",
      storyboard: "Storyboard Prompts (Copyable)",
      suggestions: "Asset Suggestions",
      tips: "Usage Tips",
      generate_preview: "Generate Preview Image",
      generating: "Generating...",
      preview_title: "Visual Preview"
    },
    library: {
      title: "Template Library",
      subtitle: "Browse high-quality prompt templates for video generation.",
      search: "Search templates...",
      tabs: {
        all: "All",
        cinematic: "Cinematic",
        anime: "Anime",
        drama: "Drama",
        meme: "Meme",
        threed: "3D",
        abstract: "Abstract",
        nature: "Nature",
        cyberpunk: "Cyberpunk"
      },
      noResults: "No templates found matching your criteria.",
      loadMore: "Load more templates"
    },
    modal: {
      model: "Model",
      collect: "Collect",
      collected: "Collected",
      promptEn: "Prompt (English)",
      promptCn: "Prompt (Chinese)",
      load: "Load in Generator",
      copy: "Copy"
    },
    knowledge: {
      title: "Knowledge Base",
      subtitle: "Inject official documentation or custom rules into the AI.",
      placeholder: "Paste content from Seedance 2.0 official docs here...",
      save: "Save Rules",
      clear: "Clear",
      active: "Active"
    },
    upload: {
      title: "Upload Inspiration",
      subtitle: "Share your Seedance 2.0 prompts and video settings.",
      form: {
        title: "Title",
        desc: "Description",
        video: "Video URL (mp4/webm)",
        author: "Original Author (@Name)",
        source: "Source Link (URL)",
        duration: "Duration (s)",
        ratio: "Aspect Ratio",
        tags: "Tags (comma separated)",
        promptEn: "Prompt (English)",
        promptCn: "Prompt (Chinese)",
        autoTranslate: "Auto Translate",
        translating: "Translating...",
        submit: "Upload to Library",
        cancel: "Cancel"
      }
    },
    reverse: {
      title: "Hit Video Prompt Reversal",
      subtitle: "Forensic-level analysis to clone the visual DNA of viral videos.",
      uploadTab: "Upload File",
      urlTab: "Video URL (Experimental)",
      dropzone: "Drag & Drop video here, or click to select",
      analyzing: "Analyzing visual structure...",
      analyze: "Reverse Engineer",
      startTime: "Start (00:00)",
      endTime: "End (00:15)",
      notes: "Additional Focus (Optional)",
      result: "Generated Forensic Prompt",
      copy: "Copy Prompt"
    },
    card: {
      why: "Why this works",
      copied: "Copied"
    },
    features: {
      title: "Core Innovation: Solving the 'Tricky Video Problems'",
      intro: "Video creation has always been fraught with frustrating issues—glitchy faces, actions not matching intent, jarring cuts.",
      list: [
        { title: "1) Consistency Upgrade", desc: "No more 'same character, different person'.", result: "Result: Stable visuals." },
        { title: "2) Precise Motion", desc: "Upload reference video for rhythm.", result: "Result: Controllable motion." }
      ],
      params: { title: "Parameters", items: [] },
      howTo: { title: "How to Create", steps: [] },
      audience: { title: "Target Audience", items: [] }
    },
    docs_modal: {
      links: "Official Links",
      wiki_title: "Seedance 2.0 Wiki",
      wiki_desc: "Official documentation and tutorials on Feishu",
      open: "Open Documentation"
    }
  },
  zh: {
    nav: {
      create: "上传灵感",
      library: "灵感库",
      settings: "设置",
      knowledge: "规则库",
      docs: "官方文档",
      features: "功能介绍",
      reverse: "爆款反推"
    },
    hero: {
      tag: "AI 引擎在线",
      title_1: "将想象",
      title_2: "转化为现实",
      subtitle: "用自然语言描述您的愿景。我们的神经引擎将构建适用于 Seedance 2.0 的完美提示词结构。",
      placeholder: "描述您的画面想法...",
      generate: "生成提示词",
      loading: "思考中..."
    },
    scenarios: {
      label: "模式",
      options: {
        text_to_video: "文本生成视频",
        consistency: "一致性控制",
        camera_motion: "运镜与动作复刻",
        template: "创意模板复刻",
        story: "剧情/分镜生成",
        extension: "视频延长",
        sound: "声音/对白控制",
        one_shot: "一镜到底",
        editing: "视频编辑/换角",
        music_sync: "音乐卡点"
      },
      hints: {
        text_to_video: "描述主体、动作、环境和光影。",
        consistency: "上传参考图（命名为Image1）以锁定面部或角色。",
        camera_motion: "描述具体的运镜方式，如‘推拉’、‘摇摄’、‘环绕’。",
        template: "上传视频以复刻其节奏、转场或运镜风格。",
        story: "定义明确的时间轴序列。",
        extension: "上传视频的最后一帧图片，实现平滑续写。",
        sound: "描述所需的音效氛围。",
        one_shot: "描述一个没有剪辑点的连续长镜头场景。",
        editing: "描述需要修改的部分。",
        music_sync: "画面动作将自动匹配上传音频的节拍。"
      },
      placeholders: {
        text_to_video: "赛博朋克侦探在雨中行走，霓虹灯倒影...",
        consistency: "@Image1 中的女孩坐在咖啡馆里，微笑...",
        camera_motion: "围绕红色跑车漂移的环绕镜头...",
        template: "参考 @Video1 的风格，展示一只猫跳跃...",
        story: "0-5s: 醒来。 5-10s: 喝咖啡...",
        extension: "从 @Image1 继续，镜头拉远展示城市全貌...",
        sound: "恐怖场景，伴随 [音效：诡异的脚步声]...",
        one_shot: "跟随飞鸟的连续长镜头...",
        editing: "将红裙子改成蓝色西装...",
        music_sync: "舞者跟随 @Audio1 的节奏移动..."
      }
    },
    results: {
      understanding: "意图确认",
      storyboard: "分镜提示词 (直接复制)",
      suggestions: "素材建议",
      tips: "使用贴士",
      generate_preview: "生成预览图",
      generating: "生成中...",
      preview_title: "视觉预览"
    },
    library: {
      title: "灵感库",
      subtitle: "浏览用于视频生成的高质量提示词模板。",
      search: "搜索模板...",
      tabs: {
        all: "全部",
        cinematic: "电影感",
        anime: "动漫",
        drama: "短剧",
        meme: "表情包",
        threed: "3D",
        abstract: "抽象",
        nature: "自然",
        cyberpunk: "赛博朋克"
      },
      noResults: "未找到匹配的模板。",
      loadMore: "加载更多"
    },
    modal: {
      model: "模型",
      collect: "收藏",
      collected: "已收藏",
      promptEn: "提示词 (英文)",
      promptCn: "提示词 (中文)",
      load: "加载到生成器",
      copy: "复制"
    },
    knowledge: {
      title: "官方规则知识库",
      subtitle: "将官方文档或自定义规则注入 AI 引擎。",
      placeholder: "在此粘贴官方文档内容...",
      save: "保存规则",
      clear: "清空",
      active: "已启用"
    },
    upload: {
      title: "上传灵感",
      subtitle: "分享您的 Seedance 2.0 提示词和视频配置。",
      form: {
        title: "标题",
        desc: "描述",
        video: "视频 URL (mp4/webm)",
        author: "原作者 (@昵称)",
        source: "来源链接 (URL)",
        duration: "时长 (秒)",
        ratio: "画幅比例",
        tags: "标签 (逗号分隔)",
        promptEn: "提示词 (英文)",
        promptCn: "提示词 (中文)",
        autoTranslate: "自动翻译",
        translating: "翻译中...",
        submit: "上传到灵感库",
        cancel: "取消"
      }
    },
    reverse: {
      title: "爆款视频反推",
      subtitle: "法医级视觉分析，1:1 克隆爆款视频的视觉 DNA。",
      uploadTab: "上传视频文件",
      urlTab: "视频 URL (实验性)",
      dropzone: "拖拽视频到此处，或点击选择",
      analyzing: "正在解构视觉结构...",
      analyze: "开始反推",
      startTime: "开始时间 (00:00)",
      endTime: "结束时间 (00:15)",
      notes: "额外关注点 (可选)",
      result: "生成的反推提示词",
      copy: "复制提示词"
    },
    card: {
      why: "生成原理",
      copied: "已复制"
    },
    features: {
      title: "核心创新",
      intro: "Seedance 2.0 解决了视频创作中的棘手问题。",
      list: [
        { title: "1) 一致性升级", desc: "角色识别、服装配饰一致性提升。", result: "结果：画面更稳定。" },
        { title: "2) 精确复制运动", desc: "上传参考视频，复刻运镜。", result: "结果：高难度运动可控。" }
      ],
      params: { title: "参数", items: [] },
      howTo: { title: "如何使用", steps: [] },
      audience: { title: "目标用户", items: [] }
    },
    docs_modal: {
      links: "官方链接",
      wiki_title: "Seedance 2.0 官方维基",
      wiki_desc: "飞书上的官方文档与教程",
      open: "打开文档"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');
  const t = translations[language];
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

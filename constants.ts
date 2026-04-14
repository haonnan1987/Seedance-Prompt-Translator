
import { Template } from './types';

export const OFFICIAL_RULES = `
## SEEDANCE 2.0 OFFICIAL KNOWLEDGE BASE (SKILL DECK)

### 1. CINEMATOGRAPHY (CAMERA MOVEMENT)
Use these exact terms to control camera motion:
- **Push In / Dolly In**: Increases emotional intensity or focus.
- **Pull Out / Dolly Out**: Reveals environment, creates isolation.
- **Truck Left / Right**: Follows subject laterally (side view).
- **Pan Left / Right**: Camera stays stationary but rotates (scanning).
- **Crane Up / Down**: Vertical movement, establishes scale.
- **Orbit / Arc**: 360-degree rotation around the subject.
- **Handheld**: Adds realism, chaos, or documentary feel.
- **FPV**: First-person view, high speed, immersive.
- **Dutch Angle**: Tilted horizon for unease or dynamic action.
- **Frame Stepping**: Stop-motion feel, signature Wong Kar-wai style.

### 2. LIGHTING & ATMOSPHERE
- **Volumetric Lighting**: God rays, visible light beams, depth.
- **Rim Lighting**: Backlight that separates subject from background.
- **Cinematic Lighting**: High contrast, dramatic shadows.
- **Bioluminescence**: Glowing organic light (sci-fi/nature).
- **Golden Hour**: Warm, soft, low-angle sunlight.
- **Cyberpunk/Neon**: Pink/Blue/Cyan contrasts, wet surfaces.
- **High ISO Grain**: Retro film feel, nostalgic.

### 3. ADVANCED STYLE GUIDES (LEARNED PATTERNS)
- **Hollywood Racing (Le Mans)**: High stakes, rain, interior close-ups of focused drivers, green light acceleration with massive water spray.
- **Villeneuve Epic (Dune Style)**: IMAX 70mm, gritty realism, desaturated, epic scale (man vs nature), sandstorms, slow-motion climaxes.
- **Wong Kar-wai (HK Art Cinema)**: 90s HK aesthetic, yellow-green tint, melancholic, slow-shutter drag shadows, blurred trailing shadows.
- **Mockumentary/Vlog**: Mobile perspective, hyperrealistic glitches, "network delay" feel in reflections, comedic punchlines.
- **Anime Battle**: Physics collisions, attribute transitions (fire to ice), space folding (shattering walls to new scenes), particle continuity.
- **Satisfying Drama (CEO/Tycoon)**: Vertical composition, extreme close-ups, dramatic reversals, high saturation filters.

### 4. SEEDANCE 2.0 SYNTAX RULES
- **Header**: Start with 【Style】, 【Duration】, 【Characters】.
- **Time Segments**: MUST use "[00:00-00:05]" format.
- **Action**: Use 【Action】 for specific movements.
- **Audio**: Use 【Dialogue lip-sync guidance】 for speech/sound.
- **Asset Reference**: ALWAYS use @Image1, @Video1, @Audio1.
- **Consistency**: "Reference facial features from @Image1".
- **Extension**: "Extend @Video1 by 5s".
- **Parameters**: 
  - --ar [16:9|9:16|1:1|4:5|21:9]
  - --duration [4-15]
  - --motion [1-10] (1=Static, 10=High Action)

### 5. NEGATIVE PROMPTS (IMPLICIT)
Avoid: Static, Blurry, Distorted faces, Watermark, Text overlay, Jump cuts, Morphing objects.
`;

export const TEMPLATES: Template[] = [
  {
    id: '1',
    title: 'Neo-Tokyo Drift',
    description: 'Futuristic cityscape with heavy rain and neon lights reflecting on wet surfaces.',
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop', // 16:9
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '2.4k',
    tags: ['Cyberpunk', 'Car Chase'],
    aspectRatio: '16:9',
    parameters: ['(Motion: High)', '(Camera: Tracking)'],
    promptEnglish: 'Cinematic wide shot, cybernetic sports car drifting around a wet corner in Shinjuku, rain falling rapidly, neon reflections moving on car body, volumetric fog, high speed motion blur, camera tracking the car low angle --ar 16:9 --duration 15',
    promptChinese: '影视电影广角镜头，赛博格跑车在新宿湿滑的拐角处漂移，雨水急促落下，霓虹灯反射在车身上移动，体积雾，高速运动模糊，低角度追踪拍摄 --ar 16:9 --duration 15',
    author: '@neon_dreamer'
  },
  {
    id: '2',
    title: 'Liquid Dreams',
    description: 'Color mixing macro shot of oil and water with vibrant colors and fluid motion.',
    image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=600&h=1067&auto=format&fit=crop', // 9:16
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '856',
    tags: ['Abstract', 'Fluid'],
    aspectRatio: '9:16',
    parameters: ['(Fluid Sim)', '(Macro)'],
    promptEnglish: 'Macro extreme close-up video, swirling iridescent oil on water, vibrant neon colors mixing and morphing slowly, fluid simulation physics, liquid motion, 4k, high detail --ar 9:16 --duration 15',
    promptChinese: '微距特写视频，水面上旋转的彩虹油，充满活力的霓虹色缓慢混合变形，流体模拟物理，液体运动，4k，高细节 --ar 9:16 --duration 15',
    author: '@fluid_art'
  },
  {
    id: '3',
    title: 'Cyber Samurai',
    description: 'A robotic samurai standing in a bamboo forest, drawing a sword.',
    image: 'https://images.unsplash.com/photo-1614726365930-627c75da663e?q=80&w=600&h=1067&auto=format&fit=crop', // 9:16
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.2k',
    tags: ['Portrait', 'Action'],
    aspectRatio: '9:16',
    parameters: ['(Action: Draw Sword)', '(Slow Mo)'],
    promptEnglish: 'Full body shot, cybernetic samurai in a misty bamboo forest, slowly drawing a neon katana, digital particles floating in air, leaves falling, slow motion 60fps, atmospheric lighting --duration 15',
    promptChinese: '全身镜头，雾气缭绕的竹林中的赛博武士，缓慢拔出霓虹武士刀，空气中漂浮的数字粒子，落叶，60fps慢动作，大气照明 --duration 15',
    author: '@kenshin_ai'
  },
  {
    id: '4',
    title: 'Ethereal Forest',
    description: 'Deep forest with sun rays piercing through the canopy, camera pushing forward.',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop', // 3:2
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '3.1k',
    tags: ['Nature', 'Dolly Zoom'],
    aspectRatio: '3:2',
    parameters: ['(Camera: Push In)', '(Light: God Rays)'],
    promptEnglish: 'Video of ancient forest, camera slowly pushing forward between giant trees, god rays filtering through canopy and shifting, dust motes dancing, mossy rocks, mystical atmosphere, 8k --duration 15',
    promptChinese: '古老森林的视频，摄像机在巨大的树木之间缓慢推进，上帝之光透过树冠过滤并移动，尘埃微粒飞舞，长满青苔的岩石，神秘的氛围，8k --duration 15',
    author: '@nature_lens'
  },
  {
    id: '5',
    title: 'Vintage Terminal',
    description: 'Old CRT monitor displaying scrolling green code.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop', // 1:1
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '542',
    tags: ['Retro', 'Tech'],
    aspectRatio: '1:1',
    parameters: ['(Effect: Glitch)', '(Loop)'],
    promptEnglish: 'Close up video of a vintage 1980s CRT monitor, green glowing code scrolling rapidly, screen flickering, dark room, retro aesthetic, VHS glitch effect overlay, looping animation --duration 15',
    promptChinese: '1980年代老式CRT显示器的特写视频，绿色发光代码快速滚动，屏幕闪烁，暗室，复古美学，VHS故障效果叠加，循环动画 --duration 15',
    author: '@retro_coder'
  },
  {
    id: '6',
    title: 'Zen Garden',
    description: 'Peaceful raked sand garden with bonsai trees, leaves gently falling.',
    image: 'https://images.unsplash.com/photo-1584650589355-d6062f5e7088?q=80&w=800&auto=format&fit=crop', // 2:1
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '920',
    tags: ['Nature', 'Relaxing'],
    aspectRatio: '2:1',
    parameters: ['(Motion: Gentle)', '(Weather: Breeze)'],
    promptEnglish: 'Top down view of a zen garden, perfectly raked sand patterns, a single red maple leaf gently falling onto the sand, bonsai tree branches swaying in light breeze, soft morning light, peaceful, meditative --duration 15',
    promptChinese: '禅宗花园的俯视图，完美的耙沙图案，一片红枫叶轻轻飘落在沙子上，盆景树枝在微风中摇曳，柔和的晨光，宁静，冥想 --duration 15',
    author: '@zen_master'
  },
  {
    id: '7',
    title: 'Martial Arts Showdown',
    description: 'Anime style fighting tournament arena, camera rotating around fighters.',
    image: 'https://images.unsplash.com/photo-1518550624329-37602078afc6?q=80&w=800&auto=format&fit=crop', // 16:9
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.5k',
    tags: ['Anime', 'Action'],
    aspectRatio: '16:9',
    parameters: ['(Style: Anime)', '(Camera: Orbit)'],
    promptEnglish: 'Dynamic anime style video, camera orbiting around two fighters in a tournament arena, energy aura flaring up, crowd cheering in background, speed lines, impact frames, vibrant colors --duration 15',
    promptChinese: '动态动漫风格视频，摄像机围绕锦标赛竞技场中的两名战士旋转，能量光环爆发，背景中人群欢呼，速度线，冲击帧，鲜艳的色彩 --duration 15',
    author: '@lucy_love_AI'
  },
  {
    id: '8',
    title: 'Cyberpunk Street Food',
    description: 'Steam rising from a food stall in a rainy neon alley.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&h=750&auto=format&fit=crop', // 4:5
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.8k',
    tags: ['Cyberpunk', 'Food'],
    aspectRatio: '4:5',
    parameters: ['(Element: Steam)', '(Light: Neon)'],
    promptEnglish: 'Cyberpunk street food stall video, chef chopping vegetables quickly, steam rising from ramen bowl, neon signs reflecting in rain puddles on the ground, wet pavement, volumetric lighting, bustling atmosphere --duration 15',
    promptChinese: '赛博朋克街头小吃摊视频，厨师快速切菜，拉面碗里升起蒸汽，地面雨水坑中倒映着霓虹灯招牌，湿润的路面，体积光，繁忙的氛围 --duration 15',
    author: '@neon_chef'
  },
  {
    id: '9',
    title: 'Underwater Coral Reef',
    description: 'Vibrant coral reef teeming with exotic fish, camera swimming through.',
    image: 'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=800&auto=format&fit=crop', // 16:9
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '2.1k',
    tags: ['Nature', 'Underwater'],
    aspectRatio: '16:9',
    parameters: ['(Camera: Swim)', '(Light: Caustics)'],
    promptEnglish: 'National Geographic style underwater video, camera swimming forward through a vibrant coral reef, school of clownfish darting between anemones, sunbeams penetrating water surface (caustics), 4k, high detail --duration 15',
    promptChinese: '国家地理风格的水下视频，摄像机向前游过充满活力的珊瑚礁，小丑鱼群在海葵之间穿梭，阳光穿透水面（焦散），4k，高细节 --duration 15',
    author: '@ocean_explorer'
  },
  {
    id: '10',
    title: 'Abstract Ink Flow',
    description: 'Black and gold ink spreading in water.',
    image: 'https://images.unsplash.com/photo-1563293298-63d76b132338?q=80&w=800&auto=format&fit=crop', // 1:1
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '760',
    tags: ['Abstract', 'Art'],
    aspectRatio: '1:1',
    parameters: ['(Physics: Fluid)', '(Slow Mo)'],
    promptEnglish: 'Macro video of black and gold ink dropping into clear water, slowly blooming and spreading, swirling smoke effect, high contrast, elegant, minimalistic, super slow motion 120fps --duration 15',
    promptChinese: '黑金墨水滴入清水的微距视频，缓慢绽放和扩散，旋转的烟雾效果，高对比度，优雅，极简主义，超慢动作120fps --duration 15',
    author: '@ink_master'
  },
  {
    id: '11',
    title: 'Alpine Time-lapse',
    description: 'Clouds rolling over snowy mountain peaks at sunset.',
    image: 'https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?q=80&w=800&auto=format&fit=crop', // 21:9
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '3.5k',
    tags: ['Nature', 'Landscape'],
    aspectRatio: '21:9',
    parameters: ['(Time-lapse)', '(Light: Golden Hour)'],
    promptEnglish: 'Epic wide cinematic time-lapse video of snowy mountain range, golden hour sunset, shadows moving across the peaks, clouds rolling over the summit rapidly, majestic, hyperrealistic --duration 15',
    promptChinese: '雪山山脉的史诗级广角电影延时摄影视频，黄金时刻的日落，阴影在山峰上移动，云层快速翻越山顶，宏伟，超逼真 --duration 15',
    author: '@mountain_hiker'
  },
  {
    id: '12',
    title: 'High Fashion Runway',
    description: 'Model walking down a futuristic runway with holographic clothes.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&h=1067&auto=format&fit=crop', // 9:16
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.1k',
    tags: ['Fashion', 'Futuristic'],
    aspectRatio: '9:16',
    parameters: ['(Fashion)', '(Effect: Hologram)'],
    promptEnglish: 'Full body tracking shot of a fashion model walking confidently, wearing shifting holographic fabric that changes pattern, futuristic runway, spotlights following her, audience in shadow, 4k, vogue style --duration 15',
    promptChinese: '时装模特自信行走的全身追踪镜头，穿着变幻图案的全息面料，未来主义T台，聚光灯跟随她，阴影中的观众，4k，时尚风格 --duration 15',
    author: '@vogue_ai'
  },
  {
    id: '13',
    title: 'Product Reveal',
    description: 'Sleek smartphone spinning in dark void with rim lighting.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop', // 4:3
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '630',
    tags: ['Product', 'Tech'],
    aspectRatio: '4:3',
    parameters: ['(Camera: Orbit)', '(Light: Rim)'],
    promptEnglish: '3D product render video of a sleek black smartphone, floating and slowly rotating in void, dramatic rim lighting highlighting the edges, reflection on glass screen, minimalist, high tech, 8k render --duration 15',
    promptChinese: '时尚黑色智能手机的3D产品渲染视频，在虚空中漂浮并缓慢旋转，戏剧性的边缘光突出边缘，玻璃屏幕上的反射，极简主义，高科技，8k渲染 --duration 15',
    author: '@tech_renders'
  },
  {
    id: '14',
    title: 'Isometric City',
    description: 'Tiny cute isometric city block with moving cars.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800&auto=format&fit=crop', // 1:1
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '2.8k',
    tags: ['Isometric', '3D'],
    aspectRatio: '1:1',
    parameters: ['(Style: Low Poly)', '(Animation: Loop)'],
    promptEnglish: 'Isometric view video of a cute miniature city block, colorful buildings, tiny cars moving in a loop on the streets, clouds bobbing, soft lighting, 3d blender render style, cute aesthetics --duration 15',
    promptChinese: '可爱的微型城市街区的等轴测图视频，色彩斑斓的建筑，微型汽车在街道上循环行驶，云彩上下浮动，柔和的灯光，3D Blender渲染风格，可爱的美学 --duration 15',
    author: '@iso_world'
  },
  {
    id: '15',
    title: 'Cosmic Nebula',
    description: 'Traveling through a colorful galaxy nebula.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop', // 2:1
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '4.2k',
    tags: ['Space', 'Sci-Fi'],
    aspectRatio: '2:1',
    parameters: ['(Camera: Flythrough)', '(VFX: Particles)'],
    promptEnglish: 'Deep space flight simulation video, flying fast through a vibrant purple and blue nebula, stars passing by as streaks of light, gas clouds swirling, cinematic lighting, 8k, interstellar style --duration 15',
    promptChinese: '深空飞行模拟视频，快速飞越充满活力的紫色和蓝色星云，星星像光束一样划过，气体云旋转，电影灯光，8k，星际风格 --duration 15',
    author: '@space_cadet'
  },
  {
    id: '16',
    title: 'Pixel Art RPG',
    description: 'A pixel art adventurer resting by a campfire.',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop', // 3:2
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.9k',
    tags: ['Pixel Art', 'Game'],
    aspectRatio: '3:2',
    parameters: ['(Style: Pixel Art)', '(Loop)'],
    promptEnglish: '16-bit pixel art style looping video, a fantasy adventurer resting by a campfire in a dark forest, fire flickering animation, stars twinkling in the sky, cozy atmosphere, retro game aesthetic --duration 15',
    promptChinese: '16位像素艺术风格循环视频，幻想冒险家在黑暗森林的篝火旁休息，火焰闪烁动画，天空中有星星闪烁，舒适的氛围，复古游戏美学 --duration 15',
    author: '@pixel_hero'
  },
  {
    id: '17',
    title: 'Minimalist Architecture',
    description: 'Concrete building with sharp shadows and blue sky.',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=600&h=900&auto=format&fit=crop', // 2:3
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.3k',
    tags: ['Architecture', 'Minimalist'],
    aspectRatio: '2:3',
    parameters: ['(Light: Hard Shadows)', '(Camera: Pan)'],
    promptEnglish: 'Slow pan video of minimalist concrete architecture, sharp geometric lines, deep shadows casting and moving slowly across the wall as sun moves, clear blue sky, brutalist style --duration 15',
    promptChinese: '极简主义混凝土建筑的缓慢摇摄视频，锐利的几何线条，随着太阳移动，深沉的阴影在墙上缓慢投射和移动，湛蓝的天空，粗野主义风格 --duration 15',
    author: '@archi_daily'
  },
  {
    id: '18',
    title: 'Steampunk Workshop',
    description: 'Cluttered desk with brass gears and steam pipes.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop', // 16:9
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '980',
    tags: ['Steampunk', 'Fantasy'],
    aspectRatio: '16:9',
    parameters: ['(Detail: High)', '(Atmosphere: Dusty)'],
    promptEnglish: 'Detailed steampunk workshop interior video, brass gears turning, steam puffing from pipes, glowing vacuum tubes flickering, dust particles floating in light beams, warm lighting, victorian sci-fi --duration 15',
    promptChinese: '详细的蒸汽朋克车间内部视频，黄铜齿轮转动，管道喷出蒸汽，发光的真空管闪烁，光束中漂浮的灰尘微粒，温暖的灯光，维多利亚科幻 --duration 15',
    author: '@steam_engine'
  },
  {
    id: '19',
    title: 'Neon Noir Detective',
    description: 'Silhouette of a detective smoking in a rainy alley.',
    image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=600&h=900&auto=format&fit=crop', // 2:3
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.6k',
    tags: ['Noir', 'Cyberpunk'],
    aspectRatio: '2:3',
    parameters: ['(Style: Noir)', '(Atmosphere: Rain)'],
    promptEnglish: 'Film noir style video, silhouette of a detective in a trench coat and fedora, smoking a cigarette with smoke rising, heavy rain falling in alleyway, neon sign reflection flickering, high contrast black and white with red accent --duration 15',
    promptChinese: '黑色电影风格视频，穿着风衣和软呢帽的侦探剪影，抽着烟，烟雾升起，小巷里下着大雨，霓虹灯招牌倒影闪烁，高对比度黑白带红色点缀 --duration 15',
    author: '@noir_films'
  },
  {
    id: '20',
    title: 'Low Poly Island',
    description: 'Floating island with a lighthouse in low poly style.',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop', // 1:1
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '2.2k',
    tags: ['Low Poly', '3D'],
    aspectRatio: '1:1',
    parameters: ['(Style: Low Poly)', '(Water Sim)'],
    promptEnglish: 'Low poly 3d render video of a floating island in the sky, cute lighthouse rotating light, waterfall cascading down, clouds drifting, pastel colors, soft lighting, isometric view --duration 15',
    promptChinese: '天空中漂浮岛屿的低多边形3D渲染视频，可爱的灯塔旋转灯光，瀑布倾泻而下，云彩飘动，柔和的色彩，柔和的灯光，等轴测图 --duration 15',
    author: '@poly_maker'
  },
  {
    id: '21',
    title: 'Bioluminescent Abyss',
    description: 'Deep sea creatures glowing in the dark ocean.',
    image: 'https://images.unsplash.com/photo-1549497554-4c4f6d4d420f?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.4k',
    tags: ['Nature', 'Sci-Fi'],
    aspectRatio: '16:9',
    parameters: ['(Light: Bioluminescence)', '(Camera: Float)'],
    promptEnglish: 'Deep ocean footage, strange jellyfish-like creatures pulsating with blue bioluminescent light in total darkness, camera floating upwards, particles suspending in water, mystical and eerie atmosphere --duration 15',
    promptChinese: '深海镜头，奇怪的水母状生物在完全黑暗中发出蓝色的生物荧光脉冲，摄像机向上漂浮，水中悬浮着微粒，神秘而怪异的氛围 --duration 15',
    author: '@deep_diver'
  },
  {
    id: '22',
    title: 'FPV Canyon Run',
    description: 'High speed drone flying through desert canyon.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '3.1k',
    tags: ['Action', 'Drone'],
    aspectRatio: '16:9',
    parameters: ['(Camera: FPV)', '(Speed: Fast)'],
    promptEnglish: 'Fast FPV drone shot flying through a narrow red rock desert canyon, banking hard around corners, sun flaring over the rim, motion blur, dust kicking up, high adrenaline action --duration 15',
    promptChinese: '快速FPV无人机镜头飞越狭窄的红岩沙漠峡谷，在弯道处剧烈倾斜，阳光在边缘闪耀，运动模糊，扬起灰尘，高肾上腺素动作 --duration 15',
    author: '@drone_pilot'
  },
  {
    id: '23',
    title: 'Coffee Brewing Macro',
    description: 'Espresso extraction in extreme detail.',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&h=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.8k',
    tags: ['Food', 'Macro'],
    aspectRatio: '4:5',
    parameters: ['(Macro)', '(Texture)'],
    promptEnglish: 'Extreme macro video of espresso extraction, thick golden crema dripping slowly from the portafilter, steam rising, rich texture, warm color grading, coffee shop ambience --duration 15',
    promptChinese: '浓缩咖啡萃取的极端微距视频，厚厚的金色油脂从手柄中缓慢滴落，蒸汽升起，丰富的质感，温暖的调色，咖啡店氛围 --duration 15',
    author: '@barista_daily'
  },
  {
    id: '24',
    title: 'Cyberpunk Hacker',
    description: 'Hacker typing on holographic keyboards.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '2.5k',
    tags: ['Cyberpunk', 'Tech'],
    aspectRatio: '16:9',
    parameters: ['(VFX: Hologram)', '(Action: Typing)'],
    promptEnglish: 'Medium shot of a cyberpunk hacker in a dark room, wearing AR glasses, typing rapidly on multiple floating holographic keyboards, data streams reflecting in glasses, green and purple rim lighting --duration 15',
    promptChinese: '黑暗房间中赛博朋克黑客的中景镜头，戴着AR眼镜，在多个漂浮的全息键盘上快速打字，数据流在眼镜中反射，绿色和紫色的边缘光 --duration 15',
    author: '@net_runner'
  },
  {
    id: '25',
    title: 'Paper Cutout World',
    description: 'Stop motion style animation of a paper city.',
    image: 'https://images.unsplash.com/photo-1516216628859-9bcce593dd4a?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.2k',
    tags: ['Animation', 'Cute'],
    aspectRatio: '1:1',
    parameters: ['(Style: Stop Motion)', '(Material: Paper)'],
    promptEnglish: 'Stop motion animation style video, a city made entirely of colorful construction paper, paper cars moving with jerky frame rate, paper clouds hanging on strings, handmade aesthetic, bright lighting --duration 15',
    promptChinese: '定格动画风格视频，一个完全由彩色卡纸制成的城市，纸车以跳跃的帧率移动，纸云挂在绳子上，手工制作的美学，明亮的灯光 --duration 15',
    author: '@crafty_animator'
  },
  {
    id: '26',
    title: 'Mars Rover Exploration',
    description: 'Rover rolling over red martian dunes.',
    image: 'https://images.unsplash.com/photo-1614728853913-1e32005e30b7?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '2.9k',
    tags: ['Space', 'Sci-Fi'],
    aspectRatio: '16:9',
    parameters: ['(Vehicle: Rover)', '(Environment: Mars)'],
    promptEnglish: 'Cinematic shot of a futuristic rover vehicle rolling slowly over red sand dunes on Mars, dust kicking up from wheels, two moons visible in the pale sky, harsh sunlight, realistic space exploration --duration 15',
    promptChinese: '未来漫游车在火星红色沙丘上缓慢滚动的电影镜头，车轮扬起灰尘，苍白的天空中可见两颗卫星，刺眼的阳光，逼真的太空探索 --duration 15',
    author: '@mars_colony'
  },
  {
    id: '27',
    title: 'Street Basketball',
    description: 'Urban basketball game at sunset.',
    image: 'https://images.unsplash.com/photo-1519766304800-096cdef29177?q=80&w=600&h=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.6k',
    tags: ['Sports', 'Urban'],
    aspectRatio: '4:5',
    parameters: ['(Action: Sports)', '(Slow Mo)'],
    promptEnglish: 'Handheld camera shot of a street basketball game, player dribbling the ball and jumping for a dunk, silhouette against a vibrant orange sunset, urban fence background, slow motion mid-air, gritty texture --duration 15',
    promptChinese: '街头篮球比赛的手持镜头，球员运球并跳起扣篮，在充满活力的橙色日落下形成剪影，城市围栏背景，空中慢动作，粗糙的质感 --duration 15',
    author: '@hoops_life'
  },
  {
    id: '28',
    title: 'Neon Dancer',
    description: 'Dancer with light trails in dark studio.',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&h=1067&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '2.0k',
    tags: ['Dance', 'Abstract'],
    aspectRatio: '9:16',
    parameters: ['(VFX: Light Trails)', '(Action: Dance)'],
    promptEnglish: 'Contemporary dancer performing in a pitch black room, long exposure light trails following their movements, glowing neon outline around the body, fluid motion, artistic visual performance --duration 15',
    promptChinese: '当代舞者在漆黑的房间里表演，长曝光光轨跟随他们的动作，身体周围发光的霓虹轮廓，流畅的动作，艺术视觉表演 --duration 15',
    author: '@art_motion'
  },
  {
    id: '29',
    title: 'Haunted Hallway',
    description: 'Creepy camera push down a flickering hallway.',
    image: 'https://images.unsplash.com/photo-1505548625293-2792161b9a9d?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '950',
    tags: ['Horror', 'Atmospheric'],
    aspectRatio: '16:9',
    parameters: ['(Camera: Dolly)', '(Atmosphere: Horror)'],
    promptEnglish: 'Slow camera dolly pushing down an abandoned hospital hallway, peeling paint, flickering fluorescent lights buzzing, shadow figure darting across the end of the hall, cold blue color grading, horror movie style --duration 15',
    promptChinese: '缓慢的摄像机推车在废弃的医院走廊上推进，油漆剥落，闪烁的荧光灯发出嗡嗡声，影子在走廊尽头飞奔，冷蓝色调色，恐怖电影风格 --duration 15',
    author: '@scary_stories'
  },
  {
    id: '30',
    title: 'Crystal Cave',
    description: 'Magical cave filled with glowing crystals.',
    image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '2.7k',
    tags: ['Fantasy', 'Nature'],
    aspectRatio: '16:9',
    parameters: ['(Light: Glow)', '(Environment: Cave)'],
    promptEnglish: 'Walking through a massive underground cave system, giant purple and blue crystals glowing and illuminating the walls, underground lake reflecting the lights, magical sparkles in the air, fantasy rpg atmosphere --duration 15',
    promptChinese: '走过一个巨大的地下洞穴系统，巨大的紫色和蓝色水晶发光照亮墙壁，地下湖反射着灯光，空气中有神奇的火花，奇幻RPG氛围 --duration 15',
    author: '@crystal_gem'
  },
  {
    id: '31',
    title: 'Lion Stalking',
    description: 'Documentary footage of a lion in tall grass.',
    image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.7k',
    tags: ['Nature', 'Animals'],
    aspectRatio: '16:9',
    parameters: ['(Style: Documentary)', '(Camera: Telephoto)'],
    promptEnglish: 'BBC Earth style documentary footage, close up telephoto shot of a male lion creeping slowly through tall golden savanna grass, intense focus in eyes, wind blowing mane, sun setting in background --duration 15',
    promptChinese: 'BBC地球风格纪录片镜头，雄狮穿过金色高草原缓慢爬行的特写长焦镜头，眼神专注，风吹动鬃毛，背景日落 --duration 15',
    author: '@wild_life'
  },
  {
    id: '32',
    title: 'Graffiti Art',
    description: 'Artist spray painting a colorful mural.',
    image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=600&h=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.1k',
    tags: ['Art', 'Urban'],
    aspectRatio: '4:5',
    parameters: ['(Action: Painting)', '(Color: Vibrant)'],
    promptEnglish: 'Over the shoulder shot of a street artist spray painting a vibrant mural on a brick wall, paint mist in the air, bright colors (cyan, magenta, yellow), urban city noise background, sunny day --duration 15',
    promptChinese: '街头艺术家在砖墙上喷绘充满活力的壁画的过肩镜头，空气中有油漆雾，鲜艳的色彩（青色，品红色，黄色），城市噪音背景，晴天 --duration 15',
    author: '@street_art'
  },
  {
    id: '33',
    title: 'VR Headset User',
    description: 'Person reacting to virtual reality experience.',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269fb1ac?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '890',
    tags: ['Tech', 'Lifestyle'],
    aspectRatio: '16:9',
    parameters: ['(Action: Reacting)', '(Light: RGB)'],
    promptEnglish: 'Medium shot of a young man wearing a futuristic VR headset, reaching out to touch invisible objects, mouth open in awe, rgb gaming lights in the room reflecting on the headset, high tech vibe --duration 15',
    promptChinese: '戴着未来主义VR头显的年轻男子的中景镜头，伸手去触摸看不见的物体，张大嘴巴表示敬畏，房间里的RGB游戏灯光反射在头显上，高科技氛围 --duration 15',
    author: '@vr_gamer'
  },
  {
    id: '34',
    title: 'Melting Ice Cream',
    description: 'Timelapse of colorful ice cream melting.',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=600&h=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.3k',
    tags: ['Food', 'Timelapse'],
    aspectRatio: '1:1',
    parameters: ['(Time-lapse)', '(Macro)'],
    promptEnglish: 'Macro timelapse video of a scoop of rainbow strawberry ice cream melting, droplets running down the cone, sticky texture, studio lighting, pop colors, delicious and messy --duration 15',
    promptChinese: '彩虹草莓冰淇淋融化的微距延时视频，水滴顺着蛋卷流下，粘稠的质感，摄影棚灯光，流行色彩，美味而凌乱 --duration 15',
    author: '@sweet_tooth'
  },
  {
    id: '35',
    title: 'Skateboard Trick',
    description: 'Fisheye lens shot of a skateboarder jumping.',
    image: 'https://images.unsplash.com/photo-1520045864981-8d781541e3b0?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '1.9k',
    tags: ['Sports', 'Action'],
    aspectRatio: '16:9',
    parameters: ['(Lens: Fisheye)', '(Slow Mo)'],
    promptEnglish: 'Low angle fisheye lens shot of a skateboarder doing a kickflip down a stair set, board rotating in slow motion, sun flare, urban skatepark background, 90s skate video aesthetic --duration 15',
    promptChinese: '滑板手在楼梯上做踢翻动作的低角度鱼眼镜头，滑板慢动作旋转，太阳耀斑，城市滑板公园背景，90年代滑板视频美学 --duration 15',
    author: '@skate_ordie'
  },
  {
    id: '36',
    title: 'Hollywood Racing (Le Mans)',
    description: 'Cinematic night racing in rain, high stakes sport.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '4.5k',
    tags: ['Movie', 'Racing', 'Rain'],
    aspectRatio: '16:9',
    parameters: ['(Style: Hollywood)', '(Weather: Rain)'],
    promptEnglish: 'Style: Hollywood Professional Racing Movie (Le Mans Style), Cinematic Night, Rain, High Stakes Sport.\n[00-05s] Shot 1: The Veteran (Interior/Close-up). Rain lashes the windshield of a high-tech race car. The Veteran driver looks over, focused. Dashboard lights reflect on his visor.\n[05-10s] Shot 2: The Challenger (Interior/Close-up). Rival car next to him. Younger driver grips wheel tight, breathing heavily.\n[10-15s] Shot 3: The Green Light (Wide Action). Starting lights turn Green. Both cars accelerate in sync on wet asphalt. Water sprays massively into lens. --ar 16:9 --duration 15',
    promptChinese: '风格：好莱坞专业赛车电影（勒芒风格），电影之夜，下雨，高风险运动。\n[00-05s] 镜头1：老将（内景/特写）。雨水拍打着高科技赛车的挡风玻璃。老将驾驶员看过来，专注。仪表盘灯光反射在他的面罩上。\n[05-10s] 镜头2：挑战者（内景/特写）。旁边的竞争对手车。年轻驾驶员紧握方向盘，呼吸沉重。\n[10-15s] 镜头3：绿灯（广角动作）。起跑灯变绿。两辆车在湿滑的沥青路上同步加速。水花大量喷向镜头。 --ar 16:9 --duration 15',
    author: '@johnAGI168'
  },
  {
    id: '37',
    title: 'Villeneuve Epic Desert',
    description: 'IMAX 70mm film, gritty realism, epic scale sandstorm.',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '5.2k',
    tags: ['Movie', 'Desert', 'Epic'],
    aspectRatio: '16:9',
    parameters: ['(Style: Villeneuve)', '(Scale: Epic)'],
    promptEnglish: 'Style: IMAX 70mm Film, Denis Villeneuve Style, Gritty Realism, Epic Scale, Desaturated.\n[00-05s] Extreme Wide Shot: A colossal sandstorm swallows a vast desert landscape. Tiny convoy of armored vehicles races away.\n[05-10s] Cockpit Cam: Inside lead rover. Pilot screams "GO! GO!". Camera shakes violently. Sand blasts windshield.\n[10-15s] The Jump: Rover hits massive dune and launches into air (Slow Motion). Silhouette against dark storm. Lightning strikes. --ar 16:9 --duration 15',
    promptChinese: '风格：IMAX 70mm 胶片，丹尼斯·维伦纽瓦风格，粗犷写实，史诗规模，去饱和。\n[00-05s] 极广角镜头：巨大的沙尘暴吞噬了广阔的沙漠景观。装甲车队的小型车队飞驰而去。\n[05-10s] 驾驶舱镜头：领头漫游车内部。飞行员大喊“快！快！”。摄像机剧烈抖动。沙子拍打挡风玻璃。\n[10-15s] 跳跃：漫游车撞上巨大的沙丘并冲向空中（慢动作）。黑暗风暴中的剪影。闪电袭击。 --ar 16:9 --duration 15',
    author: '@johnAGI168'
  },
  {
    id: '38',
    title: 'Wong Kar-wai Rain',
    description: '90s Hong Kong Art Cinema style, melancholic atmosphere.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop',
    duration: '00:10',
    engine: 'Seedance 2.0',
    likes: '3.8k',
    tags: ['Movie', 'HK Noir', 'Retro'],
    aspectRatio: '16:9',
    parameters: ['(Style: Wong Kar-wai)', '(Effect: Frame Stepping)'],
    promptEnglish: '[Film Style]: 90s Hong Kong Art Cinema style, retro film feel, high ISO grain, yellow-green tint, frame stepping effect.\n[00-04s] Shot 1: Rain-covered red public telephone booth. Man in khaki trench coat holding receiver tightly, listening.\n[04-07s] Shot 2: Extreme Close-up. Focus on character\'s lips. Whispering softly. Street neon bokeh flows across face.\n[07-10s] Shot 3: Signature Slow-shutter Drag Shadow. Character hangs up, walks into rainy crowd with blurred trailing shadows. --ar 16:9 --duration 10',
    promptChinese: '[电影风格]：90年代香港艺术电影风格，复古胶片感，高ISO颗粒，黄绿色调，抽帧效果。\n[00-04s] 镜头1：被雨水覆盖的红色公共电话亭。穿着卡其色风衣的男人紧握听筒，倾听。\n[04-07s] 镜头2：极特写。聚焦角色的嘴唇。轻声细语。街道霓虹灯虚化流过脸庞。\n[07-10s] 镜头3：标志性的慢快门拖影。角色挂断电话，走进雨中人群，带有模糊的拖尾阴影。 --ar 16:9 --duration 10',
    author: '@johnAGI168'
  },
  {
    id: '39',
    title: 'Giant Orange Cat',
    description: 'Mockumentary of a Godzilla-sized cat in a city.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '6.7k',
    tags: ['Meme', 'Surreal', 'Funny'],
    aspectRatio: '16:9',
    parameters: ['(Style: Mockumentary)', '(Physics: Fur)'],
    promptEnglish: '【Style】Mockumentary, mobile Vlog perspective, hyperrealistic CG combined with real scenes.\n[00-05s] Shot 1: Reveal. Godzilla-sized orange tabby cat stuck between two skyscrapers. Waving huge paws with pitiful expression.\n[05-10s] Shot 2: Interaction. Ground-level perspective. Giant cat lowers head to sniff a bus. Driver pets cat\'s nose. Cat sneezes.\n[10-15s] Shot 3: Ending. Giant cat sits on cross-river bridge, bridge deck sinks slightly. It starts grooming itself. --ar 16:9 --duration 15',
    promptChinese: '【风格】伪纪录片，手机Vlog视角，超写实CG结合实景。\n[00-05s] 镜头1：揭晓。哥斯拉大小的橘猫卡在两座摩天大楼之间。挥舞着巨大的爪子，表情可怜。\n[05-10s] 镜头2：互动。地面透视。巨猫低头闻一辆公共汽车。司机抚摸猫的鼻子。猫打喷嚏。\n[10-15s] 镜头3：结局。巨猫坐在跨江大桥上，桥面微微下沉。它开始梳理毛发。 --ar 16:9 --duration 15',
    author: '@johnAGI168'
  },
  {
    id: '40',
    title: 'Mirror Glitch Vlog',
    description: 'Surrealist vlog where the reflection has its own mind.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '4.1k',
    tags: ['UGC', 'Surreal', 'Comedy'],
    aspectRatio: '9:16',
    parameters: ['(Style: Vlog)', '(Effect: Glitch)'],
    promptEnglish: '【Style】Mockumentary (Vlog Style), hyperrealism, fixed-camera real-shot feel.\n[00-06s] Shot 1: Normalcy. Protagonist brushing teeth in front of bathroom mirror, making funny faces. Reflection is normal.\n[06-11s] Shot 2: The Glitch. Protagonist turns and leaves, but reflection stays! Reflection continues brushing, winks at camera.\n[11-15s] Shot 3: Punchline. Protagonist turns back, mirror is empty. She scratches head in confusion. --ar 9:16 --duration 15',
    promptChinese: '【风格】伪纪录片（Vlog风格），超写实，固定摄像机实拍感。\n[00-06s] 镜头1：常态。主角在浴室镜子前刷牙，做鬼脸。反射是正常的。\n[06-11s] 镜头2：故障。主角转身离开，但倒影留下了！倒影继续刷牙，对镜头眨眼。\n[11-15s] 镜头3：笑点。主角回头，镜子是空的。她困惑地抓着头。 --ar 9:16 --duration 15',
    author: '@johnAGI168'
  },
  {
    id: '41',
    title: 'Nezha vs Ao Bing',
    description: 'Epic anime battle with ice and fire collision.',
    image: 'https://images.unsplash.com/photo-1578632738980-43318b5c9440?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '5.9k',
    tags: ['Anime', 'Action', 'VFX'],
    aspectRatio: '16:9',
    parameters: ['(Style: Anime)', '(Effect: Particle)'],
    promptEnglish: 'Act 1: Stillness and Burst. Nezha kicks off ground, earth shatters. Transition to high speed.\nAct 2: Attribute Transition. Nezha swings Fire-Tipped Spear, flame ring transforms into Ao Bing\'s ice blade.\nAct 3: Collision. Fire spear and ice sword collide. Sparks and ice fragments explode. Ao Bing spirals upward.\nAct 4: Space Folding. Nezha punches ice wall, crystals transform into fire feathers. --ar 16:9 --duration 15',
    promptChinese: '第一幕：静止与爆发。哪吒蹬地，大地碎裂。过渡到高速。\n第二幕：属性转换。哪吒挥动火尖枪，火焰环转化为敖丙的冰刃。\n第三幕：碰撞。火枪与冰剑相撞。火花和冰碎片爆炸。敖丙螺旋上升。\n第四幕：空间折叠。哪吒拳击冰墙，晶体转化为火羽。 --ar 16:9 --duration 15',
    author: '@Adam38363368936'
  },
  {
    id: '42',
    title: 'Van Gogh Animation',
    description: 'Post-Impressionism oil painting style dynamic world.',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '7.2k',
    tags: ['Art', 'Animation', 'Oil Painting'],
    aspectRatio: '16:9',
    parameters: ['(Style: Van Gogh)', '(Texture: Impasto)'],
    promptEnglish: '【Style】Van Gogh Post-Impressionism oil painting, thick paint texture (Heavy Impasto), swirling brushstrokes.\n[Visual Content] Deep blue night sky, huge yellow celestial bodies swirling wildly like rushing rivers. Foreground cypress tree twisted like black flames. Sleeping town in valley with warm yellow light. Entire scene flows following brushstrokes. --ar 16:9 --duration 15',
    promptChinese: '【风格】梵高后印象派油画，厚涂纹理（重厚涂），旋转笔触。\n[视觉内容] 深蓝色夜空，巨大的黄色天体像奔腾的河流一样疯狂旋转。前景柏树像黑色的火焰一样扭曲。山谷中沉睡的小镇，散发着温暖的黄色光芒。整个场景随着笔触流动。 --ar 16:9 --duration 15',
    author: '@johnAGI168'
  },
  {
    id: '43',
    title: 'CEO Reversal Drama',
    description: 'Popular Chinese rich-tycoon satisfying drama.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '8.4k',
    tags: ['Drama', 'CEO', 'Viral'],
    aspectRatio: '9:16',
    parameters: ['(Style: CEO Drama)', '(Format: Vertical)'],
    promptEnglish: '【Style】Popular Chinese rich-tycoon (Satisfying Drama), vertical composition, extreme facial close-ups.\n[00-05s] Humiliation. Mother-in-law slams divorce paper on groom\'s chest. Guests laugh.\n[05-10s] Reversal. Groom smirks, tears paper. Helicopter sound, wind messes hair. Aura becomes domineering.\n[10-15s] Reveal. Bodyguards rush in, roll red carpet. Butler bows: "Welcome back, Dragon King!" --ar 9:16 --duration 15',
    promptChinese: '【风格】热门中国富豪（爽剧），竖屏构图，极端面部特写。\n[00-05s] 羞辱。岳母将离婚协议书摔在男主角胸前。宾客嘲笑。\n[05-10s] 反转。男主角冷笑，撕毁文件。直升机声，风吹乱头发。气场变得霸道。\n[10-15s] 揭晓。保镖冲进来，铺开红地毯。管家鞠躬：“欢迎回来，龙王！” --ar 9:16 --duration 15',
    author: '@johnAGI168'
  },
  {
    id: '44',
    title: 'Sky Zipper Surrealism',
    description: 'God\'s hand unzipping the blue sky to reveal cyberpunk world.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop',
    duration: '00:15',
    engine: 'Seedance 2.0',
    likes: '9.1k',
    tags: ['Surreal', 'VFX', 'Cyberpunk'],
    aspectRatio: '16:9',
    parameters: ['(Style: Surrealism)', '(VFX: God Hand)'],
    promptEnglish: '【Style】Surrealism, megalophobia, epic visual spectacle.\n[00-05s] Calm. Cloudless blue sky, birds flying. Giant silver metallic zipper appears across horizon.\n[05-10s] Unzipping. Giant translucent God\'s hand grasps zipper pull, slowly unzipping sky. Sky wrinkles like fabric.\n[10-15s] Revelation. Behind zipper is cyberpunk world with neon lights and flying cars. Camera pulls back to reveal world is a glass miniature on a giant\'s table. --ar 16:9 --duration 15',
    promptChinese: '【风格】超现实主义，巨物恐惧症，史诗般的视觉盛宴。\n[00-05s] 平静。晴朗的蓝天，小鸟飞翔。地平线上出现巨大的银色金属拉链。\n[05-10s] 拉开。巨大的半透明上帝之手抓住拉链头，缓慢拉开天空。天空像织物一样起皱。\n[10-15s] 启示。拉链后面是霓虹灯和飞行器的赛博朋克世界。镜头后撤，露出整个世界其实是巨人桌上的玻璃微缩景观。 --ar 16:9 --duration 15',
    author: '@johnAGI168'
  }
];

export const MOCK_RESULT = {
  summary: "User wants a 15s video of a girl in Hanfu walking down a rainy street at night.",
  summaryZh: "用户想要一个15秒的视频，内容是一个穿着汉服的女孩在雨夜的街道上行走。",
  promptEn: "00-05s [Visual]: Medium shot, girl in Hanfu walking forward, rain falling. \n       [Audio]: Sound FX: Soft rain pattering, distant city hum. \n05-10s [Visual]: Camera pans to follow her gaze, neon lights reflecting on wet ground. \n       [Audio]: Music: Melancholic Guzheng melody fades in. \n10-15s [Visual]: She turns back to the camera, soft lighting on face. @Image1 for costume reference.\n       [Audio]: Voiceover: 'In the rain, memories return...'",
  promptZh: "00-05s [画面]: 中景，汉服女孩向前走，下着雨。\n       [声音]: 音效：细雨拍打声，远处城市的嗡嗡声。\n05-10s [画面]: 镜头摇摄跟随她的视线，霓虹灯在湿地上反射。\n       [声音]: 音乐：忧伤的古筝旋律淡入。\n10-15s [画面]: 她回头看镜头，脸部柔光。@Image1 作为服装参考。\n       [声音]: 旁白：“雨中，回忆归来...”",
  suggestions: ["Upload a reference image for the Hanfu style (@Image1).", "Use a reference video for the walking pace if specific rhythm is needed."],
  suggestionsZh: ["上传一张汉服风格的参考图片 (@Image1)。", "如果需要特定的节奏，请使用参考视频来控制步行速度。"],
  tips: ["Ensure the uploaded image is named 'Image1' to match the prompt.", "Use 'Consistency Mode' if you need the face to be exact."],
  tipsZh: ["确保上传的图片命名为 'Image1' 以匹配提示词。", "如果需要面部特征完全一致，请使用“一致性控制”模式。"]
};

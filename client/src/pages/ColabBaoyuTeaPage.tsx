/*
 * 且酌 × 宝玉煮茶 联名落地页
 * /health/collab/baoyutea
 *
 * Brand fusion: 且酌 dark-gold luxury × 宝玉煮茶 classic Chinese red
 * Scene: 应酬场景全链路养护 — 席间且酌护肝，席后宝玉还元
 */
import { useEffect, useRef } from "react";

/* ─── Intersection-observer fade-up helper ─── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("animate-fade-up");
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

/* ─── Brand color constants ─── */
const BY_RED = "#C0392B";   // 宝玉煮茶 朱红
const BY_CREAM = "#F5F0E8"; // 宝玉煮茶 米色
const QZ_GOLD = "#C9A84C";  // 且酌 金色

/* ─── Image asset paths ─── */
const IMG = {
  particles:  "/imgs/img-000.jpg",  // 金色粒子叠加（黑底）
  logoStamp:  "/imgs/img-010.jpg",  // 宝玉煮茶印章Logo（朱红椭圆）
  herbs:      "/imgs/img-020.jpg",  // 草本食材平铺
  teapot:     "/imgs/img-050.jpg",  // 红茶壶+粉色茶点（白底）
  craftHands: "/imgs/img-055.jpg",  // 手工制茶特写
  drinkRed:   "/imgs/img-109.jpg",  // 白露·红玉青柠饮（深红竖版）
  drinkBrown: "/imgs/img-113.jpg",  // 寒露·桂魄煮雪（暖棕竖版，Hero主视觉）
  characters: "/imgs/img-116.jpg",  // 红楼梦人物线描（朱红，米白底）
} as const;

/* ─── Section: Hero ─── */
function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{
        minHeight: "92vh",
        background: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(192,57,43,0.18) 0%, transparent 65%),
                     radial-gradient(ellipse 60% 40% at 30% 70%, rgba(201,168,76,0.10) 0%, transparent 60%),
                     #0D0D0D`,
      }}
    >
      {/* 金色粒子背景叠加 */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${IMG.particles})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
          opacity: 0.06,
        }}
      />

      {/* 横向纹理线 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${BY_CREAM} 0px, ${BY_CREAM} 1px, transparent 1px, transparent 48px)`,
        }}
      />

      {/* 内容区：桌面两栏，移动单列 */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">

        {/* 左侧：文字内容 */}
        <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">
          {/* Collab badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase"
            style={{ border: `1px solid ${BY_RED}50`, color: BY_RED, background: `${BY_RED}10` }}
          >
            联名呈献 · Limited Collaboration
          </div>

          {/* Logo lockup */}
          <div className="flex items-center justify-center lg:justify-start gap-5 flex-wrap">
            {/* 且酌 logo */}
            <div className="flex flex-col items-center gap-1.5">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028732695/CdMABrLIqerRhKoR.png"
                alt="一叶归真 · 且酌"
                className="h-10 opacity-90"
                style={{ filter: "brightness(10)" }}
              />
              <span className="text-xs tracking-widest" style={{ color: QZ_GOLD }}>且 酌</span>
            </div>

            <span className="text-3xl font-thin" style={{ color: BY_RED, opacity: 0.7 }}>×</span>

            {/* 宝玉煮茶 stamp logo */}
            <div className="flex flex-col items-center gap-1.5">
              <img
                src={IMG.logoStamp}
                alt="宝玉煮茶"
                className="h-10 object-contain"
                style={{ filter: "drop-shadow(0 0 6px rgba(192,57,43,0.4))" }}
              />
              <span className="text-xs tracking-widest" style={{ color: BY_CREAM, opacity: 0.7 }}>宝玉煮茶</span>
            </div>
          </div>

          {/* 主标题 */}
          <div className="space-y-4 max-w-lg">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
            >
              席间且酌
              <br />
              <span style={{ color: BY_RED }}>席后宝玉</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: `${BY_CREAM}99` }}>
              应酬全链路东方养护方案
              <br />
              草本护肝 · 院士还元
            </p>
          </div>

          {/* Scroll cue */}
          <div
            className="flex flex-col items-center gap-2 opacity-50 animate-bounce"
            style={{ color: BY_CREAM }}
          >
            <div className="w-px h-12" style={{ background: `linear-gradient(to bottom, transparent, ${BY_CREAM})` }} />
            <span className="text-[10px] tracking-widest">向下探索</span>
          </div>
        </div>

        {/* 右侧：产品图（桌面显示） */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `radial-gradient(ellipse at center, ${BY_RED}20 0%, transparent 70%)`,
                transform: "scale(1.2)",
              }}
            />
            <img
              src={IMG.drinkBrown}
              alt="寒露·桂魄煮雪"
              loading="eager"
              className="relative z-10 rounded-2xl object-cover"
              style={{
                maxHeight: "55vh",
                maxWidth: 280,
                border: `1px solid rgba(192,57,43,0.3)`,
                boxShadow: `0 0 60px rgba(192,57,43,0.15)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: 联名故事 ─── */
function StorySection() {
  const ref = useInView();
  return (
    <section ref={ref} className="opacity-0 px-6 py-20 max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-wider"
          style={{ border: `1px solid ${QZ_GOLD}40`, color: QZ_GOLD, background: `${QZ_GOLD}08` }}
        >
          联名背后的逻辑
        </div>
        <h2
          className="text-2xl lg:text-3xl font-bold"
          style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
        >
          两个品牌，一件事
        </h2>
        <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: `${BY_CREAM}70` }}>
          中国人的应酬文化从未消失，消失的是身体扛住的底气。<br />
          且酌与宝玉煮茶，各守一段，把这个底气还给你。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 且酌 card */}
        <div
          className="rounded-2xl p-8 space-y-5"
          style={{
            background: `linear-gradient(135deg, #1a1500 0%, #0D0D0D 100%)`,
            border: `1px solid ${QZ_GOLD}25`,
          }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded text-[11px] tracking-wider"
            style={{ background: `${QZ_GOLD}15`, color: QZ_GOLD }}
          >
            席间护卫 · 且酌®
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2" style={{ color: BY_CREAM, fontFamily: "serif" }}>
              且酌·植养萃
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: `${BY_CREAM}70` }}>
              以草本植物精华为核心，院士食养研究方向指导配伍，
              专为应酬场景设计的东方植养饮品。
              席间饮用，以植养的方式关照身体的感受。
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-2">
            {["草本植萃", "东方配伍", "日常饮用"].map((tag) => (
              <div
                key={tag}
                className="text-center py-2.5 rounded-lg text-xs"
                style={{ background: `${QZ_GOLD}10`, color: QZ_GOLD, border: `1px solid ${QZ_GOLD}20` }}
              >
                {tag}
              </div>
            ))}
          </div>
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028732695/PEYlnUPOWmDgbgSJ.png"
            alt="且酌产品"
            className="w-full rounded-lg object-cover mt-2"
            style={{ maxHeight: 200, objectFit: "contain" }}
          />
        </div>

        {/* 宝玉煮茶 card */}
        <div
          className="rounded-2xl p-8 space-y-5"
          style={{
            background: `linear-gradient(135deg, #1a0a08 0%, #0D0D0D 100%)`,
            border: `1px solid ${BY_RED}30`,
          }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded text-[11px] tracking-wider"
            style={{ background: `${BY_RED}15`, color: BY_RED }}
          >
            席后还元 · 宝玉煮茶
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2" style={{ color: BY_CREAM, fontFamily: "serif" }}>
              怡红公子·院士轻养茶
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: `${BY_CREAM}70` }}>
              以红枣为基底，结合院士团队长期关注的茶食养研究方向，
              由「国家植物功能成分利用工程技术研究中心」参与研发。
              一杯添元气，匠心熬煮，东方食养。
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-2">
            {["院士研发", "红枣基底", "东方食养"].map((tag) => (
              <div
                key={tag}
                className="text-center py-2.5 rounded-lg text-xs"
                style={{ background: `${BY_RED}10`, color: BY_RED, border: `1px solid ${BY_RED}25` }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* 宝玉煮茶产品图 + 人物线描点缀 */}
          <div className="relative w-full mt-2">
            <img
              src={IMG.teapot}
              alt="宝玉煮茶 · 红茶壶"
              loading="lazy"
              className="w-full rounded-lg object-contain"
              style={{
                maxHeight: 200,
                mixBlendMode: "multiply",
              }}
            />
            <img
              src={IMG.characters}
              alt="红楼梦人物"
              loading="lazy"
              className="absolute bottom-2 right-2 rounded object-cover"
              style={{ width: 56, height: 56, opacity: 0.4 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: 使用场景 ─── */
function SceneSection() {
  const ref = useInView();
  const scenes = [
    {
      time: "席前",
      title: "备战状态",
      desc: "重要饭局前，先为身体建好底气。且酌先行，草本植养，以备周全。",
      accent: QZ_GOLD,
      icon: "⚑",
      bgImage: IMG.herbs,
    },
    {
      time: "席间",
      title: "从容应酬",
      desc: "饮酒间隙，以且酌换杯。草本配伍，日常饮用，无需大张旗鼓，场面依旧周到。",
      accent: QZ_GOLD,
      icon: "◈",
      bgImage: IMG.craftHands,
    },
    {
      time: "席后",
      title: "宝玉还元",
      desc: "散场后，一杯怡红公子。院士团队研发的红枣基底，温热入腹，让身体慢慢缓回来。",
      accent: BY_RED,
      icon: "◉",
      bgImage: IMG.teapot,
    },
    {
      time: "次日",
      title: "元气如常",
      desc: "好的应酬，不以透支为代价。两个品牌守护的，是你明天还能全力以赴的状态。",
      accent: BY_RED,
      icon: "◎",
      bgImage: IMG.characters,
    },
  ];

  return (
    <section
      ref={ref}
      className="opacity-0 py-20 px-6"
      style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #100808 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-wider"
            style={{ border: `1px solid ${BY_RED}40`, color: BY_RED, background: `${BY_RED}08` }}
          >
            应酬全链路 · 东方养护
          </div>
          <h2
            className="text-2xl lg:text-3xl font-bold"
            style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
          >
            四个时刻，两个品牌
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {scenes.map((s) => (
            <div
              key={s.time}
              className="relative rounded-2xl p-6 space-y-4 transition-transform hover:-translate-y-1 overflow-hidden"
              style={{
                background: "#141414",
                border: `1px solid ${s.accent}20`,
                boxShadow: `0 0 30px ${s.accent}08`,
              }}
            >
              {/* 背景图氛围层 */}
              <img
                src={s.bgImage}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300"
                style={{ opacity: 0.15 }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.25"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.15"; }}
              />
              {/* 内容层 */}
              <div className="relative z-10 flex items-center justify-between">
                <span
                  className="text-[10px] tracking-[0.2em] font-medium px-2 py-0.5 rounded"
                  style={{ background: `${s.accent}15`, color: s.accent }}
                >
                  {s.time}
                </span>
                <span className="text-lg opacity-30" style={{ color: s.accent }}>{s.icon}</span>
              </div>
              <h3 className="relative z-10 font-semibold text-base" style={{ color: BY_CREAM }}>{s.title}</h3>
              <p className="relative z-10 text-xs leading-relaxed" style={{ color: `${BY_CREAM}60` }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: 科研背书 ─── */
function ScienceSection() {
  const ref = useInView();
  return (
    <section ref={ref} className="opacity-0 py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-14">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-wider"
          style={{ border: `1px solid ${QZ_GOLD}40`, color: QZ_GOLD, background: `${QZ_GOLD}08` }}
        >
          双重科研背书
        </div>
        <h2
          className="text-2xl lg:text-3xl font-bold"
          style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
        >
          两个品牌，同一个底色
        </h2>
        <p className="text-sm max-w-xl mx-auto" style={{ color: `${BY_CREAM}60` }}>
          且酌与宝玉煮茶都不是凭空而来的消费品——<br />
          背后站着的，是真正在做食养研究的科研团队。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 且酌 science */}
        <div
          className="rounded-2xl p-8 space-y-6"
          style={{ background: "#141414", border: `1px solid ${QZ_GOLD}20` }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-lg"
              style={{ background: `${QZ_GOLD}15`, color: QZ_GOLD }}
            >
              萃
            </div>
            <div>
              <h3 className="font-semibold mb-1" style={{ color: BY_CREAM }}>植养萃系列科研背景</h3>
              <p className="text-xs leading-relaxed" style={{ color: `${BY_CREAM}60` }}>
                基于院士食养研究方向进行产品设计，深度提取草本植物精华调配，
                通过CNAS认可实验室检测，适合作为日常饮用的草本植养饮品。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["草本植萃工艺", "院士方向指导", "实验室检测", "合规普通食品"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
                style={{ background: `${QZ_GOLD}08`, color: `${BY_CREAM}80` }}
              >
                <span style={{ color: QZ_GOLD }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* 宝玉煮茶 science */}
        <div
          className="relative overflow-hidden rounded-2xl p-8 space-y-6"
          style={{ background: "#141414", border: `1px solid ${BY_RED}25` }}
        >
          {/* 人物插画装饰，右上角 */}
          <img
            src={IMG.characters}
            alt="红楼梦人物"
            loading="lazy"
            className="absolute -top-2 -right-2 rounded-lg object-cover"
            style={{ width: 80, height: 80, opacity: 0.5 }}
          />
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-lg"
              style={{ background: `${BY_RED}15`, color: BY_RED }}
            >
              院
            </div>
            <div>
              <h3 className="font-semibold mb-1" style={{ color: BY_CREAM }}>院士轻养茶科研背景</h3>
              <p className="text-xs leading-relaxed" style={{ color: `${BY_CREAM}60` }}>
                由院士团队及「国家植物功能成分利用工程技术研究中心」携手研发，
                深度提取草本植物精华调配，以《红楼梦》人物精神为文化线索，
                重构当代人日常调养方式。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["院士团队研发", "国家级研究中心", "红楼梦文化IP", "中高端茶空间"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
                style={{ background: `${BY_RED}08`, color: `${BY_CREAM}80` }}
              >
                <span style={{ color: BY_RED }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center bridge */}
      <div
        className="relative overflow-hidden mt-8 rounded-2xl p-8 text-center space-y-3"
        style={{
          background: `linear-gradient(135deg, ${QZ_GOLD}08 0%, ${BY_RED}08 100%)`,
          border: `1px solid`,
          borderImage: `linear-gradient(90deg, ${QZ_GOLD}30, ${BY_RED}30) 1`,
          borderRadius: "1rem",
        }}
      >
        {/* 草本食材背景 */}
        <img
          src={IMG.herbs}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-2xl"
          style={{ opacity: 0.08 }}
        />
        {/* 金色粒子叠加 */}
        <img
          src={IMG.particles}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-2xl"
          style={{ opacity: 0.05, mixBlendMode: "screen" } as React.CSSProperties}
        />
        <p className="relative z-10 text-sm font-medium" style={{ color: BY_CREAM }}>
          "以茶载道，以科学为根基"
        </p>
        <p className="relative z-10 text-xs leading-relaxed max-w-lg mx-auto" style={{ color: `${BY_CREAM}60` }}>
          本次联名，是两家在食养赛道深耕的品牌第一次携手。
          我们相信好的应酬文化，不是拼命，而是有底气地从容。
        </p>
      </div>
    </section>
  );
}

/* ─── Section: CTA ─── */
function CTASection() {
  const ref = useInView();
  return (
    <section
      ref={ref}
      className="relative overflow-hidden opacity-0 py-24 px-6 text-center"
      style={{
        background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${BY_RED}12 0%, transparent 70%), #0D0D0D`,
      }}
    >
      {/* 饮品图底层背景 */}
      <img
        src={IMG.drinkRed}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.06 }}
      />
      {/* 金色粒子叠加 */}
      <img
        src={IMG.particles}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.04, mixBlendMode: "screen" } as React.CSSProperties}
      />

      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2
            className="text-3xl lg:text-4xl font-bold"
            style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
          >
            席间且酌，席后宝玉
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: `${BY_CREAM}60` }}>
            应酬是中国商业文化的一部分，我们不回避它，<br />
            我们只是让你扛得住，扛得好，扛得有品位。
          </p>
        </div>

        {/* 分割线 with logos */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1" style={{ background: `linear-gradient(to right, transparent, ${QZ_GOLD}40)` }} />
          <div className="flex items-center gap-3">
            <span className="text-xs" style={{ color: QZ_GOLD }}>且酌</span>
            <span className="text-xs" style={{ color: `${BY_CREAM}50` }}>·</span>
            <img
              src={IMG.logoStamp}
              alt="宝玉煮茶"
              className="h-6 object-contain"
              style={{ filter: "drop-shadow(0 0 3px rgba(192,57,43,0.5))" }}
            />
          </div>
          <div className="h-px flex-1" style={{ background: `linear-gradient(to left, transparent, ${BY_RED}40)` }} />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/health/tracks"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${QZ_GOLD} 0%, #8B7332 100%)`,
              color: "#0D0D0D",
            }}
          >
            了解且酌系列 →
          </a>
          <a
            href="https://www.baoyutea.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{
              background: "transparent",
              color: BY_CREAM,
              border: `1px solid ${BY_RED}50`,
            }}
          >
            探索宝玉煮茶 →
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] leading-relaxed" style={{ color: `${BY_CREAM}30` }}>
          *本产品均为普通食品（固体饮料）。适合作为日常饮用，不作为任何医疗或功能性承诺。
          本页面为品牌联名宣传内容，相关科研信息仅供参考。
        </p>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function ColabBaoyuTeaPage() {
  return (
    <div style={{ background: "#0D0D0D" }}>
      <HeroSection />
      <StorySection />
      <SceneSection />
      <ScienceSection />
      <CTASection />
    </div>
  );
}

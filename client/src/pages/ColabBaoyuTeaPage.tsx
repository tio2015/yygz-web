/*
 * 宝玉煮茶 · 院士轻养茶 品牌落地页
 * baoyutea.yiyeguizhen.com
 *
 * 以院士茶载轻养道 — FROM DAGUANYUAN BAOYU TEA LAB
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

/* ─── Brand color constants (from PDF) ─── */
const BY_RED    = "#CC2200";   // 朱砂红 — PDF primary
const BY_CREAM  = "#F5ECD8";   // 米白 — content backgrounds
const BY_DARK   = "#1A0800";   // 深暗红底
const BY_GOLD   = "#C9A84C";   // 金色点缀

/* ─── Image asset paths ─── */
const IMG = {
  particles:  "/imgs/img-000.jpg",  // 金色粒子（黑底）
  logoStamp:  "/imgs/img-010.jpg",  // 宝玉煮茶印章Logo
  herbs:      "/imgs/img-020.jpg",  // 草本食材平铺
  teapot:     "/imgs/img-050.jpg",  // 红茶壶+茶点（备用）
  store:      "/imgs/img-300.jpg",  // 大观茶室门店渲染图
  craftHands: "/imgs/img-055.jpg",  // 手工制茶特写
  drinkRed:   "/imgs/img-109.jpg",  // 门店饮品（深红竖版）
  drinkBrown: "/imgs/img-113.jpg",  // 门店饮品（暖棕竖版）
  yihong:     "/imgs/img-200.jpg",  // 怡红公子瓶装产品图
  xiaoxiang:  "/imgs/img-201.jpg",  // 潇湘妃子瓶装产品图
  characters: "/imgs/img-116.jpg",  // 红楼梦人物线描
} as const;

/* ─── Section: Hero ─── */
function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{
        minHeight: "92vh",
        background: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(204,34,0,0.22) 0%, transparent 65%),
                     radial-gradient(ellipse 50% 40% at 80% 80%, rgba(201,168,76,0.08) 0%, transparent 60%),
                     ${BY_DARK}`,
      }}
    >
      {/* 粒子背景 */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${IMG.particles})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
          opacity: 0.07,
        }}
      />
      {/* 横纹 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${BY_CREAM} 0px, ${BY_CREAM} 1px, transparent 1px, transparent 48px)`,
        }}
      />

      {/* 内容：桌面两栏，移动单列 */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">

        {/* 左侧文字 */}
        <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">
          {/* 印章 Logo */}
          <img
            src={IMG.logoStamp}
            alt="宝玉煮茶"
            className="h-20 object-contain"
            style={{ filter: "drop-shadow(0 0 12px rgba(204,34,0,0.55))" }}
          />

          {/* 主标题 */}
          <div className="space-y-4 max-w-lg">
            <p
              className="text-xs tracking-[0.25em] font-medium"
              style={{ color: `${BY_GOLD}` }}
            >
              FROM DAGUANYUAN BAOYU TEA LAB
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
            >
              宝玉煮茶
              <br />
              <span style={{ color: BY_RED }}>院士轻养茶</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: `${BY_CREAM}99` }}>
              中国工程院院士团队参与研发
              <br />
              红楼文化 · 东方食养 · 院士轻养茶
            </p>
          </div>

          {/* 机构背书 */}
          <div
            className="flex flex-col sm:flex-row items-center gap-3 text-xs"
            style={{ color: `${BY_CREAM}60` }}
          >
            <span
              className="px-3 py-1.5 rounded-full"
              style={{ border: `1px solid ${BY_RED}35`, color: BY_RED, background: `${BY_RED}0D` }}
            >
              中国工程院院士团队
            </span>
            <span
              className="px-3 py-1.5 rounded-full"
              style={{ border: `1px solid ${BY_GOLD}30`, color: `${BY_GOLD}CC`, background: `${BY_GOLD}0A` }}
            >
              国家植物功能成分利用工程技术研究中心
            </span>
          </div>

          {/* 向下探索 */}
          <div
            className="flex flex-col items-center gap-2 opacity-50 animate-bounce"
            style={{ color: BY_CREAM }}
          >
            <div className="w-px h-12" style={{ background: `linear-gradient(to bottom, transparent, ${BY_CREAM})` }} />
            <span className="text-[10px] tracking-widest">向下探索</span>
          </div>
        </div>

        {/* 右侧产品图（桌面） */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `radial-gradient(ellipse at center, ${BY_RED}25 0%, transparent 70%)`,
                transform: "scale(1.2)",
              }}
            />
            <img
              src={IMG.drinkBrown}
              alt="潇湘妃子·院士轻养茶"
              loading="eager"
              className="relative z-10 rounded-2xl object-cover"
              style={{
                maxHeight: "55vh",
                maxWidth: 280,
                border: `1px solid rgba(204,34,0,0.3)`,
                boxShadow: `0 0 60px rgba(204,34,0,0.18)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: 品牌溯源 ─── */
function OriginSection() {
  const ref = useInView();
  return (
    <section
      ref={ref}
      className="opacity-0 py-20 px-6"
      style={{ background: `linear-gradient(180deg, ${BY_DARK} 0%, #120400 100%)` }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-14">
          <p className="text-[11px] tracking-[0.25em]" style={{ color: BY_GOLD }}>BRAND ORIGIN</p>
          <h2
            className="text-2xl lg:text-3xl font-bold"
            style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
          >
            大观茶室，溯源红楼
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* 图像侧 */}
          <div className="relative flex gap-4">
            <img
              src={IMG.craftHands}
              alt="手工制茶"
              loading="lazy"
              className="flex-1 rounded-2xl object-cover"
              style={{
                height: 340,
                border: `1px solid ${BY_RED}25`,
                boxShadow: `0 0 40px rgba(204,34,0,0.10)`,
              }}
            />
            <div className="flex flex-col gap-4 w-28">
              <img
                src={IMG.herbs}
                alt="草本食材"
                loading="lazy"
                className="rounded-xl object-cover flex-1"
                style={{ border: `1px solid ${BY_GOLD}20` }}
              />
              <img
                src={IMG.characters}
                alt="红楼梦人物"
                loading="lazy"
                className="rounded-xl object-cover flex-1"
                style={{ border: `1px solid ${BY_RED}20`, opacity: 0.85 }}
              />
            </div>
          </div>

          {/* 文字侧 */}
          <div className="space-y-6">
            <div
              className="text-xs tracking-wider px-3 py-1.5 rounded-full inline-flex"
              style={{ background: `${BY_RED}15`, color: BY_RED, border: `1px solid ${BY_RED}30` }}
            >
              宝玉煮茶 · 院士轻养茶
            </div>
            <p className="text-sm leading-8" style={{ color: `${BY_CREAM}85` }}>
              宝玉煮茶，取意《红楼梦》"怡红院"与"潇湘馆"，
              以大观园为文化原点，以中国工程院院士团队研究成果为科学基底，
              将东方食养智慧重新注入现代都市的饮茶方式。
            </p>
            <p className="text-sm leading-8" style={{ color: `${BY_CREAM}70` }}>
              "宝玉煮茶"不只是一杯茶——
              它是一种态度：在疲惫的现代生活里，
              以一杯有根据的好茶，温养自己。
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { label: "红楼文化 IP", sub: "大观园 · 怡红 · 潇湘" },
                { label: "东方食养", sub: "草本植物 · 精华调配" },
                { label: "院士团队研发", sub: "科学背书 · 功效验证" },
                { label: "大观茶室", sub: "新型茶空间 · 城市门店" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="px-4 py-3 rounded-xl space-y-1"
                  style={{ background: `${BY_RED}0A`, border: `1px solid ${BY_RED}20` }}
                >
                  <p className="text-xs font-medium" style={{ color: BY_CREAM }}>{item.label}</p>
                  <p className="text-[11px]" style={{ color: `${BY_CREAM}55` }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: 产品系列 ─── */
function ProductsSection() {
  const ref = useInView();
  return (
    <section
      ref={ref}
      className="opacity-0 py-20 px-6"
      style={{ background: "#0E0300" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-14">
          <p className="text-[11px] tracking-[0.25em]" style={{ color: BY_GOLD }}>SIGNATURE SERIES</p>
          <h2
            className="text-2xl lg:text-3xl font-bold"
            style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
          >
            院士轻养茶 · 两款旗舰
          </h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: `${BY_CREAM}60` }}>
            以《红楼梦》人物命名，以院士食养方向为研究路径，各有侧重，各有滋味。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* 怡红公子 */}
          <div
            className="relative overflow-hidden rounded-2xl flex flex-col"
            style={{
              background: `linear-gradient(145deg, #1e0500 0%, #120200 100%)`,
              border: `1px solid ${BY_RED}30`,
              boxShadow: `0 0 40px rgba(204,34,0,0.08)`,
            }}
          >
            {/* 饮品图 */}
            <div className="relative overflow-hidden" style={{ height: 280 }}>
              <img
                src={IMG.yihong}
                alt="怡红公子"
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 40%, #1e0500 100%)`,
                }}
              />
              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] tracking-wider font-medium"
                style={{ background: `${BY_RED}CC`, color: BY_CREAM }}
              >
                怡红公子
              </div>
            </div>

            {/* 文字 */}
            <div className="p-7 space-y-5">
              <div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
                >
                  怡红公子
                </h3>
                <p className="text-xs tracking-wider" style={{ color: BY_RED }}>
                  YIHONG · RED DATE BASE
                </p>
              </div>
              <p className="text-sm leading-7" style={{ color: `${BY_CREAM}75` }}>
                以红枣为基底，结合院士团队长期关注的茶食养研究方向，
                匠心熬煮，东方食养。
                适合应酬后、情绪与身体负担较重时饮用。
              </p>
              <blockquote
                className="text-sm italic pl-4"
                style={{
                  borderLeft: `2px solid ${BY_RED}`,
                  color: `${BY_CREAM}80`,
                  fontFamily: "'Noto Serif SC', serif",
                }}
              >
                "匠心熬煮，东方食养，一杯添元气"
              </blockquote>
              <div className="flex flex-wrap gap-2">
                {["红枣基底", "院士研发", "席后还元", "添元气"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-[11px]"
                    style={{ background: `${BY_RED}12`, color: BY_RED, border: `1px solid ${BY_RED}25` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 潇湘妃子 */}
          <div
            className="relative overflow-hidden rounded-2xl flex flex-col"
            style={{
              background: `linear-gradient(145deg, #180A10 0%, #0E0308 100%)`,
              border: `1px solid ${BY_GOLD}25`,
              boxShadow: `0 0 40px rgba(201,168,76,0.06)`,
            }}
          >
            {/* 饮品图 */}
            <div className="relative overflow-hidden" style={{ height: 280 }}>
              <img
                src={IMG.xiaoxiang}
                alt="潇湘妃子"
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 40%, #180A10 100%)`,
                }}
              />
              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] tracking-wider font-medium"
                style={{ background: `${BY_GOLD}BB`, color: "#2A0810" }}
              >
                潇湘妃子
              </div>
            </div>

            {/* 文字 */}
            <div className="p-7 space-y-5">
              <div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
                >
                  潇湘妃子
                </h3>
                <p className="text-xs tracking-wider" style={{ color: BY_GOLD }}>
                  XIAOXIANG · ROSELLE BASE
                </p>
              </div>
              <p className="text-sm leading-7" style={{ color: `${BY_CREAM}75` }}>
                以洛神花为底，四物调和，无咖温润。
                偏清润内调取向，适合日常养颜、
                调和气色，让身体由内而外漾出光彩。
              </p>
              <blockquote
                className="text-sm italic pl-4"
                style={{
                  borderLeft: `2px solid ${BY_GOLD}`,
                  color: `${BY_CREAM}80`,
                  fontFamily: "'Noto Serif SC', serif",
                }}
              >
                "无咖温润，四物调和，一杯漾出桃花色"
              </blockquote>
              <div className="flex flex-wrap gap-2">
                {["洛神花底", "四物调和", "无咖因", "清润内调"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-[11px]"
                    style={{ background: `${BY_GOLD}0F`, color: BY_GOLD, border: `1px solid ${BY_GOLD}25` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: 且酌简介 + 院士资料 ─── */
function AcademicSection() {
  const ref = useInView();
  return (
    <section
      ref={ref}
      className="opacity-0 py-16 px-6"
      style={{ background: "#0A0200" }}
    >
      <div className="max-w-5xl mx-auto space-y-6">

        {/* 且酌产品简介 */}
        <div
          className="rounded-2xl p-7 flex flex-col sm:flex-row items-start gap-6"
          style={{ background: "#181010", border: `1px solid ${BY_GOLD}20` }}
        >
          <div className="shrink-0 flex flex-col items-center gap-2">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028732695/CdMABrLIqerRhKoR.png"
              alt="且酌"
              className="h-10 object-contain"
              style={{ filter: "brightness(10) sepia(1) saturate(2) hue-rotate(10deg)" }}
            />
            <span className="text-[10px] tracking-widest" style={{ color: `${BY_GOLD}70` }}>且酌®</span>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <span
                className="text-[11px] px-2.5 py-1 rounded-full tracking-wider"
                style={{ background: `${BY_GOLD}12`, color: BY_GOLD, border: `1px solid ${BY_GOLD}25` }}
              >
                联合研发出品
              </span>
            </div>
            <h4 className="font-semibold text-sm" style={{ color: BY_CREAM }}>且酌·植养萃</h4>
            <p className="text-xs leading-6" style={{ color: `${BY_CREAM}65` }}>
              且酌是本次宝玉煮茶·院士轻养茶的联合研发出品方，
              以草本植物精华为核心，基于院士食养研究方向进行产品设计，
              专为应酬场景设计的东方植养饮品。
              席间饮用，以植养的方式关照身体的感受，与宝玉煮茶形成完整应酬养护链路。
            </p>
          </div>
        </div>

        {/* 院士资料卡 */}
        <div
          className="relative overflow-hidden rounded-2xl p-7"
          style={{ background: "#181010", border: `1px solid ${BY_RED}22` }}
        >
          {/* 装饰背景 */}
          <img
            src={IMG.characters}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute -right-4 -top-4 rounded-xl object-cover pointer-events-none"
            style={{ width: 100, height: 100, opacity: 0.2 }}
          />

          <div className="relative z-10 flex flex-col sm:flex-row gap-7">
            {/* 院士信息主体 */}
            <div className="flex-1 space-y-4">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-lg font-bold"
                  style={{ background: `${BY_RED}18`, color: BY_RED, fontFamily: "'Noto Serif SC', serif" }}
                >
                  院
                </div>
                <div>
                  <h4 className="text-base font-bold" style={{ color: BY_CREAM, fontFamily: "'Noto Serif SC', serif" }}>
                    刘仲华
                  </h4>
                  <p className="text-xs mt-0.5" style={{ color: BY_RED }}>中国工程院院士（2019年当选）</p>
                  <p className="text-[11px] mt-1 leading-5" style={{ color: `${BY_CREAM}60` }}>
                    湖南师范大学校长 · 国家植物功能成分利用工程技术研究中心主任
                  </p>
                </div>
              </div>
              <p className="text-xs leading-6" style={{ color: `${BY_CREAM}70` }}>
                深耕植物功能成分研究<strong style={{ color: BY_CREAM }}>三十年</strong>，
                主攻茶叶加工理论与技术、茶叶深加工与资源利用、茶与健康及植物功能成分利用。
                创新了黑茶加工理论技术体系，推进中国黑茶产业跨越式发展；
                创新植物功能成分绿色高效分离纯化与利用技术体系。
              </p>
            </div>

            {/* 数字荣誉栏 */}
            <div className="sm:w-48 grid grid-cols-2 sm:grid-cols-1 gap-3 content-start">
              {[
                { num: "2项", label: "国家科技进步二等奖" },
                { num: "70+", label: "发明专利授权" },
                { num: "160+", label: "SCI论文" },
                { num: "15部", label: "学术专著" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg px-3 py-2.5 text-center"
                  style={{ background: `${BY_RED}0C`, border: `1px solid ${BY_RED}1A` }}
                >
                  <p className="text-sm font-bold" style={{ color: BY_RED }}>{item.num}</p>
                  <p className="text-[10px] leading-4 mt-0.5" style={{ color: `${BY_CREAM}55` }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 授权说明 */}
          <div
            className="relative z-10 mt-5 pt-4 flex flex-wrap gap-3"
            style={{ borderTop: `1px solid ${BY_RED}18` }}
          >
            {[
              "独家授权合作",
              "授权期限至2030年",
              "3个国家级科研平台",
              "何梁何利科学与技术进步奖",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-1 rounded"
                style={{ background: `${BY_RED}0A`, color: `${BY_CREAM}70`, border: `1px solid ${BY_RED}18` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: 科研背书 ─── */
function ScienceSection() {
  const ref = useInView();
  return (
    <section
      ref={ref}
      className="opacity-0 py-20 px-6"
      style={{ background: `linear-gradient(180deg, #0E0300 0%, ${BY_DARK} 100%)` }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-14">
          <p className="text-[11px] tracking-[0.25em]" style={{ color: BY_GOLD }}>SCIENCE BACKED</p>
          <h2
            className="text-2xl lg:text-3xl font-bold"
            style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
          >
            院士团队，国家级研究中心
          </h2>
          <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: `${BY_CREAM}60` }}>
            宝玉煮茶不是凭空而来的消费品——<br />
            背后站着的，是真正在做食养研究的科研力量。
          </p>
        </div>

        {/* 两栏背书 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div
            className="relative overflow-hidden rounded-2xl p-8 space-y-5"
            style={{ background: "#141414", border: `1px solid ${BY_RED}25` }}
          >
            <img
              src={IMG.characters}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute -top-3 -right-3 rounded-lg object-cover"
              style={{ width: 90, height: 90, opacity: 0.4 }}
            />
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-base font-bold"
                style={{ background: `${BY_RED}18`, color: BY_RED, fontFamily: "'Noto Serif SC', serif" }}
              >
                院
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: BY_CREAM }}>中国工程院院士团队</h3>
                <p className="text-xs leading-relaxed" style={{ color: `${BY_CREAM}65` }}>
                  由中国工程院院士团队参与研发，
                  将院士多年茶食养研究方向转化为大众可及的功能茶饮，
                  让科研成果走进日常生活。
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["院士团队参与研发", "茶食养研究方向", "功效经科研验证", "东方草本智慧"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs"
                  style={{ background: `${BY_RED}09`, color: `${BY_CREAM}80` }}
                >
                  <span style={{ color: BY_RED }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-2xl p-8 space-y-5"
            style={{ background: "#141414", border: `1px solid ${BY_GOLD}20` }}
          >
            <img
              src={IMG.herbs}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{ opacity: 0.07 }}
            />
            <div className="relative z-10 flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-base font-bold"
                style={{ background: `${BY_GOLD}15`, color: BY_GOLD, fontFamily: "'Noto Serif SC', serif" }}
              >
                国
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: BY_CREAM }}>国家植物功能成分利用工程技术研究中心</h3>
                <p className="text-xs leading-relaxed" style={{ color: `${BY_CREAM}65` }}>
                  联合国家级研究中心，深度提取草本植物精华调配，
                  具备解酒提神、美容养颜等多重功效，
                  科学配伍，安全可靠。
                </p>
              </div>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-2">
              {["国家级研究机构", "草本精华深度提取", "解酒提神功效", "美容养颜方向"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs"
                  style={{ background: `${BY_GOLD}08`, color: `${BY_CREAM}75` }}
                >
                  <span style={{ color: BY_GOLD }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 核心主张 Banner */}
        <div
          className="relative overflow-hidden rounded-2xl p-8 text-center space-y-3"
          style={{
            background: `linear-gradient(135deg, ${BY_RED}12 0%, ${BY_GOLD}08 100%)`,
            border: `1px solid ${BY_RED}25`,
          }}
        >
          <img
            src={IMG.teapot}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-2xl"
            style={{ opacity: 0.06 }}
          />
          <p className="relative z-10 text-base font-medium" style={{ color: BY_CREAM, fontFamily: "'Noto Serif SC', serif" }}>
            "以茶载道，以科学为根基"
          </p>
          <p className="relative z-10 text-xs leading-relaxed max-w-lg mx-auto" style={{ color: `${BY_CREAM}65` }}>
            由院士团队及「国家植物功能成分利用工程技术研究中心」携手研发，
            深度提取草本植物精华调配而成的特调饮品，
            具备解酒提神、美容养颜等功效。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: 大观茶室 ─── */
function StoreSection() {
  const ref = useInView();
  return (
    <section
      ref={ref}
      className="opacity-0 py-20 px-6"
      style={{ background: BY_DARK }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-14">
          <p className="text-[11px] tracking-[0.25em]" style={{ color: BY_GOLD }}>STORE CONCEPT</p>
          <h2
            className="text-2xl lg:text-3xl font-bold"
            style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
          >
            大观茶室
          </h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: `${BY_CREAM}60` }}>
            不只是一家茶饮店——是一个可以品茶、办公、小聚、独处的理想场所。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* 图像 */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden" style={{ height: 360 }}>
            <img
              src={IMG.store}
              alt="大观茶室"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${BY_DARK}CC 0%, transparent 60%)`,
              }}
            />
            <div className="absolute bottom-5 left-5 right-5">
              <p
                className="text-lg font-bold"
                style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
              >
                大观茶室
              </p>
              <p className="text-xs" style={{ color: BY_GOLD }}>DAGUANYUAN TEA SPACE</p>
            </div>
          </div>

          {/* 文字内容 */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-sm leading-8" style={{ color: `${BY_CREAM}80` }}>
              以考究的空间设计、高性价比的茶为核心，
              打造集茶饮、文创零售、文化互动于一体的新型茶空间。
              无论是品茶、办公、小聚还是独处，
              大观茶室都是你的理想去处。
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "茶", title: "精品茶饮", desc: "怡红公子、潇湘妃子等院士研发特调，现场出品" },
                { icon: "创", title: "文创零售", desc: "红楼文化主题文创，每一件都是可带走的记忆" },
                { icon: "文", title: "文化互动", desc: "茶道体验、红楼文化展陈，沉浸式东方美学空间" },
                { icon: "荐", title: "大众点评首月上榜", desc: "大融城、万柳华联、清河万象汇等门店均获认可" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-4 space-y-2"
                  style={{ background: `${BY_RED}0A`, border: `1px solid ${BY_RED}20` }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-7 h-7 rounded flex items-center justify-center text-xs font-bold"
                      style={{ background: `${BY_RED}20`, color: BY_RED }}
                    >
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium" style={{ color: BY_CREAM }}>{item.title}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed" style={{ color: `${BY_CREAM}55` }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 城市门店标注 */}
            <div
              className="flex flex-wrap gap-2"
            >
              {["大融城", "万柳华联", "清河万象汇"].map((store) => (
                <span
                  key={store}
                  className="px-3 py-1.5 rounded-full text-[11px] tracking-wide"
                  style={{ background: `${BY_GOLD}0F`, color: BY_GOLD, border: `1px solid ${BY_GOLD}25` }}
                >
                  📍 {store}
                </span>
              ))}
            </div>
          </div>
        </div>
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
        background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${BY_RED}18 0%, transparent 70%), ${BY_DARK}`,
      }}
    >
      <img
        src={IMG.drinkRed}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.07 }}
      />
      <img
        src={IMG.particles}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.05, mixBlendMode: "screen" } as React.CSSProperties}
      />

      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        {/* 印章 */}
        <img
          src={IMG.logoStamp}
          alt="宝玉煮茶"
          className="h-16 object-contain mx-auto"
          style={{ filter: "drop-shadow(0 0 10px rgba(204,34,0,0.5))" }}
        />

        <div className="space-y-4">
          <h2
            className="text-3xl lg:text-4xl font-bold"
            style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
          >
            宝玉煮茶
            <br />
            <span style={{ color: BY_RED }}>以院士茶载轻养道</span>
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: `${BY_CREAM}60` }}>
            中国工程院院士团队参与研发 · 红楼文化东方食养
            <br />
            一杯好茶，温养自己。
          </p>
        </div>

        {/* 分割线 */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1" style={{ background: `linear-gradient(to right, transparent, ${BY_RED}50)` }} />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: BY_RED }}
          />
          <div className="h-px flex-1" style={{ background: `linear-gradient(to left, transparent, ${BY_RED}50)` }} />
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.daguanyuan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${BY_RED} 0%, #8B1A00 100%)`,
              color: BY_CREAM,
              boxShadow: `0 4px 24px rgba(204,34,0,0.35)`,
            }}
          >
            探索宝玉煮茶 →
          </a>
          <a
            href="https://map.baidu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{
              background: "transparent",
              color: `${BY_CREAM}75`,
              border: `1px solid ${BY_GOLD}35`,
            }}
          >
            找附近大观茶室 →
          </a>
        </div>

        {/* Fine print */}
        <p className="text-[10px] leading-relaxed" style={{ color: `${BY_CREAM}28` }}>
          *本产品均为普通食品（固体饮料）。适合作为日常饮用，不作为任何医疗或功能性承诺。
          宝玉煮茶·院士轻养茶由且酌联合研发出品，相关科研信息仅供参考。
        </p>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function ColabBaoyuTeaPage() {
  return (
    <div style={{ background: BY_DARK }}>
      <HeroSection />
      <OriginSection />
      <ProductsSection />
      <AcademicSection />
      <ScienceSection />
      <StoreSection />
      <CTASection />
    </div>
  );
}

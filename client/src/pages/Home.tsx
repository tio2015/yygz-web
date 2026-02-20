/*
 * 养生将军 · 本草新解 - 首页
 * Design: 深色投资决策界面，翠绿色主调
 * 内容：品类教育 + 科普，不做产品功效声明
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Leaf,
  Microscope,
  Network,
  Beaker,
  FlaskConical,
  ArrowRight,
  ExternalLink,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Wine,
  Shield,
  Moon,
  Sparkles,
  Building2,
  TrendingUp,
  Globe,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation, Footer } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import {
  HOME_DATA,
  HERO_IMAGE,
  INGREDIENT_IMAGES,
  REFERENCES,
} from "@/lib/data";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const ICON_MAP: Record<string, React.ElementType> = {
  leaf: Leaf,
  microscope: Microscope,
  network: Network,
};

const ROLE_COLORS: Record<string, string> = {
  君: "bg-red-500/20 text-red-400 border-red-500/30",
  臣: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  佐: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

const PATH_COLORS: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/30",
    badge: "bg-amber-500/20 text-amber-300",
  },
  sky: {
    bg: "bg-sky-500/10",
    text: "text-sky-400",
    border: "border-sky-500/30",
    badge: "bg-sky-500/20 text-sky-300",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    badge: "bg-emerald-500/20 text-emerald-300",
  },
};

const EFFICACY_CARDS = [
  { id: "jiujiu", label: "植物分子与酒精代谢", icon: Wine, color: "emerald", desc: "NAD+辅酶再生、ADH/ALDH双激活、多靶点协同" },
  { id: "hugan", label: "植物分子与肝脏保护", icon: Shield, color: "amber", desc: "抗氧化应激、NF-κB通路调控、抗纤维化" },
  { id: "zhumian", label: "植物分子与睡眠调节", icon: Moon, color: "indigo", desc: "GABA受体调节、HPA轴应激、适应原" },
  { id: "yangyan", label: "植物分子与皮肤健康", icon: Sparkles, color: "rose", desc: "内源性抗氧化、微循环改善、细胞修复" },
];

const COLOR_MAP: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/30" },
  rose: { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/30" },
  red: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/30" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/30" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
  yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30" },
  green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/30" },
  teal: { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/30" },
};

/* ─── Product Scene Cards ─── */
const SCENE_CARDS = [
  {
    icon: Wine,
    title: "酒桌自在",
    desc: "应酬是中国商业的潜规则，你的身体需要科学的准备",
    tags: "NAD+辅酶再生 · ADH/ALDH双激活",
    href: "/efficacy/jiujiu",
    color: "amber",
  },
  {
    icon: Moon,
    title: "安然入睡",
    desc: "高质量的睡眠不靠安眠药，植物分子有更温和的方式",
    tags: "GABA受体调节 · HPA轴应激 · 适应原",
    href: "/efficacy/zhumian",
    color: "indigo",
  },
  {
    icon: Sparkles,
    title: "由内焕颜",
    desc: "真正的年轻从细胞内部开始，而不是涂在脸上",
    tags: "内源性抗氧化 · 微循环改善 · 细胞修复",
    href: "/efficacy/yangyan",
    color: "rose",
  },
];

/* ─── Formula Logic Data ─── */
const FORMULA_LOGIC = [
  {
    ring: "君",
    ringLabel: "核心主力",
    color: "red",
    herbs: "葛根、人参",
    desc: "提供核心活性分子，主攻目标通路",
  },
  {
    ring: "臣",
    ringLabel: "辅助增强",
    color: "amber",
    herbs: "高良姜、灵芝",
    desc: "增强君药效果，激活多靶点协同",
  },
  {
    ring: "佐",
    ringLabel: "协助兼治",
    color: "emerald",
    herbs: "年份茯砖茶",
    desc: "辅助代谢通路，平衡整体反应",
  },
  {
    ring: "使",
    ringLabel: "调和引导",
    color: "teal",
    herbs: "青苹果、罗汉果",
    desc: "调和配方，提升整体协调性",
  },
];

/* ─── Hero Section ─── */
function HeroSection() {
  const { hero } = HOME_DATA;
  return (
    <section className="relative overflow-hidden min-h-[85vh] sm:min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-25 brightness-110 contrast-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div className="relative container pt-20 pb-16 sm:pt-28 sm:pb-24">
        <motion.div {...fadeInUp()} className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-1 max-w-[40px] bg-emerald-400" />
            <span className="text-xs tracking-[0.2em] uppercase text-emerald-400 font-[var(--font-heading)] font-medium">
              {hero.tagline}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] leading-[1.1] mb-5 tracking-tight">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground/90 font-[var(--font-heading)] mb-4">
            七味食药同源 × 现代植物提取 × 君臣佐使配方
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-[var(--font-body)]">
            {hero.description}
          </p>
          <p className="text-sm text-emerald-400/80 mt-4 font-[var(--font-body)]">
            养生将军，从科研到产品的全链路实践者
          </p>
        </motion.div>

        <motion.div {...fadeInUp(0.2)} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
          {hero.stats.map((stat, i) => (
            <Card key={i} className="bg-card/60 backdrop-blur-sm border-border/50">
              <CardContent className="p-3 sm:p-4">
                <div className="text-lg sm:text-2xl font-bold font-[var(--font-heading)] text-emerald-400">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── What Is Plant Extraction ─── */
function WhatIsSection() {
  const { whatIs } = HOME_DATA;
  return (
    <section id="what-is" className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Beaker className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            {whatIs.title}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl">{whatIs.subtitle}</p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-5">
        {whatIs.points.map((point, i) => {
          const Icon = ICON_MAP[point.icon] || Leaf;
          return (
            <motion.div key={i} {...fadeInUp(i * 0.1)}>
              <Card className="bg-card/60 border-border/30 h-full hover:border-emerald-500/30 transition-colors">
                <CardContent className="p-5 sm:p-6">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="font-bold font-[var(--font-heading)] mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Three Paths Comparison ─── */
function ThreePathsSection() {
  const { threePaths } = HOME_DATA;
  return (
    <section id="three-paths" className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <FlaskConical className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            {threePaths.title}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">{threePaths.subtitle}</p>
      </motion.div>

      <Tabs defaultValue="extraction" className="w-full">
        <TabsList className="w-full justify-start bg-card/40 border border-border/30 mb-6 flex-wrap h-auto gap-1 p-1">
          {threePaths.paths.map((p) => {
            const c = PATH_COLORS[p.color];
            return (
              <TabsTrigger
                key={p.id}
                value={p.id}
                className={`text-xs data-[state=active]:${c.text} data-[state=active]:${c.bg}`}
              >
                <span className={`w-2 h-2 rounded-full mr-1.5 ${c.text.replace("text-", "bg-")}`} />
                {p.name}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {threePaths.paths.map((path) => {
          const c = PATH_COLORS[path.color];
          return (
            <TabsContent key={path.id} value={path.id}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <Card className={`${c.bg} border ${c.border}`}>
                  <CardContent className="p-5 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
                      <h3 className={`text-xl font-bold font-[var(--font-heading)] ${c.text}`}>
                        {path.name}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${c.badge} w-fit`}>
                        {path.era}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      方法：{path.method}
                    </p>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {path.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
                          优势
                        </h4>
                        <ul className="space-y-2">
                          {path.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-emerald-400 mt-1 text-xs">+</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-3">
                          局限
                        </h4>
                        <ul className="space-y-2">
                          {path.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-red-400 mt-1 text-xs">-</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 pt-5 border-t border-border/20 grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs text-muted-foreground">有效成分提取率</span>
                        <div className={`text-lg font-bold font-[var(--font-heading)] ${c.text}`}>
                          {path.extractionRate}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">关键损失</span>
                        <div className="text-sm text-muted-foreground">{path.keyLoss}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
}

/* ─── Efficacy Research Cards ─── */
function EfficacySection() {
  return (
    <section id="research" className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            前沿科学研究
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl">
          植物活性分子在多个健康维度上的科学研究正在快速推进，以下是四个重点方向
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {EFFICACY_CARDS.map((card, i) => {
          const colors = COLOR_MAP[card.color] || COLOR_MAP.emerald;
          const Icon = card.icon;
          return (
            <motion.div key={card.id} {...fadeInUp(i * 0.1)}>
              <Link href={`/efficacy/${card.id}`}>
                <Card
                  className={`${colors.bg} border ${colors.border} h-full hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
                >
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${colors.bg} pointer-events-none`} />
                  <CardContent className="p-5 sm:p-6 relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center ring-2 ${colors.border} ring-offset-1 ring-offset-background`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                    </div>
                    <h3 className={`font-bold font-[var(--font-heading)] mb-2 ${colors.text} text-base sm:text-lg`}>
                      {card.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {card.desc}
                    </p>
                    {/* Always-visible click prompt */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} border ${colors.border} group-hover:border-opacity-80 transition-all`}>
                      <span className={`text-xs font-medium ${colors.text}`}>点击查看研究详情</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${colors.text} group-hover:translate-x-1 transition-transform duration-300`} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Market Gap ─── */
function MarketGapSection() {
  const { marketGap } = HOME_DATA;
  return (
    <section id="market" className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            {marketGap.title}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl">{marketGap.subtitle}</p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {marketGap.stats.map((stat, i) => (
          <motion.div key={i} {...fadeInUp(i * 0.1)}>
            <Card className="bg-card/60 border-border/30">
              <CardContent className="p-5">
                <div className="text-2xl sm:text-3xl font-bold font-[var(--font-heading)] text-emerald-400">
                  {stat.value}
                  <span className="text-sm text-muted-foreground ml-1">{stat.unit}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                <div className="text-xs text-emerald-400/70 mt-1">{stat.growth}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {marketGap.paradox.map((item, i) => (
          <motion.div key={i} {...fadeInUp(i * 0.1)}>
            <Card className="bg-card/40 border-border/20 h-full">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-emerald-400 font-bold font-[var(--font-heading)] text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-bold font-[var(--font-heading)] text-sm">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Formula Logic Visualization ─── */
function FormulaLogicSection() {
  return (
    <motion.div {...fadeInUp()} className="mb-10">
      <div className="flex items-center gap-3 mb-2">
        <Network className="w-5 h-5 text-emerald-400" />
        <h3 className="text-lg sm:text-xl font-bold font-[var(--font-heading)]">
          千年配方智慧 × 现代科学验证
        </h3>
      </div>

      {/* Concentric ring visualization */}
      <div className="relative mt-8 mb-8">
        {/* Mobile: vertical layout */}
        <div className="sm:hidden space-y-3">
          {FORMULA_LOGIC.map((item, i) => {
            const colors = COLOR_MAP[item.color] || COLOR_MAP.emerald;
            return (
              <div key={i} className={`${colors.bg} border ${colors.border} rounded-lg p-4`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${
                    item.ring === "君" ? ROLE_COLORS["君"] :
                    item.ring === "臣" ? ROLE_COLORS["臣"] :
                    "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                  }`}>
                    {item.ring} · {item.ringLabel}
                  </span>
                  <span className={`font-bold font-[var(--font-heading)] ${colors.text}`}>
                    {item.herbs}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Desktop: concentric ring visualization */}
        <div className="hidden sm:block">
          <div className="relative w-full max-w-2xl mx-auto" style={{ aspectRatio: "2/1" }}>
            {/* Rings */}
            {FORMULA_LOGIC.map((item, i) => {
              const colors = COLOR_MAP[item.color] || COLOR_MAP.emerald;
              const sizes = ["w-44 h-44", "w-64 h-64", "w-80 h-80", "w-96 h-96"];
              const positions = [
                { left: "50%", top: "50%", transform: "translate(-50%, -50%)" },
                { left: "50%", top: "50%", transform: "translate(-50%, -50%)" },
                { left: "50%", top: "50%", transform: "translate(-50%, -50%)" },
                { left: "50%", top: "50%", transform: "translate(-50%, -50%)" },
              ];
              return (
                <div
                  key={i}
                  className={`absolute ${sizes[i]} rounded-full border ${colors.border} ${colors.bg}`}
                  style={positions[i]}
                />
              );
            })}

            {/* Labels positioned around rings */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-semibold">
                君 · 核心主力
              </span>
              <p className="text-sm font-bold font-[var(--font-heading)] text-red-400 mt-1">葛根、人参</p>
              <p className="text-xs text-muted-foreground mt-0.5">主攻目标通路</p>
            </div>

            <div className="absolute left-[12%] top-1/2 -translate-y-1/2 text-left z-10">
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-semibold">
                臣 · 辅助增强
              </span>
              <p className="text-sm font-bold font-[var(--font-heading)] text-amber-400 mt-1">高良姜、灵芝</p>
              <p className="text-xs text-muted-foreground mt-0.5">多靶点协同</p>
            </div>

            <div className="absolute right-[8%] top-[25%] text-right z-10">
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                佐 · 协助兼治
              </span>
              <p className="text-sm font-bold font-[var(--font-heading)] text-emerald-400 mt-1">年份茯砖茶</p>
              <p className="text-xs text-muted-foreground mt-0.5">平衡整体反应</p>
            </div>

            <div className="absolute right-[5%] bottom-[15%] text-right z-10">
              <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30 font-semibold">
                使 · 调和引导
              </span>
              <p className="text-sm font-bold font-[var(--font-heading)] text-teal-400 mt-1">青苹果、罗汉果</p>
              <p className="text-xs text-muted-foreground mt-0.5">提升整体协调性</p>
            </div>
          </div>
        </div>
      </div>

      <Card className="bg-emerald-500/5 border-emerald-500/20">
        <CardContent className="p-4 sm:p-5">
          <p className="text-sm text-muted-foreground leading-relaxed text-center font-[var(--font-body)]">
            每一味都有明确分工的精准配伍。现代分子药理学研究证实，多组分协同效应（Entourage Effect）的整体效果大于各部分之和。
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* ─── Formula Section ─── */
function FormulaSection() {
  const { formula } = HOME_DATA;
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="formula" className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Leaf className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            {formula.title}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl">{formula.subtitle}</p>
      </motion.div>

      {/* Formula Logic Visualization */}
      <FormulaLogicSection />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {formula.ingredients.map((ing, i) => {
          const isExpanded = expanded === i;
          const colors = COLOR_MAP[ing.color] || COLOR_MAP.emerald;
          const imgSrc = INGREDIENT_IMAGES[ing.imageKey];
          return (
            <motion.div key={i} {...fadeInUp(i * 0.05)}>
              <Card
                className={`border-border/30 h-full transition-all duration-300 overflow-hidden ${
                  isExpanded ? `${colors.border} border` : "hover:border-border/50"
                }`}
              >
                {imgSrc && (
                  <div className="h-32 overflow-hidden">
                    <img src={imgSrc} alt={ing.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${ROLE_COLORS[ing.role]}`}
                      >
                        {ing.role} · {ing.roleLabel}
                      </span>
                      <h3 className="font-bold font-[var(--font-heading)]">{ing.name}</h3>
                    </div>
                    <button
                      onClick={() => setExpanded(isExpanded ? null : i)}
                      className="p-1 rounded hover:bg-accent/50 transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-muted-foreground italic mb-3">{ing.tradition}</p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {ing.molecules.map((mol, j) => (
                      <span
                        key={j}
                        className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                      >
                        {mol}
                      </span>
                    ))}
                  </div>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="border-t border-border/20 pt-3 mt-1"
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {ing.modernScience}
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Product Scenes Section (NEW) ─── */
function ProductScenesSection() {
  return (
    <section id="scenes" className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Leaf className="w-5 h-5 text-amber-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            养生将军 · 让科学走进生活
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl">
          以现代植物提取技术，将七味食药同源原料的活性分子完整保留，按君臣佐使原则科学配伍
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-5">
        {SCENE_CARDS.map((card, i) => {
          const colors = COLOR_MAP[card.color] || COLOR_MAP.amber;
          const Icon = card.icon;
          return (
            <motion.div key={i} {...fadeInUp(i * 0.1)}>
              <Link href={card.href}>
                <Card
                  className={`border ${colors.border} h-full hover:scale-[1.02] transition-all duration-300 group bg-gradient-to-b from-${card.color === "amber" ? "amber" : card.color === "indigo" ? "indigo" : "rose"}-500/5 to-transparent`}
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                    </div>
                    <h3 className={`text-lg font-bold font-[var(--font-heading)] mb-2 ${colors.text}`}>
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {card.desc}
                    </p>
                    <div className={`text-xs px-3 py-1.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border} inline-block`}>
                      {card.tags}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Overseas Section ─── */
function OverseasSection() {
  const { overseas } = HOME_DATA;
  return (
    <section id="overseas" className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Globe className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            {overseas.title}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl">{overseas.subtitle}</p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-5 mb-8">
        {overseas.brands.map((brand, i) => {
          const colors = COLOR_MAP[brand.color] || COLOR_MAP.emerald;
          return (
            <motion.div key={i} {...fadeInUp(i * 0.1)}>
              <Card className={`${colors.bg} border ${colors.border} h-full`}>
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{brand.flag === "JP" ? "🇯🇵" : brand.flag === "KR" ? "🇰🇷" : "🇩🇪"}</span>
                    <div>
                      <h3 className={`font-bold font-[var(--font-heading)] ${colors.text}`}>
                        {brand.brand}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {brand.country} · 创立于{brand.founded}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">年营收</span>
                      <span className={`font-semibold ${colors.text}`}>{brand.revenue}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">市场规模</span>
                      <span className="text-foreground">{brand.marketSize}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">核心产品</span>
                      <span className="text-foreground text-right max-w-[60%]">{brand.core}</span>
                    </div>
                  </div>

                  <div className={`text-xs px-3 py-1.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border} text-center mb-4`}>
                    {brand.highlight}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{brand.story}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div {...fadeInUp(0.3)}>
        <Card className="bg-emerald-500/5 border-emerald-500/20">
          <CardContent className="p-5 sm:p-6 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {overseas.insight}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

/* ─── Labs Preview ─── */
function LabsPreview() {
  return (
    <section id="labs" className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            科研平台
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl">
          植物提取不是在厨房里煮茶，是需要国家级科研平台支撑的系统工程
        </p>
      </motion.div>

      <motion.div {...fadeInUp(0.1)}>
        <Card className="bg-card/60 border-border/30 hover:border-emerald-500/30 transition-colors">
          <CardContent className="p-5 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                国家级
              </span>
              <h3 className="font-bold font-[var(--font-heading)]">
                国家植物功能成分利用工程技术研究中心
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              国内植物功能成分利用领域唯一的国家工程技术研究中心。由中国工程院院士刘仲华教授领衔，承担国家重点研发计划、973计划、863计划等省级及以上科研项目200余项，获国家科技进步二等奖3项。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {[
                { value: "200+", label: "省级以上科研项目" },
                { value: "100+", label: "授权发明专利" },
                { value: "3项", label: "国家科技进步二等奖" },
                { value: "200+", label: "SCI/EI论文" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-lg font-bold font-[var(--font-heading)] text-emerald-400">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
            <Link
              href="/labs"
              className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              查看全部科研平台
              <ArrowRight className="w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

/* ─── References ─── */
function ReferencesSection() {
  return (
    <section id="references" className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            参考文献
          </h2>
        </div>
      </motion.div>

      <div className="space-y-3">
        {REFERENCES.map((ref, i) => (
          <motion.div key={ref.id} {...fadeInUp(i * 0.03)}>
            <div className="flex items-start gap-3 text-sm">
              <span className="text-emerald-400 font-mono text-xs mt-0.5 shrink-0">
                [{ref.id}]
              </span>
              <div className="text-muted-foreground leading-relaxed">
                <span>{ref.authors} </span>
                {ref.url ? (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                  >
                    {ref.title}
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                ) : (
                  <span className="text-foreground">{ref.title}</span>
                )}
                <span>
                  . <em>{ref.journal}</em>, {ref.year}.
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="养生将军·本草新解 | 用科学重新理解植物的力量"
        description="养生将军以现代植物提取技术，完整保留天然活性分子，按君臣佐使原则科学配伍。从一片叶子到一个分子，用前沿科学重新解读千年本草智慧。"
        path="/"
      />
      <Navigation />
      <main>
        <HeroSection />
        <WhatIsSection />
        <ThreePathsSection />
        <EfficacySection />
        <FormulaSection />
        <ProductScenesSection />
        <LabsPreview />
        <MarketGapSection />
        <OverseasSection />
        <ReferencesSection />
      </main>
      <Footer />
    </div>
  );
}

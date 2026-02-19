/*
 * 植物提取科普知识库
 * Design: Dark investor-grade, emerald accent
 * Sections: Hero → 什么是植物提取 → 三条路径对比 → 国家实验室 → C端市场空白 → 七味配方 → 参考文献
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Microscope,
  Network,
  FlaskConical,
  Building2,
  TrendingUp,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Check,
  AlertTriangle,
  Globe,
  ArrowRight,
  Beaker,
  Factory,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  HERO_IMAGE,
  WHAT_IS,
  THREE_PATHS,
  LABS,
  MARKET_GAP,
  FORMULA,
  REFERENCES,
} from "@/lib/data";

/* ─── Helpers ─── */
function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, delay, ease: [0, 0, 0.2, 1] as const },
  };
}

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

/* ─── Navigation ─── */
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#what-is", label: "植物提取" },
    { href: "#three-paths", label: "三条路径" },
    { href: "#labs", label: "科研平台" },
    { href: "#market", label: "市场洞察" },
    { href: "#formula", label: "七味配方" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-14">
        <a href="#" className="flex items-center gap-2">
          <Leaf className="w-5 h-5 text-emerald-400" />
          <span className="font-bold font-[var(--font-heading)] text-sm">
            植物提取科普
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="sm:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:hidden bg-background/95 backdrop-blur-lg border-b border-border/50 px-4 pb-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>
      <div className="relative container pt-20 pb-16 sm:pt-32 sm:pb-28">
        <motion.div {...fadeInUp()} className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-1 max-w-[40px] bg-emerald-400" />
            <span className="text-xs tracking-[0.2em] uppercase text-emerald-400 font-[var(--font-heading)] font-medium">
              Science of Botanicals
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] leading-[1.1] mb-5 tracking-tight">
            植物提取
            <br />
            <span className="text-muted-foreground">被忽略的科学</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-[var(--font-body)]">
            中国拥有全球最强的植物提取产业链，却几乎没有面向消费者的品牌。这里用分子药理学的语言，讲清楚植物提取到底在做什么，和传统煎制、化学合成有什么本质区别。
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp(0.2)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10"
        >
          {[
            { value: "50%+", label: "已批准药物源于天然产物" },
            { value: "70-90%", label: "现代提取有效成分利用率" },
            { value: "358亿", label: "全球植物提取物市场(美元)" },
            { value: "≈0", label: "中国C端植物提取品牌" },
          ].map((stat, i) => (
            <Card
              key={i}
              className="bg-card/60 backdrop-blur-sm border-border/50"
            >
              <CardContent className="p-3 sm:p-4">
                <div className="text-lg sm:text-2xl font-bold font-[var(--font-heading)] text-emerald-400">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
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
  return (
    <section id="what-is" className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Beaker className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            {WHAT_IS.title}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl">
          {WHAT_IS.subtitle}
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-5">
        {WHAT_IS.points.map((point, i) => {
          const Icon = ICON_MAP[point.icon] || Leaf;
          return (
            <motion.div key={i} {...fadeInUp(i * 0.1)}>
              <Card className="bg-card/60 border-border/50 h-full hover:border-emerald-500/30 transition-colors">
                <CardContent className="p-5 sm:p-6">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="font-bold font-[var(--font-heading)] mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.desc}
                  </p>
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
  const [activeTab, setActiveTab] = useState("extraction");

  return (
    <section id="three-paths" className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <FlaskConical className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            {THREE_PATHS.title}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl">
          {THREE_PATHS.subtitle}
        </p>
      </motion.div>

      {/* Path Cards */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-muted/30 mb-6 w-full sm:w-auto flex">
          {THREE_PATHS.paths.map((p) => (
            <TabsTrigger
              key={p.id}
              value={p.id}
              className="flex-1 sm:flex-none text-xs sm:text-sm"
            >
              <span className={`mr-1.5 ${PATH_COLORS[p.color].text}`}>●</span>
              {p.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {THREE_PATHS.paths.map((path) => {
          const colors = PATH_COLORS[path.color];
          return (
            <TabsContent key={path.id} value={path.id}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`${colors.bg} border ${colors.border}`}>
                  <CardContent className="p-5 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3
                            className={`text-lg sm:text-xl font-bold font-[var(--font-heading)] ${colors.text}`}
                          >
                            {path.name}
                          </h3>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${colors.badge}`}
                          >
                            {path.era}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">
                          方法：{path.method}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {path.description}
                        </p>
                      </div>
                      <div className="flex gap-4 sm:gap-6">
                        <div className="text-center">
                          <div
                            className={`text-xl sm:text-2xl font-bold font-[var(--font-heading)] ${colors.text}`}
                          >
                            {path.extractionRate}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            提取率
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                          优势
                        </h4>
                        <div className="space-y-2">
                          {path.pros.map((pro: string, i: number) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                              <span className="text-sm">{pro}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                          局限
                        </h4>
                        <div className="space-y-2">
                          {path.cons.map((con: string, i: number) => (
                            <div key={i} className="flex items-start gap-2">
                              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {con}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-border/30">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">
                          关键差异：
                        </span>{" "}
                        {path.keyLoss}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          );
        })}
      </Tabs>

      {/* Comparison Table */}
      <motion.div {...fadeInUp(0.2)} className="mt-10">
        <h3 className="text-sm font-bold font-[var(--font-heading)] mb-4">
          核心指标对比
        </h3>

        {/* Desktop table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-3 pr-4 text-muted-foreground font-medium">
                  指标
                </th>
                <th className="text-left py-3 px-4 text-amber-400 font-medium">
                  传统煎制
                </th>
                <th className="text-left py-3 px-4 text-sky-400 font-medium">
                  化学合成
                </th>
                <th className="text-left py-3 px-4 text-emerald-400 font-medium">
                  现代植物提取
                </th>
              </tr>
            </thead>
            <tbody>
              {THREE_PATHS.comparisonTable.map((row, i) => (
                <tr key={i} className="border-b border-border/20">
                  <td className="py-3 pr-4 font-medium text-foreground">
                    {row.metric}
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">
                    {row.traditional}
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">
                    {row.synthesis}
                  </td>
                  <td className="py-3 px-4 text-emerald-400 font-medium">
                    {row.extraction}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="sm:hidden space-y-3">
          {THREE_PATHS.comparisonTable.map((row, i) => (
            <Card key={i} className="bg-card/40 border-border/30">
              <CardContent className="p-3">
                <div className="font-medium text-sm mb-2">{row.metric}</div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <div className="text-amber-400 font-medium mb-0.5">
                      煎制
                    </div>
                    <div className="text-muted-foreground">
                      {row.traditional}
                    </div>
                  </div>
                  <div>
                    <div className="text-sky-400 font-medium mb-0.5">合成</div>
                    <div className="text-muted-foreground">
                      {row.synthesis}
                    </div>
                  </div>
                  <div>
                    <div className="text-emerald-400 font-medium mb-0.5">
                      提取
                    </div>
                    <div className="text-emerald-400">{row.extraction}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Labs Section ─── */
function LabsSection() {
  return (
    <section id="labs" className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            {LABS.title}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl">
          {LABS.subtitle}
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {LABS.institutions.map((lab, i) => (
          <motion.div key={i} {...fadeInUp(i * 0.1)}>
            <Card className="bg-card/60 border-border/50 h-full hover:border-emerald-500/30 transition-colors">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Badge
                    variant="outline"
                    className={`shrink-0 text-xs ${
                      lab.level === "国家级"
                        ? "border-red-500/40 text-red-400 bg-red-500/10"
                        : "border-sky-500/40 text-sky-400 bg-sky-500/10"
                    }`}
                  >
                    {lab.level}
                  </Badge>
                </div>
                <h3 className="font-bold font-[var(--font-heading)] text-sm sm:text-base mb-2 leading-snug">
                  {lab.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  <span className="text-foreground font-medium">研究方向：</span>
                  {lab.focus}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {lab.significance}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Market Gap Section ─── */
function MarketGapSection() {
  return (
    <section id="market" className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Globe className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            {MARKET_GAP.title}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl">
          {MARKET_GAP.subtitle}
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        {...fadeInUp(0.1)}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
      >
        {MARKET_GAP.stats.map((stat, i) => (
          <Card key={i} className="bg-card/60 border-border/50">
            <CardContent className="p-5">
              <div className="text-xs text-muted-foreground mb-1">
                {stat.label}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-bold font-[var(--font-heading)] text-emerald-400">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.unit}
                </span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-emerald-400" />
                <span className="text-xs text-emerald-400">{stat.growth}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Paradox flow */}
      <div className="space-y-4">
        {MARKET_GAP.paradox.map((item, i) => (
          <motion.div key={i} {...fadeInUp(i * 0.1)}>
            <Card
              className={`border-border/50 ${
                i === MARKET_GAP.paradox.length - 1
                  ? "bg-emerald-500/5 border-emerald-500/30"
                  : "bg-card/40"
              }`}
            >
              <CardContent className="p-5 flex items-start gap-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold font-[var(--font-heading)] ${
                    i === MARKET_GAP.paradox.length - 1
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-muted/50 text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold font-[var(--font-heading)] text-sm sm:text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {i < MARKET_GAP.paradox.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground/30 shrink-0 mt-1 hidden sm:block" />
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Formula Section ─── */
function FormulaSection() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section id="formula" className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            {FORMULA.title}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl">
          {FORMULA.subtitle}
        </p>
      </motion.div>

      <div className="space-y-3">
        {FORMULA.ingredients.map((ing, i) => {
          const isExpanded = expandedIdx === i;
          return (
            <motion.div key={i} {...fadeInUp(i * 0.05)}>
              <Card
                className={`bg-card/60 border-border/50 transition-all cursor-pointer hover:border-emerald-500/30 ${
                  isExpanded ? "border-emerald-500/40" : ""
                }`}
                onClick={() => setExpandedIdx(isExpanded ? null : i)}
              >
                <CardContent className="p-4 sm:p-5">
                  {/* Header row */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs px-2 py-0.5 rounded border font-medium ${
                        ROLE_COLORS[ing.role] || ROLE_COLORS["佐"]
                      }`}
                    >
                      {ing.role} · {ing.roleLabel}
                    </span>
                    <h3 className="font-bold font-[var(--font-heading)] text-base sm:text-lg flex-1">
                      {ing.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="hidden sm:flex gap-1.5">
                        {ing.molecules.map((m, j) => (
                          <Badge
                            key={j}
                            variant="outline"
                            className="text-xs border-border/50 text-muted-foreground"
                          >
                            {m}
                          </Badge>
                        ))}
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>

                  {/* Mobile molecules */}
                  <div className="sm:hidden flex gap-1.5 mt-2 flex-wrap">
                    {ing.molecules.map((m, j) => (
                      <Badge
                        key={j}
                        variant="outline"
                        className="text-xs border-border/50 text-muted-foreground"
                      >
                        {m}
                      </Badge>
                    ))}
                  </div>

                  {/* Expanded content */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 pt-4 border-t border-border/30 space-y-3"
                    >
                      <div>
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                          传统记载
                        </div>
                        <p className="text-sm text-foreground/80 italic">
                          {ing.tradition}
                        </p>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                          现代分子药理学
                        </div>
                        <p className="text-sm text-foreground/90 leading-relaxed">
                          {ing.modernScience}
                        </p>
                      </div>
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

/* ─── References Section ─── */
function ReferencesSection() {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? REFERENCES : REFERENCES.slice(0, 4);

  return (
    <section className="container py-12 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            参考文献
          </h2>
        </div>
      </motion.div>

      <div className="space-y-2">
        {shown.map((ref) => (
          <motion.div key={ref.id} {...fadeInUp()}>
            <div className="flex gap-3 py-2.5 border-b border-border/20">
              <span className="text-xs text-muted-foreground font-mono w-6 shrink-0">
                [{ref.id}]
              </span>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="text-muted-foreground">
                    {ref.authors}{" "}
                  </span>
                  <span className="text-foreground font-medium">
                    {ref.title}
                  </span>
                  <span className="text-muted-foreground">
                    . {ref.journal}, {ref.year}.
                  </span>
                </p>
                {ref.note && (
                  <p className="text-xs text-emerald-400/80 mt-0.5">
                    {ref.note}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {REFERENCES.length > 4 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3 h-3" /> 收起
            </>
          ) : (
            <>
              <ChevronDown className="w-3 h-3" /> 展开全部 ({REFERENCES.length}{" "}
              篇)
            </>
          )}
        </button>
      )}
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-border/30 pt-12 pb-8">
      <div className="container">
        {/* 联系方式 */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <p className="text-sm text-muted-foreground text-center">
            如需了解更多科技成果转化情况，请扫码联系
          </p>
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028732695/kAczzBEmXCnGqGSC.png"
            alt="联系二维码"
            className="w-32 h-32 rounded-lg"
          />
        </div>
        {/* 底部信息 */}
        <div className="border-t border-border/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-muted-foreground">
              植物提取科普知识库
            </span>
          </div>
          <p className="text-xs text-muted-foreground text-center sm:text-right max-w-md">
            本站内容仅供科学知识普及，不构成任何医疗建议或产品功效声明。所有数据均来源于公开发表的学术文献和行业报告。
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <HeroSection />
        <WhatIsSection />
        <ThreePathsSection />
        <LabsSection />
        <MarketGapSection />
        <FormulaSection />
        <ReferencesSection />
      </main>
      <Footer />
    </div>
  );
}

/*
 * NAD+ Knowledge Base - Home Page
 * Design: Investor Intelligence (dark, data-dense, decision-oriented)
 * Font: Space Grotesk (headings/data), DM Sans (body)
 * Colors: Amber=Photocatalysis(远期), Cyan=Enzyme(中期), Emerald=SmallMol(近期)
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Beaker,
  Zap,
  Pill,
  ArrowRight,
  BookOpen,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  FlaskConical,
  Target,
  Clock,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import MaturityBar from "@/components/MaturityBar";
import {
  TECH_ROUTES,
  HERO_IMAGE,
  CORE_MECHANISM,
  NAD_PRECURSORS,
  COMPARISON_DIMENSIONS,
  REFERENCES,
} from "@/lib/data";
import type { TechRoute, Study } from "@/lib/data";

const routeIcons: Record<string, React.ReactNode> = {
  photocatalysis: <Zap className="w-5 h-5" />,
  "enzyme-engineering": <FlaskConical className="w-5 h-5" />,
  "small-molecule": <Pill className="w-5 h-5" />,
};

const routeColorMap: Record<string, string> = {
  photocatalysis: "#d4a017",
  "enzyme-engineering": "#22b8cf",
  "small-molecule": "#34d399",
};

function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, delay, ease: [0, 0, 0.2, 1] as const },
  };
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      <div className="relative container pt-20 pb-28 sm:pt-28 sm:pb-36">
        <motion.div {...fadeInUp()} className="max-w-3xl">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-px flex-1 max-w-[40px] bg-emerald" />
            <span className="text-xs tracking-[0.2em] uppercase text-emerald font-[var(--font-heading)] font-medium">
              Deep Dive Report
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] leading-[1.1] mb-5 tracking-tight">
            NAD<sup className="text-lg sm:text-2xl">+</sup> 辅酶再生
            <br />
            <span className="text-muted-foreground">与酒精代谢知识库</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-[var(--font-body)]">
            所有解酒技术最终都指向NAD+再生这个核心靶点。本知识库覆盖三条前沿技术路线的最新研究进展、关键数据对比和投资决策建议。
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          {...fadeInUp(0.2)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12"
        >
          {[
            { value: 13, suffix: "", label: "引用文献", icon: BookOpen },
            { value: 3, suffix: "条", label: "技术路线", icon: Target },
            { value: 2026, suffix: "", label: "最新数据", icon: Clock },
            { value: 43, suffix: "%", label: "DHM提升NAD+", icon: TrendingUp },
          ].map((stat, i) => (
            <Card
              key={i}
              className="bg-card/60 backdrop-blur-sm border-border/50"
            >
              <CardContent className="p-4">
                <stat.icon className="w-4 h-4 text-muted-foreground mb-2" />
                <div className="text-2xl sm:text-3xl font-bold font-[var(--font-heading)] text-foreground">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
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

/* ─── Core Mechanism Section ─── */
function MechanismSection() {
  return (
    <section className="container py-16 sm:py-24">
      <motion.div {...fadeInUp()}>
        <div className="flex items-center gap-3 mb-2">
          <Beaker className="w-5 h-5 text-emerald" />
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
            核心机制
          </h2>
        </div>
        <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
          {CORE_MECHANISM.title}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {CORE_MECHANISM.points.map((point, i) => (
            <motion.div key={i} {...fadeInUp(i * 0.1)}>
              <Card className="bg-card/60 border-border/50">
                <CardContent className="p-5">
                  <Badge
                    variant="outline"
                    className="mb-2 text-emerald border-emerald/30 bg-emerald-dim"
                  >
                    {point.label}
                  </Badge>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {point.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp(0.3)}>
          <Card className="bg-emerald-dim border-emerald/20 h-full">
            <CardContent className="p-6 flex flex-col justify-center h-full">
              <div className="text-emerald text-sm font-semibold font-[var(--font-heading)] uppercase tracking-wider mb-3">
                核心结论
              </div>
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-foreground">
                {CORE_MECHANISM.conclusion}
              </p>
              <Separator className="my-5 bg-emerald/20" />
              <div className="text-xs text-muted-foreground space-y-1">
                <p>乙醇 → 乙醛 → 乙酸</p>
                <p>每步消耗 1 NAD+ → 产生 1 NADH</p>
                <p className="text-emerald font-medium">
                  NAD+再生速率 = 酒精代谢通量上限
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Route Overview Cards ─── */
function RouteOverviewSection() {
  return (
    <section className="container py-16 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)] mb-2">
          三大技术路线总览
        </h2>
        <p className="text-sm text-muted-foreground">
          从远期基础研究到近期产品化，覆盖全时间维度的技术布局
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {TECH_ROUTES.map((route, i) => (
          <motion.div key={route.id} {...fadeInUp(i * 0.12)}>
            <Card
              className={`group relative overflow-hidden bg-card/60 border-border/50 hover:border-opacity-80 transition-all duration-300`}
              style={
                {
                  "--route-color": routeColorMap[route.id],
                } as React.CSSProperties
              }
            >
              <div className="h-40 overflow-hidden relative">
                <img
                  src={route.image}
                  alt={route.nameCn}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge
                    className="text-xs font-[var(--font-heading)]"
                    style={{
                      backgroundColor: `${routeColorMap[route.id]}22`,
                      color: routeColorMap[route.id],
                      borderColor: `${routeColorMap[route.id]}44`,
                    }}
                    variant="outline"
                  >
                    {route.timelineCn}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5 pt-3">
                <div className="flex items-center gap-2 mb-3">
                  <span style={{ color: routeColorMap[route.id] }}>
                    {routeIcons[route.id]}
                  </span>
                  <h3
                    className="text-lg font-bold font-[var(--font-heading)]"
                    style={{ color: routeColorMap[route.id] }}
                  >
                    {route.nameCn}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {route.summary}
                </p>

                <div className="space-y-2">
                  {COMPARISON_DIMENSIONS.map((dim, j) => (
                    <MaturityBar
                      key={dim.key}
                      value={route[dim.key as keyof TechRoute] as number}
                      color={routeColorMap[route.id]}
                      label={dim.label}
                      delay={j * 0.1}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Comparison Matrix ─── */
function ComparisonSection() {
  return (
    <section className="container py-16 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)] mb-2">
          对比矩阵
        </h2>
        <p className="text-sm text-muted-foreground">
          三条路线的核心维度并排对比，辅助投资决策
        </p>
      </motion.div>

      <motion.div {...fadeInUp(0.1)} className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-3 px-4 text-muted-foreground font-medium font-[var(--font-heading)] w-[160px]">
                维度
              </th>
              {TECH_ROUTES.map((route) => (
                <th
                  key={route.id}
                  className="text-left py-3 px-4 font-bold font-[var(--font-heading)]"
                  style={{ color: routeColorMap[route.id] }}
                >
                  <div className="flex items-center gap-2">
                    {routeIcons[route.id]}
                    {route.nameCn}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              {
                label: "投资时间线",
                values: TECH_ROUTES.map((r) => r.timelineCn),
              },
              {
                label: "核心优势",
                values: TECH_ROUTES.map((r) => r.coreAdvantage),
              },
              {
                label: "主要挑战",
                values: TECH_ROUTES.map((r) => r.mainChallenge),
              },
              {
                label: "代表性期刊",
                values: TECH_ROUTES.map((r) =>
                  r.keyStudies.map((s) => s.journal).join(", ")
                ),
              },
              {
                label: "技术成熟度",
                values: TECH_ROUTES.map((r) => `${r.maturity}%`),
              },
              {
                label: "投资价值",
                values: TECH_ROUTES.map((r) => `${r.investability}%`),
              },
              {
                label: "市场就绪度",
                values: TECH_ROUTES.map((r) => `${r.marketReadiness}%`),
              },
            ].map((row, i) => (
              <tr
                key={i}
                className="border-b border-border/30 hover:bg-secondary/30 transition-colors"
              >
                <td className="py-3 px-4 text-muted-foreground font-medium font-[var(--font-heading)] text-xs">
                  {row.label}
                </td>
                {row.values.map((val, j) => (
                  <td key={j} className="py-3 px-4 text-foreground/90">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}

/* ─── Detailed Route Tabs ─── */
function StudyCard({ study, color }: { study: Study; color: string }) {
  return (
    <Card className="bg-secondary/30 border-border/30">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="text-sm font-semibold text-foreground leading-snug">
            {study.title}
          </h4>
          {study.doi && (
            <a
              href={`https://doi.org/${study.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Badge
            variant="outline"
            className="text-[10px]"
            style={{
              color,
              borderColor: `${color}44`,
              backgroundColor: `${color}11`,
            }}
          >
            {study.journal}
          </Badge>
          <span className="text-xs text-muted-foreground">{study.year}</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {study.keyFinding}
        </p>
      </CardContent>
    </Card>
  );
}

function RouteDetailPanel({ route }: { route: TechRoute }) {
  const color = routeColorMap[route.id];
  return (
    <div className="grid lg:grid-cols-5 gap-6">
      {/* Left: Image + Details */}
      <div className="lg:col-span-2 space-y-5">
        <div className="rounded-lg overflow-hidden aspect-video">
          <img
            src={route.image}
            alt={route.nameCn}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4
            className="text-sm font-bold font-[var(--font-heading)] mb-3"
            style={{ color }}
          >
            技术要点
          </h4>
          <ul className="space-y-2">
            {route.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <ArrowRight
                  className="w-3.5 h-3.5 mt-0.5 shrink-0"
                  style={{ color }}
                />
                <span className="text-foreground/80">{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4
            className="text-sm font-bold font-[var(--font-heading)] mb-3"
            style={{ color }}
          >
            投资信号
          </h4>
          <ul className="space-y-2">
            {route.investmentSignals.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <TrendingUp
                  className="w-3.5 h-3.5 mt-0.5 shrink-0"
                  style={{ color }}
                />
                <span className="text-foreground/80">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: Studies */}
      <div className="lg:col-span-3 space-y-4">
        <h4
          className="text-sm font-bold font-[var(--font-heading)]"
          style={{ color }}
        >
          关键研究 ({route.keyStudies.length})
        </h4>
        {route.keyStudies.map((study, i) => (
          <StudyCard key={i} study={study} color={color} />
        ))}

        {/* Maturity bars */}
        <Card className="bg-card/40 border-border/30 mt-6">
          <CardContent className="p-5 space-y-3">
            <h4
              className="text-sm font-bold font-[var(--font-heading)] mb-1"
              style={{ color }}
            >
              量化评估
            </h4>
            {COMPARISON_DIMENSIONS.map((dim, j) => (
              <div key={dim.key}>
                <MaturityBar
                  value={route[dim.key as keyof TechRoute] as number}
                  color={color}
                  label={`${dim.label} — ${dim.description}`}
                  delay={j * 0.1}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function DetailedRoutesSection() {
  return (
    <section className="container py-16 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)] mb-2">
          技术路线详情
        </h2>
        <p className="text-sm text-muted-foreground">
          深入每条路线的关键研究、技术要点和投资信号
        </p>
      </motion.div>

      <motion.div {...fadeInUp(0.1)}>
        <Tabs defaultValue="small-molecule" className="w-full">
          <TabsList className="bg-secondary/50 border border-border/50 mb-6 h-auto flex-wrap">
            {TECH_ROUTES.map((route) => (
              <TabsTrigger
                key={route.id}
                value={route.id}
                className="data-[state=active]:bg-card gap-2 text-sm"
                style={
                  {
                    "--tw-ring-color": routeColorMap[route.id],
                  } as React.CSSProperties
                }
              >
                <span style={{ color: routeColorMap[route.id] }}>
                  {routeIcons[route.id]}
                </span>
                {route.nameCn}
                <span className="hidden sm:inline text-xs text-muted-foreground">
                  {route.timelineCn}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

            {TECH_ROUTES.map((route) => (
              <TabsContent key={route.id} value={route.id}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <RouteDetailPanel route={route} />
                </motion.div>
              </TabsContent>
            ))}
        </Tabs>
      </motion.div>
    </section>
  );
}

/* ─── NAD+ Precursors Section ─── */
function PrecursorsSection() {
  return (
    <section className="container py-16 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)] mb-2">
          NAD+ 前体对比
        </h2>
        <p className="text-sm text-muted-foreground">
          小分子补充路线中的核心前体物质对比
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {NAD_PRECURSORS.map((p, i) => (
          <motion.div key={i} {...fadeInUp(i * 0.1)}>
            <Card
              className={`h-full ${
                p.highlight
                  ? "border-emerald/40 bg-emerald-dim"
                  : "bg-card/60 border-border/50"
              }`}
            >
              <CardContent className="p-5">
                {p.highlight && (
                  <Badge className="mb-3 bg-emerald/20 text-emerald border-emerald/30 text-[10px]">
                    重点关注
                  </Badge>
                )}
                <h3 className="text-lg font-bold font-[var(--font-heading)] text-foreground mb-1">
                  {p.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {p.fullName}
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald mt-0.5 shrink-0" />
                    <div>
                      <span className="text-[10px] text-muted-foreground block">
                        优势
                      </span>
                      <span className="text-sm text-foreground/90">
                        {p.advantage}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-coral mt-0.5 shrink-0" />
                    <div>
                      <span className="text-[10px] text-muted-foreground block">
                        劣势
                      </span>
                      <span className="text-sm text-foreground/90">
                        {p.disadvantage}
                      </span>
                    </div>
                  </div>
                </div>

                <Separator className="my-4 bg-border/30" />
                <div className="text-xs text-muted-foreground">
                  <BookOpen className="w-3 h-3 inline mr-1" />
                  {p.keyStudy}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Investment Takeaways ─── */
function InvestmentSection() {
  return (
    <section className="container py-16 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)] mb-2">
          投资决策建议
        </h2>
        <p className="text-sm text-muted-foreground">
          基于三条技术路线的综合分析
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div {...fadeInUp(0.1)}>
          <Card className="bg-emerald-dim border-emerald/20 h-full">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-emerald" />
                <h3 className="text-base font-bold font-[var(--font-heading)] text-emerald">
                  产品开发方向
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "开发更稳定的NADH/NRH剂型，解决口服吸收和稳定性的核心痛点",
                  "优化以DHM为核心的复合配方，基于协同作用的科学证据，实现「1+1>2」的效果",
                  "进行更多高质量的人体临床试验，为产品有效性和安全性提供强有力背书",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald font-bold font-[var(--font-heading)] text-sm mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div {...fadeInUp(0.2)}>
          <Card className="bg-amber-dim border-amber/20 h-full">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-amber" />
                <h3 className="text-base font-bold font-[var(--font-heading)] text-amber">
                  投资筛选标准
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "谁有稳定的NADH/NRH生产和递送技术",
                  "谁有高效的DHM提取和纯化工艺",
                  "谁手上有硬核的高质量临床试验证据",
                  "谁的复合配方基于科学配比（非简单堆砌）",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── References Section ─── */
function ReferencesSection() {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? REFERENCES : REFERENCES.slice(0, 5);

  return (
    <section className="container py-16 sm:py-24">
      <motion.div {...fadeInUp()} className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)] mb-2">
          参考文献
        </h2>
        <p className="text-sm text-muted-foreground">
          {REFERENCES.length} 篇核心文献
        </p>
      </motion.div>

      <motion.div {...fadeInUp(0.1)}>
        <Card className="bg-card/40 border-border/50">
          <CardContent className="p-5">
            <ol className="space-y-2">
              {shown.map((ref) => (
                <li
                  key={ref.id}
                  className="text-xs text-muted-foreground leading-relaxed flex gap-2"
                >
                  <span className="text-foreground/60 font-[var(--font-heading)] shrink-0">
                    [{ref.id}]
                  </span>
                  <span>{ref.text}</span>
                </li>
              ))}
            </ol>
            {REFERENCES.length > 5 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 text-xs text-emerald hover:text-emerald/80 mt-4 transition-colors"
              >
                {expanded ? (
                  <>
                    收起 <ChevronUp className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    展开全部 ({REFERENCES.length} 篇){" "}
                    <ChevronDown className="w-3 h-3" />
                  </>
                )}
              </button>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-border/30 py-8">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            NAD+ 辅酶再生与酒精代谢知识库 — 二一 — 2026年2月
          </div>
          <div className="flex items-center gap-4">
            <span>基于 13 篇核心文献构建</span>
            <span>数据截至 2026.02</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Navigation ─── */
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-2">
          <Beaker className="w-4 h-4 text-emerald" />
          <span className="text-sm font-bold font-[var(--font-heading)]">
            NAD<sup>+</sup> 知识库
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-5 text-xs text-muted-foreground">
          <a
            href="#mechanism"
            className="hover:text-foreground transition-colors"
          >
            核心机制
          </a>
          <a
            href="#routes"
            className="hover:text-foreground transition-colors"
          >
            技术路线
          </a>
          <a
            href="#comparison"
            className="hover:text-foreground transition-colors"
          >
            对比矩阵
          </a>
          <a
            href="#investment"
            className="hover:text-foreground transition-colors"
          >
            投资建议
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <div id="mechanism">
        <MechanismSection />
      </div>
      <div id="routes">
        <RouteOverviewSection />
      </div>
      <div id="comparison">
        <ComparisonSection />
      </div>
      <DetailedRoutesSection />
      <PrecursorsSection />
      <div id="investment">
        <InvestmentSection />
      </div>
      <ReferencesSection />
      <Footer />
    </div>
  );
}

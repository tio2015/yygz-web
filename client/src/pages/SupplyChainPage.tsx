/*
 * 植养萃 · 本草新解 - 产业链页面
 * Design: 深色投资决策界面，翠绿色主调
 * 内容：中国植物提取产业链全景，从供原料到做品牌的机遇
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Factory,
  Tag,
  Repeat,
  Scroll,
  Microscope,
  Building,
  Globe,
  TrendingUp,
  ExternalLink,
  BookOpen,
  Leaf,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation, Footer } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { SUPPLY_CHAIN_PAGE } from "@/lib/data";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const PARADOX_ICONS: Record<string, React.ElementType> = {
  factory: Factory,
  tag: Tag,
  repeat: Repeat,
};

const FORCE_ICONS: Record<string, React.ElementType> = {
  scroll: Scroll,
  microscope: Microscope,
  building: Building,
};

export default function SupplyChainPage() {
  const data = SUPPLY_CHAIN_PAGE;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="中国植物提取产业链全景 | 植养萃·本草新解"
        description="中国植物提取产业链全景分析。从原料出口到品牌升级，了解植物提取固体饮料的全产业链机遇与挑战。"
        path="/supply-chain"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-background" />
          <div className="relative container pt-20 pb-12 sm:pt-32 sm:pb-20">
            <motion.div {...fadeInUp()}>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                返回首页
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-4xl font-bold font-[var(--font-heading)] tracking-tight">
                    {data.title}
                  </h1>
                  <p className="text-sm text-muted-foreground mt-1">{data.subtitle}</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mt-6 font-[var(--font-body)]">
                {data.heroDesc}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Export Data Stats */}
        <section className="container py-8 sm:py-16">
          <motion.div {...fadeInUp()} className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <h2 className="text-lg sm:text-xl font-bold font-[var(--font-heading)]">
                {data.exportData.title}
              </h2>
            </div>
            <p className="text-xs text-muted-foreground">
              数据来源：
              <a
                href={data.exportData.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                {data.exportData.source}
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {data.exportData.stats.map((stat, i) => (
              <motion.div key={i} {...fadeInUp(i * 0.08)}>
                <Card className="border-emerald-500/20 bg-emerald-500/5 h-full">
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-bold font-[var(--font-heading)] text-emerald-400">
                        {stat.value}
                      </span>
                      {stat.unit && (
                        <span className="text-sm text-muted-foreground">{stat.unit}</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground/70 mt-2">{stat.note}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Export Destinations */}
          <motion.div {...fadeInUp(0.3)}>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              主要出口目的地
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {data.exportData.destinations.map((dest, i) => (
                <Card key={i} className="border-border/30">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold font-[var(--font-heading)]">{dest.country}</span>
                      <span className="text-emerald-400 text-sm font-mono">{dest.share}</span>
                    </div>
                    <p className="text-lg font-bold text-foreground">{dest.amount}</p>
                    <p className="text-xs text-muted-foreground mt-1">{dest.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Paradox Section */}
        <section className="container py-8 sm:py-16">
          <motion.div {...fadeInUp()} className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)] mb-3">
              {data.paradox.title}
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-amber-500/50 to-rose-500/50 hidden sm:block" />

            <div className="space-y-6">
              {data.paradox.items.map((item, i) => {
                const Icon = PARADOX_ICONS[item.icon] || Factory;
                const colors = [
                  { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30" },
                  { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
                  { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/30" },
                ][i];

                return (
                  <motion.div key={i} {...fadeInUp(i * 0.1)}>
                    <Card className={`${colors.border} border sm:ml-12`}>
                      <CardContent className="p-5 sm:p-8">
                        <div className="flex items-start gap-4">
                          <div className={`shrink-0 w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                            <Icon className={`w-5 h-5 ${colors.text}`} />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`text-xs font-mono ${colors.text}`}>
                                STEP {String(i + 1).padStart(2, "0")}
                              </span>
                              <h3 className="text-lg font-bold font-[var(--font-heading)]">
                                {item.title}
                              </h3>
                            </div>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-[var(--font-body)]">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Arrow indicator */}
          <motion.div {...fadeInUp(0.4)} className="flex justify-center mt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-8 bg-gradient-to-b from-rose-500/50 to-emerald-500/50" />
              <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-xs font-bold text-emerald-400 font-[var(--font-heading)]">
                  这个循环，该被打破了
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Opportunity: Three Forces */}
        <section className="container py-8 sm:py-16">
          <motion.div {...fadeInUp()} className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)] mb-3">
              {data.opportunity.title}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl font-[var(--font-body)]">
              {data.opportunity.desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.opportunity.forces.map((force, i) => {
              const Icon = FORCE_ICONS[force.icon] || Scroll;
              const colors = [
                { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
                { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30" },
                { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/30" },
              ][i];

              return (
                <motion.div key={i} {...fadeInUp(i * 0.1)}>
                  <Card className={`${colors.border} border h-full`}>
                    <CardContent className="p-5 sm:p-8">
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <h3 className="text-lg font-bold font-[var(--font-heading)] mb-3">
                        {force.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-[var(--font-body)]">
                        {force.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Convergence statement */}
          <motion.div {...fadeInUp(0.4)} className="mt-10">
            <Card className="border-emerald-500/30 bg-gradient-to-r from-emerald-500/5 to-transparent">
              <CardContent className="p-6 sm:p-10 text-center">
                <p className="text-base sm:text-lg font-[var(--font-body)] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  植物提取物在全球的应用已经非常广泛，从制药中间体到化妆品原料，从食品添加剂到保健品配方。但直接做成消费者能"吃进嘴里"的终端产品，尤其是固体饮料这种即饮形态，
                  <span className="text-emerald-400 font-semibold">
                    全球范围内几乎没有成体系的品牌
                  </span>
                  。
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Brand Bridge: 植养萃 alongside global leaders */}
        <section className="container py-8 sm:py-16">
          <motion.div {...fadeInUp()} className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Globe className="w-5 h-5 text-emerald-400" />
              <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)]">
                他们已经做到了，中国正在起步
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-3xl">
              日本、韩国、欧洲的植物提取品牌已经完成了从原料到品牌的跨越。植养萃正在走同样的路。
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* 津村 */}
            <motion.div {...fadeInUp(0)}>
              <Card className="border-rose-500/30 bg-rose-500/5 h-full">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🇯🇵</span>
                    <div>
                      <h3 className="font-bold font-[var(--font-heading)] text-rose-400 text-sm">津村 Tsumura</h3>
                      <span className="text-[10px] text-muted-foreground">日本 · 1893年</span>
                    </div>
                  </div>
                  <div className="space-y-1.5 mb-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">年营收</span>
                      <span className="text-rose-400 font-semibold">12.2亿美元</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">核心</span>
                      <span className="text-foreground">128种汉方处方制剂</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">把中国传来的草药方剂做成标准化提取物制剂，80%纳入国民医保。</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* 正官庄 */}
            <motion.div {...fadeInUp(0.08)}>
              <Card className="border-red-500/30 bg-red-500/5 h-full">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🇰🇷</span>
                    <div>
                      <h3 className="font-bold font-[var(--font-heading)] text-red-400 text-sm">正官庄</h3>
                      <span className="text-[10px] text-muted-foreground">韩国 · 1899年</span>
                    </div>
                  </div>
                  <div className="space-y-1.5 mb-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">年营收</span>
                      <span className="text-red-400 font-semibold">10.4亿美元</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">核心</span>
                      <span className="text-foreground">6年根红参提取物</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">单一原料做到极致，全球人参市场份额41.9%。</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Schwabe */}
            <motion.div {...fadeInUp(0.16)}>
              <Card className="border-blue-500/30 bg-blue-500/5 h-full">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🇩🇪</span>
                    <div>
                      <h3 className="font-bold font-[var(--font-heading)] text-blue-400 text-sm">Schwabe</h3>
                      <span className="text-[10px] text-muted-foreground">欧洲 · 1866年</span>
                    </div>
                  </div>
                  <div className="space-y-1.5 mb-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">年营收</span>
                      <span className="text-blue-400 font-semibold">数十亿欧元</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">核心</span>
                      <span className="text-foreground">银杏叶提取物 EGb 761</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">全球植物药标杆，用临床试验数据说话。</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* 植养萃 */}
            <motion.div {...fadeInUp(0.24)}>
              <Card className="border-emerald-500/50 bg-emerald-500/10 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <CardContent className="p-5 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🇨🇳</span>
                    <div>
                      <h3 className="font-bold font-[var(--font-heading)] text-emerald-400 text-sm">植养萃</h3>
                      <span className="text-[10px] text-muted-foreground">中国 · 植物提取固体饮料</span>
                    </div>
                  </div>
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-1.5 text-xs">
                      <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="text-muted-foreground">七味食药同源 × 君臣佐使配方</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="text-muted-foreground">现代植物提取技术</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="text-muted-foreground">国家级科研平台支撑</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-emerald-400/80 leading-relaxed font-medium">
                    中国植物提取产业链的C端品牌实践者，用科学重新理解植物的力量。
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors mt-2"
                  >
                    了解更多
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div {...fadeInUp(0.3)}>
            <Card className="bg-emerald-500/5 border-emerald-500/20">
              <CardContent className="p-5 sm:p-6 text-center">
                <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  日本用汉方、韩国用红参、欧洲用植物药，都完成了从传统草药到现代消费品牌的跨越。中国拥有最丰富的药用植物资源和最强的提取产业链，这个赛道上的C端品牌机会，正在被填补。
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* References */}
        <section className="container py-8 sm:py-16">
          <motion.div {...fadeInUp()} className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <h2 className="text-lg sm:text-xl font-bold font-[var(--font-heading)]">
                参考文献
              </h2>
            </div>
          </motion.div>

          <div className="space-y-3">
            {data.references.map((ref, i) => (
              <motion.div key={i} {...fadeInUp(i * 0.05)}>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-emerald-400 font-mono text-xs mt-0.5 shrink-0">
                    [{i + 1}]
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

        {/* CTA: Explore other pages */}
        <section className="container py-8 sm:py-16 border-t border-border/20">
          <motion.div {...fadeInUp()}>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              继续探索
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <Link href="/labs">
                <Card className="bg-indigo-500/5 border border-indigo-500/30 hover:scale-[1.02] transition-all">
                  <CardContent className="p-3 sm:p-4 flex items-center gap-2">
                    <Building className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">科研平台</span>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/efficacy/jiujiu">
                <Card className="bg-emerald-500/5 border border-emerald-500/30 hover:scale-[1.02] transition-all">
                  <CardContent className="p-3 sm:p-4 flex items-center gap-2">
                    <Microscope className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">酒精代谢研究</span>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/efficacy/hugan">
                <Card className="bg-amber-500/5 border border-amber-500/30 hover:scale-[1.02] transition-all">
                  <CardContent className="p-3 sm:p-4 flex items-center gap-2">
                    <Microscope className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">肝脏保护研究</span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

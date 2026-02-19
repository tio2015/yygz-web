/*
 * 养生将军 · 本草新解 - 功效研究页面
 * Design: 深色投资决策界面，每个功效有独特色彩
 * 内容：讲植物分子的科学研究，不讲产品功效
 */
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Wine,
  Shield,
  Moon,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation, Footer } from "@/components/Layout";
import { EFFICACY_PAGES, EFFICACY_INGREDIENTS, HOME_DATA, INGREDIENT_IMAGES } from "@/lib/data";
import { Leaf, Atom } from "lucide-react";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const ICON_MAP: Record<string, React.ElementType> = {
  wine: Wine,
  shield: Shield,
  moon: Moon,
  sparkles: Sparkles,
};

const COLOR_MAP: Record<string, { bg: string; text: string; border: string; gradientFrom: string }> = {
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30", gradientFrom: "from-emerald-500/20" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30", gradientFrom: "from-amber-500/20" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/30", gradientFrom: "from-indigo-500/20" },
  rose: { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/30", gradientFrom: "from-rose-500/20" },
};

export default function EfficacyPage() {
  const { id } = useParams<{ id: string }>();
  const pageData = EFFICACY_PAGES[id as keyof typeof EFFICACY_PAGES];

  if (!pageData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">页面不存在</h1>
            <Link href="/" className="text-emerald-400 hover:underline">
              返回首页
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const colors = COLOR_MAP[pageData.color] || COLOR_MAP.emerald;
  const Icon = ICON_MAP[pageData.icon] || Wine;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        {/* Hero */}
        <section className={`relative overflow-hidden`}>
          <div className={`absolute inset-0 bg-gradient-to-b ${colors.gradientFrom} to-background`} />
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
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-4xl font-bold font-[var(--font-heading)] tracking-tight">
                    {pageData.title}
                  </h1>
                  <p className="text-sm text-muted-foreground mt-1">{pageData.subtitle}</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mt-6 font-[var(--font-body)]">
                {pageData.heroDesc}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="container py-8 sm:py-16">
          <div className="space-y-6">
            {pageData.sections.map((section, i) => (
              <motion.div key={i} {...fadeInUp(i * 0.08)}>
                <Card className={`border-border/30 hover:${colors.border} transition-colors`}>
                  <CardContent className="p-5 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className={`shrink-0 w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center mt-0.5`}>
                        <span className={`text-sm font-bold font-[var(--font-heading)] ${colors.text}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold font-[var(--font-heading)] mb-3">
                          {section.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-[var(--font-body)]">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Related Plant Extracts - 关联植物提取活性精华 */}
        {EFFICACY_INGREDIENTS[id as string] && (
          <section className="container py-8 sm:py-16">
            <motion.div {...fadeInUp()} className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Atom className={`w-5 h-5 ${colors.text}`} />
                <h2 className="text-lg sm:text-xl font-bold font-[var(--font-heading)]">
                  含有相关活性分子的植物
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">
                以下植物中天然含有上述研究中提到的活性分子。现代植物提取技术能精准分离这些分子，保留天然活性的同时实现标准化。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EFFICACY_INGREDIENTS[id as string].map((ingredient, i) => {
                const formulaItem = HOME_DATA.formula.ingredients.find((f) => f.name === ingredient.name);
                return (
                  <motion.div key={i} {...fadeInUp(i * 0.08)}>
                    <Card className={`border-border/30 hover:${colors.border} transition-all overflow-hidden group`}>
                      <CardContent className="p-0">
                        <div className="flex">
                          {/* Molecule structure image */}
                          <div className="w-28 sm:w-36 shrink-0 relative overflow-hidden bg-black/30">
                            <img
                              src={ingredient.moleculeImage}
                              alt={ingredient.activeMolecule}
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80" />
                          </div>
                          {/* Content */}
                          <div className="flex-1 p-4 sm:p-5">
                            <div className="flex items-center gap-2 mb-2">
                              <Leaf className={`w-3.5 h-3.5 ${colors.text}`} />
                              <span className="text-xs text-muted-foreground">{ingredient.name}</span>
                              {formulaItem?.imageKey && INGREDIENT_IMAGES[formulaItem.imageKey] && (
                                <img src={INGREDIENT_IMAGES[formulaItem.imageKey]} alt={ingredient.name} className="w-5 h-5 rounded-full object-cover ml-auto" />
                              )}
                            </div>
                            <h4 className="font-bold font-[var(--font-heading)] text-sm sm:text-base mb-1">
                              {ingredient.activeMolecule}
                            </h4>
                            <p className={`text-xs font-mono ${colors.text} mb-2`}>
                              {ingredient.moleculeFormula}
                            </p>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {ingredient.mechanism}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Note about extraction */}
            <motion.div {...fadeInUp(0.4)} className="mt-6">
              <div className={`${colors.bg} border ${colors.border} rounded-lg p-4 sm:p-6`}>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-center font-[var(--font-body)]">
                  <span className={`${colors.text} font-semibold`}>植物提取活性精华</span>
                  {" "}区别于直接使用原料或传统煎制。现代超临界萃取、膜分离等技术能精准提取目标活性分子，
                  在保留天然协同效应的同时，实现成分标准化和高生物利用度。
                </p>
              </div>
            </motion.div>
          </section>
        )}

        {/* References */}
        <section className="container py-8 sm:py-16">
          <motion.div {...fadeInUp()} className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className={`w-5 h-5 ${colors.text}`} />
              <h2 className="text-lg sm:text-xl font-bold font-[var(--font-heading)]">
                参考文献
              </h2>
            </div>
          </motion.div>

          <div className="space-y-3">
            {pageData.references.map((ref, i) => (
              <motion.div key={i} {...fadeInUp(i * 0.05)}>
                <div className="flex items-start gap-3 text-sm">
                  <span className={`${colors.text} font-mono text-xs mt-0.5 shrink-0`}>
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

        {/* Navigation to other efficacy pages */}
        <section className="container py-8 sm:py-16 border-t border-border/20">
          <motion.div {...fadeInUp()}>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              探索其他研究方向
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Object.values(EFFICACY_PAGES)
                .filter((p) => p.id !== id)
                .map((p) => {
                  const c = COLOR_MAP[p.color] || COLOR_MAP.emerald;
                  const I = ICON_MAP[p.icon] || Wine;
                  return (
                    <Link key={p.id} href={`/efficacy/${p.id}`}>
                      <Card className={`${c.bg} border ${c.border} hover:scale-[1.02] transition-all`}>
                        <CardContent className="p-3 sm:p-4 flex items-center gap-2">
                          <I className={`w-4 h-4 ${c.text} shrink-0`} />
                          <span className="text-xs sm:text-sm font-medium truncate">
                            {p.title.replace("植物分子与", "")}
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

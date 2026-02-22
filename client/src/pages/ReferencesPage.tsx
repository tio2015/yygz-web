/*
 * ReferencesPage.tsx
 * Design: Dark academic library aesthetic
 * Features: Three-dimensional cross-index (ingredient / efficacy / year)
 * All references from EFFICACY_PAGES, REFERENCES, and HOME_DATA.supplyChain
 */
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Filter, Search, ExternalLink, X, ChevronDown, Lightbulb, Calendar, FlaskConical, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { EFFICACY_PAGES, REFERENCES, HOME_DATA } from "@/lib/data";
import { SEOHead } from "@/components/SEOHead";

/* ─── Types ─── */
interface Reference {
  authors: string;
  title: string;
  journal: string;
  year: number;
  url?: string;
  keyFinding?: string;
  // derived tags
  efficacyTags: string[];
  ingredientTags: string[];
  source: string;
}

/* ─── Tag mappings ─── */
const EFFICACY_LABELS: Record<string, string> = {
  jiujiu: "酒精代谢",
  hugan: "肝脏保护",
  zhumian: "睡眠调节",
  yangyan: "皮肤健康",
  global: "综合研究",
  supplyChain: "产业链",
};

const EFFICACY_COLORS: Record<string, string> = {
  jiujiu: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  hugan: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  zhumian: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
  yangyan: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  global: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  supplyChain: "bg-violet-500/15 text-violet-400 border-violet-500/30",
};

const INGREDIENT_KEYWORDS: Record<string, string[]> = {
  "葛根": ["puerari", "葛根", "kudzu", "puerarin"],
  "枳椇子": ["枳椇", "hovenia", "DHM", "二氢杨梅素", "dihydromyricetin"],
  "高良姜": ["高良姜", "galangin", "alpinia"],
  "人参": ["人参", "ginsenoside", "ginseng", "panax"],
  "灵芝": ["灵芝", "ganoderma", "ganoderic", "reishi"],
  "茯砖茶": ["茯砖茶", "fu brick", "eurotium", "dark tea", "冠突散囊菌"],
  "罗汉果": ["罗汉果", "mogroside", "siraitia", "monk fruit"],
  "青苹果": ["苹果", "apple", "chlorogenic"],
  "NAD+": ["NAD+", "NAD(P)", "NADH", "nicotinamide", "NMNAT"],
  "植物提取": ["plant extract", "supercritical", "超临界", "extraction", "提取"],
  "网络药理学": ["network pharmacology", "synergy", "协同", "multi-target", "多靶点"],
};

/* ─── Build unified reference list ─── */
function buildAllReferences(): Reference[] {
  const all: Reference[] = [];

  // From EFFICACY_PAGES
  Object.entries(EFFICACY_PAGES).forEach(([key, page]) => {
    page.references.forEach((ref: any) => {
      const ingredientTags = detectIngredients(ref.title + " " + (ref.keyFinding || ""));
      all.push({
        ...ref,
        efficacyTags: [key],
        ingredientTags,
        source: EFFICACY_LABELS[key],
      });
    });
  });

  // From global REFERENCES
  REFERENCES.forEach((ref: any) => {
    const ingredientTags = detectIngredients(ref.title + " " + (ref.keyFinding || ""));
    all.push({
      authors: ref.authors,
      title: ref.title,
      journal: ref.journal,
      year: ref.year,
      url: ref.url,
      keyFinding: ref.keyFinding,
      efficacyTags: ["global"],
      ingredientTags,
      source: "综合研究",
    });
  });

  // Supply chain references are included in the global REFERENCES already

  // Deduplicate by title
  const seen = new Set<string>();
  return all.filter((r) => {
    const key = r.title.toLowerCase().slice(0, 60);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function detectIngredients(text: string): string[] {
  const lower = text.toLowerCase();
  const found: string[] = [];
  Object.entries(INGREDIENT_KEYWORDS).forEach(([name, keywords]) => {
    if (keywords.some((kw) => lower.includes(kw.toLowerCase()))) {
      found.push(name);
    }
  });
  return found;
}

/* ─── Component ─── */
export default function ReferencesPage() {
  const allRefs = useMemo(() => buildAllReferences(), []);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEfficacy, setSelectedEfficacy] = useState<string | null>(null);
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Available years
  const years = useMemo(() => {
    const y = Array.from(new Set(allRefs.map((r) => r.year))).sort((a, b) => b - a);
    return y;
  }, [allRefs]);

  // Available ingredients
  const ingredients = useMemo(() => {
    const set = new Set<string>();
    allRefs.forEach((r) => r.ingredientTags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [allRefs]);

  // Filtered
  const filtered = useMemo(() => {
    return allRefs.filter((ref) => {
      if (selectedEfficacy && !ref.efficacyTags.includes(selectedEfficacy)) return false;
      if (selectedIngredient && !ref.ingredientTags.includes(selectedIngredient)) return false;
      if (selectedYear && ref.year !== selectedYear) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const haystack = `${ref.title} ${ref.authors} ${ref.journal} ${ref.keyFinding || ""}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [allRefs, selectedEfficacy, selectedIngredient, selectedYear, searchQuery]);

  const activeFilterCount = [selectedEfficacy, selectedIngredient, selectedYear].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedEfficacy(null);
    setSelectedIngredient(null);
    setSelectedYear(null);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="文献库 | 植养萃·本草新解"
        description="按原料、功效、年份三维交叉索引，收录近五年全球顶级期刊的植物活性分子研究文献。"
        path="/references"
      />

      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-emerald-500 blur-3xl" />
          <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-cyan-500 blur-3xl" />
        </div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">科学文献库</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-[var(--font-heading)] mb-4 tracking-tight">
              全球顶级期刊
              <span className="text-emerald-400">研究文献</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-[var(--font-body)]">
              收录 {allRefs.length} 篇来自 Nature Metabolism、Pharmacological Research、Phytomedicine、
              Scientific Reports 等顶级期刊的近五年研究成果，支持按原料、功效、年份三维交叉检索
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="container -mt-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {[
            { label: "总文献数", value: allRefs.length, icon: BookOpen, color: "text-emerald-400" },
            { label: "覆盖期刊", value: new Set(allRefs.map((r) => r.journal)).size, icon: FlaskConical, color: "text-cyan-400" },
            { label: "涉及原料", value: ingredients.length, icon: Leaf, color: "text-amber-400" },
            { label: "年份跨度", value: `${Math.min(...years)}-${Math.max(...years)}`, icon: Calendar, color: "text-rose-400" },
          ].map((stat, i) => (
            <Card key={i} className="border-border/30">
              <CardContent className="p-3 sm:p-4 flex items-center gap-3">
                <stat.icon className={`w-5 h-5 ${stat.color} shrink-0`} />
                <div>
                  <div className="text-lg sm:text-xl font-bold font-[var(--font-heading)]">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </section>

      {/* Search + Filters */}
      <section className="container mb-6">
        <div className="flex flex-col gap-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索文献标题、作者、期刊或关键发现..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border/30 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-muted-foreground/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors self-start"
          >
            <Filter className="w-4 h-4" />
            <span>筛选条件</span>
            {activeFilterCount > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                {activeFilterCount}
              </span>
            )}
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </button>

          {/* Filter panels */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pb-2">
                  {/* Efficacy dimension */}
                  <div>
                    <div className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">按功效方向</div>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(EFFICACY_LABELS).map(([key, label]) => (
                        <button
                          key={key}
                          onClick={() => setSelectedEfficacy(selectedEfficacy === key ? null : key)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                            selectedEfficacy === key
                              ? EFFICACY_COLORS[key]
                              : "bg-card border-border/30 text-muted-foreground hover:text-foreground hover:border-border/60"
                          }`}
                        >
                          {label}
                          <span className="ml-1 opacity-60">
                            ({allRefs.filter((r) => r.efficacyTags.includes(key)).length})
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Ingredient dimension */}
                  <div>
                    <div className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">按原料/主题</div>
                    <div className="flex flex-wrap gap-2">
                      {ingredients.map((ing) => (
                        <button
                          key={ing}
                          onClick={() => setSelectedIngredient(selectedIngredient === ing ? null : ing)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                            selectedIngredient === ing
                              ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                              : "bg-card border-border/30 text-muted-foreground hover:text-foreground hover:border-border/60"
                          }`}
                        >
                          {ing}
                          <span className="ml-1 opacity-60">
                            ({allRefs.filter((r) => r.ingredientTags.includes(ing)).length})
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Year dimension */}
                  <div>
                    <div className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">按发表年份</div>
                    <div className="flex flex-wrap gap-2">
                      {years.map((y) => (
                        <button
                          key={y}
                          onClick={() => setSelectedYear(selectedYear === y ? null : y)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                            selectedYear === y
                              ? "bg-cyan-500/15 text-cyan-400 border-cyan-500/30"
                              : "bg-card border-border/30 text-muted-foreground hover:text-foreground hover:border-border/60"
                          }`}
                        >
                          {y}
                          <span className="ml-1 opacity-60">
                            ({allRefs.filter((r) => r.year === y).length})
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Clear filters */}
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                    >
                      <X className="w-3 h-3" />
                      清除所有筛选
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Results count */}
      <section className="container mb-4">
        <div className="text-sm text-muted-foreground">
          共找到 <span className="text-foreground font-semibold">{filtered.length}</span> 篇文献
          {(activeFilterCount > 0 || searchQuery) && (
            <span className="text-muted-foreground/60">（共 {allRefs.length} 篇）</span>
          )}
        </div>
      </section>

      {/* Reference list */}
      <section className="container pb-16 flex-1">
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((ref, i) => (
              <motion.div
                key={ref.title.slice(0, 40) + ref.year}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: Math.min(i * 0.02, 0.5) }}
              >
                <Card className="border-border/20 hover:border-border/40 transition-all group">
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-400 font-mono text-xs mt-1 shrink-0 opacity-50">
                        [{i + 1}]
                      </span>
                      <div className="flex-1 min-w-0">
                        {/* Title + link */}
                        <div className="mb-1.5">
                          {ref.url ? (
                            <a
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm sm:text-base font-medium text-foreground hover:text-emerald-400 transition-colors inline-flex items-start gap-1.5 leading-snug"
                            >
                              <span>{ref.title}</span>
                              <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            <span className="text-sm sm:text-base font-medium">{ref.title}</span>
                          )}
                        </div>

                        {/* Authors + journal */}
                        <div className="text-xs text-muted-foreground mb-2">
                          {ref.authors} · <em>{ref.journal}</em> · {ref.year}
                        </div>

                        {/* Key finding */}
                        {ref.keyFinding && (
                          <div className="flex items-start gap-2 mb-3 p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                            <Lightbulb className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-xs text-emerald-300/80 leading-relaxed">{ref.keyFinding}</span>
                          </div>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {ref.efficacyTags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-2 py-0.5 rounded text-[10px] font-medium border ${EFFICACY_COLORS[tag] || EFFICACY_COLORS.global}`}
                            >
                              {EFFICACY_LABELS[tag] || tag}
                            </span>
                          ))}
                          {ref.ingredientTags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-muted-foreground border border-border/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">没有找到匹配的文献</p>
              <button
                onClick={clearFilters}
                className="mt-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                清除筛选条件
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

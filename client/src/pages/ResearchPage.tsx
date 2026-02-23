/*
 * Research Page: Science & Research credentials
 * Sections: Academician → Platforms → Awards → Certifications
 */
import { useEffect, useRef } from "react";
import { ACADEMICIAN, RESEARCH_PLATFORMS, PDF_IMAGES, IMAGES } from "@/lib/data";
import { Award, Building2, FlaskConical, FileCheck } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("animate-fade-up"); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export default function ResearchPage() {
  const ref1 = useInView();
  const ref2 = useInView();
  const ref3 = useInView();
  const ref4 = useInView();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-20 lg:pt-24 pb-16">
      <SEOHead
        title="科研实力 - 一叶归真"
        description="刘仲华院士团队三十年植物功能成分研究，三大国家级科研平台，双国家科技进步二等奖。"
        path="/research"
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.researchLab} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="container relative z-10 py-16 lg:py-24 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs tracking-wider">
            <FlaskConical size={14} />
            <span>三大国家级科研平台</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold">
            科研实力 · <span className="text-gold-gradient">不可复制的壁垒</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            这不是贴牌代工。每一款产品背后，是院士团队亲自研发、国家级平台技术支撑、双国奖成果转化的完整科研体系。
          </p>
        </div>
      </section>

      {/* Academician */}
      <section className="py-16 lg:py-20">
        <div ref={ref1} className="container opacity-0 space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <Award size={20} className="text-gold" />
            <h2 className="text-2xl lg:text-3xl font-bold">首席科学家</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Photo from PDF */}
            <div className="lg:col-span-2">
              <div className="rounded-lg overflow-hidden border border-gold/10">
                <img
                  src={ACADEMICIAN.photo}
                  alt={`${ACADEMICIAN.name} ${ACADEMICIAN.title}`}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h3 className="text-2xl font-bold">{ACADEMICIAN.name}</h3>
                <p className="text-gold text-lg">{ACADEMICIAN.title}</p>
              </div>

              <div className="space-y-3">
                {ACADEMICIAN.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Awards */}
              <div className="space-y-3">
                <p className="text-xs text-gold tracking-wider font-medium">重要奖项</p>
                {ACADEMICIAN.awards.map((a, i) => (
                  <div key={i} className="glass-card rounded-lg p-4 flex items-start gap-4">
                    <span className="font-[var(--font-data)] text-gold font-semibold text-sm whitespace-nowrap">{a.year}</span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{a.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{a.project}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Award Certificate */}
      <section className="py-16 lg:py-20 bg-[oklch(0.10_0.005_260)]">
        <div ref={ref2} className="container opacity-0 space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <Award size={20} className="text-gold" />
            <h2 className="text-2xl lg:text-3xl font-bold">双国奖证书</h2>
          </div>
          <div className="rounded-lg overflow-hidden border border-gold/10 max-w-4xl mx-auto">
            <img src={PDF_IMAGES.dualAward} alt="国家科学技术进步二等奖证书" className="w-full h-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="glass-card rounded-lg p-5 text-center">
              <p className="font-[var(--font-data)] text-gold text-xl font-bold">2008年</p>
              <p className="text-sm text-foreground mt-1">国家科学技术进步二等奖</p>
              <p className="text-xs text-muted-foreground mt-1">茶叶功能成分提制新技术及产业化</p>
            </div>
            <div className="glass-card rounded-lg p-5 text-center">
              <p className="font-[var(--font-data)] text-gold text-xl font-bold">2016年</p>
              <p className="text-sm text-foreground mt-1">国家科学技术进步二等奖</p>
              <p className="text-xs text-muted-foreground mt-1">黑茶提质增效关键技术创新与产业化应用</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Platforms */}
      <section className="py-16 lg:py-20">
        <div ref={ref3} className="container opacity-0 space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <Building2 size={20} className="text-gold" />
            <h2 className="text-2xl lg:text-3xl font-bold">科研平台</h2>
          </div>

          {/* Lab building images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg overflow-hidden border border-gold/10">
              <img src={PDF_IMAGES.labBuilding1} alt="科研平台" className="w-full h-auto" />
            </div>
            <div className="rounded-lg overflow-hidden border border-gold/10">
              <img src={PDF_IMAGES.labBuilding2} alt="科研平台" className="w-full h-auto" />
            </div>
          </div>

          <div className="space-y-4">
            {RESEARCH_PLATFORMS.map((platform, i) => (
              <div key={i} className="glass-card rounded-lg p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] px-2 py-0.5 rounded-sm font-medium ${
                        platform.level === "国家级" ? "bg-gold/15 text-gold" : "bg-blue-500/15 text-blue-400"
                      }`}>
                        {platform.level}
                      </span>
                      <span className="text-xs text-muted-foreground">{platform.host}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{platform.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{platform.position}</p>
                <p className="text-xs text-muted-foreground/70">{platform.achievements}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing & Certification */}
      <section className="py-16 lg:py-20 bg-[oklch(0.10_0.005_260)]">
        <div ref={ref4} className="container opacity-0 space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <FileCheck size={20} className="text-gold" />
            <h2 className="text-2xl lg:text-3xl font-bold">检测认证</h2>
          </div>
          <div className="rounded-lg overflow-hidden border border-gold/10 max-w-4xl mx-auto">
            <img src={PDF_IMAGES.testReport} alt="检测报告" className="w-full h-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span className="px-3 py-1.5 rounded-full border border-gold/10 bg-gold/5">CNAS 认可</span>
            <span className="px-3 py-1.5 rounded-full border border-gold/10 bg-gold/5">CMA 认证</span>
            <span className="px-3 py-1.5 rounded-full border border-gold/10 bg-gold/5">ILAC-MRA 互认</span>
            <span className="px-3 py-1.5 rounded-full border border-gold/10 bg-gold/5">中检集团</span>
            <span className="px-3 py-1.5 rounded-full border border-gold/10 bg-gold/5">Intertek 天祥</span>
          </div>
        </div>
      </section>
    </div>
  );
}

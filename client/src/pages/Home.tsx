/*
 * Home Page: Dark luxury landing
 * Sections: Hero → Trust Stats → 3 Tracks → Research Preview → CTA
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { BRAND, IMAGES, PDF_IMAGES, TRACKS, TRUST_STATS, ACADEMICIAN } from "@/lib/data";
import { ArrowRight, Award, FlaskConical, Users } from "lucide-react";

function useInView(threshold = 0.15) {
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

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={IMAGES.heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.005_260/95%)] via-[oklch(0.08_0.005_260/80%)] to-[oklch(0.08_0.005_260/50%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_260)] via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs tracking-wider">
            <Award size={14} />
            <span>双国奖院士团队研发</span>
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              <span className="text-gold-gradient">{BRAND.name}</span>
              <br />
              <span className="text-foreground">院士科研 · 三大赛道</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
              刘仲华院士团队科研成果转化，药食同源植物固体饮料。
              <br className="hidden sm:block" />
              睡眠、应酬、养颜三大赛道，期待与您携手共赢。
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/tracks"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal font-medium rounded-sm hover:bg-gold-bright transition-colors text-sm"
            >
              了解三大赛道
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/partner"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-gold rounded-sm hover:bg-gold/10 transition-colors text-sm"
            >
              合作咨询
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40">
        <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

/* ─── Trust Stats ─── */
function TrustStats() {
  const ref = useInView();
  return (
    <section className="py-16 lg:py-20 border-b border-gold/5">
      <div ref={ref} className="container opacity-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_STATS.map((stat, i) => (
            <div key={i} className="text-center space-y-1">
              <p className="font-[var(--font-data)] text-3xl lg:text-4xl font-bold text-gold animate-glow">
                {stat.value}<span className="text-lg text-gold/70">{stat.suffix}</span>
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Three Tracks ─── */
function ThreeTracks() {
  const ref = useInView();
  return (
    <section className="py-20 lg:py-28">
      <div ref={ref} className="container opacity-0 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl lg:text-4xl font-bold">三大赛道 · 全场景覆盖</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            每个赛道对应一个高频消费场景，配套独立品牌和合规话术体系
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TRACKS.map((track) => (
            <Link key={track.id} href="/tracks" className="group">
              <div className="glass-card rounded-lg overflow-hidden spotlight-hover transition-transform duration-500 group-hover:-translate-y-1">
                {/* Scene image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={track.sceneImage}
                    alt={track.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.005_260)] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className={`text-xs tracking-wider mb-1 ${track.colorClass}`}>{track.name}</p>
                    <p className="text-xl font-bold text-foreground">{track.brandName}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {track.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold text-xs">
                    <span>了解详情</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Research Preview ─── */
function ResearchPreview() {
  const ref = useInView();
  return (
    <section className="py-20 lg:py-28 bg-[oklch(0.10_0.005_260)]">
      <div ref={ref} className="container opacity-0 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl lg:text-4xl font-bold">科研实力 · 不可复制的壁垒</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            这不是贴牌代工，是院士团队亲自研发、国家级平台技术支撑的科研成果转化
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Academician card */}
          <div className="glass-card rounded-lg p-6 lg:p-8 space-y-5">
            <div className="flex items-start gap-5">
              <div className="w-24 h-28 rounded-sm overflow-hidden flex-shrink-0 border border-gold/20">
                <img src={ACADEMICIAN.photo} alt={ACADEMICIAN.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{ACADEMICIAN.name} <span className="text-gold text-base font-normal">{ACADEMICIAN.title}</span></h3>
                <ul className="space-y-1">
                  {ACADEMICIAN.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Awards */}
            <div className="space-y-2">
              <p className="text-xs text-gold tracking-wider">国家科学技术进步奖</p>
              {ACADEMICIAN.awards.slice(0, 2).map((a, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-gold font-[var(--font-data)] font-semibold">{a.year}</span>
                  <span className="text-muted-foreground">{a.project}</span>
                </div>
              ))}
            </div>

            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-gold text-sm hover:underline"
            >
              查看完整科研背景 <ArrowRight size={14} />
            </Link>
          </div>

          {/* Award certificate image */}
          <div className="rounded-lg overflow-hidden border border-gold/10">
            <img
              src={PDF_IMAGES.dualAward}
              alt="双国奖证书"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Platform badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: <FlaskConical size={20} />, name: "国家植物功能成分利用工程技术研究中心", tag: "国家级" },
            { icon: <FlaskConical size={20} />, name: "茶学教育部重点实验室", tag: "省部级" },
            { icon: <FlaskConical size={20} />, name: "国家中医药管理局亚健康干预技术实验室", tag: "省部级" },
          ].map((p, i) => (
            <div key={i} className="glass-card rounded-lg p-4 flex items-start gap-3">
              <div className="text-gold mt-0.5">{p.icon}</div>
              <div>
                <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-gold/10 text-gold">{p.tag}</span>
                <p className="text-sm text-foreground mt-1 leading-snug">{p.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  const ref = useInView();
  return (
    <section className="py-20 lg:py-28">
      <div ref={ref} className="container opacity-0">
        <div className="glass-card rounded-xl p-8 lg:p-14 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <Users size={36} className="text-gold mx-auto" />
            <h2 className="text-3xl lg:text-4xl font-bold">
              携手合作伙伴<span className="text-gold-gradient">共赢大健康</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
              院士科研背书 + 三赛道全覆盖 + 合规话术体系 + 全链路支持。
              <br />
              你专注内容创作，其他的我们来。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-charcoal font-medium rounded-sm hover:bg-gold-bright transition-colors"
              >
                了解合作方案 <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <Hero />
      <TrustStats />
      <ThreeTracks />
      <ResearchPreview />
      <CTASection />
    </>
  );
}

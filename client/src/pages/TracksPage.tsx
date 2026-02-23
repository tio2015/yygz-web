/*
 * Tracks Page: Unified formula framework + scene-specific ratio adjustments
 * Design: 暗室光影 - Formula first, then scene tabs
 */
import { useState, useEffect, useRef } from "react";
import { TRACKS, FORMULA_FRAMEWORK, type Track } from "@/lib/data";
import { Moon, Wine, Sparkles, CheckCircle, MessageSquare, AlertTriangle, Beaker, ArrowRight } from "lucide-react";

const TRACK_ICONS: Record<string, React.ReactNode> = {
  sleep: <Moon size={18} />,
  drink: <Wine size={18} />,
  beauty: <Sparkles size={18} />,
};

const ROLE_COLORS: Record<string, string> = {
  "君药": "bg-gold/20 text-gold border-gold/30",
  "臣药": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "佐使药": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

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

/* ─── Unified Formula Section ─── */
function FormulaFramework() {
  const ref = useInView();
  return (
    <section ref={ref} className="opacity-0 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs tracking-wider">
          <Beaker size={14} />
          <span>君臣佐使 · 科学配伍</span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold">{FORMULA_FRAMEWORK.title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm">
          {FORMULA_FRAMEWORK.description}
        </p>
      </div>

      {/* Seven ingredients grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {FORMULA_FRAMEWORK.ingredients.map((ing, i) => (
          <div key={i} className="glass-card rounded-lg p-4 space-y-2 group spotlight-hover">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{ing.name}</p>
              <span className={`text-[10px] px-2 py-0.5 rounded-full border ${ROLE_COLORS[ing.role] || "bg-gold/10 text-gold border-gold/20"}`}>
                {ing.role}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{ing.desc}</p>
          </div>
        ))}
      </div>

      {/* Synergy note */}
      <div className="glass-card rounded-lg p-5 border-l-2 border-gold/40">
        <p className="text-sm text-muted-foreground leading-relaxed italic">
          {FORMULA_FRAMEWORK.synergy}
        </p>
      </div>
    </section>
  );
}

/* ─── Track Detail ─── */
function TrackDetail({ track }: { track: Track }) {
  const ref1 = useInView();
  const ref2 = useInView();
  const ref3 = useInView();

  return (
    <div className="space-y-14">
      {/* Hero: Scene + Product + Ratio Focus */}
      <div ref={ref1} className="opacity-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Scene image */}
        <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
          <img src={track.sceneImage} alt={track.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_260/85%)] via-[oklch(0.08_0.005_260/30%)] to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className={`text-xs tracking-wider mb-2 ${track.colorClass}`}>{track.name}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{track.brandName}</h2>
            <p className="text-base text-muted-foreground mt-2 italic">{track.tagline}</p>
          </div>
        </div>

        {/* Product + Ratio Focus */}
        <div className="space-y-4">
          <div className="flex items-center justify-center p-6 rounded-lg border border-gold/10 bg-[oklch(0.12_0.005_260)]">
            <img
              src={track.productImage}
              alt={track.brandName}
              className="w-full h-auto max-h-80 object-contain rounded-md"
            />
          </div>
          {/* Ratio focus badge */}
          <div className="glass-card rounded-lg p-4 border-l-2 border-gold/40">
            <p className="text-xs text-gold tracking-wider mb-1">配比侧重</p>
            <p className="text-sm text-foreground font-medium">{track.ratioFocus}</p>
          </div>
        </div>
      </div>

      {/* Description + Target + Scenarios */}
      <div ref={ref2} className="opacity-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-lg p-6 space-y-4">
          <h3 className="text-base font-semibold text-foreground">场景定位</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{track.description}</p>
          <div>
            <p className="text-xs text-gold tracking-wider mb-2">目标人群</p>
            <p className="text-sm text-muted-foreground">{track.targetAudience}</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-xs text-gold tracking-wider mb-1">应用场景</p>
            {track.scenarios.map((s, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle size={13} className="text-gold mt-0.5 flex-shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Molecules - the core differentiator */}
        <div className="glass-card rounded-lg p-6 space-y-4">
          <h3 className="text-base font-semibold text-foreground">核心活性分子</h3>
          <p className="text-xs text-muted-foreground mb-3">该场景下被强化配比的关键分子及其作用机制</p>
          <div className="space-y-4">
            {track.keyMolecules.map((mol, i) => (
              <div key={i} className="space-y-1.5 pb-4 border-b border-gold/5 last:border-0 last:pb-0">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gold/10 text-gold text-xs flex items-center justify-center flex-shrink-0 font-semibold">
                    {i + 1}
                  </span>
                  <p className="text-sm font-medium text-foreground">{mol.name}</p>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-white/5 text-muted-foreground">
                    来源: {mol.source}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-8">{mol.mechanism}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Synergy Note for this track */}
      <div className="glass-card rounded-lg p-5 border-l-2 border-gold/40">
        <p className="text-xs text-gold tracking-wider mb-2">协同逻辑</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{track.synergyNote}</p>
      </div>

      {/* Broadcaster tips + Compliance */}
      <div ref={ref3} className="opacity-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2 text-gold">
            <MessageSquare size={16} />
            <h3 className="text-base font-semibold text-foreground">话术要点</h3>
          </div>
          <div className="space-y-2">
            {track.broadcasterTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-5 h-5 rounded-full bg-gold/10 text-gold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
          <div className="pt-2">
            <p className="text-xs text-gold/70 tracking-wider mb-2">合规推荐话术</p>
            <div className="space-y-1.5">
              {track.complianceCopy.map((c, i) => (
                <p key={i} className="text-sm text-muted-foreground pl-3 border-l-2 border-gold/20">
                  "{c}"
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2 text-gold">
            <AlertTriangle size={16} />
            <h3 className="text-base font-semibold text-foreground">法定声明</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {track.legalDisclaimer}
          </p>
          <div className="p-4 rounded-sm bg-gold/5 border border-gold/10">
            <p className="text-xs text-muted-foreground leading-relaxed">
              本品为植物固体饮料，非保健食品，非药品。本页面内容仅供了解产品信息，
              不构成任何功效承诺。推广话术请严格遵守《中华人民共和国广告法》《中华人民共和国食品安全法》
              及相关法规，不得暗示或明示任何治疗、预防疾病的功效。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TracksPage() {
  const [activeTrack, setActiveTrack] = useState<string>("sleep");
  const currentTrack = TRACKS.find((t) => t.id === activeTrack) || TRACKS[0];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-20 lg:pt-24 pb-16">
      {/* Page header */}
      <div className="container py-10 lg:py-14 text-center space-y-3">
        <h1 className="text-3xl lg:text-5xl font-bold">
          三大赛道 · <span className="text-gold-gradient">精准配比</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          同一套君臣佐使配伍框架，七味药食同源原料协同作用。不同场景下，核心活性成分的配比经过精准调优。
        </p>
      </div>

      {/* Unified formula section */}
      <div className="container mb-16">
        <FormulaFramework />
      </div>

      {/* Divider */}
      <div className="container mb-12">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="flex items-center gap-2 text-gold text-xs tracking-wider">
            <ArrowRight size={12} />
            <span>选择场景，了解配比侧重</span>
            <ArrowRight size={12} />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>
      </div>

      {/* Tab switcher */}
      <div className="container mb-12">
        <div className="flex justify-center">
          <div className="inline-flex gap-1 p-1 rounded-lg bg-charcoal-light border border-gold/10">
            {TRACKS.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm transition-all duration-300 ${
                  activeTrack === track.id
                    ? "bg-gold text-charcoal font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {TRACK_ICONS[track.id]}
                <span>{track.brandName}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Track content */}
      <div className="container">
        <TrackDetail key={currentTrack.id} track={currentTrack} />
      </div>
    </div>
  );
}

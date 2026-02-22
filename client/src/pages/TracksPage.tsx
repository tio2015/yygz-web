/*
 * Tracks Page: Three product tracks with tab switching
 * Design: 暗室光影 - Each track has its own accent color
 */
import { useState, useEffect, useRef } from "react";
import { TRACKS, type Track } from "@/lib/data";
import { Moon, Wine, Sparkles, CheckCircle, MessageSquare, AlertTriangle } from "lucide-react";

const TRACK_ICONS: Record<string, React.ReactNode> = {
  sleep: <Moon size={18} />,
  drink: <Wine size={18} />,
  beauty: <Sparkles size={18} />,
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

function TrackDetail({ track }: { track: Track }) {
  const ref1 = useInView();
  const ref2 = useInView();
  const ref3 = useInView();

  return (
    <div className="space-y-16">
      {/* Hero section with scene + product */}
      <div ref={ref1} className="opacity-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Scene image */}
        <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
          <img src={track.sceneImage} alt={track.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_260/80%)] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className={`text-xs tracking-wider mb-2 ${track.colorClass}`}>{track.name}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{track.brandName}</h2>
            <p className="text-lg text-muted-foreground mt-2 italic">{track.tagline}</p>
          </div>
        </div>

        {/* Product image */}
        <div className="flex items-center justify-center p-6 rounded-lg border border-gold/10 bg-[oklch(0.12_0.005_260)]">
          <img
            src={track.productImage}
            alt={track.brandName}
            className="w-full h-auto max-h-96 object-contain rounded-md"
          />
        </div>
      </div>

      {/* Description + Target */}
      <div ref={ref2} className="opacity-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">产品定位</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{track.description}</p>
          <div>
            <p className="text-xs text-gold tracking-wider mb-2">目标人群</p>
            <p className="text-sm text-muted-foreground">{track.targetAudience}</p>
          </div>
        </div>

        <div className="glass-card rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">应用场景</h3>
          <div className="space-y-2">
            {track.scenarios.map((s, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div ref={ref3} className="opacity-0 space-y-6">
        <h3 className="text-lg font-semibold text-foreground">核心成分</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {track.ingredients.map((ing, i) => (
            <div key={i} className="glass-card rounded-lg p-4 space-y-2">
              <p className="text-sm font-medium text-foreground">{ing.name}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{ing.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Broadcaster tips + Compliance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2 text-gold">
            <MessageSquare size={16} />
            <h3 className="text-lg font-semibold text-foreground">主播话术要点</h3>
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
            <h3 className="text-lg font-semibold text-foreground">法定声明</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {track.legalDisclaimer}
          </p>
          <div className="p-4 rounded-sm bg-gold/5 border border-gold/10">
            <p className="text-xs text-muted-foreground leading-relaxed">
              本品为植物固体饮料，非保健食品，非药品。本页面内容仅供主播了解产品信息，
              不构成任何功效承诺。直播话术请严格遵守《中华人民共和国广告法》《中华人民共和国食品安全法》
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
          三大赛道 · <span className="text-gold-gradient">全场景覆盖</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          每个赛道对应一个高频消费场景，配套独立品牌、合规话术和主播支持体系
        </p>
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

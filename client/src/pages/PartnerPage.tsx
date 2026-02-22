/*
 * Partner Page: Partnership advantages, track overview, contact
 * Design: 暗室光影 - Gold accent CTA
 */
import { useEffect, useRef } from "react";
import { PARTNERSHIP_ADVANTAGES, TRACKS, BRAND } from "@/lib/data";
import { Award, Target, Shield, Gem, Handshake, Settings, CheckCircle } from "lucide-react";

const ADVANTAGE_ICONS: Record<string, React.ReactNode> = {
  award: <Award size={22} />,
  target: <Target size={22} />,
  shield: <Shield size={22} />,
  gem: <Gem size={22} />,
  handshake: <Handshake size={22} />,
  settings: <Settings size={22} />,
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

export default function PartnerPage() {
  const ref1 = useInView();
  const ref2 = useInView();
  const ref3 = useInView();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-20 lg:pt-24 pb-16">
      {/* Hero */}
      <section className="container py-16 lg:py-24 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs tracking-wider">
          <Handshake size={14} />
          <span>携手渠道合作共赢</span>
        </div>
        <h1 className="text-3xl lg:text-5xl font-bold">
          合作共赢 · <span className="text-gold-gradient">一起做大健康</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          院士科研背书 + 三赛道全覆盖 + 合规话术体系 + 全链路支持。你专注内容创作，其他的我们来。
        </p>
      </section>

      {/* Advantages */}
      <section className="py-12 lg:py-16">
        <div ref={ref1} className="container opacity-0 space-y-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-center">为什么选择一叶归真</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PARTNERSHIP_ADVANTAGES.map((adv, i) => (
              <div key={i} className="glass-card rounded-lg p-6 space-y-3 spotlight-hover">
                <div className="text-gold">{ADVANTAGE_ICONS[adv.icon]}</div>
                <h3 className="text-lg font-semibold text-foreground">{adv.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track overview */}
      <section className="py-12 lg:py-16 bg-[oklch(0.10_0.005_260)]">
        <div ref={ref2} className="container opacity-0 space-y-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-center">三大赛道概览</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {TRACKS.map((track) => (
              <div key={track.id} className="glass-card rounded-lg overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img src={track.sceneImage} alt={track.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.005_260)] to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className={`text-xs tracking-wider ${track.colorClass}`}>{track.name}</p>
                    <p className="text-lg font-bold text-foreground">{track.brandName}</p>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{track.description}</p>
                  <div className="space-y-1.5">
                    {track.complianceCopy.slice(0, 2).map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle size={12} className="text-gold flex-shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WeChat QR Code CTA */}
      <section className="py-16 lg:py-24">
        <div ref={ref3} className="container opacity-0">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Left: Text */}
                <div className="flex-1 text-center lg:text-left space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold">开始合作</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    扫码添加企业微信，获取完整产品资料、合作方案和主播话术手册。我们的商务团队将一对一为您服务。
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground lg:justify-start justify-center">
                      <CheckCircle size={14} className="text-gold flex-shrink-0" />
                      <span>产品资料与合规话术一键获取</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground lg:justify-start justify-center">
                      <CheckCircle size={14} className="text-gold flex-shrink-0" />
                      <span>专属商务一对一对接合作方案</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground lg:justify-start justify-center">
                      <CheckCircle size={14} className="text-gold flex-shrink-0" />
                      <span>样品申请与选品培训安排</span>
                    </div>
                  </div>
                </div>
                {/* Right: QR Code */}
                <div className="flex flex-col items-center gap-3 flex-shrink-0">
                  <div className="w-48 h-48 rounded-lg overflow-hidden border-2 border-gold/20 p-2.5 bg-white shadow-[0_0_40px_oklch(0.73_0.12_85/15%)]">
                    <img src={BRAND.qrCode} alt="企业微信" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-xs text-gold tracking-wider">扫码添加企业微信</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

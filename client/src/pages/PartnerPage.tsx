/*
 * Partner Page: Partnership advantages, track overview, contact
 * Design: 暗室光影 - Gold accent CTA
 */
import { useEffect, useRef, useState } from "react";
import { PARTNERSHIP_ADVANTAGES, TRACKS, BRAND } from "@/lib/data";
import { Award, Target, Shield, Gem, Handshake, Settings, ArrowRight, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

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
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("感谢您的关注，请扫描下方二维码添加商务微信");
  };

  return (
    <div className="pt-20 lg:pt-24 pb-16">
      {/* Hero */}
      <section className="container py-16 lg:py-24 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs tracking-wider">
          <Handshake size={14} />
          <span>诚邀视频号主播合作</span>
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

      {/* Contact / CTA */}
      <section className="py-16 lg:py-24">
        <div ref={ref3} className="container opacity-0">
          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-xl p-8 lg:p-12 space-y-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-center space-y-3 mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold">开始合作</h2>
                  <p className="text-muted-foreground text-sm">
                    填写基本信息，我们的商务团队会在24小时内与您联系
                  </p>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs text-muted-foreground">姓名</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2.5 rounded-sm bg-charcoal-light border border-gold/10 text-foreground text-sm focus:border-gold/40 focus:outline-none transition-colors"
                          placeholder="您的姓名"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs text-muted-foreground">手机号</label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-2.5 rounded-sm bg-charcoal-light border border-gold/10 text-foreground text-sm focus:border-gold/40 focus:outline-none transition-colors"
                          placeholder="您的手机号"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-muted-foreground">视频号/平台账号</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 rounded-sm bg-charcoal-light border border-gold/10 text-foreground text-sm focus:border-gold/40 focus:outline-none transition-colors"
                        placeholder="您的视频号或其他平台账号"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-muted-foreground">感兴趣的赛道</label>
                      <div className="flex flex-wrap gap-2">
                        {TRACKS.map((t) => (
                          <label key={t.id} className="flex items-center gap-2 px-3 py-2 rounded-sm bg-charcoal-light border border-gold/10 text-sm text-muted-foreground hover:border-gold/30 transition-colors cursor-pointer">
                            <input type="checkbox" className="accent-[oklch(0.73_0.12_85)]" />
                            <span>{t.brandName}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-muted-foreground">留言（选填）</label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-sm bg-charcoal-light border border-gold/10 text-foreground text-sm focus:border-gold/40 focus:outline-none transition-colors resize-none"
                        placeholder="您的问题或合作意向"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold text-charcoal font-medium rounded-sm hover:bg-gold-bright transition-colors"
                    >
                      <Send size={16} />
                      提交合作意向
                    </button>
                  </form>
                ) : (
                  <div className="text-center space-y-6">
                    <CheckCircle size={48} className="text-gold mx-auto" />
                    <p className="text-lg font-medium text-foreground">感谢您的关注</p>
                    <p className="text-sm text-muted-foreground">请扫描下方二维码添加商务微信，获取产品资料与合作方案</p>
                    <div className="w-44 h-44 mx-auto rounded-sm overflow-hidden border border-gold/20 p-2 bg-white">
                      <img src={BRAND.qrCode} alt="商务微信" className="w-full h-full object-contain" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

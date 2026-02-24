/*
 * RatioChart: 三赛道配比条形图组件
 * 从 track-ratio-v2.html 转换为 React + TailwindCSS
 * CSS 和动画逻辑全部内联，不引用外部文件
 *
 * 动画逻辑：
 * 1. 切换赛道时，条形宽度立即重置为 0（无过渡）
 * 2. 当组件滚动进入视口后，才触发条形展开动画
 * 3. 这样无论用户何时滑到配比图，都能看到完整动画过程
 */
import { useEffect, useRef, useState, useCallback } from "react";
import { type TrackRatioData, type RatioIngredient } from "@/lib/ratio-data";

/* ── 赛道色映射 ── */
const TRACK_COLORS: Record<string, {
  coreGradient: string;
  coreDot: string;
  coreWeight: string;
  calloutBg: string;
  calloutDot: string;
  sublabelCore: string;
}> = {
  sleep: {
    coreGradient: "linear-gradient(90deg, rgba(120,104,180,0.6), #8878CC)",
    coreDot: "#8878CC",
    coreWeight: "text-[#8878CC]",
    calloutBg: "bg-[rgba(136,120,204,0.18)]",
    calloutDot: "bg-[#8878CC]",
    sublabelCore: "text-[#8878CC]",
  },
  drink: {
    coreGradient: "linear-gradient(90deg, rgba(160,124,40,0.6), #C8A040)",
    coreDot: "#C8A040",
    coreWeight: "text-[#C8A040]",
    calloutBg: "bg-[rgba(200,160,64,0.18)]",
    calloutDot: "bg-[#C8A040]",
    sublabelCore: "text-[#C8A040]",
  },
  beauty: {
    coreGradient: "linear-gradient(90deg, rgba(160,80,96,0.6), #C06878)",
    coreDot: "#C06878",
    coreWeight: "text-[#C06878]",
    calloutBg: "bg-[rgba(192,104,120,0.18)]",
    calloutDot: "bg-[#C06878]",
    sublabelCore: "text-[#C06878]",
  },
};

/* ── 君臣佐使标签色 ── */
const ROLE_TAG_STYLES: Record<string, string> = {
  "君药": "bg-[rgba(201,168,76,0.2)] text-[#C9A84C]",
  "臣药": "bg-[rgba(201,168,76,0.14)] text-[rgba(201,168,76,0.75)]",
  "佐药": "bg-[rgba(150,140,120,0.18)] text-[#908070]",
  "佐使药": "bg-[rgba(150,140,120,0.18)] text-[#908070]",
  "使药": "bg-[rgba(100,90,80,0.15)] text-[#807060]",
};

/* ── 条形填充组件 ── */
function BarFill({
  ing,
  trackId,
  animated,
}: {
  ing: RatioIngredient;
  trackId: string;
  animated: boolean;
}) {
  const colors = TRACK_COLORS[trackId] || TRACK_COLORS.sleep;
  const width = animated ? ing.barWidth : "0%";

  if (ing.barType === "core") {
    return (
      <div
        className="h-full rounded relative"
        style={{
          width,
          background: colors.coreGradient,
          transition: animated ? "width 1.2s cubic-bezier(0.4,0,0.2,1)" : "none",
        }}
      >
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full blur-[3px]"
          style={{ background: colors.coreDot }}
        />
      </div>
    );
  }

  if (ing.barType === "base") {
    return (
      <div
        className="h-full rounded bg-[rgba(201,168,76,0.38)]"
        style={{
          width,
          transition: animated ? "width 1.2s cubic-bezier(0.4,0,0.2,1)" : "none",
        }}
      />
    );
  }

  // dim
  return (
    <div
      className="h-full rounded bg-[rgba(201,168,76,0.22)]"
      style={{
        width,
        transition: animated ? "width 1.2s cubic-bezier(0.4,0,0.2,1)" : "none",
      }}
    />
  );
}

/* ── 成分行组件 ── */
function IngredientRow({
  ing,
  trackId,
  animated,
}: {
  ing: RatioIngredient;
  trackId: string;
  animated: boolean;
}) {
  const colors = TRACK_COLORS[trackId] || TRACK_COLORS.sleep;
  const roleStyle = ROLE_TAG_STYLES[ing.role] || ROLE_TAG_STYLES["佐药"];

  return (
    <div className="grid grid-cols-[72px_1fr_48px] sm:grid-cols-[88px_1fr_72px] gap-2.5 sm:gap-4 items-center px-3.5 sm:px-6 border-b border-[rgba(201,168,76,0.05)] last:border-b-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors duration-250 cursor-default">
      {/* 成分名 */}
      <div className="py-4">
        <p className="font-['Noto_Serif_SC',serif] text-[13px] tracking-[3px] text-[#DDD5C5] mb-0.5">
          {ing.name}
        </p>
        <p className="text-[9px] tracking-[1px] text-[#5C5040] hidden sm:block">
          {ing.molecule}
        </p>
        <span className={`inline-block text-[8px] tracking-[2px] px-1.5 py-0.5 rounded-[1px] mt-1 ${roleStyle}`}>
          {ing.role}
        </span>
      </div>

      {/* 条形图 */}
      <div className="flex flex-col gap-0.5 justify-center">
        <div className="h-2 bg-[rgba(255,255,255,0.07)] rounded overflow-hidden relative">
          <BarFill ing={ing} trackId={trackId} animated={animated} />
        </div>
        <p className={`text-[9px] tracking-[1.5px] mt-px ${ing.isCore ? colors.sublabelCore : "text-[#7A6A50]"}`}>
          {ing.sublabel}
        </p>
      </div>

      {/* 权重 */}
      <div className={`text-right font-['Cormorant_Garamond',serif] italic text-[11px] py-4 ${ing.isCore ? colors.coreWeight : "text-[#807060]"}`}>
        {ing.weight}
      </div>
    </div>
  );
}

/* ── 主组件 ── */
export default function RatioChart({ data }: { data: TrackRatioData }) {
  const [animated, setAnimated] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prevTrackRef = useRef(data.trackId);

  // 切换赛道时：立即重置动画状态，并重置 inView 检测
  useEffect(() => {
    if (prevTrackRef.current !== data.trackId) {
      // 赛道切换了，先把条形归零（无过渡）
      setAnimated(false);
      setIsInView(false);
      prevTrackRef.current = data.trackId;
    }
  }, [data.trackId]);

  // IntersectionObserver：检测组件是否进入视口
  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      setIsInView(true);
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(handleIntersection, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [data.trackId, handleIntersection]);

  // 进入视口后，延迟一帧再触发动画（确保浏览器先渲染了 0 宽度状态）
  useEffect(() => {
    if (!isInView) return;
    const raf = requestAnimationFrame(() => {
      setAnimated(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [isInView]);

  const colors = TRACK_COLORS[data.trackId] || TRACK_COLORS.sleep;

  // 将成分按分隔线位置分组
  const beforeSep = data.ingredients.slice(0, data.separatorAfter + 1);
  const afterSep = data.ingredients.slice(data.separatorAfter + 1);

  return (
    <div ref={containerRef} className="space-y-6">
      {/* 赛道标题区 */}
      <div>
        <p className="font-['Cormorant_Garamond',serif] italic text-xs tracking-[4px] text-[#C9A84C] mb-2.5">
          {data.eyebrow}
        </p>
        <h3 className="font-['Noto_Serif_SC',serif] text-[clamp(26px,4vw,40px)] font-light tracking-[8px] text-[#F0EDE6] mb-1.5">
          {data.name}
        </h3>
        <p className="text-xs tracking-[2px] text-[#9A8868] leading-8 whitespace-pre-line">
          {data.desc}
        </p>
      </div>

      {/* 配比图主体 */}
      <div className="border border-[rgba(201,168,76,0.18)] bg-[#1A1710] overflow-hidden rounded-lg">
        {/* 图头 */}
        <div className="grid grid-cols-[72px_1fr_48px] sm:grid-cols-[88px_1fr_72px] gap-2.5 sm:gap-4 px-3.5 sm:px-6 py-3 sm:py-4 border-b border-[rgba(201,168,76,0.18)] bg-[rgba(201,168,76,0.04)] items-center">
          <span className="text-[9px] tracking-[3px] text-[#706050]">成分</span>
          <div className="flex justify-between text-[9px] tracking-[1px] text-[#706050]">
            <span>辅助</span>
            <span>协同</span>
            <span>强化</span>
            <span>核心</span>
          </div>
          <span className="text-[9px] tracking-[2px] text-[#5C5040] text-right">权重</span>
        </div>

        {/* 核心成分行 */}
        {beforeSep.map((ing, i) => (
          <IngredientRow key={i} ing={ing} trackId={data.trackId} animated={animated} />
        ))}

        {/* 分组分隔线 */}
        <div className="h-px bg-[rgba(201,168,76,0.15)]" />

        {/* 辅助成分行 */}
        {afterSep.map((ing, i) => (
          <IngredientRow key={i + beforeSep.length} ing={ing} trackId={data.trackId} animated={animated} />
        ))}

        {/* 核心成分说明条 */}
        <div className={`flex gap-7 flex-wrap px-6 py-5 border-t border-[rgba(201,168,76,0.18)] ${colors.calloutBg}`}>
          <div>
            <p className="text-[9px] tracking-[3px] text-[#706050] mb-2">{data.calloutLabel}</p>
            <div className="flex gap-5 flex-wrap">
              {data.callouts.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.calloutDot}`} />
                  <span className="text-[11px] tracking-[2px] text-[#A89878]">{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 图底注 */}
        <div className="px-6 py-3 border-t border-[rgba(201,168,76,0.1)] text-[9px] tracking-[2px] text-[#5C5040] flex justify-between flex-wrap gap-1">
          <span>{data.footLeft}</span>
          <span>{data.footRight}</span>
        </div>
      </div>
    </div>
  );
}

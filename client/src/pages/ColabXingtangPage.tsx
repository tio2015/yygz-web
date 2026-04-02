/*
 * 京沪高铁 · 悦清悦醒糖 品牌落地页
 * 即将上线
 */
export default function ColabXingtangPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6">
      <div className="text-center max-w-xl">
        <p className="text-xs tracking-[0.3em] text-gold/60 uppercase mb-4">京沪高铁 × 一叶归真</p>
        <h1 className="font-[var(--font-heading)] text-3xl lg:text-5xl text-gold-gradient mb-6 leading-tight">
          悦清悦醒糖
        </h1>
        <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-10">
          页面正在建设中，敬请期待。
        </p>
        <a
          href="/health/"
          className="inline-block px-6 py-2.5 text-sm border border-gold/30 text-gold/80 rounded-sm hover:bg-gold/10 transition-colors"
        >
          返回首页
        </a>
      </div>
    </div>
  );
}

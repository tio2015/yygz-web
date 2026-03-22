/*
 * Footer: Dark luxury footer with QR code and brand info
 */
import { BRAND, NAV_ITEMS } from "@/lib/data";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-[oklch(0.10_0.005_260)]">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={BRAND.logo3d} alt={BRAND.name} className="w-10 h-10 object-contain animate-logo-spin" />
              <div>
                <p className="text-gold-gradient font-[var(--font-heading)] text-lg font-semibold tracking-wider">{BRAND.name}</p>
                <p className="text-xs text-muted-foreground tracking-[0.2em]">{BRAND.sub}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              院士科研成果转化，药食同源植物固体饮料。覆盖睡眠、应酬、养颜三大赛道，诚邀视频号主播合作共赢。
            </p>
            <p className="text-xs text-muted-foreground/60">
              北京一叶归真生物科技有限公司
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground tracking-wide">快速导航</h4>
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t border-gold/10">
              <h4 className="text-sm font-medium text-foreground tracking-wide mb-2">集团站点</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="https://yiyeguizhen.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit"
                >
                  ← 返回集团主站
                </a>
                <a
                  href="https://yiyeguizhen.com/tea/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit"
                >
                  中国茶招商站 →
                </a>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground tracking-wide">商务合作</h4>
            <div className="w-32 h-32 rounded-sm overflow-hidden border border-gold/20 p-1.5 bg-white">
              <img src={BRAND.qrCode} alt="商务微信" className="w-full h-full object-contain" />
            </div>
            <p className="text-xs text-muted-foreground">扫码添加商务微信</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-line mt-10 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/50">
          <p>&copy; {new Date().getFullYear()} 北京一叶归真生物科技有限公司 版权所有</p>
          <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">京ICP备2025106012号-2</a>
          <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802047824" rel="noreferrer" target="_blank" className="hover:text-gold transition-colors inline-flex items-center gap-1"><img src="/huizhang.jpeg" alt="公安备案" className="h-3.5 w-auto" />京公网安备11010802047824号</a>
          <p>本站所有产品均为植物固体饮料，不替代药品</p>
        </div>
      </div>
    </footer>
  );
}

/*
 * 养生将军 · 本草新解
 * Design: 深色投资决策界面，翠绿色主调
 * 共享Layout：导航栏 + Footer
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Leaf, Menu, X, ChevronDown } from "lucide-react";
import { QR_CODE } from "@/lib/data";

const EFFICACY_MENU = [
  { href: "/efficacy/jiujiu", label: "植物分子与酒精代谢", color: "text-emerald-400" },
  { href: "/efficacy/hugan", label: "植物分子与肝脏保护", color: "text-amber-400" },
  { href: "/efficacy/zhumian", label: "植物分子与睡眠调节", color: "text-indigo-400" },
  { href: "/efficacy/yangyan", label: "植物分子与皮肤健康", color: "text-rose-400" },
];

const NAV_LINKS = [
  { href: "/", label: "首页" },
  { href: "/supply-chain", label: "产业链" },
  { href: "/labs", label: "科研平台" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="w-5 h-5 text-emerald-400" />
          <span className="font-bold font-[var(--font-heading)] text-sm">
            养生将军 · 本草新解
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-xs transition-colors ${
                location === l.href
                  ? "text-emerald-400"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Dropdown: 科学研究 */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-xs transition-colors ${
                location.startsWith("/efficacy")
                  ? "text-emerald-400"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              科学研究
              <ChevronDown
                className={`w-3 h-3 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 w-56 bg-card/95 backdrop-blur-lg border border-border/50 rounded-lg shadow-xl overflow-hidden"
              >
                {EFFICACY_MENU.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 text-xs hover:bg-accent/50 transition-colors ${
                      location === item.href
                        ? item.color
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/50 px-4 pb-4"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block py-2.5 text-sm ${
                location === l.href
                  ? "text-emerald-400"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="border-t border-border/30 mt-2 pt-2">
            <p className="text-xs text-muted-foreground/60 mb-2 uppercase tracking-wider">
              科学研究
            </p>
            {EFFICACY_MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2.5 text-sm pl-3 ${
                  location === item.href
                    ? item.color
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/20 py-10 sm:py-16 mt-16">
      <div className="container">
        {/* 联系方式 */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <p className="text-sm text-muted-foreground text-center">
            如需了解更多科技成果转化情况，请扫码联系
          </p>
          <img
            src={QR_CODE}
            alt="联系二维码"
            className="w-32 h-32 rounded-lg"
          />
        </div>
        {/* 底部信息 */}
        <div className="border-t border-border/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-muted-foreground">
              养生将军 · 本草新解
            </span>
          </div>
          <p className="text-xs text-muted-foreground text-center sm:text-right max-w-md">
            本站内容仅供科学知识普及，不构成任何医疗建议或产品功效声明。所有数据均来源于公开发表的学术文献和行业报告。
          </p>
        </div>
      </div>
    </footer>
  );
}

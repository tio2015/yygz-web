/*
 * 植养萃 · 本草新解
 * Design: 深色投资决策界面，翠绿色主调
 * 共享Layout：导航栏 + Footer
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X, ChevronDown, MessageCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { QR_CODE } from "@/lib/data";

const EFFICACY_MENU = [
  { href: "/efficacy/jiujiu", label: "解酒科学", color: "text-emerald-400" },
  { href: "/efficacy/hugan", label: "护肝研究", color: "text-amber-400" },
  { href: "/efficacy/zhumian", label: "安眠科学", color: "text-indigo-400" },
  { href: "/efficacy/yangyan", label: "焕颜研究", color: "text-rose-400" },
];

const NAV_LINKS = [
  { href: "/", label: "首页" },
  { href: "/product", label: "产品详情" },
  { href: "/supply-chain", label: "产业链" },
  { href: "/labs", label: "科研平台" },
  { href: "/references", label: "文献库" },
];

const FOOTER_LINKS = [
  { href: "/", label: "首页" },
  { href: "/product", label: "产品详情" },
  { href: "/supply-chain", label: "产业链" },
  { href: "/labs", label: "科研平台" },
  { href: "/efficacy/jiujiu", label: "科学研究" },
  { href: "/references", label: "文献库" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location] = useLocation();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact-qr");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            植养萃 · 本草新解
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

          {/* Dropdown: 科学研究 - hover triggered on desktop */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute top-full right-0 mt-2 w-56 bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl overflow-hidden"
                >
                  <div className="px-3 pt-3 pb-1.5">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-semibold">探索研究方向</p>
                  </div>
                  {EFFICACY_MENU.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2.5 mx-1.5 mb-1 rounded-lg text-xs transition-all duration-200 group ${
                        location === item.href
                          ? `${item.color} bg-accent/30`
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full shrink-0 ${item.color.replace('text-', 'bg-')} ring-2 ring-offset-1 ring-offset-card ${item.color.replace('text-', 'ring-')}/30`} />
                      <span className="flex-1 font-medium">{item.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  ))}
                  <div className="h-1.5" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToContact}
            className="ml-2 px-4 py-1.5 text-xs font-medium border border-emerald-500/50 text-emerald-400 rounded-full hover:bg-emerald-500 hover:text-background transition-all duration-300"
          >
            合作咨询
          </button>
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
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
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
              <p className="text-[10px] text-muted-foreground/50 mb-2 uppercase tracking-widest font-semibold">
                探索研究方向
              </p>
              {EFFICACY_MENU.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 py-2.5 pl-3 pr-2 rounded-lg mb-0.5 transition-all ${
                    location === item.href
                      ? `${item.color} bg-accent/20`
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/20"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full shrink-0 ${item.color.replace('text-', 'bg-')}`} />
                  <span className="flex-1 text-sm font-medium">{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
              ))}
            </div>
            <div className="border-t border-border/30 mt-2 pt-3">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setTimeout(scrollToContact, 100);
                }}
                className="w-full px-4 py-2 text-sm font-medium border border-emerald-500/50 text-emerald-400 rounded-lg hover:bg-emerald-500 hover:text-background transition-all"
              >
                合作咨询
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* Floating back button for sub-pages */
export function FloatingBackButton() {
  const [visible, setVisible] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Only show on sub-pages
  if (location === "/") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-6 z-40"
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2.5 bg-card/90 backdrop-blur-xl border border-border/50 rounded-full shadow-xl hover:bg-emerald-500 hover:text-background hover:border-emerald-500 transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-sm font-medium">返回首页</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/20 py-10 sm:py-16 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Left: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="w-5 h-5 text-emerald-400" />
              <span className="font-bold font-[var(--font-heading)] text-sm">
                植养萃 · 本草新解
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              用科学重新理解植物的力量
            </p>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-3">
              快速链接
            </h4>
            <div className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-emerald-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-2">
                商务合作
              </h4>
              <p className="text-sm text-muted-foreground">请扫码添加微信联系</p>
            </div>
          </div>

          {/* Right: QR Code */}
          <div id="contact-qr" className="flex flex-col items-center sm:items-end">
            <p className="text-sm text-muted-foreground text-center sm:text-right mb-3">
              关注植养萃，了解更多本草科学
            </p>
            <img
              src={QR_CODE}
              alt="联系二维码"
              className="w-32 h-32 rounded-lg"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-muted-foreground">
              植养萃 · 本草新解
            </span>
          </div>
          <p className="text-xs text-muted-foreground text-center sm:text-right max-w-lg">
            本站内容仅供科学知识普及，不构成任何医疗建议或产品功效声明。所有数据均来源于公开发表的学术文献和行业报告。
          </p>
        </div>
      </div>
    </footer>
  );
}

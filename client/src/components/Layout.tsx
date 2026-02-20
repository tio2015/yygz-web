/*
 * 养生将军 · 本草新解
 * Design: 深色投资决策界面，翠绿色主调
 * 共享Layout：导航栏 + Footer
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { QR_CODE } from "@/lib/data";

const EFFICACY_MENU = [
  { href: "/efficacy/jiujiu", label: "解酒科学", color: "text-emerald-400" },
  { href: "/efficacy/hugan", label: "护肝研究", color: "text-amber-400" },
  { href: "/efficacy/zhumian", label: "安眠科学", color: "text-indigo-400" },
  { href: "/efficacy/yangyan", label: "焕颜研究", color: "text-rose-400" },
];

const NAV_LINKS = [
  { href: "/", label: "首页" },
  { href: "/supply-chain", label: "产业链" },
  { href: "/labs", label: "科研平台" },
];

const FOOTER_LINKS = [
  { href: "/", label: "首页" },
  { href: "/supply-chain", label: "产业链" },
  { href: "/labs", label: "科研平台" },
  { href: "/efficacy/jiujiu", label: "科学研究" },
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
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 w-40 bg-card/95 backdrop-blur-lg border border-border/50 rounded-lg shadow-xl overflow-hidden"
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
                养生将军 · 本草新解
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
              关注养生将军，了解更多本草科学
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
              养生将军 · 本草新解
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

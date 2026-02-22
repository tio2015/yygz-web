/*
 * Navbar: Dark luxury top navigation
 * Frosted glass effect, gold accent, responsive hamburger
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { BRAND, NAV_ITEMS } from "@/lib/data";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.10_0.005_260/85%)] backdrop-blur-xl border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo - Dual brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* 一叶归真 logo */}
          <img
            src={BRAND.logoBlack}
            alt="一叶归真"
            className="w-8 h-8 lg:w-9 lg:h-9 object-contain invert brightness-200 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex flex-col leading-none">
            <span className="text-gold-gradient font-[var(--font-heading)] text-base lg:text-lg font-semibold tracking-wider">
              一叶归真<sup className="text-[8px] lg:text-[9px] align-super ml-0.5 text-gold/70">®</sup>
            </span>
          </div>
          {/* Divider */}
          <div className="w-px h-8 bg-gold/20 mx-1" />
          {/* 植养萃 logo */}
          <img
            src={BRAND.logoZhiyangcui}
            alt="植养萃"
            className="w-9 h-9 lg:w-10 lg:h-10 object-contain brightness-150 saturate-150 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex flex-col leading-none">
            <span className="text-foreground font-[var(--font-heading)] text-base lg:text-lg font-semibold tracking-wider">
              植养萃<sup className="text-[8px] lg:text-[9px] align-super ml-0.5 text-gold/70">®</sup>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-sm tracking-wide transition-all duration-300 rounded-sm ${
                location === item.href
                  ? "text-gold bg-gold/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/partner"
            className="ml-4 px-5 py-2 text-sm font-medium bg-gold text-charcoal rounded-sm hover:bg-gold-bright transition-colors duration-300"
          >
            招商合作
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[oklch(0.10_0.005_260/95%)] backdrop-blur-xl border-t border-gold/10">
          <div className="container py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 text-sm tracking-wide rounded-sm transition-colors ${
                  location === item.href
                    ? "text-gold bg-gold/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/partner"
              className="mt-2 px-4 py-3 text-sm font-medium bg-gold text-charcoal rounded-sm text-center"
            >
              招商合作
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

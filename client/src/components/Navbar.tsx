/*
 * Navbar: Dark luxury top navigation
 * Frosted glass effect, gold accent, responsive hamburger
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { BRAND, NAV_ITEMS, type NavItem } from "@/lib/data";
import { Menu, X, ChevronDown } from "lucide-react";

function DropdownItem({ item, location }: { item: NavItem; location: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={`px-4 py-2 text-sm tracking-wide transition-all duration-300 rounded-sm ${
          location === item.href
            ? "text-gold bg-gold/10"
            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className={`flex items-center gap-1 px-4 py-2 text-sm tracking-wide transition-all duration-300 rounded-sm ${
          open
            ? "text-gold bg-gold/10"
            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
        }`}
      >
        {item.label}
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${open ? "rotate-180 text-gold" : ""}`}
        />
      </button>

      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-[oklch(0.10_0.005_260/95%)] backdrop-blur-xl border border-gold/15 rounded-sm shadow-xl z-50 overflow-hidden"
        >
          {item.children.map((child) => (
            <a
              key={child.href}
              href={child.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-muted-foreground hover:text-gold hover:bg-gold/8 transition-colors duration-200 border-b border-white/5 last:border-0 whitespace-nowrap"
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
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
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src={BRAND.logo3d}
            alt="一叶归真"
            className="w-10 h-10 lg:w-11 lg:h-11 object-contain animate-logo-spin"
          />
          <div className="flex flex-col leading-none gap-0.5">
            <span className="text-gold-gradient font-[var(--font-heading)] text-lg lg:text-xl font-semibold tracking-wider">
              一叶归真<sup className="text-[8px] lg:text-[9px] align-super ml-0.5 text-gold/70">®</sup>
            </span>
            <span className="text-[10px] lg:text-xs text-muted-foreground tracking-[0.2em]">
              植养萃<sup className="text-[7px] align-super ml-0.5 text-muted-foreground/60">®</sup>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <DropdownItem key={item.href} item={item} location={location} />
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
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-sm tracking-wide rounded-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        mobileExpanded === item.label ? "rotate-180 text-gold" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-4 border-l border-gold/15 pl-3 flex flex-col gap-0.5">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 text-sm text-muted-foreground hover:text-gold transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}
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

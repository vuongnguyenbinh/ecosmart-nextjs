"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, FileText, Scale, Sun, Moon } from "lucide-react";

const navItems = [
  { href: "/#about", label: "GIỚI THIỆU" },
  { href: "/#services", label: "DỊCH VỤ" },
  { href: "/#projects", label: "DỰ ÁN" },
  { href: "/#testimonials", label: "ĐÁNH GIÁ" },
  { href: "/#contact", label: "LIÊN HỆ" },
];

const memberCompanies = [
  {
    href: "/ke-toan",
    name: "An Phương Phát",
    desc: "Kế toán - Thuế",
    icon: FileText,
  },
  {
    href: "/phap-ly",
    name: "Luật Phan Anh",
    desc: "Tư vấn pháp lý",
    icon: Scale,
  },
];

export function SiteHeaderLuxury() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-ecosmart.png"
              alt="Eco Smart Group Logo"
              width={48}
              height={48}
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain bg-white/5 rounded p-0.5"
            />
            <div className="flex flex-col">
              <span className="font-[var(--font-display)] text-sm lg:text-lg font-semibold tracking-wider gold-text">
                ECO SMART GROUP
              </span>
              <span className="text-[8px] lg:text-[10px] tracking-[0.2em] text-[var(--esg-gold)]/70 font-light">
                KẾT NỐI - HỢP TÁC - THÀNH CÔNG
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wider text-theme-secondary hover:text-[var(--esg-gold)] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Member Companies Dropdown */}
            <div className="relative group">
              <button className="text-sm tracking-wider text-theme-secondary hover:text-[var(--esg-gold)] transition-colors font-medium flex items-center gap-1">
                THÀNH VIÊN
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-theme-secondary/95 backdrop-blur-lg border border-[var(--esg-gold)]/20 rounded-lg p-2 min-w-[220px] shadow-xl">
                  {memberCompanies.map((company) => (
                    <Link
                      key={company.href}
                      href={company.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[var(--esg-gold)]/10 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[var(--esg-gold)]/20 flex items-center justify-center">
                        <company.icon className="w-4 h-4 text-[var(--esg-gold)]" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-theme-primary">
                          {company.name}
                        </div>
                        <div className="text-xs text-theme-secondary">
                          {company.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navItems.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wider text-theme-secondary hover:text-[var(--esg-gold)] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--esg-gold)]/10 transition-colors text-[var(--esg-gold)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <Link href="/#contact" className="btn-luxury">
              Liên hệ ngay
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[var(--esg-gold)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-theme-primary z-40 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="p-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-lg text-theme-secondary hover:text-[var(--esg-gold)] transition-colors border-b border-theme"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <p className="text-sm text-[var(--esg-gold)] mb-3">THÀNH VIÊN</p>
            {memberCompanies.map((company) => (
              <Link
                key={company.href}
                href={company.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 py-3"
              >
                <company.icon className="w-5 h-5 text-[var(--esg-gold)]" />
                <span className="text-theme-secondary">{company.name}</span>
              </Link>
            ))}
          </div>
          <div className="pt-6 flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--esg-gold)]/10 text-[var(--esg-gold)]"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-luxury flex-1 text-center"
            >
              Liên hệ ngay
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/dich-vu", label: "Dịch vụ" },
  { href: "/kinh-doanh", label: "Kinh doanh" },
  { href: "/marketing", label: "Marketing" },
  { href: "/phap-ly", label: "Pháp lý" },
  { href: "/ke-toan", label: "Kế toán" },
  { href: "/blog", label: "Blog" },
  { href: "/lien-he", label: "Liên hệ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--esg-gold)]/20 bg-[var(--background)]">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold gold-text">
            ECO SMART GROUP
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm hover:text-[var(--esg-gold)] transition ${
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href))
                      ? "text-[var(--esg-gold)]"
                      : "opacity-70"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <ul className="lg:hidden mt-4 pt-4 border-t border-[var(--esg-gold)]/20 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 hover:text-[var(--esg-gold)] transition ${
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href))
                      ? "text-[var(--esg-gold)]"
                      : "opacity-70"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

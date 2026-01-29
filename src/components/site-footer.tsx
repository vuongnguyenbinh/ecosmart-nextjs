import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/kinh-doanh", label: "Kinh doanh" },
    { href: "/marketing", label: "Marketing" },
    { href: "/phap-ly", label: "Pháp lý" },
    { href: "/ke-toan", label: "Kế toán" },
  ],
  company: [
    { href: "/#about", label: "Giới thiệu" },
    { href: "/#projects", label: "Dự án" },
    { href: "/blog", label: "Tin tức" },
    { href: "/#contact", label: "Liên hệ" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-theme-primary border-t border-theme relative z-20">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo-ecosmart.png"
                alt="Eco Smart Group"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-[var(--font-display)] text-lg font-semibold gold-text">
                ECO SMART GROUP
              </span>
            </Link>
            <p className="text-theme-secondary text-sm leading-relaxed mb-6">
              Hệ sinh thái dịch vụ văn phòng 360° - Nơi khởi nguồn thành công
              cho doanh nghiệp của bạn.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-theme flex items-center justify-center text-theme-secondary hover:border-[var(--esg-gold)] hover:text-[var(--esg-gold)] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-theme flex items-center justify-center text-theme-secondary hover:border-[var(--esg-gold)] hover:text-[var(--esg-gold)] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[var(--esg-gold)] font-semibold mb-6 tracking-wider text-sm">
              DỊCH VỤ
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-theme-secondary hover:text-[var(--esg-gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[var(--esg-gold)] font-semibold mb-6 tracking-wider text-sm">
              CÔNG TY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-theme-secondary hover:text-[var(--esg-gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--esg-gold)] font-semibold mb-6 tracking-wider text-sm">
              LIÊN HỆ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--esg-gold)] flex-shrink-0 mt-0.5" />
                <span className="text-theme-secondary text-sm">
                  123 Đường ABC, Quận 1, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--esg-gold)] flex-shrink-0" />
                <a
                  href="tel:+84123456789"
                  className="text-theme-secondary hover:text-[var(--esg-gold)] transition-colors text-sm"
                >
                  +84 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--esg-gold)] flex-shrink-0" />
                <a
                  href="mailto:contact@ecosmartgroup.vn"
                  className="text-theme-secondary hover:text-[var(--esg-gold)] transition-colors text-sm"
                >
                  contact@ecosmartgroup.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-theme mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-theme-secondary text-sm">
            © {new Date().getFullYear()} Eco Smart Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-theme-secondary hover:text-[var(--esg-gold)] transition-colors text-sm"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="/terms"
              className="text-theme-secondary hover:text-[var(--esg-gold)] transition-colors text-sm"
            >
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { SiteHeaderLuxury } from "@/components/site-header-luxury";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Eco Smart Group | Kết Nối - Hợp Tác - Thành Công",
  description:
    "Eco Smart Group - Hệ sinh thái dịch vụ văn phòng 360°. Cho thuê văn phòng, thiết kế nội thất, tư vấn pháp lý và dịch vụ vận hành toàn diện.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        <SiteHeaderLuxury />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

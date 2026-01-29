import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header-navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ECO SMART GROUP - Kết Nối - Hợp Tác - Thành Công",
  description:
    "ECO SMART GROUP cung cấp giải pháp toàn diện trong các lĩnh vực Kinh doanh, Marketing, Pháp lý và Kế toán cho doanh nghiệp Việt Nam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}

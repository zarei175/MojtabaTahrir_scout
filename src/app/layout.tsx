import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "مجتبی تحریر | فروشگاه لوازم‌التحریر",
  description: "فروشگاه آنلاین لوازم‌التحریر مجتبی تحریر - ارائه انواع لوازم‌التحریر با کیفیت و قیمت مناسب",
  keywords: "لوازم‌التحریر, تحریر, نوشت‌افزار, مداد, خودکار, دفتر",
  authors: [{ name: "مجتبی تحریر" }],
  openGraph: {
    title: "مجتبی تحریر | فروشگاه لوازم‌التحریر",
    description: "فروشگاه آنلاین لوازم‌التحریر مجتبی تحریر",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} font-persian antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
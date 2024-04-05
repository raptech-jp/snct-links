import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Noto_Sans_JP } from 'next/font/google'
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: "仙台高専広瀬 学生用リンク集",
  description: "広瀬キャンパス学生向けのリンク集",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={notoSansJP.className}>{children}</body>
      <Analytics />
    </html>
  );
}

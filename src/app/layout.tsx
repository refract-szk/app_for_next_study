import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import AppThemeProvider from "@/providers/ThemeProvider";
import { notoSansJp, lexendGiga } from "@/theme/fonts";

export const metadata: Metadata = {
  title: "KPTs | for study",
  description: "React / Next.js 学習のためのサンプルアプリです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${lexendGiga.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <AppThemeProvider>
            {children}
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

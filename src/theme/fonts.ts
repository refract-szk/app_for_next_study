import { Noto_Sans_JP, Lexend_Giga } from "next/font/google";

export const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
  variable: '--font-noto-sans-jp',
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

export const lexendGiga = Lexend_Giga({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
  variable: '--font-lexend-giga',
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

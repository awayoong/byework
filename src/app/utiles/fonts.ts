import { M_PLUS_1p, Noto_Sans_JP } from "next/font/google";

export const mPlus1p = M_PLUS_1p({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mplus1p",
  display: "swap",
});

export const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-notojp",
  display: "swap",
});
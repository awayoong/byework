import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import Header from './components/Header';
import { notoJP, mPlus1p } from './utiles/fonts';

export const metadata: Metadata = {
  title: '退職代行Byeバイト | アルバイト専門',
  description: 'アルバイト専門！退職代行Byeバイトの公式ホームページです。学割実施中！',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoJP.variable} ${mPlus1p.variable}`}>
      <body className="bg-white text-gray-800 font-notojp">
        <Header />
        <main className="pt-20">{children}</main>
        <footer className="bg-white border-t mt-8 p-4 text-center">
          <a
            href="/terms"
            className="text-gray-700 hover:text-red-500 transition mx-2"
          >
            ご利用規約
          </a>
          <a
            href="/privacy-policy"
            className="text-gray-700 hover:text-red-500 transition mx-2"
          >
            プライバシーポリシー
          </a>
        </footer>
      </body>
    </html>
  );
}

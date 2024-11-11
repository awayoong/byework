// layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '退職代行バイバイト | アルバイト専門',
  description: 'アルバイト専門！退職代行バイバイトの公式ホームページです。学割実施中！',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900 font-sans">
        {/* ナビゲーションメニュー */}
        <nav className="fixed top-0 w-full bg-white shadow-md z-10">
          <div className="container mx-auto p-4 flex justify-end space-x-6">
            <a href="#section1" className="text-gray-700 hover:text-blue-500 transition">Top</a>
            <a href="#section2" className="text-gray-700 hover:text-blue-500 transition">料金プラン</a>
            <a href="#section3" className="text-gray-700 hover:text-blue-500 transition">バイバイトの特徴</a>
          </div>
        </nav>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}

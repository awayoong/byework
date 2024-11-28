import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';

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
    <html lang="ja">
      <body className="bg-white text-gray-800">
        {/* ナビゲーションメニュー */}
        <nav className="fixed top-0 w-full bg-white shadow-md z-10">
          <div className="container mx-auto p-4 flex items-center justify-between">
            {/* ロゴ */}
            <a href="/" className="flex items-center">
              <Image
                src="/images/Byeバイト_ロゴ.png"
                alt="Byeバイトのロゴ"
                width={120}
                height={120}
                className="h-auto w-auto"
              />
            </a>

            {/* メニュー */}
            <div className="flex space-x-6">
              <a
                href="/#section1"
                className="text-gray-700 hover:text-blue-500 transition"
              >
                Top
              </a>
              <a
                href="/#section2"
                className="text-gray-700 hover:text-blue-500 transition"
              >
                料金プラン
              </a>
              <a
                href="/#section3"
                className="text-gray-700 hover:text-blue-500 transition"
              >
                Byeバイトの特徴
              </a>
              <a
                href="/#section4"
                className="text-gray-700 hover:text-blue-500 transition"
              >
                サービスの流れ
              </a>
            </div>
          </div>
        </nav>

        {/* メインコンテンツ */}
        <main className="pt-20 bg-stone-100">{children}</main>

        {/* フッター */}
        <footer className="bg-white border-t mt-8 p-4 text-center">
          <a
            href="/terms"
            className="text-gray-700 hover:text-blue-500 transition mx-2"
          >
            ご利用規約
          </a>

          <a
            href="/privacy-policy"
            className="text-gray-700 hover:text-blue-500 transition mx-2"
          >
            プライバシーポリシー
          </a>
        </footer>
      </body>
    </html>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニューの状態変更時にスクロール制御
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // 各メニューリンクの設定
  const menuItems = [
    { text: 'Top', href: '/#top' },
    { text: '料金プラン', href: '/#price' },
    { text: 'Byeバイトの特徴', href: '/#features' },
    { text: 'サービス比較', href: '/#compare' },
    { text: 'サービスの流れ', href: '/#flow' },
    { text: 'よくある質問', href: '/#faq' },
  ];

  return (
    <>
      <nav className="md:fixed w-full bg-white shadow-md z-10 md:flex md:items-center md:justify-between">
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

          {/* ハンバーガーメニュー */}
          <button
            className="md:hidden text-white bg-red-500 hover:bg-red-400 transition rounded-full p-2 focus:outline-none shadow-lg fixed top-4 right-4 z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

          {/* メニュー（デスクトップ版） */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="bg-red-500 text-white hover:bg-red-400 transition rounded-full px-4 py-2 text-sm font-semibold shadow"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* メニュー（モバイル版） */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-red-300 to-red-600 text-white flex flex-col items-center justify-center space-y-6 z-20 transform transition-all duration-300 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {/* 閉じるボタン */}
        <button
          className="absolute top-4 right-4 text-white focus:outline-none z-50"
          onClick={() => setIsMenuOpen(false)}
          aria-label="メニューを閉じる"
        >
          <FiX size={32} />
        </button>

        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-lg font-semibold hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.text}
          </a>
        ))}
      </div>
    </>
  );
}

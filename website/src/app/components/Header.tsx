'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // スクロール制御
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

  return (
    <>
      <nav className="md:fixed md:top-0 w-full bg-white shadow-md z-10 md:flex md:items-center md:justify-between">
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
            className="md:hidden text-white bg-red-500 hover:bg-red-600 transition rounded-full p-2 focus:outline-none shadow-lg fixed top-4 right-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

          {/* メニュー（デスクトップ版） */}
          <div className="hidden md:flex space-x-4">
            {['Top', '料金プラン', 'Byeバイトの特徴', 'サービスの流れ'].map((text, index) => (
              <a
                key={index}
                href={`/#section${index + 1}`}
                className="bg-red-500 text-white hover:bg-red-600 transition rounded-full px-4 py-2 text-sm font-semibold shadow"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* メニュー（モバイル版） */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-red-300 to-red-600 text-white flex flex-col items-center justify-center space-y-6 z-20">
          {/* 閉じるボタン */}
          <button
            className="absolute top-4 right-4 text-white focus:outline-none z-50"
            onClick={() => setIsMenuOpen(false)}
            aria-label="メニューを閉じる"
          >
            <FiX size={32} />
          </button>

          {['Top', '料金プラン', 'Byeバイトの特徴', 'サービスの流れ'].map((text, index) => (
            <a
              key={index}
              href={`/#section${index + 1}`}
              className="text-lg font-semibold hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {text}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

import React from "react";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-4 z-10">
      {/* 四角形ボタン部分 */}
      <div className="relative bg-white p-4 rounded-lg shadow-2xl max-w-xs md:max-w-sm">
        {/* 内容 */}
        <div className="text-center">
          <p className="text-sm md:text-base font-bold mb-1">
            受付時間 9時-24時
          </p>
          <p className="text-xs md:text-sm mb-3">
            お気軽にお問い合わせください。
          </p>
          <a
            href="https://line.me/R/ti/p/@540amcfs?oat_content=url"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-green-500 text-white font-bold rounded shadow-lg hover:bg-green-600 transition duration-300 text-sm md:text-base"
          >
            LINEで相談
          </a>
        </div>
      </div>

      {/* マスコット画像 */}
      <div className="flex-shrink-0">
        <img
          src={"/public/images/ヤメ子_バイバイト.jpg"}
          alt="ヤメ子画像"
          width={120} // 基本サイズ
          height={120}
          className="rounded-full shadow-lg md:w-24 md:h-24" // レスポンシブ対応
        />
        <p className="text-center text-sm md:text-base font-bold mb-1">
          ヤメ子
        </p>
      </div>
    </div>
  );
}

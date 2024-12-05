import React from "react";
import Image from "next/image";

export default function TopSection() {
  return (
    <section id="top" className="py-8">
      <div className="flex flex-col items-center">
        <picture>
          {/* 画面幅が狭い場合の画像 */}
          <source
            srcSet="/images/Top_narrow.png"
            media="(max-width: 768px)"
          />
          {/* デフォルト（画面幅が広い場合）の画像 */}
          <Image
            src="/images/Top_wide.png"
            alt="Top画像"
            width={1080}
            height={720}
            className="rounded-lg shadow-lg"
          />
        </picture>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import yameoImage from "../images/ヤメオ_バイバイト.jpg";

export default function TopSection() {
  return (
    <section
      id="section1"
      className="flex flex-col items-center justify-center bg-blue-50 text-gray-800 shadow-md py-16"
    >
      <h2 className="text-4xl font-bold mb-4">Top</h2>
      <p className="text-lg">アルバイト退職を専門にサポートします。</p>
      <Image
        src={yameoImage}
        alt="ヤメオの画像"
        width={500}
        height={300}
        className="rounded-lg shadow-lg"
      />
    </section>
  );
}

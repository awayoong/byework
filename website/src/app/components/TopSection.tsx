import React from "react";
import Image from "next/image";

export default function TopSection() {
  return (
    <section
      id="section1"
      className="flex flex-col items-center justify-center bg-blue-50 text-gray-800 shadow-md py-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center my-8">
        Top
      </h2>
      <p className="text-lg">アルバイト退職を専門にサポートします。</p>
      <Image
        src={"/images/ヤメオ_バイバイト.jpg"}
        alt="ヤメオの画像"
        width={500}
        height={300}
        className="rounded-lg shadow-lg"
      />
    </section>
  );
}

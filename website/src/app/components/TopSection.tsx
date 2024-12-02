import React from "react";
import Image from "next/image";

export default function TopSection() {
  return (
    <section id="section1" className="py-24">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Top
      </h2>
      <p className="text-lg text-center my-8">アルバイト退職を専門にサポートします。</p>
      <div className="flex flex-col items-center">
        <Image
          src={"/images/ヤメオ_バイバイト.jpg"}
          alt="ヤメオの画像"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

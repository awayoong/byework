import React from "react";

export default function FeaturesSection() {
  return (
    <section
      id="section3"
      className="bg-blue-50 text-gray-800 shadow-md py-16"
    >
      <h2 className="text-center text-4xl font-bold mb-8">バイバイトの特徴</h2>
      <ul className="list-disc list-inside space-y-2 mx-auto max-w-md text-lg">
        <li>即日退職可能！</li>
        <li>最短10分で代行開始</li>
        <li>入社0日から対応可能</li>
        <li>試用期間、研修中も対応可能</li>
        <li>内定辞退のご依頼も承り可能</li>
      </ul>
    </section>
  );
}

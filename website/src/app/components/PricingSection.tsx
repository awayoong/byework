import React from "react";
import Image from "next/image";

export default function PricingSection() {
  return (
    <section
      id="section2"
      className="bg-white text-gray-800 shadow-md py-16"
    >
      <h2 className="text-center text-4xl font-bold mb-8">料金プラン</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-10">
        <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">学生</h3>
          <p className="text-xl font-bold">5,000円 + 税</p>
        </div>
        <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">非学生</h3>
          <p className="text-xl font-bold">8,000円 + 税</p>
        </div>
      </div>
      <div className="text-center my-16">
        <h4 className="text-3xl font-bold mb-8">豊富な決済手段</h4>
        <Image
          src={"/images/card_VISA_MASTER_AMEX.gif"}
          alt="決済可能なクレジットカード一覧"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

import React from "react";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaGooglePay, FaApplePay } from "react-icons/fa";

export default function PricingSection() {
  return (
    <section id="price" className="py-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">料金プラン</h2>
        <p className="text-lg my-8">学生の方はオトクな学割が適用されます。</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto px-4">
        {/* プランカード: 学生 */}
        <div className="relative rounded-3xl shadow-lg border border-red-300 flex-1 p-10 md:p-12">
          <div className="absolute top-4 right-4 w-16 h-16 bg-red-300 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">🎓</span>
          </div>
          <h3 className="text-3xl font-bold text-red-500 mb-4">学生プラン</h3>
          <p className="text-4xl font-bold mb-4">
            ¥5,000 <span className="text-lg text-gray-500">+ 税</span>
          </p>
          <p className="font-bold text-red-600 bg-red-100 shadow-sm px-6 py-2 rounded-full inline-block">
            学割実施中！今だけ特別価格🔥
          </p>
        </div>

        {/* プランカード: 非学生 */}
        <div className="relative bg-white rounded-3xl shadow-lg border border-gray-300 flex-1 p-10 md:p-12">
          <div className="absolute top-4 right-4 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600 text-2xl font-bold">💼</span>
          </div>
          <h3 className="text-3xl font-bold text-red-500 mb-4">一般プラン</h3>
          <p className="text-4xl font-bold mb-4">
            ¥8,000 <span className="text-lg text-gray-500">+ 税</span>
          </p>
          <p className="font-bold bg-gray-200 shadow-sm px-6 py-2 rounded-full inline-block">
            業界最安値です👍
          </p>
        </div>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-xl md:text-2xl font-bold">お支払い方法</h2>
        <p className="my-8">
          クレジットカード、電子マネーなど豊富な決済手段に対応しています。
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* 各アイコン */}
          {[
            { Icon: FaCcVisa, label: "VISA" },
            { Icon: FaCcMastercard, label: "MasterCard" },
            { Icon: FaCcAmex, label: "Amex" },
            { Icon: FaGooglePay, label: "Google Pay" },
            { Icon: FaApplePay, label: "Apple Pay" },
          ].map(({ Icon, label }, index) => (
            <div key={index} className="flex flex-col items-center">
              <Icon className="text-4xl text-gray-700" />
              <p className="text-sm text-gray-600 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

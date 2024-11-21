import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // アイコンを使用する場合

export default function FeaturesSection() {
  return (
    <section id="section3" className="bg-blue-50 text-gray-800 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        バイバイトの特徴
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 特徴カード1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 text-xl mr-3" />
              <h3 className="text-xl font-semibold">即日退職可能</h3>
            </div>
            <p className="text-base text-gray-600">
              すぐに退職手続きを開始できるので、迅速に対応可能です。
            </p>
          </div>

          {/* 特徴カード2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 text-xl mr-3" />
              <h3 className="text-xl font-semibold">最短10分で代行開始</h3>
            </div>
            <p className="text-base text-gray-600">
              面倒な手続きはお任せ。10分以内に代行を開始します。
            </p>
          </div>

          {/* 特徴カード3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 text-xl mr-3" />
              <h3 className="text-xl font-semibold">入社0日から対応可能</h3>
            </div>
            <p className="text-base text-gray-600">
              入社してからすぐに退職手続きを始められます。
            </p>
          </div>

          {/* 特徴カード4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 text-xl mr-3" />
              <h3 className="text-xl font-semibold">試用期間、研修中も対応可能</h3>
            </div>
            <p className="text-base text-gray-600">
              試用期間や研修中でも退職代行サービスを提供します。
            </p>
          </div>

          {/* 特徴カード5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 text-xl mr-3" />
              <h3 className="text-xl font-semibold">内定辞退のご依頼も承り可能</h3>
            </div>
            <p className="text-base text-gray-600">
              内定を辞退したい場合もご依頼をお受けいたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

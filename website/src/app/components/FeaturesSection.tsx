import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        バイバイトの特徴
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-red-500 text-xl mr-3" />
              <h3 className="text-xl font-semibold">業界最安値</h3>
            </div>
            <p className="text-base text-gray-600">
              アルバイト退職専門だからできる値段。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-red-500 text-xl mr-3" />
              <h3 className="text-xl font-semibold">学割対応あり</h3>
            </div>
            <p className="text-base text-gray-600">
              学生が少しでも気軽に利用できるよう学割を設けています。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-red-500 text-xl mr-3" />
              <h3 className="text-xl font-semibold">即日退職可能</h3>
            </div>
            <p className="text-base text-gray-600">
              すぐに退職手続きを開始できるので、迅速に対応可能です。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-red-500 text-xl mr-3" />
              <h3 className="text-xl font-semibold">最短10分で代行開始</h3>
            </div>
            <p className="text-base text-gray-600">
              面倒な手続きはお任せ。10分以内に代行を開始します。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-red-500 text-xl mr-3" />
              <h3 className="text-xl font-semibold">出勤１日目から対応可能</h3>
            </div>
            <p className="text-base text-gray-600">
              入社してからすぐに退職手続きを始められます。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-red-500 text-xl mr-3" />
              <h3 className="text-xl font-semibold">試用期間、研修中も対応可能</h3>
            </div>
            <p className="text-base text-gray-600">
              試用期間や研修中でも退職代行サービスを提供します。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-red-500 text-xl mr-3" />
              <h3 className="text-xl font-semibold">面接通過後の辞退連絡</h3>
            </div>
            <p className="text-base text-gray-600">
              就業を辞退したい場合もご依頼をお受けいたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

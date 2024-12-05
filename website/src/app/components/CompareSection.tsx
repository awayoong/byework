import React from "react";
import Image from "next/image";
import { FaUserTie, FaBalanceScale, FaUsers, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function CompareSection() {
  const rows = [
    {
      label: "料金",
      Byeバイト: { text: "業界最安値 8,000円", icon: <FaCheckCircle className="text-green-500" /> },
      他社民間業者: { text: "20,000円前後", icon: <FaCheckCircle className="text-yellow-500" /> },
      弁護士: { text: "50,000円前後", icon: <FaCheckCircle className="text-red-500" /> },
      労働組合: { text: "30,000円前後", icon: <FaCheckCircle className="text-red-500" /> },
    },
    {
      label: "学割",
      Byeバイト: { text: "さらに安い 5,000円", icon: <FaCheckCircle className="text-green-500" /> },
      他社民間業者: { text: "なし", icon: <FaTimesCircle className="text-red-500" /> },
      弁護士: { text: "なし", icon: <FaTimesCircle className="text-red-500" /> },
      労働組合: { text: "なし", icon: <FaTimesCircle className="text-red-500" /> },
    },
    {
      label: "品質",
      Byeバイト: { text: "普通", icon: <FaCheckCircle className="text-yellow-500" /> },
      他社民間業者: { text: "高い", icon: <FaCheckCircle className="text-green-500" /> },
      弁護士: { text: "高い", icon: <FaCheckCircle className="text-green-500" /> },
      労働組合: { text: "普通", icon: <FaCheckCircle className="text-yellow-500" /> },
    },
    {
      label: "適法性",
      Byeバイト: { text: "弁護士監修", icon: <FaCheckCircle className="text-green-500" /> },
      他社民間業者: { text: "大手は弁護士監修", icon: <FaCheckCircle className="text-green-500" /> },
      弁護士: { text: "専門家", icon: <FaCheckCircle className="text-green-500" /> },
      労働組合: { text: "詳しい担当者", icon: <FaCheckCircle className="text-yellow-500" /> },
    },
  ];

  return (
    <section id="compare" className="py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">サービス比較</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse rounded-lg shadow-lg">
            <thead>
              <tr className="bg-red-100">
                <th className="bg-white"></th>
                <th className="border border-red-200 px-6 py-4 text-center">
                  <Image
                    src="/images/Byeバイト_ロゴ.png"
                    alt="Byeバイト ロゴ"
                    width={100}
                    height={80}
                    className="mx-auto"
                  />
                </th>
                <th className="border border-red-200 px-6 py-4 text-center">
                  <FaUserTie size={30} className="mx-auto text-red-500" />
                  <p className="mt-2 text-sm font-bold">他社民間業者</p>
                </th>
                <th className="border border-red-200 px-6 py-4 text-center">
                  <FaBalanceScale size={30} className="mx-auto text-red-500" />
                  <p className="mt-2 text-sm font-bold">弁護士</p>
                </th>
                <th className="border border-red-200 px-6 py-4 text-center">
                  <FaUsers size={30} className="mx-auto text-red-500" />
                  <p className="mt-2 text-sm font-bold">労働組合</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="odd:bg-white even:bg-red-50">
                  <td className="border border-red-200 px-6 py-4 font-bold bg-red-100 text-red-500 text-center">
                    {row.label}
                  </td>
                  <td className="border-x-4 border-red-500 px-6 py-4 text-center font-medium">
                    <div className="flex flex-col items-center">
                      {row.Byeバイト.icon}
                      <span className="mt-2 text-lg">{row.Byeバイト.text}</span>
                    </div>
                  </td>
                  <td className="border border-red-200 px-6 py-4 text-center font-medium">
                    <div className="flex flex-col items-center">
                      {row.他社民間業者.icon}
                      <span className="mt-2 text-lg">{row.他社民間業者.text}</span>
                    </div>
                  </td>
                  <td className="border border-red-200 px-6 py-4 text-center font-medium">
                    <div className="flex flex-col items-center">
                      {row.弁護士.icon}
                      <span className="mt-2 text-lg">{row.弁護士.text}</span>
                    </div>
                  </td>
                  <td className="border border-red-200 px-6 py-4 text-center font-medium">
                    <div className="flex flex-col items-center">
                      {row.労働組合.icon}
                      <span className="mt-2 text-lg">{row.労働組合.text}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

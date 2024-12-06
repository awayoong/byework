import React from "react";
import Image from "next/image";
import { FaUserTie, FaBalanceScale, FaUsers, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function CompareSection() {
  return (
    <section id="compare" className="py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">サービス比較</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="bg-white min-w-36"></th>
                <th className="border-r bg-red-50 border-b px-6 py-4 text-center min-w-64">
                  <Image
                    src="/images/Byeバイト_ロゴ.png"
                    alt="Byeバイト ロゴ"
                    width={100}
                    height={80}
                    className="mx-auto"
                  />
                </th>
                <th className="border bg-gray-100 px-6 py-4 text-center min-w-36 max-w-36">
                  <FaUserTie size={30} className="mx-auto text-gray-500" />
                  <p className="mt-2 text-sm font-bold">他社民間業者</p>
                </th>
                <th className="border bg-gray-100 px-6 py-4 text-center min-w-36 max-w-36">
                  <FaBalanceScale size={30} className="mx-auto text-gray-500" />
                  <p className="mt-2 text-sm font-bold">弁護士</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="bg-white">
                <td className="px-6 py-4 font-bold bg-red-50 text-red-500 text-center">
                  料金
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaCheckCircle className="text-green-500" />
                    <span className="mt-2">
                      <span className="text-sm whitespace-pre-line">
                        業界最安値
                      </span>
                      <br />
                      <span className="text-2xl font-bold">8,000</span>
                      <span className="text-sm">円</span>
                    </span>
                  </div>
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaCheckCircle className="text-yellow-500" />
                    <span className="mt-2 text-base">20,000円前後</span>
                  </div>
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaCheckCircle className="text-red-500" />
                    <span className="mt-2 text-base">50,000円前後</span>
                  </div>
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td className="border-y px-6 py-4 font-bold bg-red-50 text-red-500 text-center">
                  学割
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaCheckCircle className="text-green-500" />
                    <span className="mt-2">
                      <span className="text-sm whitespace-pre-line">
                        さらに安い！
                      </span>
                      <br />
                      <span className="text-2xl font-bold text-red-500">5,000</span>
                      <span className="text-sm">円</span>
                    </span>
                  </div>
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaTimesCircle className="text-red-500" />
                    <span className="mt-2 text-lg">なし</span>
                  </div>
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaTimesCircle className="text-red-500" />
                    <span className="mt-2 text-lg">なし</span>
                  </div>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="bg-white">
                <td className="border-y px-6 py-4 font-bold bg-red-50 text-red-500 text-center">
                  別料金
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaCheckCircle className="text-green-500" />
                    <span className="mt-2 text-base">一切ございません！</span>
                  </div>
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaTimesCircle className="text-red-500" />
                    <span className="mt-2 text-base">退職後の対応に別料金が発生する可能性あり</span>
                  </div>
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaTimesCircle className="text-red-500" />
                    <span className="mt-2 text-base">相談時間に応じて追加料金発生の可能性あり</span>
                  </div>
                </td>
              </tr>
              {/* Row 4 */}
              <tr className="bg-white">
                <td className="border-y px-6 py-4 font-bold bg-red-50 text-red-500 text-center">
                  実績
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaCheckCircle className="text-green-500" />
                    <span className="mt-2 text-base">失敗実績ゼロ！</span>
                  </div>
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaCheckCircle className="text-green-500" />
                  </div>
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaCheckCircle className="text-green-500" />
                  </div>
                </td>
              </tr>
              {/* Row 5 */}
              <tr>
                <td className="border-y px-6 py-4 font-bold bg-red-50 text-red-500 text-center">
                  適法性
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaCheckCircle className="text-green-500" />
                    <span className="mt-2 text-base">労働組合運営</span>
                  </div>
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaCheckCircle className="text-green-500" />
                    <span className="mt-2">
                      <span className="mt-2 text-base">弁護士監修</span>
                      <br />
                      <span className="text-base">or</span>
                      <br />
                      <span className="text-base">労働組合運営</span>
                    </span>
                  </div>
                </td>
                <td className="border px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <FaCheckCircle className="text-green-500" />
                    <span className="mt-2 text-base">専門家</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

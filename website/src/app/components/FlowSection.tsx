import React from "react";

export default function FlowSection() {
  const steps = [
    {
      title: "Step 1 ご相談",
      description: "ご相談料金は無料です。お気軽にご相談下さい。",
    },
    {
      title: "Step 2 お支払い",
      description:
        "ご利用規約を確認いただいた後、料金のお支払いをしていただきます。\nお支払い方法はクレジットカード支払いのみとなります。",
    },
    {
      title: "Step 3 ヒアリング",
      description:
        "WEB上にてヒアリングシートのURLをお送りするので記載頂き、代行業務のご説明・退職に向けた詳細な打ち合わせを行います。",
    },
    {
      title: "Step 4 バイト先へのご連絡",
      description:
        "ご依頼者様のご希望の日程にて会社へ連絡を行い、退職の意思をお伝えします。",
    },
    {
      title: "Step 5 退職手続き",
      description:
        "退職届や貸与物・返却物の対応を行って頂きます。\n基本的には郵送で行うので、依頼主様が会社に行ったり、連絡を取り合う必要はございません。\n※直筆が必要な場合もあるため、退職に関する書類の作成や提出等、法律事務は弊社では行いません。\n※各種提出書類のテンプレートなどはこちらでご用意させて頂きます。",
    },
  ];

  return (
    <section 
      id="section4" 
      className="bg-white text-gray-800 shadow-md py-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
          退職代行サービスの流れ
        </h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-lg shadow-md p-6 md:p-8"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl">
                {index + 1}
              </div>
              <div className="ml-4 mt-4 md:mt-0">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

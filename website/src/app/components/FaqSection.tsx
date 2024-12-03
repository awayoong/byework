'use client';

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaQ } from "react-icons/fa6";


const FAQ_DATA = [
  { question: "本当に退職できるんですか？", answer: "" },
  { question: "会社から連絡はきませんか？", answer: "" },
  { question: "お給料は支払われますか？", answer: "" },
  { question: "学校に連絡は行きませんか？", answer: "" },
  { question: "会社から借りてるものはどうすればいいですか？", answer: "退職届と一緒に郵送で返却" },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">よくある質問</h2>
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden bg-gray-50"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 hover:bg-gray-100 font-bold text-left focus:outline-none"
              >
                <div className="flex items-center">
                  <FaQ className="text-red-600 mr-2" />
                  <span>{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <FiChevronUp className="text-red-600" />
                ) : (
                  <FiChevronDown className="text-red-600" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 p-4 bg-white" : "max-h-0"
                }`}
              >
                {faq.answer || "現在準備中です。"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

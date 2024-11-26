import React from "react";
import Image from "next/image";

export default function PricingSection() {
  return (
    <section id="section2" className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
        料金プラン
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* プランカード: 学生 */}
        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600">
            学生プラン
          </h3>
          <p className="text-lg md:text-xl font-bold mb-6 text-gray-800">
            ¥5,000 <span className="text-sm text-gray-500">+ 税</span>
          </p>
        </div>

        {/* プランカード: 非学生 */}
        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600">
            一般プラン
          </h3>
          <p className="text-lg md:text-xl font-bold mb-6 text-gray-800">
            ¥8,000 <span className="text-sm text-gray-500">+ 税</span>
          </p>
        </div>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          豊富な決済手段
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <Image
            src={"/images/visa.png"}
            alt="VISA Card"
            width={150}
            height={90}
            className="md:w-40 md:h-auto"
          />
          <Image
            src={"/images/master.png"}
            alt="MasterCard"
            width={150}
            height={90}
            className="md:w-40 md:h-auto"
          />
          <Image
            src={"/images/amex.png"}
            alt="American Express Card"
            width={150}
            height={90}
            className="md:w-40 md:h-auto"
          />
          <Image
            src={"/images/gpay.png"}
            alt="Google Pay"
            width={150}
            height={90}
            className="md:w-40 md:h-auto"
          />
          <Image
            src={"/images/applepay.svg"}
            alt="Apple Pay"
            width={150}
            height={90}
            className="md:w-40 md:h-auto"
          />
        </div>
      </div>
    </section>
  );
}

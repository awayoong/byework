// page.tsx
import React from 'react';
import Image from 'next/image';
import yameoImage from './images/ヤメオ_バイバイト.jpg'
import yamekoImage from './images/ヤメ子_バイバイト.jpg'
import cardsImage from './images/card_VISA_MASTER_AMEX.gif'

export default function Home() {
  return (
    <div>
      {/* セクション */}
      <section id="section1" className="h-screen flex flex-col items-center justify-center bg-blue-50 text-gray-800 shadow-md">
        <h2 className="text-4xl font-bold mb-4">Top</h2>
        <p className="text-lg">アルバイト退職を専門にサポートします。</p>
        <Image
          src={yameoImage}
          alt="ヤメオの画像"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </section>

      <section id="section2" className="h-screen bg-white text-gray-800 shadow-md py-16">
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
        <div>
        <h3 className="text-center text-4xl font-bold my-16">豊富な決済手段</h3>
        <div className='flex flex-col items-center'>
          <Image
            src={cardsImage}
            alt="決済可能なクレジットカード一覧"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        </div>
        <div className="flex justify-center mt-16">
          <a 
            href='https://line.me/R/ti/p/@540amcfs?oat_content=url' 
            target='_blank' 
            rel='noopener noreferrer' 
            className="inline-block px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
          >
            ご相談～退職までLINEで完結
          </a>
        </div>
      </section>

      <section id="section3" className="h-screen bg-blue-50 text-gray-800 shadow-md py-16">
        <h2 className="text-center text-4xl font-bold mb-8">バイバイトの特徴</h2>
        <ul className="list-disc list-inside space-y-2 mx-auto max-w-md text-lg">
          <li>即日退職可能！</li>
          <li>最短10分で代行開始</li>
          <li>入社1年未満、早期退職に強い</li>
          <li>入社0日から対応可能</li>
          <li>試用期間、研修中も対応可能</li>
          <li>内定辞退のご依頼も承り可能</li>
        </ul>
        <div className="flex justify-center mt-8">
          <a 
            href='https://line.me/R/ti/p/@540amcfs?oat_content=url' 
            target='_blank' 
            rel='noopener noreferrer' 
            className="inline-block px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
          >
            ご相談～退職までLINEで完結
          </a>
        </div>
      </section>

      <section id="section10" className="h-screen flex flex-col items-center justify-center bg-white text-gray-800 shadow-md">
        <h2 className="text-4xl font-bold mb-4">セクション 3</h2>
        <p className="text-lg">このセクションのコンテンツです。</p>
      </section>
    </div>
  );
}

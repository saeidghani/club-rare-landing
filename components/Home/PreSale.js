import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import t from "../../public/locales/home";

export default function PreSale() {
  const { locale } = useRouter();

  const timers = [
    { key: 1, num: 2, title: "Day" },
    { key: 2, num: 12, title: "Hours" },
    { key: 3, num: 30, title: "Minutes" },
    { key: 4, num: 54, title: "Seconds" },
  ];

  return (
    <div className="container mt-20 lg:mt-60 z-10">
      <div className="flex justify-between">
        <div className="text-20 lg:text-34 text-white font-semibold">
          {t[locale].preSale.title}
        </div>
        <div className="flex items-center">
          <div className="text-16 lg:text-18 font-semibold textGradient mr-1.5">
            {t[locale].preSale.nextSale}
          </div>
          <Image src="/icons/arrowColorful.svg" width={26} height={26} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-11 gap-x-13 mt-8 lg:mt-23">
        <div
          className="col-span-1 lg:col-span-4 bg-black rounded-12 border border-solid border-white
           py-6 px-16 lg:py-17 lg:px-15 flex justify-center items-center"
        >
          <Image src="/images/product.png" width={334} height={365} />
        </div>
        <div className="col-start-1 col-span-1 lg:col-start-5 lg:col-span-7">
          <div className="text-20 lg:text-28 font-semibold text-white mt-5.5 lg:mt-0">
            HERMÈS, 2019
          </div>
          <p className="text-14 lg:text-18 text-white opacity-75 mt-2.5 lg:mt-4.5">
            {t[locale].preSale.text}
          </p>
          <div
            className="text-16 lg:text-20 font-semibold text-white mt-7.5 lg:mt-4 flex justify-center items-center
           border border-solid border-white rounded-t-40 rounded-b-10 bg-white bg-opacity-20 h-15"
          >
            {t[locale].preSale.countDown}
          </div>
          <div className="grid grid-cols-4 gap-x-4 lg:gap-x-11 mt-4 lg:mt-8">
            {timers.map((t) => (
              <div
                key={t.key}
                className="text-white border border-solid border-white
                 rounded-12 bg-white bg-opacity-20 flex flex-col items-center py-5"
              >
                <div className="text-26 lg:text-46">{t.num}</div>
                <div className="text-14 xxs:text-16 lg:text-24 opacity-50">
                  {t.title}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-t-10 rounded-b-24 bg-white mt-4 lg:mt-8 p-5 flex justify-between">
            <div className="">
              <div className="text-16 lg:text-20 font-semibold">
                {t[locale].preSale.HighestBid}:
              </div>
              <div className="flex items-center">
                <div className="text-16 lg:text-20 font-semibold mr-1">3</div>
                <Image src="/icons/crypto.svg" width={12} height={18} />
                <div className="text-14 lg:text-20 opacity-50 ml-3">
                  $20,000
                </div>
              </div>
            </div>
            <button className="text-16 lg:text-24 text-white bg-blue rounded-10 rounded-br-24 px-7.5 py-3">
              {t[locale].preSale.placeABid}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import t from "../../public/locales/home";
import { useRouter } from "next/router";

export default function Banner({ activeLang, onSetActiveLang }) {
  const { locale } = useRouter();

  const langOptions = [
    { key: 1, title: t[locale].banner.krBtn },
    { key: 2, title: t[locale].banner.enBtn },
  ];

  return (
    <div className="banner container justify-items-center items-center">
      <div className="mt-7 md:mt-0">
        <div
          className="text-24 lg:text-34 text-white text-center lg:text-left font-light font-Ubuntu"
          style={{ lineHeight: 1.25 }}
        >
          {t[locale].banner.title}
          <br /> <span className="font-bold">Club</span> Rare
        </div>
        <div
          className="text-white mt-6 text-center lg:text-left"
          style={{ lineHeight: 1.35 }}
        >
          {t[locale].banner.text}
        </div>
      </div>
      <div className="row-start-1 lg:col-start-2">
        <Image src="/images/octagon.svg" width={461} height={463} alt="" />
      </div>
      <div className="flex flex-col xxs:flex-row lg:flex-col space-y-4 xxs:space-y-0 lg:space-y-20 xxs:space-x-3 lg:space-x-0 mt-11.5 lg:mt-0">
        {langOptions?.map((i) => (
          <button
            key={i.key}
            className={`border border-solid border-white rounded-12 text-16 lg:text-22 font-light text-white 
              bg-white w-40 lg:w-60 h-12 lg:h-16 ${
                activeLang === i.key ? "bg-opacity-10" : "bg-opacity-0"
              }`}
            onClick={() => onSetActiveLang(i.key)}
          >
            {i.title}
          </button>
        ))}
      </div>
    </div>
  );
}

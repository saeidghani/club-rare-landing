import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import t from "../../public/locales/home";

function Features() {
  const { locale } = useRouter();

  return (
    <div className="features grid grid-cols-1 lg:grid-cols-6 items-center mt-34 lg:mt-80 overflow-hidden">
      <div className="lg:col-span-2 text-white text-center lg:text-left pb-7 lg:pb-28">
        <div className="text-24 lg:text-34">
          <span className="font-bold">Club</span> Rare
        </div>
        {locale === "en" ? (
          <p
            className="text-16 lg:text-24 mt-6 px-8 lg:px-0"
            style={{ lineHeight: 1.3 }}
          >
            {t[locale].features.text}
          </p>
        ) : (
          <p
            className="text-16 lg:text-24 mt-6 px-8 lg:px-0"
            style={{ lineHeight: 1.3 }}
          >
            {t[locale].features.text.part1} <br />
            {t[locale].features.text.part2} <br />
            {t[locale].features.text.part3} <br />
            {t[locale].features.text.part4} <br />
          </p>
        )}
      </div>
      <div className="lg:col-start-3 lg:col-span-4 lg:justify-self-end h-160">
        <div className="flex justify-center pl-8 lg:pl-0">
          <div className="-mr-100 lg:-mr-28 mt-40 z-10">
            <Image
              src="/images/mobileLanding.png"
              width={220}
              height={429}
              alt="mobile landing"
            />
          </div>
          <div className="relative left-80 lg:left-0">
            <Image
              src="/images/desktopLanding.png"
              width={699}
              height={533}
              alt="desktop landing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

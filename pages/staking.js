import React from "react";
import Layout from "../layout";
import Image from "next/image";
import t from "../public/locales/staking";
import { useRouter } from "next/router";

export default function Staking() {
  const { locale } = useRouter();

  const cryptoDetails = [
    {
      key: 1,
      icon1: "/icons/crypto1.svg",
      icon2: "/icons/crypto2.svg",
      title: "AGOV - ETH",
      description: `${t[locale].deposit} AGOV-ETH UNI-V2 LP ${t[locale].earn} AGOV (100x ${t[locale].reward})`,
      totalLocked: "",
      reward: `0.00 AGOV / ${t[locale].block}`,
      interest: "NaN%",
      isHot: true,
    },
    {
      key: 2,
      icon1: "/icons/crypto3.svg",
      icon2: "/icons/crypto2.svg",
      title: "ANSWER - ETH",
      description: `${t[locale].deposit} AGOV-ETH UNI-V2 LP ${t[locale].earn} AGOV (100x ${t[locale].reward})`,
      totalLocked: "0",
      reward: `0.00 AGOV / ${t[locale].block}`,
      interest: "NaN%",
    },
    {
      key: 3,
      icon1: "/icons/crypto2.svg",
      icon2: "/icons/crypto4.svg",
      title: "USDC-ETH",
      description: "Deposit USDC-ETH UNI-V2 LP Earn AGOV",
      totalLocked: "0",
      reward: `0.00 AGOV / ${t[locale].block}`,
      interest: "NaN%",
    },
    {
      key: 4,
      icon1: "/icons/crypto1.svg",
      icon2: "/icons/crypto5.svg",
      title: "AGOV-WHINT",
      description: `${t[locale].deposit} AGOV-ETH UNI-V2 LP ${t[locale].earn} AGOV (100x ${t[locale].reward})`,
      totalLocked: "0",
      reward: `0.00 AGOV / ${t[locale].block}`,
      interest: "NaN%",
    },
    {
      key: 5,
      icon1: "/icons/crypto1.svg",
      icon2: "/icons/crypto3.svg",
      title: "AGOV-ANSW",
      description: `${t[locale].deposit} AGOV-ETH UNI-V2 LP ${t[locale].earn} AGOV (100x ${t[locale].reward})`,
      totalLocked: "0",
      reward: `0.00 AGOV / ${t[locale].block}`,
      interest: "NaN%",
    },
    {
      key: 6,
      icon1: "/icons/crypto1.svg",
      icon2: "/icons/crypto6.svg",
      title: "AGOV-SEAL",
      description: `${t[locale].deposit} AGOV-SEAL UNI-V2 LP ${t[locale].earn} AGOV (1x ${t[locale].reward})`,
      totalLocked: "0",
      reward: `0.00 AGOV / ${t[locale].block}`,
      interest: "NaN%",
    },
  ];

  const socialNetNames = [
    { key: 1, name: "Contract(Klaytn)" },
    { key: 2, name: "Telegram" },
    { key: 3, name: "Github" },
    { key: 4, name: "Twitter" },
  ];

  return (
    <Layout mainClass="staking relative container">
      <div className="flex justify-center">
        <Image src="/images/staking.svg" width={192} height={148} />
      </div>
      <div className="text-34 text-white text-center mt-10">
        {t[locale].title.part1} <br /> {t[locale].title.part2}
      </div>
      <div className="text-white opacity-75 text-center mt-6">
        {t[locale].text}
      </div>
      <div className="pb-20">
        <div
          className="relative bg-darkGray2 rounded-12 mt-12 p-6 xxs:p-9 overflow-hidden"
          style={{ height: 211 }}
        >
          <div className="absolute top-0 left-0">
            <Image src="/images/shape4.svg" width={834} height={77} />
          </div>
          <div className="absolute -bottom-2 right-0">
            <Image src="/images/shape5.svg" width={804} height={50} />
          </div>
          <div className="text-20 text-white">{t[locale].available}</div>
          <div className="text-24 textGradient mt-6.5">0.00 AGOV</div>
          <div className="flex justify-between items-center mt-4 xxs:mt-8">
            <div className="text-white">{t[locale].pending}</div>
            <div className="flex z-10">
              <div className="text-white mr-1">0.000</div>
              <div className="text-white">AGOV</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 lg:gap-x-11.5 gap-y-6.5 lg:gap-y-12 mt-11.5">
          {cryptoDetails?.map((d) => (
            <div className="relative">
              <div
                key={d.key}
                className="bg-darkGray2 rounded-12 py-6 px-7 h-full"
              >
                <div className="flex items-center justify-center">
                  <div className="mr-2">
                    <Image src={d.icon1} width={60} height={60} />
                  </div>
                  <div>
                    <Image src={d.icon2} width={60} height={60} />
                  </div>
                </div>
                <div className="text-white text-20 font-semibold text-center mt-6">
                  {d.title}
                </div>
                <div
                  className="text-white text-14 text-center mt-2"
                  style={{ height: 62 }}
                >
                  {d.description}
                </div>
                <button
                  className="rounded-8 h-12 w-full mt-6"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.14)" }}
                >
                  {t[locale].select}
                </button>
                <div className="flex justify-between items-center mt-5.5">
                  <div className="text-12 text-gray">{t[locale].total}</div>
                  <div className="text-13 text-gray">{d.totalLocked} USD</div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-13 text-gray">{t[locale].reward}</div>
                  <div className="text-13 text-gray">{d.reward}</div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-12 text-gray">{`${t[locale].interest}(APY)`}</div>
                  <div className="text-13 text-lightBlue">{d.interest}</div>
                </div>
              </div>
              {d.isHot && (
                <div className="absolute -top-4.5 -left-4">
                  <div className="relative">
                    <Image src="/icons/hot.svg" width={65} height={63} />
                    <div
                      className="text-white text-14 font-semibold
                                 absolute top-5 left-4.5"
                      style={{ transform: "rotate(-30deg)" }}
                    >
                      ${t[locale].hot}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-18 w-full">
        <div className="social-nets flex justify-between mx-auto w-full">
          {socialNetNames.map((s) => (
            <button key={s.key} className="text-14 text-white">
              {s.name}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
}

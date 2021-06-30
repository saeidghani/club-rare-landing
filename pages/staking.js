import React from "react";
import Layout from "../layout";
import Image from "next/image";

export default function Staking() {
  const cryptoDetails = [
    {
      key: 1,
      icon1: "/icons/crypto1.svg",
      icon2: "/icons/crypto2.svg",
      title: "AGOV - ETH",
      description: "Deposit AGOV-ETH UNI-V2 LP Earn AGOV (100x Reward)",
      totalLocked: "",
      reward: "0.00 AGOV / block",
      interest: "NaN%",
      isHot: true,
    },
    {
      key: 2,
      icon1: "/icons/crypto3.svg",
      icon2: "/icons/crypto2.svg",
      title: "ANSWER - ETH",
      description: "Deposit ANSWER-ETH UNI-V2 LP Earn AGOV (10x Reward)",
      totalLocked: "0",
      reward: "0.00 AGOV / block",
      interest: "NaN%",
    },
    {
      key: 3,
      icon1: "/icons/crypto2.svg",
      icon2: "/icons/crypto4.svg",
      title: "USDC-ETH",
      description: "Deposit USDC-ETH UNI-V2 LP Earn AGOV",
      totalLocked: "0",
      reward: "0.00 AGOV / block",
      interest: "NaN%",
    },
    {
      key: 4,
      icon1: "/icons/crypto1.svg",
      icon2: "/icons/crypto5.svg",
      title: "AGOV-WHINT",
      description: "Deposit AGOV-WHINT UNI-V2 LP Earn AGOV (100x Reward)",
      totalLocked: "0",
      reward: "0.00 AGOV / block",
      interest: "NaN%",
    },
    {
      key: 5,
      icon1: "/icons/crypto1.svg",
      icon2: "/icons/crypto3.svg",
      title: "AGOV-ANSW",
      description: "Deposit AGOV-ANSW UNI-V2 LP Earn AGOV (10x Reward)",
      totalLocked: "0",
      reward: "0.00 AGOV / block",
      interest: "NaN%",
    },
    {
      key: 6,
      icon1: "/icons/crypto1.svg",
      icon2: "/icons/crypto6.svg",
      title: "AGOV-SEAL",
      description: "Deposit AGOV-SEAL UNI-V2 LP Earn AGOV (1x Reward)",
      totalLocked: "0",
      reward: "0.00 AGOV / block",
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
    <Layout mainClass="staking relative">
      <div className="flex justify-center">
        <Image src="/images/staking.svg" width={192} height={148} />
      </div>
      <div className="text-34 text-white text-center mt-10">
        Farming is Over. <br /> We Moved to Klayswap
      </div>
      <div className="text-white opacity-75 text-center mt-6">
        Uniswap Farming is Over. Let's meet again on Klayswap.com
      </div>
      <div className="pb-20">
        <div
          className="relative bg-darkGray2 rounded-12 mt-12 p-9 overflow-hidden"
          style={{ height: 211 }}
        >
          <div className="absolute top-0 left-0">
            <Image src="/images/shape4.svg" width={834} height={72} />
          </div>
          <div className="absolute -bottom-2 right-0">
            <Image src="/images/shape5.svg" width={804} height={50} />
          </div>
          <div className="text-20 text-white">Your Available AGOV Balance</div>
          <div className="text-24 textGradient mt-6.5">0.00 AGOV</div>
          <div className="flex justify-between items-center mt-8">
            <div className="text-white">Pending Harvest</div>
            <div className="flex z-10">
              <div className="text-white mr-1">0.000</div>
              <div className="text-white">AGOV</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 lg:gap-x-11.5 gap-y-6.5 md:gap-y-12 mt-11.5">
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
                  Select
                </button>
                <div className="flex justify-between items-center mt-5.5">
                  <div className="text-12 text-gray">Total Locked Value</div>
                  <div className="text-13 text-gray">{d.totalLocked} USD</div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-13 text-gray">Reward</div>
                  <div className="text-13 text-gray">{d.reward}</div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-12 text-gray">Annual Interest(APY)</div>
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
                      HOT
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

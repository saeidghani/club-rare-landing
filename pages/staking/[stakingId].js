import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import Image from "next/image";
import t from "../../public/locales/stakingDetails";
import { useRouter } from "next/router";

export default function Staking() {
  const router = useRouter();
  const { locale } = router;

  const [line2Class, setLine2Class] = useState("");
  const [line5Class, setLine5Class] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setLine2Class("moveLeft");
      setLine5Class("moveUp");
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Layout mainClass="staking-detail staking-lines mb-20 lg:mb-0">
      <div className="hidden lg:block absolute line1">
        <Image src="/images/line8.svg" width={1600} height={1} alt="line" />
      </div>
      <div className={`absolute line2 ${line2Class}`}>
        <Image src="/images/line9.svg" width={162} height={15} alt="line" />
      </div>
      <div className="hidden lg:block absolute line3">
        <Image src="/images/line15.svg" width={2} height={1095} alt="line" />
      </div>
      <div className="hidden lg:block absolute line4">
        <Image src="/images/line14.svg" width={1} height={637} alt="line" />
      </div>
      <div className={`hidden lg:block absolute line5 ${line5Class}`}>
        <Image src="/images/line4.svg" width={15} height={162} alt="line" />
      </div>
      <div className="container mt-8">
        <div className="flex items-center justify-center">
          <div className="mr-2">
            <Image src="/icons/crypto1.svg" width={60} height={60} alt="icon" />
          </div>
          <div>
            <Image src="/icons/crypto2.svg" width={60} height={60} alt="icon" />
          </div>
        </div>
        <div className="text-white text-24 font-semibold text-center mt-6">
          AGOV - ETH
        </div>
        <div
          className="text-white text-14 text-center mt-2"
          style={{ height: 62 }}
        >
          {`${t[locale].deposit} AGOV-ETH UNI-V2 LP ${t[locale].earn} AGOV (100x ${t[locale].reward})`}
        </div>
        <div
          className="bg-darkGray3 py-8 rounded-12 w-full mx-auto"
          style={{ maxWidth: 944 }}
        >
          <div
            className="flex flex-col lg:flex-row justify-between items-center lg:items-start mx-auto w-full"
            style={{ maxWidth: 703 }}
          >
            <div className="text-center lg:text-left">
              <div className="text-12 text-gray">{t[locale].interest}(APY)</div>
              <div className="text-16 text-white font-semibold  mt-3">0%</div>
            </div>
            <div className="mt-8 lg:mt-0 text-center lg:text-left">
              <div className="text-12 text-gray ">{t[locale].totalStacked}</div>
              <div className="text-16 text-white font-semibold mt-2 lg:mt-3">
                49,064,831.508 <span className="text-12 font-normal">AGOV</span>{" "}
                + 0.063
                <span className="text-12 font-normal ml-1">ETH</span>
              </div>
              <div className="text-12 text-gray  mt-2 lg:mt-3">
                ~ AGOV-ETH LP
              </div>
            </div>
            <div className="mt-8 lg:mt-0 text-center lg:text-left">
              <div className="text-12 text-gray">~ AGOV-ETH LP</div>
              <div className="text-13 text-white font-semibold mt-2 lg:mt-3">
                0.00 AGOV
              </div>
              <div className="text-12 text-gray mt-2 lg:mt-3">??? 0.00 USD</div>
            </div>
          </div>
        </div>
        <div className="text-34 font-semibold textGradient text-center mt-12">
          {t[locale].yourStaking}
        </div>
        <div className="flex justify-center">
          <button
            className="rounded-8 h-15 text-white mt-10 border border-solid border-white"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.14)", width: 264 }}
            onClick={() => {}}
          >
            {t[locale].unlockWallet}
          </button>
        </div>
        <p className="font-semibold text-white text-18 mt-19">
          {t[locale].text1}
        </p>
        <div className="">
          <div className="text-white text-16 font-semibold mt-14">
            {t[locale].text2}
          </div>
          <div className="text-white text-16 mt-3">
            <span className="textGradient">AGOV-ETH</span> {t[locale].text3}
          </div>
          <span className="textGradient text-15 border-b border-solid border-secondary2 mt-1">
            {t[locale].text4}
          </span>
        </div>
      </div>
    </Layout>
  );
}

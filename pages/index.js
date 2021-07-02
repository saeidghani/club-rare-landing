import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../layout";
import Banner from "../components/Home/Banner";
import PreSale from "../components/Home/PreSale";
import Features from "../components/Home/Features";
import Deliverable from "../components/Home/Deliverable";
import FeatureCards from "../components/Home/FeatureCards";
import Listing from "../components/Home/Listing";
import SocialNets from "../components/Home/SocialNets";
import HotBids from "../components/Home/HotBids";

export default function Home() {
  const [activeLang, setActiveLang] = useState(1);
  const [line4Class, setLine4Class] = useState("");
  const [line7Class, setLine7Class] = useState("");
  const [line9Class, setLine9Class] = useState("");

  const line4Ref = React.createRef();

  useEffect(() => {
    let timer = setTimeout(() => {
      setLine4Class("moveDown");
      setLine7Class("moveLeft");
      setLine9Class("moveLeft");
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Layout mainClass="home pt-12 lg:pt-22.5">
      {/*<div className="vLine"></div>*/}
      <div className="hidden lg:block absolute top-0" style={{ left: "50%" }}>
        <Image src="/images/line1.svg" width={2} height={5269} alt="line" />
      </div>
      <div className="hidden lg:block absolute top-0" style={{ left: "31.5%" }}>
        <Image src="/images/line2.svg" width={1} height={5279} alt="line" />
      </div>
      <div className="hidden lg:block absolute top-0" style={{ left: "20%" }}>
        <Image src="/images/line3.svg" width={1} height={637} alt="line" />
      </div>
      <div
        className={`hidden lg:block absolute line4 ${line4Class}`}
        ref={line4Ref}
      >
        <Image src="/images/line4.svg" width={15} height={162} alt="line" />
      </div>
      <div className="absolute top-0" style={{ left: "64.4%" }}>
        <Image src="/images/line5.svg" width={1} height={401} alt="line" />
      </div>
      <div className="hidden lg:block absolute" style={{ top: 393, right: 0 }}>
        <Image src="/images/line6.svg" width={483} height={1} alt="line" />
      </div>
      <div className={`hidden lg:block absolute line7 ${line7Class}`}>
        <Image src="/images/line7.svg" width={162} height={15} alt="line" />
      </div>
      <div className="absolute line8">
        <Image src="/images/line8.svg" width={1435} height={1} alt="line" />
      </div>
      <div className={`absolute line9 ${line9Class}`}>
        <Image src="/images/line9.svg" width={162} height={15} alt="line" />
      </div>
      <div className="hidden lg:block absolute line10" style={{ top: 690 }}>
        <Image src="/images/line10.svg" width={15} height={162} alt="line" />
      </div>
      <div className="">
        <Banner
          activeLang={activeLang}
          onSetActiveLang={(lang) => setActiveLang(lang)}
        />
        <PreSale />
        <HotBids />
        <Features />
        <Deliverable />
        <FeatureCards />
        <Listing />
        <SocialNets />
      </div>
    </Layout>
  );
}

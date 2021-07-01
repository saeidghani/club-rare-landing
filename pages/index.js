import React, { useState } from "react";
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

  return (
    <Layout mainClass="home pt-12 lg:pt-22.5">
      <div className="hidden lg:block absolute top-0" style={{ left: "50%" }}>
        <Image src="/images/line1.svg" width={2} height={5269} />
      </div>
      <div className="hidden lg:block absolute top-0" style={{ left: "31.5%" }}>
        <Image src="/images/line2.svg" width={1} height={5279} />
      </div>
      <div className="hidden lg:block absolute top-0" style={{ left: "20%" }}>
        <Image src="/images/line3.svg" width={1} height={637} />
      </div>
      <div className="hidden lg:block absolute top-21 line4">
        <Image src="/images/line4.svg" width={15} height={162} />
      </div>
      <div className="absolute top-0" style={{ left: "65.2%" }}>
        <Image src="/images/line5.svg" width={1} height={401} />
      </div>
      <div className="hidden lg:block absolute" style={{ top: 303, right: 0 }}>
        <Image src="/images/line6.svg" width={483} height={1} />
      </div>
      <div
        className="hidden lg:block absolute"
        style={{ right: 365, top: 401 }}
      >
        <Image src="/images/line7.svg" width={162} height={15} />
      </div>
      <div className="absolute line8">
        <Image src="/images/line8.svg" width={1435} height={1} />
      </div>
      <div className="absolute line9">
        <Image src="/images/line9.svg" width={162} height={15} />
      </div>
      <div className="hidden lg:block absolute line10" style={{ top: 690 }}>
        <Image src="/images/line10.svg" width={15} height={162} />
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

import React, { useState } from "react";
import Layout from "../layout";
import Banner from "../components/Home/Banner";
import PreSale from "../components/Home/PreSale";
import Features from "../components/Home/Features";
import Deliverable from "../components/Home/Deliverable";
import FeatureCard from "../components/Home/FeatureCard";
import Listing from "../components/Home/Listing";
import SocialNets from "../components/Home/SocialNets";
import HotBids from "../components/Home/HotBids";

export default function Home() {
  const [activeLang, setActiveLang] = useState(1);

  const featureCards = [
    {
      key: 1,
      title: "Maximize Value of Your Limited goods",
      text: " Your Limited goods could be traded anytime. More transaction easily make More Value Bid/Ask auction happens automatically in 24 hours & 365 days. ",
    },
    {
      key: 2,
      title: "Connect Real world economy with Blockchain World",
      text: " Applying NFT Technology into Physical World, Information will be connected more quickly and transparently.",
    },
  ];

  return (
    <Layout mainClass="home">
      {/*<Banner
        activeLang={activeLang}
        onSetActiveLang={(lang) => setActiveLang(lang)}
      />
      <PreSale />*/}
      <HotBids />
      {/*<Features />*/}
      {/*<Deliverable />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-13 md:gap-y-0 justify-items-center mt-21 md:mt-72">
        {featureCards?.map((f) => (
          <FeatureCard key={f.key} title={f.title} text={f.text} />
        ))}
      </div>
      <Listing />
      <SocialNets />*/}
    </Layout>
  );
}

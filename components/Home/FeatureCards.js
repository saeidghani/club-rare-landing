import React from "react";
import Image from "next/image";

function FeatureCards({ title, text }) {
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

  const FeatureCard = ({ title, text }) => (
    <div
      className="bg-darkGray2 rounded-12 pt-11 pb-10 px-8 text-white relative overflow-hidden"
      style={{ maxWidth: 403 }}
    >
      <div className="absolute top-0 right-0">
        <Image src="/images/shape1.svg" width={76} height={114} />
      </div>
      <div className="absolute top-0 right-0">
        <Image src="/images/shape2.svg" width={271} height={180} />
      </div>
      <div className="absolute -bottom-2 right-0">
        <Image src="/images/shape3.svg" width={242} height={21} />
      </div>
      <div className="text-center text-24 lg:text-28 font-bold">{title}</div>
      <div className="text-center text-16 lg:text-20 mt-4.5">{text}</div>
    </div>
  );

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-13 lg:gap-y-0 justify-items-center w-full mt-21 lg:mt-60">
      {featureCards?.map((f) => (
        <FeatureCard key={f.key} title={f.title} text={f.text} />
      ))}
    </div>
  );
}

export default FeatureCards;

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import t from "../../public/locales/home";

function FeatureCards() {
  const { locale } = useRouter();

  const featureCards = [
    {
      key: 1,
      title: t[locale].featureCards.card1.title,
      text: t[locale].featureCards.card1.text,
    },
    {
      key: 2,
      title: t[locale].featureCards.card2.title,
      text: t[locale].featureCards.card2.title,
    },
  ];

  const FeatureCard = ({ title, text, isFirst }) => (
    <div
      className="bg-darkGray2 rounded-12 pt-11 pb-10 px-8 text-white relative overflow-hidden"
      style={{ maxWidth: 403 }}
    >
      {isFirst ? (
        <>
          <div className="absolute top-0 right-0">
            <Image src="/images/shape1.svg" width={76} height={114} />
          </div>
          <div className="absolute top-0 right-0">
            <Image src="/images/shape2.svg" width={271} height={180} />
          </div>
          <div className="absolute -bottom-2 right-0">
            <Image src="/images/shape3.svg" width={242} height={21} />
          </div>
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0">
            <Image src="/images/shape6.svg" width={28} height={317} />
          </div>
          <div className="absolute top-0 right-0">
            <Image src="/images/shape7.svg" width={138} height={230} />
          </div>
          <div className="absolute -bottom-2 right-0">
            <Image src="/images/shape8.svg" width={135} height={138} />
          </div>
        </>
      )}
      <div className="text-center text-24 lg:text-28 font-bold">{title}</div>
      <div className="text-center text-16 lg:text-20 mt-4.5">{text}</div>
    </div>
  );

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-13 lg:gap-y-0 justify-items-center w-full mt-21 lg:mt-60">
      {featureCards?.map((f) => (
        <FeatureCard
          key={f.key}
          title={f.title}
          text={f.text}
          isFirst={f.key === 1}
        />
      ))}
    </div>
  );
}

export default FeatureCards;

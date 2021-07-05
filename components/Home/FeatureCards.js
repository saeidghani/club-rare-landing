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
      text:
        locale === "en"
          ? t[locale].featureCards.card1.text
          : {
              part1: t[locale].featureCards.card1.text.part1,
              part2: t[locale].featureCards.card1.text.part2,
            },
    },
    {
      key: 2,
      title: t[locale].featureCards.card2.title,
      text: t[locale].featureCards.card2.text,
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
            <Image
              src="/images/shape1.svg"
              width={76}
              height={114}
              alt="shape"
            />
          </div>
          <div className="absolute top-0 right-0">
            <Image
              src="/images/shape2.svg"
              width={271}
              height={180}
              alt="shape"
            />
          </div>
          <div className="absolute -bottom-2 right-0">
            <Image
              src="/images/shape3.svg"
              width={242}
              height={21}
              alt="shape"
            />
          </div>
        </>
      ) : (
        <>
          <div className="absolute top-0 -left-1">
            <Image
              src="/images/shape6.svg"
              width={28}
              height={317}
              alt="shape"
            />
          </div>
          <div className="absolute top-0 right-0">
            <Image
              src="/images/shape7.svg"
              width={138}
              height={230}
              alt="shape"
            />
          </div>
          <div className="absolute -bottom-2 right-0">
            <Image
              src="/images/shape8.svg"
              width={135}
              height={138}
              alt="shape"
            />
          </div>
        </>
      )}
      <div className="text-center lg:text-left text-24 lg:text-28 font-bold">
        {title}
      </div>
      {locale === "en" ? (
        <p className="text-center lg:text-left text-16 lg:text-20 mt-4.5">
          {text}
        </p>
      ) : (
        <p className="text-center lg:text-left text-16 lg:text-20 mt-4.5">
          {text.part1 ? (
            <>
              {text.part1} <br />
              {text.part2}
            </>
          ) : (
            text
          )}
        </p>
      )}
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

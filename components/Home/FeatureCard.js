import React from "react";
import Image from "next/image";

function FeatureCard({ title, text }) {
  return (
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
      <div className="text-center text-24 md:text-28 font-bold">{title}</div>
      <div className="text-center text-16 md:text-20 mt-4.5">{text}</div>
    </div>
  );
}

export default FeatureCard;

import React from "react";
import Image from "next/image";

function SocialNets() {
  const socialNetNames = [
    { key: 1, name: "Medium" },
    { key: 2, name: "Twitter" },
    { key: 3, name: "Reddit" },
    { key: 4, name: "Telegram" },
  ];

  return (
    <div className="social-nets mt-32 md:mt-84">
      <div className="flex justify-center items-center">
        <div className="text-white text-center text-24 md:text-34 font-semibold mr-2">
          The AGOV Community Welcomes You
        </div>
        <Image src="/icons/3lines.svg" width={14} height={46} />
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-x-7 md:gap-x-0 gap-y-7 md:gap-y-0
                   mt-10 md:mt-16 w-full justify-items-center mx-auto buttons-max-w"
      >
        {socialNetNames?.map((i) => (
          <button
            key={i.key}
            className="rounded-12 border border-solid border-secondary
                     bg-white bg-opacity-20 textGradient w-36 md:w-44"
            style={{ height: 65 }}
          >
            {i.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SocialNets;

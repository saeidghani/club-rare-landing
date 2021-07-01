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
    <div className="social-nets mt-32 lg:mt-84">
      <div className="flex justify-center items-center">
        <div className="text-white text-center text-24 lg:text-34 font-semibold mr-2">
          The AGOV Community Welcomes You
        </div>
        <div className="hidden lg:block">
          <Image src="/icons/3lines.svg" width={14} height={46} />
        </div>
      </div>
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-x-7 lg:gap-x-0 gap-y-7 lg:gap-y-0
                   mt-10 lg:mt-16 w-full justify-items-center mx-auto buttons-max-w"
      >
        {socialNetNames?.map((i) => (
          <button
            key={i.key}
            className="rounded-12 
                      w-36 lg:w-44"
            style={{ height: 65 }}
          >
            <span className="textGradient text-24">
              {i.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SocialNets;

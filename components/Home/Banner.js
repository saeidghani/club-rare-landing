import React, { useState } from "react";
import Image from "next/image";

export default function Home({ activeLang, onSetActiveLang }) {
  const langOptions = [
    { key: 1, title: "Korean Lightpaper" },
    { key: 2, title: "English Lightpaper" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center items-center">
      <div className="mt-7 md:mt-0">
        <div className="text-24 md:text-34 text-white text-center md:text-left font-light font-Ubuntu">
          The World’s First NFT Based E-Commerce
          <br /> <span className="font-bold">Club</span> Rare
        </div>
        <div className="text-white mt-6.5">
          AGOV is World's First NFT Based E-Commerce Platform aiming to connect
          the real world economy to the digital economy. The Goal of AGOV is to
          help people to find the appropriate value of marketable product in the
          real world economy.
        </div>
      </div>
      <div className="row-start-1 md:col-start-2">
        <Image src="/images/octagon.svg" width={461} height={461} alt="" />
      </div>
      <div className="flex flex-row md:flex-col space-y-0 md:space-y-20 space-x-3 md:space-x-0 mt-11.5">
        {langOptions?.map((i) => (
          <button
            key={i.key}
            className={`border border-solid border-white rounded-12 text-16 md:text-22 font-light text-white 
              bg-white w-40 md:w-60 h-12 md:h-12 ${
                activeLang === i.key ? "bg-opacity-10" : "bg-opacity-0"
              }`}
            onClick={() => onSetActiveLang(i.key)}
          >
            {i.title}
          </button>
        ))}
      </div>
    </div>
  );
}

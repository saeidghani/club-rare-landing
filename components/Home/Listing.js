import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import t from "../../public/locales/home";

const initialLogos = [
  {
    key: 1,
    width: 369,
    height: 48,
    alt: "coinGecko logo",
    src: "/logos/coinGeckoLogo.svg",
    top: 10,
  },
  {
    key: 2,
    width: 240,
    height: 76,
    alt: "bithumb logo",
    src: "/logos/bithumbLogo.svg",
    top: 100,
  },
  {
    key: 3,
    width: 200,
    height: 114,
    alt: "dapp logo",
    src: "/logos/dappLogo.svg",
    top: 190,
  },
  {
    key: 4,
    width: 409,
    height: 76,
    alt: "dapp logo",
    src: "/logos/coinMarketCapLogo.svg",
    top: 280,
  },
  {
    key: 5,
    width: 387,
    height: 48,
    alt: "klaySwapLogo",
    src: "/logos/klaySwapLogo.svg",
    top: 370,
  },
];

function Listing() {
  const { locale } = useRouter();
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    setLogos(initialLogos);
  }, []);

  const shift = (arr, direction, n) => {
    const times = n > arr.length ? n % arr.length : n;
    return arr.concat(
      arr.splice(0, direction > 0 ? arr.length - times : times)
    );
  };

  const moveToPrevLogo = (n) => {
    const newLogos = shift(logos, 1, n);
    setLogos(newLogos);
  };

  const moveToNextLogo = (n) => {
    const newLogos = shift(logos, 0, n);
    setLogos(newLogos);
  };

  return (
    <div className="listing container flex flex-col items-center lg:grid lg:grid-cols-2 mt-44 lg:mt-65 h-160 lg:h-117 ">
      <div
        className="justify-self-center text-24 lg:text-34 font-semibold
                      text-white pl-0 lg:pl-40 h-10"
      >
        {t[locale].listing}
      </div>
      <div className="justify-self-center lg:justify-self-start lg:self-start bg-pink-500 mt-14 lg:mt-0 relative w-60">
        {logos.map((l, index) => (
          <div
            key={l.key}
            onClick={() => {
              if (index < 3) {
                moveToPrevLogo(2 - index);
              } else {
                moveToNextLogo(index - 2);
              }
            }}
            className={`flex justify-center cursor-pointer text-white absolute left-0 right-0 mx-auto
                        transition-all duration-200 rounded-12 border border-solid border-white px-4 bg-white bg-opacity-10
                       ${
                         index === 0 || index === 4
                           ? "w-32 h-16"
                           : index === 1 || index === 3
                           ? "w-48 h-20"
                           : "w-56 h-24"
                       }`}
            style={{
              top:
                index === 0
                  ? 0
                  : index === 1
                  ? 80
                  : index === 2
                  ? 180
                  : index === 3
                  ? 300
                  : 400,
              opacity: index === 2 ? 1 : index === 0 || index === 5 ? 0.2 : 0.3,
              zIndex: index === 2 ? 5 : 1,
            }}
          >
            <Image src={l.src} width={l.width} height={l.height} alt={l.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listing;

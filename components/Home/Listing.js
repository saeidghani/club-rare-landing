import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import t from "../../public/locales/home";

const initialLogos = [
  {
    key: 1,
    width: 369,
    height: 98,
    alt: "coinGecko logo",
    src: "/logos/coinGeckoLogo.svg",
    url: "https://www.google.com/",
  },
  {
    key: 2,
    width: 240,
    height: 98,
    alt: "bithumb logo",
    src: "/logos/bithumbLogo.svg",
    url: "https://www.google.com/",
  },
  {
    key: 3,
    width: 200,
    height: 198,
    alt: "dapp logo",
    src: "/logos/dappLogo.svg",
    url: "https://www.google.com/",
  },
  {
    key: 4,
    width: 409,
    height: 98,
    alt: "dapp logo",
    src: "/logos/coinMarketCapLogo.svg",
    url: "https://www.google.com/",
  },
  {
    key: 5,
    width: 387,
    height: 98,
    alt: "klaySwapLogo",
    src: "/logos/klaySwapLogo.svg",
    url: "https://www.google.com/",
  },
];

function Listing() {
  const { locale } = useRouter();
  const [logoOrderKeys, setLogoOrderKeys] = useState([1, 2, 3, 4, 5]);
  const [logoOrders, setLogoOrders] = useState({});
  const positions = [0, 64, 156, 286, 378];

  useEffect(() => {
    const logoOrders = {};
    initialLogos?.forEach((logo, index) => {
      logoOrders[logo.key] = positions[index];
    });
    setLogoOrders(logoOrders);
  }, []);

  const shift = (arr, direction, n) => {
    const times = n > arr.length ? n % arr.length : n;
    return arr.concat(
      arr.splice(0, direction > 0 ? arr.length - times : times)
    );
  };

  return (
    <div className="listing relative">
      <div className="line12">
        <Image src="/images/line12.svg" width={2000} height={1} alt="line" />
      </div>
      <div className="line13">
        <Image src="/images/line13.svg" width={162} height={15} alt="line" />
      </div>
      <div className="container flex flex-col items-center lg:grid lg:grid-cols-2 mt-44 lg:mt-65 h-160 lg:h-108">
        <div
          className="justify-self-center text-24 lg:text-34 font-semibold
                      text-white pl-0 lg:pl-40 h-10 mb-5"
        >
          {t[locale].listing}
        </div>
        <div className="justify-self-center lg:justify-self-start lg:self-start mt-14 lg:mt-0 relative w-60">
          {initialLogos.map(({ key, width, height, alt, src, url }, index) => (
            <div
              key={key}
              onClick={() => {
                if (logoOrderKeys.indexOf(key) === 2) {
                  window.open(url, "_blank").focus();
                }
                const newLogoOrderKeys = shift(
                  logoOrderKeys,
                  logoOrderKeys.indexOf(key) > 2 ? 0 : 1,
                  Math.abs(logoOrderKeys.indexOf(key) - 2)
                );
                setLogoOrderKeys(newLogoOrderKeys);
                const newLogoOrders = {};
                newLogoOrderKeys.forEach((key, index) => {
                  newLogoOrders[key] = positions[index];
                });
                setLogoOrders(newLogoOrders);
              }}
              className={`flex justify-center cursor-pointer text-white absolute left-0 right-0 mx-auto 
                        transition-all duration-200 rounded-12 border border-solid border-white px-4 bg-white bg-opacity-10
                      `}
              style={{
                transform: `translateY(${logoOrders[key]}px)`,
                width:
                  key === logoOrderKeys[0] || key === logoOrderKeys[4]
                    ? 120
                    : key === logoOrderKeys[1] || key === logoOrderKeys[3]
                    ? 180
                    : 240,
                height:
                  key === logoOrderKeys[0] || key === logoOrderKeys[4]
                    ? 48
                    : key === logoOrderKeys[1] || key === logoOrderKeys[3]
                    ? 76
                    : 114,
                opacity: [0, 4].includes(logoOrderKeys.indexOf(key))
                  ? 0.3
                  : [1, 3].includes(logoOrderKeys.indexOf(key))
                  ? 0.45
                  : 1,
              }}
            >
              <Image src={src} width={width} height={height} alt={alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listing;

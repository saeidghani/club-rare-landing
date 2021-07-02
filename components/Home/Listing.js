import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import t from "../../public/locales/home";

function Listing() {
  const { locale } = useRouter();

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 mt-42 lg:mt-72">
      <div className="justify-self-center self-center text-24 lg:text-34 font-semibold text-white pl-0 lg:pl-40">
        {t[locale].listing}
      </div>
      <div className="justify-self-center lg:justify-self-start grid grid-cols-1 gap-y-4 mt-14 lg:mt-0">
        <Image
          src="/icons/coinGeckoLogo.svg"
          width={120}
          height={48}
          alt="coinGecko logo"
        />
        <Image
          src="/icons/bithumbLogo.svg"
          width={180}
          height={76}
          alt="bithumb logo"
        />
        <Image
          src="/icons/dappLogo.svg"
          width={240}
          height={114}
          alt="dapp logo"
        />
        <Image
          src="/icons/dappLogo.svg"
          width={180}
          height={76}
          alt="dapp logo"
        />
        <Image
          src="/icons/klaySwapLogo.svg"
          width={120}
          height={48}
          alt="klaySwap logo"
        />
      </div>
    </div>
  );
}

export default Listing;

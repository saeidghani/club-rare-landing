import React from "react";
import Image from "next/image";

function Listing() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 mt-42 lg:mt-72">
      <div className="justify-self-center self-center text-34 font-semibold text-white pl-0 lg:pl-40">
        Listing
      </div>
      <div className="justify-self-center lg:justify-self-start grid grid-cols-1 gap-y-4 mt-14 lg:mt-0">
        <Image src="/icons/coinGeckoLogo.svg" width={120} height={48} />
        <Image src="/icons/bithumbLogo.svg" width={180} height={76} />
        <Image src="/icons/dappLogo.svg" width={240} height={114} />
        <Image src="/icons/coinMarketCapLogo.svg" width={180} height={76} />
        <Image src="/icons/klaySwapLogo.svg" width={120} height={48} />
      </div>
    </div>
  );
}

export default Listing;

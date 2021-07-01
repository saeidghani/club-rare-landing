import React from "react";
import Image from "next/image";

function Features() {
  return (
    <div className="features grid grid-cols-1 lg:grid-cols-6 items-center mt-34 lg:mt-80 overflow-hidden">
      <div className="lg:col-span-2 text-white text-center lg:text-left pb-7 lg:pb-28">
        <div className="text-24 lg:text-34">
          <span className="font-bold">Club</span> Rare
        </div>
        <p
          className="text-16 lg:text-24 mt-6 px-8 lg:px-0"
          style={{ lineHeight: 1.3 }}
        >
          No.1. Premium Select Shop that connects offline physical goods with
          NFT in blockchain. Youn can actually touch it or enjoy it in the
          metaverse world
        </p>
      </div>
      <div className="lg:col-start-3 lg:col-span-4 lg:justify-self-end h-160">
        <div className="flex justify-center pl-8 lg:pl-0">
          <div className="-mr-100 lg:-mr-28 mt-40 z-10">
            <Image src="/images/mobileLanding.png" width={220} height={429} />
          </div>
          <div className="relative left-80 lg:left-0">
            <Image src="/images/desktopLanding.png" width={699} height={533} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

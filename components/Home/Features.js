import React from "react";
import Image from "next/image";

function Features() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 items-center mt-34 lg:mt-68">
      <div className="lg:col-span-2 text-white text-center pb-7 lg:pb-28">
        <div className="text-24 lg:text-34">
          <span className="font-bold">Club</span> Rare
        </div>
        <p className="text-16 lg:text-24 mt-6" style={{ lineHeight: 1.3 }}>
          No.1. Premium Select Shop that connects offline physical goods with
          NFT in blockchain. Youn can actually touch it or enjoy it in the
          metaverse world
        </p>
      </div>
      <div className="lg:col-start-3 lg:col-span-3 lg:justify-self-end flex">
        <div className="-mr-40 pt-40 z-10">
          <Image src="/images/mobileLanding.png" width={220} height={429} />
        </div>
        <Image src="/images/desktopLanding.png" width={690} height={524} />
      </div>
    </div>
  );
}

export default Features;

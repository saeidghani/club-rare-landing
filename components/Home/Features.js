import React from "react";
import Image from "next/image";

function Features() {
  return (
    <div className="grid grid-cols-5 mb-20">
      <div className="col-span-2 text-white">
        <div className="text-34">
          <span className="font-bold">Club</span> Rare
        </div>
        <p className="text-24 mt-6" style={{ lineHeight: 1.3 }}>
          No.1. Premium Select Shop that connects offline physical goods with
          NFT in blockchain. Youn can actually touch it or enjoy it in the
          metaverse world
        </p>
      </div>
      <div className="col-start-3 col-span-3 self-center flex">
        <Image src="/images/mobileLanding.png" width={181} height={393} />
        <div className="rounded-50 border-4 border-solid border-black">
          <Image src="/images/desktopLanding.png" width={662} height={496} />
        </div>
      </div>
    </div>
  );
}

export default Features;

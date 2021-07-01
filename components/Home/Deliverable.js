import React from "react";
import Image from "next/image";

function Deliverable() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-36 lg:mt-40">
      <Image src="/images/circle.svg" width={350} height={361} />
      <div className="mt-13 lg:mt-0 self-center text-white">
        <div className="text-24 lg:text-34 font-semibold text-center">
          Deliverable NFT
        </div>
        <p
          className="text-16 lg:text-20 mt-5 lg:mt-7.5 text-center"
          style={{ lineHeight: 1.3 }}
        >
          Redeem your token, Get the Real World Good, Get the Token via Trade
          then Own the Limited Good forever.
        </p>
      </div>
    </div>
  );
}

export default Deliverable;

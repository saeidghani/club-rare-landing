import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import t from "../../public/locales/home";

function Deliverable() {
  const { locale } = useRouter();

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 mt-32 lg:mt-36">
      <Image src="/images/circle.svg" width={350} height={361} />
      <div className="mt-13 lg:mt-0 self-center text-white text-center lg:text-left">
        <div className="text-24 lg:text-34 font-semibold">
          {t[locale].deliverable.title}
        </div>
        <p
          className="text-16 lg:text-20 mt-5 lg:mt-7.5"
          style={{ lineHeight: 1.3 }}
        >
          {t[locale].deliverable.text}
        </p>
      </div>
    </div>
  );
}

export default Deliverable;

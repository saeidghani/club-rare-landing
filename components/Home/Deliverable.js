import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import t from "../../public/locales/home";

function Deliverable() {
  const { locale } = useRouter();

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 mt-14 lg:mt-36">
      <div className="hidden lg:block mx-auto">
        <Image src="/images/circle.svg" width={350} height={361} alt="circle" />
      </div>
      <div className="block lg:hidden mx-auto">
        <Image
          src="/images/circleSm.svg"
          width={244}
          height={251}
          alt="circle"
        />
      </div>
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

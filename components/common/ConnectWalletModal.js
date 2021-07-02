import React from "react";
import Image from "next/image";
import Modal from "../UI/Modal";
import t from "../../public/locales/header";
import { useRouter } from "next/router";

function ConnectWalletModal({ open, onCloseModal }) {
  const router = useRouter();
  const { locale } = router;

  const title = (
    <div className="text-24 text-white text-center font-semibold pt-8 px-6">
      {t[locale].connectWalletModal.title}
    </div>
  );

  const content = (
    <div className="mt-3 px-2 pb-13">
      <div className="text-18 text-center opacity-80">
        {t[locale].connectWalletModal.text}
      </div>
      <div className="flex flex-col items-center mt-8">
        <button
          className="rounded-12 border border-solid border-white w-full flex justify-center items-center"
          style={{ width: 239, height: 53 }}
        >
          <Image src="/images/metatask.png" width={102} height={32} alt="" />
        </button>
        <button
          className="mt-4 rounded-12 border border-solid border-white w-full flex justify-center items-center"
          style={{ width: 239, height: 53 }}
        >
          <Image
            src="/images/connectWallet.png"
            width={130}
            height={21}
            alt=""
          />
        </button>
      </div>
    </div>
  );

  return (
    <Modal
      title={title}
      content={content}
      open={open}
      onCloseModal={onCloseModal}
      contentClass="mt-2 text-white px-2"
      overlayClass="bg-black md:opacity-75"
    />
  );
}

export default ConnectWalletModal;

import React from "react";
import Modal from "../UI/Modal";
import t from "../../public/locales/header";
import { useRouter } from "next/router";

function MyWalletModal({ open, onCloseModal }) {
  const router = useRouter();
  const { locale } = router;

  const title = (
    <div className="text-24 text-white text-center font-semibold pt-9">
      {t[locale].myWalletModal.title}
    </div>
  );

  const walletAddress = "0xjbe987943yhfifdbd8r74455x";

  const content = (
    <div className="mt-3 px-8 pb-13">
      <div className="text-center opacity-80 flex flex-col">
        <div className="flex justify-center">
          <div className="mr-1">{t[locale].myWalletModal.address}:</div>
          <div className="">{walletAddress.substring(0, 19)}</div>
        </div>
        <div className="">{walletAddress.substring(19, 30)}</div>
      </div>
      <div className="flex justify-between mt-7">
        <div className="opacity-80">{t[locale].myWalletModal.balance}:</div>
        <div className="">0 AGOV</div>
      </div>
      <div className="flex justify-center mt-14">
        <button
          className="rounded-12 border border-solid border-white w-full flex justify-center items-center"
          style={{ width: 212, height: 53 }}
        >
          {t[locale].myWalletModal.signOut}
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

export default MyWalletModal;

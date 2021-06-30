import React from "react";
import Image from "next/image";
import Modal from "../UI/Modal";

function MyWalletModal({ open, onCloseModal }) {
  const title = (
    <div className="text-24 text-white text-center font-semibold pt-9">
      My Wallet
    </div>
  );

  const walletAddress = "0xjbe987943yhfifdbd8r74455x";

  const content = (
    <div className="mt-3 px-8 pb-13">
      <div className="text-center opacity-80 flex flex-col">
        <div className="flex justify-center">
          <div className="mr-1">Address:</div>
          <div className="">{walletAddress.substring(0, 19)}</div>
        </div>
        <div className="">{walletAddress.substring(19, 30)}</div>
      </div>
      <div className="flex justify-between mt-7">
        <div className="opacity-80">Balance:</div>
        <div className="">0 AGOV</div>
      </div>
      <div className="flex justify-center mt-14">
        <button
          className="rounded-12 border border-solid border-white w-full flex justify-center items-center"
          style={{ width: 212, height: 53 }}
        >
          Sign Out
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

import React from "react";
import Modal from "../UI/Modal";

function ConnectWalletModal({ open, onCloseModal }) {
  const title = (
    <div className="text-24 text-white text-center font-semibold pt-8 px-6">
      Connect your wallet
    </div>
  );

  const content = (
    <div className="mt-3 px-2 pb-13">
      <div className="text-18 text-center opacity-80">
        Connect with one of available wallet providers
      </div>
      <div className="flex flex-col items-center mt-8">
        <button
          className="rounded-12 border border-solid border-white w-full flex justify-center items-center"
          style={{ width: 239, height: 53 }}
        >
          <img src="/images/metatask.png" alt="" />
        </button>
        <button
          className="mt-4 rounded-12 border border-solid border-white w-full flex justify-center items-center"
          style={{ width: 239, height: 53 }}
        >
          <img src="/images/connectWallet.png" alt="" />
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

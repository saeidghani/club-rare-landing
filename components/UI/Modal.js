import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef } from "react";

export default function Modal({
  open,
  title,
  content,
  onCloseModal,
  afterCloseModal = () => {},
  width,
  containerClass,
  contentClass,
  overlayClass,
}) {
  const cancelButtonRef = useRef();

  function closeModal() {
    onCloseModal();
    afterCloseModal();
  }

  return (
    <div className="relative">
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          initialFocus={cancelButtonRef}
          static
          open={open}
          onClose={closeModal}
        >
          <Dialog.Overlay
            className={`fixed inset-0 ${overlayClass || "bg-black opacity-75"}`}
          />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={`bg-darkGray inline-block w-full my-8 overflow-hidden
              text-left align-middle transition-all transform shadow-xl ${
                width ? width : "max-w-284"
              } ${containerClass || "rounded-12"}`}
              >
                <Dialog.Title as="div" className="">
                  {title}
                </Dialog.Title>
                <div className={contentClass}>{content}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

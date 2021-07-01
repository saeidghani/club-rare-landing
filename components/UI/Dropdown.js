import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Dropdown({
  selected,
  onSelect,
  width = "w-56",
  title,
  items,
  menuButtonWrapperClass,
  menuButtonClass,
  menuItemsClass,
  menuItemClass,
  selectedItemClass,
  unselectedItemClass,
  displaySelected,
  displayChevronDown = true,
}) {
  const router = useRouter();

  return (
    <div className={`relative text-center z-10 ${width}`}>
      <Menu as="div" className=" inline-block text-left w-full">
        {({ open }) => (
          <>
            <div
              className={`absolute right-0 left-0 z-30 ${
                menuButtonWrapperClass || "top-0"
              }`}
            >
              <Menu.Button
                className={`inline-flex items-center w-full
                focus:outline-none ${
                  menuButtonClass || "justify-center px-4 py-2"
                }`}
              >
                <div>
                  {displaySelected && selected?.title ? selected?.title : title}
                </div>
                {displayChevronDown && (
                  <ChevronDownIcon
                    className="w-6 h-6 ml-2 -mr-1"
                    aria-hidden="true"
                  />
                )}
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className={`absolute focus:outline-none ${
                  menuItemsClass || "-right-8 w-56 mt-10 rounded-md"
                }`}
              >
                {items.map((i) => (
                  <div key={i?.key} className="w-full">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            i?.key === selected?.key
                              ? selectedItemClass || "text-primary"
                              : unselectedItemClass || "text-gray"
                          } group flex items-center w-full focus:outline-none ${
                            menuItemClass ||
                            "rounded-md px-2 py-2 text-18 text-center justify-center"
                          }`}
                          onClick={() => {
                            onSelect(i);
                            i?.href
                              ? router.push(i.href)
                              : i?.onClick
                              ? i?.onClick()
                              : {};
                          }}
                        >
                          {i.title}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}

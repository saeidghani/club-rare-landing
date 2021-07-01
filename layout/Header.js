import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import routes from "../constants/routes";
import ConnectWalletModal from "../components/common/ConnectWalletModal";
import MyWalletModal from "../components/common/MyWalletModal";
import Dropdown from "../components/UI/Dropdown";

function Header() {
  const router = useRouter();
  const { pathname, query, locale } = router;
  const [selectedWallet, setSelectedWallet] = useState({});
  const [selectedLang, setSelectedLang] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectWalletOpen, setConnectWalletOpen] = useState(false);
  const [myWalletOpen, setMyWalletOpen] = useState(false);
  const { walletConnected } = query;
  const walletIsConnected = walletConnected === "true";

  const languageOptions = [
    {
      key: "en",
      title: "English",
      onClick: () => router.push(pathname, pathname, { locale: "en" }),
    },
    {
      key: "kr",
      title: "Korean",
      onClick: () => router.push(pathname, pathname, { locale: "kr" }),
    },
  ];

  useEffect(() => {
    setSelectedLang(locale === "en" ? languageOptions[0] : languageOptions[1]);
  }, []);

  const navItems = [
    { key: 1, title: "Home", href: routes.home },
    { key: 2, title: "Staking", href: routes.staking },
  ];

  const items = [
    {
      key: 1,
      title: (
        <div
          className="flex border border-solid border-white rounded-12 mb-1"
          style={{ height: 36 }}
        >
          {languageOptions?.map((i) => (
            <div
              key={i.key}
              className={`text-white text-18 px-4 h-full rounded-12 flex items-center ${
                locale === i.key
                  ? "border-r border-solid border-white linearGradient"
                  : "opacity-80"
              }`}
              onClick={() => router.push(pathname, pathname, { locale: i.key })}
            >
              {i.title}
            </div>
          ))}
        </div>
      ),
    },
    {
      key: 2,
      title: "Home",
      onClick: () => router.push(routes.home),
    },
    {
      key: 3,
      title: "Stacking",
      onClick: () => router.push(routes.staking),
    },
  ];

  const Logo = ({ isOnDrawer, wrapperClass }) => (
    <div className={wrapperClass} onClick={() => router.push(routes.home)}>
      <div className="flex items-center cursor-pointer">
        <Image src="/icons/logo.svg" width={101} height={34} alt="" />
        <div className="md:hidden pt-2">
          <Image
            onClick={() => setMenuOpen(!menuOpen)}
            className={`ml-1 cursor-pointer ${
              isOnDrawer ? "transform rotate-180" : ""
            }`}
            src="/icons/arrow.svg"
            width={24}
            height={24}
            alt=""
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div
        className={`transform ease-in-out transition-all duration-300 z-30 absolute left-0 right-0 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className="relative bg-black rounded-b-40 border border-solid border-white overflow-hidden"
          style={{ height: 306 }}
        >
          <Logo wrapperClass="pl-6 pt-15" isOnDrawer />
          <div className="absolute top-36 flex flex-col items-center space-y-5 w-full z-10">
            {items.map((i) => (
              <div
                key={i.key}
                className="text-18 text-white cursor-pointer"
                onClick={i.onClick}
              >
                {i.title}
              </div>
            ))}
          </div>
          {<div className="bgShadow"></div>}
        </div>
      </div>
      <ConnectWalletModal
        open={connectWalletOpen}
        onCloseModal={() => setConnectWalletOpen(false)}
      />
      <MyWalletModal
        open={myWalletOpen}
        onCloseModal={() => setMyWalletOpen(false)}
      />
      <header className="flex justify-between items-center py-15 container">
        <div
          className="flex justify-between items-center w-full"
          style={{ maxWidth: 367 }}
        >
          <Logo />
          <div
            className="hidden md:flex justify-between text-white w-full"
            style={{ maxWidth: 146, lineHeight: 1 }}
          >
            {navItems?.map((n) => (
              <Link key={n.key} href={n.href}>
                <a
                  className={
                    pathname === n.href
                      ? "font-semibold border-b border-solid border-white"
                      : "opacity-80"
                  }
                >
                  {n.title}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div
          className="flex justify-end md:justify-between items-center w-full"
          style={{ maxWidth: 207 }}
        >
          <div className="hidden lg:block">
            <Dropdown
              title={
                <div className="relative">
                  <Image
                    src="/icons/roundSquare.svg"
                    width={34}
                    height={34}
                    alt="round square"
                  />
                  <span className="absolute top-2 left-2 text-white text-13 font-semibold">
                    {locale.toUpperCase()}
                  </span>
                </div>
              }
              items={languageOptions}
              displayChevronDown={false}
              width="w-18"
              selected={selectedLang}
              onSelect={(i) => setSelectedLang(i)}
              menuButtonClass="justify-center px-4 -mt-1"
              menuItemsClass="bg-white absolute focus:outline-none top-9 -left-5 w-28 rounded-32 shadow-lg pt-2 pb-4"
              menuItemClass="group flex justify-center rounded-40 items-center w-full px-2 pt-2 font-semibold text-center text-gray focus:outline-none"
              selectedItemClass="text-blue"
            />
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() =>
              walletIsConnected
                ? setMyWalletOpen(true)
                : setConnectWalletOpen(true)
            }
          >
            {
              <div className="textGradient text-20 mr-3.5">
                {walletIsConnected ? "0x56u7i..." : "Connect"}
              </div>
            }
            <Image
              src="/icons/wallet.svg"
              width={40}
              height={40}
              alt="wallet"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

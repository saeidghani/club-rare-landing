import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import routes from "../constants/routes";
//import MenuDrawer from "../components/common/MenuDrawer";
import MenuDrawer from "rc-drawer";
import ConnectWalletModal from "../components/common/ConnectWalletModal";

function Header() {
  const router = useRouter();
  const { pathname, locale } = router;
  const [selectedWallet, setSelectedWallet] = useState({});
  const [menuOpen, setMenuOpen] = useState(true);
  const [connectWalletOpen, setConnectWalletOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  const languageOptions = [
    { key: "en", title: "English", onClick: () => {} },
    { key: "kr", title: "Korean", onClick: () => {} },
  ];

  const walletOptions = (isDrawer) =>
    useMemo(() => {
      const titleOption = {
        key: 1,
        title: (
          <div
            className={
              isDrawer
                ? "text-18 text-blue font-semibold mt-20"
                : "text-18 text-blue border-b border-solid border-gray pb-2 w-full -mt-1"
            }
          >
            dddddddd
          </div>
        ),
        onClick: () => {},
      };
      const mainOptionsItems = [
        { key: 2, title: "Balance" },
        { key: 3, title: "Bidding Balance" },
      ];
      const mainOptions = mainOptionsItems.map((i) => ({
        key: i.key,
        title: (
          <div
            className={`flex justify-between items-end w-full ${
              isDrawer ? "mt-7" : "px-4"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="flex flex-col items-start">
                <div className="text-14 text-gray font-semibold">{i.title}</div>
                <div className="text-16 text-blue font-semibold">0 ETH</div>
              </div>
            </div>
            <div className="text-16 text-gray font-semibold text-right">
              $0.00
            </div>
          </div>
        ),
        onClick: () => {},
      }));
      const lastOption = {
        key: mainOptions.length + 2,
        title: (
          <button
            className={`text-14 text-blue font-bold border border-solid border-gray
                        py-3 px-6 rounded-12 w-full ${
                          isDrawer ? "mt-11" : "mx-6.5"
                        }`}
          >
            ffffff
          </button>
        ),
        onClick: () => {},
      };
      return [titleOption, ...mainOptions, lastOption];
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
      onClick: () => () => router.push(routes.home),
    },
    {
      key: 3,
      title: "Stacking",
      onClick: () => router.push(routes.staking),
    },
  ];

  const Logo = ({ isOnDrawer, wrapperClass }) => (
    <div className={wrapperClass}>
      <div className="flex items-center">
        <img className="" src="/icons/logo.svg" alt="" />
        <div className="" onClick={() => setMenuOpen(!isOnDrawer)}>
          <img
            className={`md:hidden ml-1 cursor-pointer ${
              isOnDrawer ? "transform rotate-180" : ""
            }`}
            src="/icons/arrow.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="">
      {/*<MenuDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        placement="top"
        level={null}
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
      </MenuDrawer>*/}
      <ConnectWalletModal
        open={connectWalletOpen}
        onCloseModal={() => setConnectWalletOpen(false)}
      />
      <header className="flex justify-between items-center px-6 py-15 md:px-25 md:py-15">
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
          <div
            className="hidden md:block text-white text-13 font-semibold rounded-10"
            style={{ border: "1.5px solid #fff", padding: "4.5px 4.5px" }}
          >
            EN
          </div>
          <div
            className="flex items-center space-x-3.5 cursor-pointer"
            onClick={() => setConnectWalletOpen(true)}
          >
            <div className="textGradient text-20">Connect</div>
            <img src="/icons/wallet.svg" alt="wallet" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

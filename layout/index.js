import React, { useEffect } from "react";
import Header from "./Header";
import { useRouter } from "next/router";

function Layout({ children, mainClass }) {
  const router = useRouter();
  const { pathname, query } = router;
  const { walletConnected } = query;

  useEffect(() => {
    if (typeof walletConnected === undefined) {
      router.push({
        pathname,
        query: { walletConnected: false },
      });
    }
  }, [walletConnected]);

  return (
    <div className="min-h-screen bg-black relative">
      <Header />
      <main className={`container pb-31 lg:pb-50 ${mainClass || ""}`}>
        {children}
      </main>
    </div>
  );
}

export default Layout;

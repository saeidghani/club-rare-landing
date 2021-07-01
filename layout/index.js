import React from "react";
import Header from "./Header";

function Layout({ children, mainClass }) {
  return (
    <div className="min-h-screen bg-black relative">
      <Header />
      <main className={`pb-31 lg:pb-50 ${mainClass || ""}`}>{children}</main>
    </div>
  );
}

export default Layout;

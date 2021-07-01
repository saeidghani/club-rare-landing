import React from "react";
import { appWithTranslation } from "next-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/spinner.css";
import "../styles/customStyles.scss";
import "../styles/utilityStyles.scss";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);

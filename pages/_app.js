import React from "react";
import 'tailwindcss/tailwind.css';
import '../public/styles/utilityStyles.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

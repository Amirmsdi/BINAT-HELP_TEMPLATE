import type { NextComponentType } from "next";
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const CustomDocument: NextComponentType = () => {
  return (
    <Html lang="fa-IR" dir="rtl" className="scroll-smooth">
      <Head>
        <link rel="icon" type="image/jpeg" href="/logo.jpg" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="google" content="notranslate" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default CustomDocument;

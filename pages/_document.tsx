import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script
        async
        defer
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      ></Script>
      <noscript>
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

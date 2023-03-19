import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script
        async
        defer
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      ></script>
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

import "@/styles/globals.scss";
import styles from "@/styles/Article.module.scss";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <div className={styles.navContent}>
          <Link href="/">
            <h1>Joe&apos;s Notes</h1>
          </Link>
          <p>
            A collection of notes, published by{" "}
            <a href="https://simmsreeve.com" target="_blank">
              Joe
            </a>
            , some still WIP.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      
      <footer>
        <div className={styles.footerContent}>
          <h2>About Joe & A Call To Action</h2>
          <p>
            Joe is a Product Engineer, Engineering Manager, and Founder. He
            currently works at{" "}
            <a href="https://amplitude.com" target="_blank" className="subtle">
              Amplitude
            </a>
            , and does some consulting on the side.
            <br />
            <br />
            Joe&apos;s focus is constructing a framework for AI/ML Leaders &
            Practitioners to build things of <strong>actual value</strong>,
            rather than waste time on cool projects that have no impact.
          </p>

          <aside>
            <p>
              👉 Join the{" "}
              <a
                href="https://chat.whatsapp.com/H4rmV1S0qme0yzpmoSDl5N"
                target="_blank"
              >
                Joe&apos;s Notes WhatsApp Group
              </a>{" "}
              to talk to other people who have read this.
            </p>
          </aside>
          <br />
          <h2>Links</h2>
          <ul>
            <li>
              <a
                href="https://simpleanalytics.com/notes.simmsreeve.com"
                target="_blank"
              >
                Analytics for this site
              </a>
            </li>
            <li>
              <a href="https://github.com/ISNIT0/joe-blog" target="_blank">
                Code for this site
              </a>
            </li>
            <li>
              <a href="https://simmsreeve.com" target="_blank">
                Joe&apos;s Main Site
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

import Head from "next/head";
import styles from "@/styles/Article.module.scss";
import { articles, Article } from "../articles";
import { getGoogleDocsContent } from "@/utils/getGoogleDocsContent";
import cx from "classnames";
import { ArticleAside } from "../components/ArticleAside";

export default function Page({
  article,
  articleHtml,
}: {
  article: Article;
  articleHtml: string;
}) {
  return (
    <>
      <Head>
        <title>{`${article.title} - Joe's Notes`}</title>
        <meta
          name="description"
          content="A collection of notes, published by Joe (ISNIT0), some still WIP."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <div className={styles.navContent}>
          <h1>Joe&apos;s Notes</h1>
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
        <ArticleAside article={article} />
        <article
          dangerouslySetInnerHTML={{ __html: articleHtml }}
          className={cx(styles.article, styles.genericDocWrapper)}
        ></article>
        <ArticleAside article={article} />
      </main>
      <footer>
        <div className={styles.footerContent}>
          <h1>About Joe & A Call To Action</h1>
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
          <h1>Links</h1>
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
              <a
                href="https://github.com/ISNIT0/joe-blog"
                target="_blank"
              >
                Code for this site
              </a>
            </li>
            <li>
              <a
                href="https://simmsreeve.com"
                target="_blank"
              >
                Joe&apos;s Main Site
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const parts = context?.params?.parts;
  let slug = "";
  if (parts) {
    slug = parts[0];
  }

  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  const articleHtml = await getGoogleDocsContent(article.docUrl);

  return {
    props: {
      article,
      articleHtml,
    },
  };
};

import { Article } from "../articles";

export const ArticleAside = ({ article }: { article: Article }) => {
  return (
    <aside>
      <p>
        👉{" "}
        <a href={article.docUrl} target="_blank">
          Edit this page to make it better
        </a>
      </p>
      {article.whatsAppUrl ? (
        <p>
          💬{" "}
          <a href={article.whatsAppUrl} target="_blank">
            Join the WhatsApp group for this article
          </a>
        </p>
      ) : null}
    </aside>
  );
};

import { articles } from "@/articles";

export default function DirectoryPage() {
  return (
    <>
      <h1>Directory</h1>
      <p>
        A subset of Joe&apos;s notes that have been published to this site, see
        the{" "}
        <a
          href="https://drive.google.com/drive/u/0/folders/11CvuzLXYa5Xax00xyKeu5NpnMaO12_zJ"
          target={"_blank"}
        >
          Google Drive Folder
        </a>{" "}
        for more.
      </p>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.slug}>
              <a href={"/" + article.slug}>{article.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

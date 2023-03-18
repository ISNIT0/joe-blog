export interface Article {
  title: string;
  slug: string;
  docUrl: string;
  whatsAppUrl?: string;
  publishedAt: string;
}

export const articles: Article[] = [
  {
    title: "Index",
    slug: "",
    docUrl:
      "https://docs.google.com/document/d/1Gy0A_v_Hvg9-IotyNKS2ky2VJMRSwJFH3rf9nTWLKEU/edit",
    publishedAt: "18th March, 2023",
    whatsAppUrl: "https://chat.whatsapp.com/H4rmV1S0qme0yzpmoSDl5N",
  },
  {
    title: "3 Ways to Think About Models",
    slug: "3-ways-to-think-about-models",
    docUrl:
      "https://docs.google.com/document/d/1nPpi7_UA8obZmOeqmDljPXlxWeerfjnTLzHnNEr8NSI/edit#",
    publishedAt: "18th March, 2023",
  },
  {
    title: "Types of Multiplayer",
    slug: "types-of-multiplayer",
    docUrl:
      "https://docs.google.com/document/d/1_a0tGmpLDHqjXs994t0B3LCgA7wIPjPDLgaltmWVxeg/edit#",
    publishedAt: "18th March, 2023",
  },
  {
    title: "Ideating & Building AI Products",
    slug: "ideating-and-building-ai-products",
    docUrl:
      "https://docs.google.com/document/d/1lkivb5wqWCTmI1QbtSWBTP6gqBHPFQWQsiX5gUT-On8/edit#",
    publishedAt: "18th March, 2023",
  },
];

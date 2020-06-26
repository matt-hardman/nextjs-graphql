import { NextApiRequest, NextApiResponse } from "next";

const baseUrl = "http://newsapi.org/v2/everything?q=";
const apiKey = "4124fbbf2f634a7dbcecf550999f0b67";

interface Response {
  articles: Article[];
}

interface Article {
  title: string;
  author: string;
  description: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.body;

  const dateFrom = Date.now();

  const url = `${baseUrl}${query}&from=${dateFrom}&sortBy=publishedAt&apiKey=${apiKey}`;

  const response = await fetch(url);
  const json: Response = await response.json();
  const articles = json.articles.map(({ title, author, description }) => ({
    title,
    author,
    description,
  }));
  res.status(200).json(articles);
};

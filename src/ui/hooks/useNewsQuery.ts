import { useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { NEWS_QUERY } from "./queries";

interface QueryResponse {
  news: Article[];
}

interface Article {
  title: string;
  description: string;
}

export const useNewsQuery = () => {
  const [getNews, { loading, data, error }] = useLazyQuery<QueryResponse>(
    NEWS_QUERY,
    {
      variables: { topic: "news" },
    }
  );

  const submitHandler = (topic: string) => {
    getNews({ variables: { topic } });
  };

  useEffect(() => {
    getNews();
  }, []);

  const news = data?.news;

  const state = { data: news, error, loading };

  const api = { submitHandler };

  return { state, api };
};

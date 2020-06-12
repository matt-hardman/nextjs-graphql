import React from "react";

import useSWR from "swr";
import { request } from "graphql-request";

const API = "api/graphql";
const fetcher = (query: any) => request(API, query);

interface QueryResponse {
  news: Article[];
}

interface Article {
  title: string;
  description: string;
}

const index = () => {
  const { data, error } = useSWR<QueryResponse>(
    `{
      news(topic: "BLM") {
        author
        title
        description
      }
    }`,
    fetcher
  );

  const news = data?.news;

  return (
    <div>
      {news?.map(({ title, description }) => (
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default index;

import React, { HTMLAttributes } from "react";

import styles from "./Home.module.scss";
import NewsItem from "../components/NewsItem/NewsItem";
import Search from "../components/Search/Search";

interface Props extends HTMLAttributes<HTMLElement> {
  submitHandler: (input: string) => void;
  loading: boolean;
  error: any;
  data?: Article[];
}

interface Article {
  title: string;
  description: string;
}

const Home: React.FC<Props> = ({ data, loading, error, submitHandler }) => (
  <main className={styles.component}>
    <Search submitHandler={submitHandler} />

    {loading && "loading"}

    {data?.map(({ title, description }) => (
      <NewsItem key={title} title={title} description={description} />
    ))}
  </main>
);

export default Home;

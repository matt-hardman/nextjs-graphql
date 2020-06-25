import React, { HTMLAttributes } from "react";
import styles from "./NewsItem.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
}

const NewsItem: React.FC<Props> = ({ className, title, description }) => (
  <article className={styles.component} title={title}>
    <h1>{title}</h1>
    <p>{description}</p>
  </article>
);

export default NewsItem;

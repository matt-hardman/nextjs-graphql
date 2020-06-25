import React, { HTMLAttributes } from "react";
import styles from "./NewsItem.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
  submitHandler: (input: string) => void;
}

const Search: React.FC<Props> = ({ className, submitHandler }) => {
  const [search, setSearch] = React.useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitHandler(search);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;

import React, { memo } from "react";
import { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const formRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    query && onSearch(query);
    formRef.current.reset();
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <span className={styles.title}>Youtube</span>

      <form
        ref={formRef}
        className={styles.searchContainer}
        action="submit"
        onSubmit={onSubmit}
      >
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Search..."
        />
        <button className={styles.searchBtn}>
          <img
            className={styles.searchImg}
            src="/images/search.png"
            alt="search button"
          />
        </button>
      </form>
    </header>
  );
};
export default SearchHeader;

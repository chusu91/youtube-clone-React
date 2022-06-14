import React from "react";
import { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ searchVideo }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const searchKeyword = inputRef.current.value;
    searchKeyword && searchVideo(searchKeyword);
  };

  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>

      <input
        className={styles.input}
        ref={inputRef}
        type="text"
        placeholder="search"
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          src="/images/search.png"
          alt="search button"
          className={styles.buttonImg}
        />
      </button>
    </header>
  );
};

export default SearchHeader;

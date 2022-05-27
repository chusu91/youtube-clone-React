import styles from "./search_header.module.css";
import React, { useRef } from "react";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = (event) => {
    event.preventDefault();
    console.log("submited");
    const value = inputRef.current.value;
    onSearch(value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>

      <form className={styles.inputContainer} onSubmit={handleSearch}>
        <input
          className={styles.input}
          ref={inputRef}
          type="search"
          placeholder="Search..."
        />
        <button className={styles.button} type="submit">
          <img
            className={styles.buttonImg}
            src="/images/search.png"
            alt="search"
          />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;

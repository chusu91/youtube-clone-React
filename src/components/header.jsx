import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="App-header">
        <span className="App-logo">
          <i className="fa-brands fa-youtube"></i>
        </span>
        <span className="App-name">Youtube</span>
        <form>
          <input className="search-input" type="text" placeholder="Search..." />
          <button className="search-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </nav>
    );
  }
}

export default Header;

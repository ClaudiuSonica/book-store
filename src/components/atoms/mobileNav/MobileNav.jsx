import "./MobileNav.scss";
import menu from "/assets/images/menu.svg";
import search from "/assets/images/search-icon.svg";
import cart from "/assets.images/icon.svg";
import { useState } from "react";

const MobileNav = () => {
  const [searchInput, setSearchInput] = useState("");
  const onChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  }

  return (
    <nav className="nav">
      <div className="nav__menu">
        <img src={menu} alt="menu" />
      </div>
      <div className="nav__search">
        <img src={search} alt="search" />
        <input
          type="text"
          className="search__input"
          placeholder="What are you looking for?"
          onChange={onChange}
          value={searchInput}
        />
      </div>
      <div className="nav__cart">
        <img src={cart} alt="cart" />
      </div>
    </nav>
  )
};

export default MobileNav;
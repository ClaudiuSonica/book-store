import "./DesktopNav.scss";
import menu from "/assets/images/menu.svg";
import search from "/assets/images/search-icon.svg";
import user from "/assets/images/account.svg";
import cart from "/assets/images/icon.svg";
import favorite from "/assets/images/favorite.svg";
import { useState } from "react";
import Button from "../button/Button";

const DesktopNav = () => {
  const [searchInput, setSearchInput] = useState("");
  const onChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  return (
    <nav className="nav">
      <div className="nav__left">
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
      </div>
      <div className="nav__right">
        <div className="nav__user">
          <img src={user} alt="user" />
        </div>
        <div className="nav__favorite">
          <img src={favorite} alt="favorite" />
        </div>
        <Button text="Basket" img={cart} />
      </div>
    </nav>
  );
};

export default DesktopNav;

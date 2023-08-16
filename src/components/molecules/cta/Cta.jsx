/* eslint-disable react/no-unescaped-entities */
import "./Cta.scss";
import logo from "/assets/images/logo.png";
import NavLink from "../../atoms/navLink/NavLink";
import Button from "../../atoms/button/Button";
import { useState } from "react";

const Cta = () => {
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail(e.target.value);
  } 

  const navItems = ["About", "Features", "Pricing", "Gallery", "Team"]
  return (
    <section className="section__cta">
      <div className="cta__list">
        <img src={logo} alt="logo" />
        <nav className="nav__links">
          {navItems.map(navItem => (
            <NavLink key={navItem} link={navItem} />
          ))}
        </nav>
      </div>
      <div className="cta__email">
        <p className="email__title">Subscribe to stay tuned for new product and latest updates. Let's do it!</p>
        <input
          type="text"
          placeholder="Enter your email address"
          value={email}
          onChange={onChange}
        />
        <Button text="Subscribe" className="button__email" />
      </div>
    </section>
  )
}

export default Cta;
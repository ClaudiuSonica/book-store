/* eslint-disable react/prop-types */
import "./Button.scss";
import cartHov from "/assets/images/cart-hov.svg";
import { useState } from "react";

const Button = ({ text, img, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const mouseOn = () => {
    setIsHovered(prevHover => !prevHover);
  }
  const mouseOut = () => {
    setIsHovered(prevHover => !prevHover);
  }
  return (
    <button
      onMouseEnter={mouseOn}
      onMouseLeave={mouseOut}
      className={className}>
      {img && <img src={isHovered ? cartHov : img} alt="cart icon" />}
      {text}
    </button>
  );
};

export default Button;

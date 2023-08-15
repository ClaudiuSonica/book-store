/* eslint-disable react/prop-types */
import "./Button.scss";

const Button = ({text, img, className}) => {
  return (
    <button className={className}>{ img && <img src={img} alt="cart icon" /> }{ text }</button>
  );
};

export default Button;
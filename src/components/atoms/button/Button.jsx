/* eslint-disable react/prop-types */
import "./Button.scss";

const Button = ({text, img}) => {
  return (
    <button className="button"><img src={img} alt="cart icon" />{ text }</button>
  );
};

export default Button;
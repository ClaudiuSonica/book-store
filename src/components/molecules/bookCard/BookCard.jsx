/* eslint-disable react/prop-types */
import "./BookCard.scss";
import Button from "../../atoms/button/Button";
import cart from "/assets/images/icon.svg";
import cartDark from "/assets/images/cart-black.svg";
import fav from "/assets/images/favorite-fill.svg";
import favPressed from "/assets/images/favorite-pressed.svg";
import { useState } from "react";

const BookCard = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={props.className ? props.className : "bookCard"}>
      <div className="bookCard__img">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="bookCard__details">
        <h3 className="details__title">{props.title}</h3>
        <p className="details__description">{props.description}</p>
        <div className="details__prices">
          <span className="details__price">{props.price}</span>
          <span className="details__oldPrice">{props.oldPrice}</span>
        </div>
        {props.mobile ? (
          <div className="details__images">
            <div>
              <img
                onClick={() => setIsAdded((cur) => !cur)}
                src={isAdded ? cart : cartDark}
                alt="cart"
                className={isAdded ? "cart__active" : "cart__simple"}
              />
            </div>
            <div>
              <img
                onClick={() => setIsFavorite((cur) => !cur)}
                src={isFavorite ? favPressed : fav}
                alt="favorite"
              />
            </div>
          </div>
        ) : (
          <div>
            {props.button && (
              <Button text="Add to basket" img={cart} className="button" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;

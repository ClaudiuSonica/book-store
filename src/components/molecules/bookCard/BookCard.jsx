/* eslint-disable react/prop-types */
import "./BookCard.scss";
import Button from "../../atoms/button/Button";
import cart from "/assets/images/icon.svg";

const BookCard = (props) => {
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
        {props.button && <Button text="Add to basket" img={cart} className="button" />}
      </div>
    </div>
  );
};

export default BookCard;

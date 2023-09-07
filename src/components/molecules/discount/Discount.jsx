import Button from "../../atoms/button/Button";
import "./Discount.scss";

const Discount = () => {
  return (
    <section className="section__discount">
      <h3 className="discount__title">
        Create an account and get a 15% discount
      </h3>
      <p className="discount__description">
        Create an account with our online bookstore today and start enjoying
        amazing discounts on all your book purchases! By signing up, you will
        receive a 15% discount on all your payments, making it more affordable
        than ever to get your hands on your favorite books.
      </p>
      <Button className="button__simple" text="Get Now!" />
    </section>
  );
};

export default Discount;

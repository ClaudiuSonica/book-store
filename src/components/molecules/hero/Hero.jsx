/* eslint-disable react/no-unescaped-entities */
import "./Hero.scss";
import Button from "../../atoms/button/Button";
import book1 from "/assets/images/hero-books/book1.png";
import book2 from "/assets/images/hero-books/book2.png";
import book3 from "/assets/images/hero-books/book3.png";


const Hero = () => {
  return (
    <section className="section__hero">
      <article className="hero__text">
        <h1 className="hero__title">New Releases This Week</h1>
        <p className="hero__description">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </p>
        <Button text="Subscribe" className="button__simple"/>
      </article>
      <div className="hero__books">
        <img src={book1} alt="first book" />
        <img src={book2} alt="second book" />
        <img src={book3} alt="third book" />
      </div>
    </section>
  );
};

export default Hero;

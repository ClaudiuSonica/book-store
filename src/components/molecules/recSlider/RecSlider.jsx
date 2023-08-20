import "../topSlider/Slider.scss";
import data from "../../../data";
import BookCard from "../../atoms/bookCard/BookCard";
import { useState } from "react";

const RecSlider = () => {
  const { recommended } = data;
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 2; // Number of cards to show per slide

  const handlePrevClick = () => {
    setStartIndex(Math.max(startIndex - cardsPerPage, 0));
  };

  const handleNextClick = () => {
    setStartIndex(
      Math.min(startIndex + cardsPerPage, recommended.items.length - cardsPerPage)
    );
  };

  const shouldShowPrevButton = startIndex > 0;
  const shouldShowNextButton = startIndex + cardsPerPage < recommended.items.length;

  return (
    <section className="section__slider">
      <h2 className="slider__title">{recommended.title}</h2>
      <div className="slider__books">
        <div className="slider">
          <div
            className="slider-inner"
            style={{ transform: `translateX(-${startIndex * 33.33}%)` }}>
            {recommended.items.map((item) => (
              <div key={item.id} className="slider-card">
                <BookCard
                  title={item.title}
                  description={item.description}
                  img={item.img}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  button={true}
                />
              </div>
            ))}
          </div>
        </div>
        {shouldShowPrevButton && (
          <button
            className="slider-button prev-button"
            onClick={handlePrevClick}>
            &lt;
          </button>
        )}
        {shouldShowNextButton && (
          <button
            className="slider-button next-button"
            onClick={handleNextClick}>
            &gt;
          </button>
        )}
      </div>
    </section>
  );
};

export default RecSlider;

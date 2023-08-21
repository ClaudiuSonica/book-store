import "./NewsSlider.scss";
import data from "../../../data";
import BookCard from "../../molecules/bookCard/BookCard";
import { useState } from "react";

const NewsSlider = () => {
  const { news } = data;
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 1; // Number of cards to show per slide

  const handlePrevClick = () => {
    setStartIndex(Math.max(startIndex - cardsPerPage, 0));
  };

  const handleNextClick = () => {
    setStartIndex(
      Math.min(startIndex + cardsPerPage, news.items.length - cardsPerPage)
    );
  };

  const shouldShowPrevButton = startIndex > 0;
  const shouldShowNextButton = startIndex + cardsPerPage < news.items.length;

  return (
    <section className="section__slider">
      <h2 className="slider__title">{news.title}</h2>
      <div className="slider__books">
        <div className="slider">
          <div
            className="slider-inner"
            style={{ transform: `translateX(-${startIndex * 33.33}%)` }}>
            {news.items.map((item) => (
              <div key={item.id} className="slider-card slider__card__news">
                <BookCard
                  className="news__card"
                  title={item.title}
                  description={item.description}
                  img={item.img}
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

export default NewsSlider;

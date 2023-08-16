import "./NewsSlider.scss";
import data from "../../../data";
import BookCard from "../../atoms/bookCard/BookCard";

const NewsSlider = () => {

    const { news } = data;
  return (
    <section className="section__slider">
      <h2 className="slider__title">
        {news.title}
      </h2>
      <div className="slider__books">
        {news.items.map(item => {
          return (
            <BookCard
              className="news__card"
              key={item.id}
              title={item.title}
              description={item.description}
              img={item.img}
            />
          )
        })}
      </div>
    </section>
  )
}

export default NewsSlider;
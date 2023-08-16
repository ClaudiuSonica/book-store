import "../topSlider/Slider.scss";
import data from "../../../data";
import BookCard from "../../atoms/bookCard/BookCard";


const RecSlider = () => {

  const { recommended } = data;
  return (
    <section className="section__slider">
      <h2 className="slider__title">
        {recommended.title}
      </h2>
      <div className="slider__books">
        {recommended.items.map(item => {
          return (
            <BookCard
              key={item.id}
              title={item.title}
              description={item.description}
              img={item.img}
              price={item.price}
              oldPrice={item.oldPrice}
            />
          )
        })}
      </div>
    </section>
  )
}

export default RecSlider;
import "./TopSlider.scss";
import data from "../../../data";
import GenreList from "../../atoms/genreList/GenreList";
import BookCard from "../../atoms/bookCard/BookCard";

const TopSlider = () => {

  const { top } = data;
  return (
    <section className="section__topSlider">
      <h2 className="topSlider__title">
        {top.title}
      </h2>
      <GenreList />
      <div className="topSlider__books">
        {top.items.map(item => {
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

export default TopSlider;
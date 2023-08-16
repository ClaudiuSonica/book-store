import "./GenreList.scss";
import { useState } from "react";

const GenreList = () => {
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const genres = [
    { value: "fiction", label: "Fiction" },
    { value: "romance", label: "Romance" },
    { value: "mystery", label: "Mystery" },
    { value: "horror", label: "Horror" },
  ];
  return (
    <div>
      <select
        name="genre"
        id="genre"
        value={selectedGenre}
        onChange={handleChange}>
        <option value="">Choose a genre</option>
        {genres.map((genre) => (
          <option key={genre.value} value={genre.value}>
            {genre.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreList;

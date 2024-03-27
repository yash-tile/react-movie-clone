import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Requests";
import HeaderMovieText from "./HeaderMovieText";

function HeaderMovie() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  // by default it will run only once, component will re-render due to setState function inside it
  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(movies);

  return (
    <div className="w-full h-[550px]">
      {/* below div is used to add black gradient overlay over the image */}
      <div className="w-full h-[550px] bg-gradient-to-r from-black absolute"></div>
      <img
        src={requests.imageBaseUrl + movie?.backdrop_path}
        alt={movie?.title}
        className="w-full h-full object-cover"
      />

      <HeaderMovieText
        movieId={movie?.id}
        movieTitle={movie?.title}
        movieReleaseDate={movie?.release_date}
        movieOverview={movie?.overview}
      />
    </div>
  );
}

export default HeaderMovie;

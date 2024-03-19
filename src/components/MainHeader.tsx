import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Requests";

function truncateString(inputString: string, charNumber: number) {
  if (inputString) {
    if (inputString.length <= charNumber) {
      return inputString;
    }
    return inputString.slice(0, charNumber) + "...";
  }
  return;
}

function MainHeader() {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  // by default it will run only once, component will re-render due to setState function inside it
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
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

      {/* movie details and button options over header movie image */}
      <div className="absolute top-[20%] p-4 md:p-8">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          {movie?.title}
        </h1>
        <div className="my-4">
          <button className="border border-gray-300 bg-gray-300 text-black py-2 px-4">
            Play
          </button>
          <button className="border border-gray-300 text-white py-2 px-4 ml-4">
            Watch Later
          </button>
        </div>
        <p className="text-sm text-gray-500">Release: {movie?.release_date}</p>
        <p className="text-gray-300 w-full md:w-[50%] sm:w-[75%] xs:w-[100%]">
          {truncateString(movie?.overview, 150)}
        </p>
      </div>
    </div>
  );
}

export default MainHeader;

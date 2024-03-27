import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import requests from "../Requests";
import { FaLanguage } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import HeaderMovieOverview from "./HeaderMovieOverview";
import MovieBtnGroup from "./MovieBtnGroup";
import MovieDetailsInterface from "../interfaces/MovieDetailsInterface";

// to convert runtime from minutes to hours and minutes
function formatRuntime(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}min`;
}

// to format avg rating value to upto one decimal places only
function formatAverageRating(rating: number) {
  return rating.toFixed(1);
}

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetailsInterface>();

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=00762c6d47184b36b8d9db145f608e27&language=en-US`
      );
      setMovieDetails(response.data);
    } catch (error) {
      console.log("Error while fetching movie details:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="w-screen h-screen">
      {/* for the background overlay image */}
      <div className="w-full h-full bg-gradient-to-t from-black absolute"></div>
      <img
        className="w-full h-full object-cover"
        src={requests.imageBaseUrl + movieDetails?.backdrop_path}
        alt={movieDetails?.title}
      />
      <div className="bg-black/30 fixed top-0 left-0 w-full h-screen"></div>

      {/* Movie details container */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 flex justify-center px-40 py-8 gap-4 text-white">
        {/* movie poster */}
        <div className="w-1/4">
          <img
            className="w-full max-h-full overflow-hidden rounded-lg"
            src={requests.imageBaseUrl + movieDetails?.poster_path}
            alt={movieDetails?.title}
          />
        </div>

        {/* textual movie details */}
        <div className="w-3/4 ml-4 text-white">
          <h2 className="text-3xl font-bold my-4">{movieDetails?.title}</h2>
          <p className="text-sm text-gray-300">
            Release: {movieDetails?.release_date}
          </p>
          <HeaderMovieOverview movieOverview={movieDetails?.overview} />

          {/* for genres of movie */}
          <div className="flex flex-wrap gap-2 my-2">
            {movieDetails?.genres.map((genre) => (
              <span
                key={genre.id}
                className="inline-block px-2 py-1 text-sm text-white bg-gray-800 rounded-md"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Additional movie details */}
          <div className="border border-gray-500 rounded-md py-2 px-4 my-4 w-2/3">
            <div className="flex flex-wrap gap-4 my-2">
              <div className="flex-1">
                <p className="text-sm flex items-center mb-1">
                  <FaLanguage size={20} className="mr-1" />
                  Original Language
                </p>
                <p className="text-lg">{movieDetails?.original_language}</p>
              </div>
              <div className="flex-1">
                <p className="text-sm flex items-center mb-1">
                  <FaStar size={20} className="mr-1" />
                  Average Rating
                </p>
                <p className="text-lg">
                  {formatAverageRating(movieDetails?.vote_average)}
                </p>
              </div>
              <div className="flex-1">
                <p className="text-sm flex items-center mb-1">
                  <IoMdTime size={20} className="mr-1" />
                  Runtime
                </p>
                <p className="text-lg">
                  {formatRuntime(movieDetails?.runtime)}
                </p>
              </div>
            </div>
          </div>

          {/* play and watch later buttons */}
          <MovieBtnGroup movieId={movieDetails?.id} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

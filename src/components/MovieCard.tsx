import { useState } from "react";
import MovieInterface from "../interfaces/MovieInterface";
import requests from "../Requests";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";

interface MovieCardProps {
  key: number;
  movie: MovieInterface;
}

function MovieCard({ key, movie }: MovieCardProps) {
  const [isWatchLater, setWatchLater] = useState(false);

  return (
    <div
      key={key}
      className="w-[150px] sm:w-[200px] md:w-[220px] lg:w-[250px] inline-block cursor-pointer p-2 relative"
    >
      <img
        src={requests.imageBaseUrl + movie.poster_path}
        alt={movie.title}
        className="w-full h-auto block rounded-md"
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-50 hover:rounded-md text-white">
        {isWatchLater ? (
          <MdWatchLater className="absolute top-4 left-4 text-3xl md:text-5xl hover:text-gray-400" />
        ) : (
          <MdOutlineWatchLater className="absolute top-4 left-4 text-3xl md:text-5xl hover:text-gray-400" />
        )}
      </div>
    </div>
  );
}

export default MovieCard;
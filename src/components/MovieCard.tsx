import MovieInterface from "../interfaces/MovieInterface";
import requests from "../Requests";

interface MovieCardProps {
  key: number;
  movie: MovieInterface;
}

function MovieCard({ key, movie }: MovieCardProps) {
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
      <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-50 hover:rounded-md text-white"></div>
    </div>
  );
}

export default MovieCard;

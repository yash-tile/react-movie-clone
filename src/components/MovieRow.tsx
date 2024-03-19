import axios from "axios";
import { useEffect, useState } from "react";
import MovieInterface from "../interfaces/MovieInterface";
import MovieCard from "./MovieCard";

interface MovieRowProps {
  rowTitle: string;
  fetchUrl: string;
}

function MovieRow({ rowTitle, fetchUrl }: MovieRowProps) {
  const [rowMovies, setRowMovies] = useState<MovieInterface[]>([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setRowMovies(response.data.results);
    });
  }, [fetchUrl]);

  console.log(rowMovies);

  return (
    <>
      <h1 className="text-white p-4 font-bold">{rowTitle}</h1>
      <div>
        {rowMovies?.map((movie: MovieInterface) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default MovieRow;

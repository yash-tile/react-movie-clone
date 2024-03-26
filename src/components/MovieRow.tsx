import axios from "axios";
import { useEffect, useState } from "react";
import MovieInterface from "../interfaces/MovieInterface";
import MovieCard from "./MovieCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface MovieRowProps {
  rowId: string;
  rowTitle: string;
  fetchUrl: string;
}

function MovieRow({ rowId, rowTitle, fetchUrl }: MovieRowProps) {
  const [rowMovies, setRowMovies] = useState<MovieInterface[]>([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setRowMovies(response.data.results);
    });
  }, [fetchUrl]);

  const slideLeft = () => {
    const slider: HTMLElement | null = document.getElementById(
      "slider" + rowId
    );
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    const slider: HTMLElement | null = document.getElementById(
      "slider" + rowId
    );
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  return (
    <>
      <h1 className="text-white p-4 font-bold">{rowTitle}</h1>
      <div className="flex items-center relative group">
        <MdKeyboardArrowLeft
          onClick={slideLeft}
          size={50}
          className="bg-white opacity-60 rounded-full hover:opacity-80 cursor-pointer absolute left-0 z-50 hidden group-hover:block"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide snap-x"
        >
          {rowMovies?.map((movie: MovieInterface) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <MdKeyboardArrowRight
          onClick={slideRight}
          size={50}
          className="bg-white opacity-60 rounded-full hover:opacity-80 cursor-pointer absolute right-0 z-50 hidden group-hover:block"
        />
      </div>
    </>
  );
}

export default MovieRow;

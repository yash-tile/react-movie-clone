import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieInterface from "../interfaces/MovieInterface";
import requests from "../Requests";
import MovieCard from "./MovieCard";

function SearchResults() {
  const { searchQuery } = useParams();
  const [movies, setMovies] = useState<MovieInterface[]>([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(requests.searchBaseUrl + searchQuery);
      setMovies(response.data.results);
    } catch (error) {
      console.log("Error while fetching movies on search:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchQuery]);

  return (
    <div className="p-16 text-white">
      <h2 className="text-2xl font-bold mb-4">
        Search Results for: {searchQuery}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;

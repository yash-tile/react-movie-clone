import { useState } from "react";
import axios from "axios";
import requests from "../Requests";
import MovieVideosInterface from "../interfaces/MovieVideosInterface";

// to get key of offical trailer from results of videos api
function getTrailerKey(videosData: MovieVideosInterface) {
  for (const result of videosData.results) {
    if (result.type === "Trailer" && result.official === true) {
      return result.key;
    }
  }
  return null;
}

function MovieBtnGroup({ movieId }: { movieId: number }) {
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const toggleTrailer = () => {
    setTrailerOpen(!trailerOpen);
  };

  const fetchTrailerUrl = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=00762c6d47184b36b8d9db145f608e27`
      );
      const trailerKey = getTrailerKey(response.data);
      if (trailerKey) {
        setTrailerUrl(requests.youtubeBaseUrl + trailerKey);
        toggleTrailer();
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  return (
    <>
      <div className="my-4">
        <button
          className="border border-gray-300 bg-gray-300 text-black py-2 px-4"
          onClick={fetchTrailerUrl}
        >
          Play
        </button>
        <button className="border border-gray-300 text-white py-2 px-4 ml-4">
          Watch Later
        </button>
      </div>

      {/* display trailer if trailerUrl */}
      {trailerUrl && trailerOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex text-center items-center justify-center bg-black/80 z-50"
          onClick={toggleTrailer}
        >
          <div className="relative">
            <iframe
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg"
              title="trailer"
              width="650"
              height="400"
              src={trailerUrl}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieBtnGroup;

import HeaderMovieOverview from "./HeaderMovieOverview";

interface HeaderMovieTextProps {
  movieTitle: string;
  movieReleaseDate: string;
  movieOverview: string;
}

function HeaderMovieText({
  movieTitle,
  movieReleaseDate,
  movieOverview,
}: HeaderMovieTextProps) {
  return (
    // movie details and button options over header movie image
    <div className="absolute top-[20%] p-4 md:p-8">
      <h1 className="text-white text-3xl md:text-5xl font-bold">
        {movieTitle}
      </h1>

      <div className="my-4">
        <button className="border border-gray-300 bg-gray-300 text-black py-2 px-4">
          Play
        </button>
        <button className="border border-gray-300 text-white py-2 px-4 ml-4">
          Watch Later
        </button>
      </div>

      <p className="text-sm text-gray-500">Release: {movieReleaseDate}</p>

      <HeaderMovieOverview movieOverview={movieOverview} />
    </div>
  );
}

export default HeaderMovieText;

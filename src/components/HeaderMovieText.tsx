import HeaderMovieOverview from "./HeaderMovieOverview";
import MovieBtnGroup from "./MovieBtnGroup";

interface HeaderMovieTextProps {
  movieId: number;
  movieTitle: string;
  movieReleaseDate: string;
  movieOverview: string;
}

function HeaderMovieText({
  movieId,
  movieTitle,
  movieReleaseDate,
  movieOverview,
}: HeaderMovieTextProps) {
  return (
    <div className="absolute top-[20%] p-4 md:p-8">
      <h1 className="text-white text-3xl md:text-5xl font-bold">
        {movieTitle}
      </h1>

      <MovieBtnGroup movieId={movieId} />

      <p className="text-sm text-gray-500">Release: {movieReleaseDate}</p>

      <HeaderMovieOverview movieOverview={movieOverview} />
    </div>
  );
}

export default HeaderMovieText;

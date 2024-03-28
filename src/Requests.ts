export const apiKey = import.meta.env.VITE_IMDB_API_KEY;

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
	  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`,
    requestGenreList: `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US&page=1`,
    searchBaseUrl: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=1&include_adult=false&query=`,
    imageBaseUrl: "https://image.tmdb.org/t/p/original/",
    youtubeBaseUrl: "https://www.youtube.com/embed/"
};

export default requests;
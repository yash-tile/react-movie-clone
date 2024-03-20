import HeaderMovie from "../components/HeaderMovie";
import MovieRow from "../components/MovieRow";
import requests from "../Requests";

function Home() {
  return (
    <div>
      <HeaderMovie />
      <MovieRow rowTitle="Upcoming" fetchUrl={requests.requestUpcoming} />
      <MovieRow rowTitle="Trending" fetchUrl={requests.requestTrending} />
      <MovieRow rowTitle="Popular" fetchUrl={requests.requestPopular} />
      <MovieRow rowTitle="Trending" fetchUrl={requests.requestTopRated} />
      <MovieRow rowTitle="Horror" fetchUrl={requests.requestHorror} />
    </div>
  );
}

export default Home;

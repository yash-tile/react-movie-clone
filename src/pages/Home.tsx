import HeaderMovie from "../components/HeaderMovie";
import MovieRow from "../components/MovieRow";
import requests from "../Requests";

function Home() {
  return (
    <div>
      <HeaderMovie />
      <MovieRow
        rowId="1"
        rowTitle="Upcoming"
        fetchUrl={requests.requestUpcoming}
      />
      <MovieRow
        rowId="2"
        rowTitle="Trending"
        fetchUrl={requests.requestTrending}
      />
      <MovieRow
        rowId="3"
        rowTitle="Popular"
        fetchUrl={requests.requestPopular}
      />
      <MovieRow
        rowId="4"
        rowTitle="Top Rated"
        fetchUrl={requests.requestTopRated}
      />
      <MovieRow rowId="5" rowTitle="Horror" fetchUrl={requests.requestHorror} />
    </div>
  );
}

export default Home;

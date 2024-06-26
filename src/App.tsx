import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import MovieDetails from "./components/MovieDetails";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search/:searchQuery" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;

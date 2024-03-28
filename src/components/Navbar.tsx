import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { ChangeEvent } from "react";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Search query:", searchQuery);
    navigate(`/search/${searchQuery}`);
    setSearchQuery(""); // clear input field after submitting search
  };

  return (
    <div className="navbar flex justify-between items-center p-4 z-50 w-full absolute">
      <Link to="/">
        <h1 className="font-bold text-red-800 text-3xl cursor-pointer">
          MovieFlix
        </h1>
      </Link>
      <div className="navbarOptions flex items-center">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="rounded-l py-2 px-4 outline-none"
          style={{ lineHeight: "normal", height: "calc(2.25rem + 2px)" }}
        />
        <button
          onClick={handleSearchSubmit}
          className="bg-red-800 text-white py-2 px-4 rounded-r"
          style={{ lineHeight: "normal", height: "calc(2.25rem + 2px)" }}
        >
          <FaSearch />
        </button>

        <Link to="/login">
          <button className="text-white py-2 px-4 ml-4">Login</button>
        </Link>
        <Link to="/signup">
          <button className="rounded bg-red-800 text-white py-2 px-4">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

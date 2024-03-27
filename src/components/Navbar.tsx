import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar flex justify-between items-center p-4 z-50 w-full absolute">
      <Link to="/">
        <h1 className="font-bold text-red-800 text-3xl cursor-pointer">
          MovieFlix
        </h1>
      </Link>
      <div className="navbarOptions">
        <Link to="/login">
          <button className=" text-white pr-4">Login</button>
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

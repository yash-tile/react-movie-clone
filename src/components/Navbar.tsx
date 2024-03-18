function Navbar() {
  return (
    <div className="navbar flex justify-between items-center p-4 z-50 w-full absolute">
      <h1 className="font-bold text-red-800 text-3xl cursor-pointer">
        MovieFlix
      </h1>
      <div className="navbarOptions">
        <button className=" text-white pr-4">Sign In</button>
        <button className="rounded bg-red-800 text-white py-2 px-4">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;

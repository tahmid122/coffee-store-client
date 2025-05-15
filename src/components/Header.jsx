import React, { use } from "react";
import logo from "../assets/images/more/logo1.png";
import { AuthContext } from "../contexts/AuthContext";
import { Link, NavLink } from "react-router";
const Header = () => {
  const { user, logOut } = use(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => alert("Sign out successful"))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="flex items-center justify-between gap-4 bg-black p-2">
      <div className="flex items-center gap-3">
        <img className="h-20 w-20 object-cover" src={logo} alt="" />
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Espresso Emporium
        </h1>
      </div>
      <ul className="text-white flex items-center gap-3 text-xl">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/signin"}>Sign In</NavLink>
        </li>
        <li>
          <NavLink to={"/signup"}>Sign Up</NavLink>
        </li>
        <li>
          <NavLink to={"/users"}>Users</NavLink>
        </li>
      </ul>
      <img src={user?.photoURL} alt="" />
      {user ? (
        <div>
          <button onClick={handleSignOut} className="text-xl btn btn-primary">
            Sign Out
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;

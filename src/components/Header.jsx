import React, { use } from "react";
import logo from "../assets/images/more/logo1.png";
import { AuthContext } from "../contexts/AuthContext";
const Header = () => {
  const { user, logOut } = use(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => alert("Sign out successful"))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="flex items-center justify-center gap-4 bg-black p-2">
      <img className="h-20 w-20 object-cover" src={logo} alt="" />
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Espresso Emporium
      </h1>
      <img src={user?.photoURL} alt="" />
      {user ? (
        <button onClick={handleSignOut} className="text-xl btn btn-primary">
          Sign Out
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;

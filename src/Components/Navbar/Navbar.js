import React from "react";
import Logo from "./Logo";
const Navbar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
      {/* <Search /> */}
      {/* <NumResult /> */}
    </nav>
  );
};

export default Navbar;

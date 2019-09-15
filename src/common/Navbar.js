import React from "react";
import { NavLink } from "react-router-dom";

const leftLink = [
  {
    name: "Home",
    to: "/"
  }
  // {
  //   name: "About",
  //   to: "/about"
  // },
  // {
  //   name: "Contact",
  //   to: "/contact"
  // }
];
const rightLink = [
  // {
  //   name: "Sign Up",
  //   to: "/signup"
  // },
  // {
  //   name: "Log In",
  //   to: "/login"
  // }
];

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="left-nav">
        {leftLink &&
          leftLink.map((obj, i) => (
            <div key={`_${i}`} className="nav-link">
              <NavLink
                exact
                className="link"
                activeClassName="nav-active"
                activeStyle={{ color: "dodgerblue" }}
                to={obj.to}
              >
                {obj.name}
              </NavLink>
            </div>
          ))}
      </div>
      <div className="right-nav">
        {rightLink &&
          rightLink.map((obj, i) => (
            <div key={`_${i}`} className="nav-link">
              <NavLink
                exact
                className="link"
                activeClassName="nav-active"
                activeStyle={{ color: "dodgerblue" }}
                to={obj.to}
              >
                {obj.name}
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Navbar;

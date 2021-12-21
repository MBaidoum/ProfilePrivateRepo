import React from "react";
import UserLink from "./Navlinks/UserLink";
import UpdateLink from "./Navlinks/UpdateLink";
import GuestLink from "./Navlinks/GuestLink";

const Navbar = () => {
  return (
    <ul className="nav nav-pills nav-fill bg-dark">
      <li className="nav-item">
        <UserLink />
      </li>
      <li className="nav-item">
        <UpdateLink />
      </li>
      <li className="nav-item">
        <GuestLink />
      </li>
    </ul>
  );
};
export default Navbar;

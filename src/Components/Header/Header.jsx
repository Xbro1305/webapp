import React from "react";
import { NavLink, Link } from "react-router-dom";
import ava from "../../images/Profile Avatar.svg";
import "./Header.css";

export const Header = () => {
  return (
    <nav>
      <section>
        <NavLink to={"/guild"}>Guild</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to={"/frens"}>Frens</NavLink>
        <NavLink to={"/contest"}>Contest</NavLink>
        <NavLink to={"/guilds"}>Guilds</NavLink>
      </section>
      <Link className="toProfile" to={"/profile"}>
        <img src={ava} alt="" />
      </Link>
    </nav>
  );
};

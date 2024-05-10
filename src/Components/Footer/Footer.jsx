import React from "react";
import frens from "../../images/frens.svg";
import contest from "../../images/contest.svg";
import guild from "../../images/down.svg";
import profile from "../../images/Profile Avatar.svg";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <NavLink onClick={() => window.scrollTo(0, 0)} to={"/frens#nav"}>
          <img src={frens} alt="" />
          <p>Frens</p>
          <span></span>
        </NavLink>
        <NavLink onClick={() => window.scrollTo(0, 0)} to={"/contest#contest"}>
          <img src={contest} alt="" />
          <p>Contest</p>
          <span></span>
        </NavLink>
        <NavLink onClick={() => window.scrollTo(0, 0)} to={"/guild#nav"}>
          <img src={guild} alt="" />
          <p>Guild</p>
          <span></span>
        </NavLink>
        <NavLink onClick={() => window.scrollTo(0, 0)} to={"/profile#profile"}>
          <img src={profile} alt="" />
          <p>Profile</p>
          <span></span>
        </NavLink>
      </div>
    </footer>
  );
};

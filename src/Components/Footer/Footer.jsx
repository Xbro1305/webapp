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
        <NavLink to={"/frens"}>
          <img src={frens} alt="" />
          <p>Frens</p>
          <span></span>
        </NavLink>
        <NavLink to={"/contest"}>
          <img src={contest} alt="" />
          <p>Contest</p>
          <span></span>
        </NavLink>
        <NavLink to={"/guild"}>
          <img src={guild} alt="" />
          <p>Guild</p>
          <span></span>
        </NavLink>
        <NavLink to={"/profile"}>
          <img src={profile} alt="" />
          <p>Profile</p>
          <span></span>
        </NavLink>
      </div>
    </footer>
  );
};

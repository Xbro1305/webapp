import React from "react";
import { Header } from "../../Components/Header/Header";
import params from "../../images/param.svg";
import star from "../../images/star.svg";
import ava from "../../images/frenavatar.svg";
import tokens from "../../images/tokens.svg";
import "./Guilds.css";

export const Guilds = () => {
  const guilds = [
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", members: "46" },
  ];

  return (
    <>
      <Header />
      <div className="guilds">
        <h1>
          46 Guilds
          <span>
            <img src={params} alt="" />
            Highest to lowest
          </span>
        </h1>
        <div className="guildList">
          {guilds.map((guild) => (
            <div className="Guild pariticipants">
              <section>
                <img src={guild.img} alt="" />
                <h2>
                  <p>{guild.name}</p>
                  <span>
                    <img src={tokens} alt="" />
                    {guild.token}
                  </span>
                </h2>
              </section>
              <section>
                <h1>
                  <p>
                    <img src={star} alt="" />
                    Top 10
                  </p>
                  <span>{guild.members} members</span>
                </h1>
              </section>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

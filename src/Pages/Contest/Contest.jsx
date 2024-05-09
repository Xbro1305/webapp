import React from "react";
import { Header } from "../../Components/Header/Header";
import calendar from "../../images/calendar.svg";
import contest from "../../images/contest.svg";
import ava from "../../images/frenavatar.svg";
import tokens from "../../images/tokens.svg";
import clock from "../../images/clock.svg";
import "./Contest.css";

export const Contest = () => {
  const participants = [
    { img: ava, name: "Bigbullz", token: "7,500,000,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000" },
  ];

  return (
    <div className="contests">
      <Header />
      <div className="list">
        <section className="contest">
          <h1>
            Contest name
            <section>
              <img src={contest} alt="" />
            </section>
          </h1>
          <div className="info">
            <div>
              <p>64</p>
              <span>Players</span>
            </div>
            <div>
              <p>10</p>
              <span>days left</span>
            </div>
          </div>
        </section>
        <section className="contest">
          <h1>
            Contest name
            <section>
              <img src={contest} alt="" />
            </section>
          </h1>
          <div className="info">
            <div>
              <p>64</p>
              <span>Players</span>
            </div>
            <div>
              <p>10</p>
              <span>days left</span>
            </div>
          </div>
        </section>
      </div>
      <h1>
        64 Participants
        <span>
          <img src={calendar} alt="" />
          All time
        </span>
      </h1>
      <div className="pariticipants">
        {participants.map((participant, index) => (
          <div className="participant">
            <h1>{index + 1}</h1>
            <img src={participant.img} alt="" />
            <section>
              <p>{participant.name}</p>
              <span>
                <img src={tokens} alt="" />
                {participant.token}
              </span>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

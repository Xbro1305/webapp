import React, { useState } from "react";
import "./Profile.css";
import { Header } from "../../Components/Header/Header";
import profile from "../../images/avaplus.svg";
import arrow from "../../images/arrowUp.svg";
import frens from "../../images/members.svg";
import boost from "../../images/boost.svg";
import first from "../../images/Frame1.svg";
import third from "../../images/Frame2.svg";
import second from "../../images/Vector2.svg";
import fourth from "../../images/Frame4.svg";
import fifth from "../../images/Frame5.svg";

export const Profile = () => {
  const [cls, setCls] = useState("modal");
  const open = () => {
    setCls("modal active");
    setTimeout(() => {
      setCls("modal");
    }, 3000);
  };

  return (
    <div className="profile main">
      <Header />

      <section className="img">
        <img src={profile} alt="" />
        <h2>Username123</h2>
        <p>Bigbullz • Level 232</p>
      </section>

      <div>
        <h1>
          <p>Gold dust</p>
          <span>
            <img src={first} alt="" />
            252,010,593
          </span>
        </h1>
        <h1>
          <p>Gold gram</p>
          <span>
            <img src={second} alt="" />
            252,010,593
          </span>
        </h1>

        <h1>
          <p>USDT</p>
          <span>
            <img src={third} alt="" />
            252,010,593
          </span>
        </h1>

        <h1>
          <p>USDT frozen </p>
          <span>
            <img src={fourth} alt="" />
            252,010,593
          </span>
        </h1>

        <h1>
          <p>Diamonds</p>
          <span>
            <img src={fifth} alt="" />
            252,010,593
          </span>
        </h1>
        <h1>
          <button>
            <img src={arrow} alt="" />
            Add funds
          </button>
          <button onClick={open}>
            <img src={arrow} alt="" />
            Withdraw
          </button>
        </h1>
      </div>
      <div className={cls}>
        <div className="modalContent" style={{ paddingBottom: "0" }}>
          <span className="line"></span>
          <section>
            <img src={frens} alt="" />
            +12
          </section>
          <p>AVAcoin miners</p>
          <span>Starts in 2:03</span>
          <button>
            <img src={boost} alt="" />
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

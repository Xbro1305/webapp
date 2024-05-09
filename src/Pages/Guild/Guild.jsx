import React from "react";
import frens from "../../images/frenavatar.svg";
import energy from "../../images/energy.svg";
import info from "../../images/info.svg";
import coin from "../../images/coinMain.svg";
import members from "../../images/members.svg";
import tokens from "../../images/tokens.svg";
import balance from "../../images/balance.svg";
import boost from "../../images/boost.svg";
import guild from "../../images/down.svg";
import star from "../../images/Vectorstar.svg";
import "./Guild.css";
import { Header } from "../../Components/Header/Header";

export const Guild = () => {
  const click = () => {
    document.querySelector(".balance").innerHTML =
      Number(document.querySelector(".balance").innerHTML) + 1;
  };
  return (
    <>
      <Header />
      <div className="guild">
        <section>
          <h2>
            <img src={info} alt="" />
            You’re not part of a Guild yet.
          </h2>
          <h3>
            <img src={members} alt="" />
            <button> Join a Guild</button>
          </h3>
        </section>
        <section>
          <img src={frens} alt="" />
          <h3>
            <p>Bigbullz</p>
            <span>
              <img src={tokens} alt="" />
              7500000000
            </span>
          </h3>
          <section>
            <span>
              <img src={star} alt=" " />
              Top 10
            </span>
            <p>46 members</p>
          </section>
        </section>
        <section>
          <h2>
            <img src={tokens} alt="" />
            TOTAL TOKENS
          </h2>
          <h3 className="balance">870000000</h3>
          <div>
            <p className="from">3041550107</p>
            <p className="to">7500000000</p>
            <img src={balance} alt="" />
          </div>
          <div className="buttons">
            <button>
              <img src={boost} alt="" />
              Get a boost
            </button>
            <button>
              <img src={guild} alt="" />
              138
            </button>
          </div>
        </section>
        <img src={coin} alt="" onClick={click} />
      </div>
    </>
  );
};

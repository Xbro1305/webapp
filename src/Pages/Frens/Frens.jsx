import React from "react";
import ava from "../../images/Group 4.svg";
import tokens from "../../images/tokens.svg";
import avaplus from "../../images/Frame.svg";
import copy from "../../images/copy.svg";
import { Header } from "../../Components/Header/Header";
import info from "../../images/info.svg";
import "./Frens.css";

export const Frens = () => {
  const frens = [
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
    { img: ava, name: "Bigbullz", token: "7,500,000,000", got: "+3,000" },
  ];

  return (
    <>
      <Header />
      <div className="frens main">
        <section>
          <section>
            <div>
              <img src={avaplus} alt="" />
            </div>
            <span>Refer a fren and earn up to 25,000 Gold dust.</span>
          </section>
          <button>
            <img src={copy} alt="" /> Copy referral link
          </button>
        </section>
        <div className="select">
          <h1 className="active">Ordinary</h1>
          <h1>Special</h1>
        </div>
        {frens.length ? (
          frens.map((fren) => (
            <div className="fren">
              <section>
                <img src={fren.img} alt="" />
                <h2>
                  <p>{fren.name}</p>
                  <span>{fren.token}</span>
                </h2>
              </section>
              <span>{fren.got}</span>
            </div>
          ))
        ) : (
          <div className="nothing">
            No Frens Yet <img src={info} alt="" />
          </div>
        )}

        <div className="modal ">
          <div className="modalContent">
            <span className="line"></span>
            <section>
              <img src={copy} alt="" />
            </section>
            <p>Link Copied</p>
            <span>Please share it with your fren.</span>
          </div>
        </div>
      </div>
    </>
  );
};

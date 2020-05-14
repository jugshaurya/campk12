import React from "react";
import ShowCardsSection from "./ShowCardsSection";
import ShowSliderSection from "./ShowSliderSection";
import { ReactComponent as Coin } from "./assets/camp-k-12-coins-copy-2.svg";
import "./Page2.scss";
const Page2 = () => {
  return (
    <div className="Page2 BG_Header">
      <div className="wrapper">
        <nav>
          <div className="CampK12-Logo"></div>
          <div className="Leaderboard"></div>
          <div className="Group-36">
            <div className="Oval">2</div>
          </div>
          <div className="Rectangle-17">
            <span className="Skill-Icon"></span>
            <span className="class-100">100</span>
            <span className="Bitmap"></span>
          </div>
          <div className="Shape"></div>
        </nav>

        <header>
          <div className="left">
            <div className="Welcome-to-the-school">
              Welcome to the school of the future.
            </div>
            <div className="Cutting-edge-technol">
              Cutting-edge technology courses for Ages 8 - 18. Unlock{" "}
              <span className="text-style-1">21st Century skills</span>, earn
              <span className="CampK12Coins-Copy-2">
                <Coin className="CampK12Coins-Copy-2" />
              </span>
              , and build a college-ready portfolio as you learn.
            </div>
          </div>
          <div className="right">
            <div className="Header-Photo"></div>
          </div>
        </header>
        <main>
          <section className="one">
            <ShowSliderSection />
          </section>
          <section className="two">
            <ShowCardsSection />
          </section>
        </main>
      </div>
      <footer className="Rectangle">
        <span className="Questions-Contact-u">
          Questions? Contact us at{" "}
          <span className="text-style-1">info@campk12.com</span>
        </span>
      </footer>
    </div>
  );
};

export default Page2;

import React from "react";

import { ReactComponent as SkillIcon } from "./assets/skill-icon.svg";
import { ReactComponent as Coin } from "./assets/camp-k-12-coins-copy-2.svg";

const ShowCardsSection = () => {
  const renderCards = () => {
    // const data = [
    //   {
    //     id: 1,
    //   },
    // ];
    return null;
  };
  return (
    <div className="ShowCardsSection">
      <div className="one">
        <span className="Upcoming-online-cour">Upcoming online courses</span>
        <span className="Rectangle">
          <span className="Oval"></span>
          <span className="LIVE">LIVE</span>
        </span>
      </div>
      <div className="two">
        <div className="Learn-from-live-teac">
          Learn from live teachers, not pre-recorded videos, in our intelligent
          virtual classrooms.
        </div>
      </div>
      <div className="three">
        <div className="threea">
          <span className="shield-3">
            <SkillIcon />
          </span>
          <span className="a1st-century-skill">
            {" "}
            = 21st century skills you’ll unlock
          </span>
        </div>
        <div className="threeb">
          <Coin className="CampK12Coins-Copy-2" />
          <span className="coins-youll-earn">
            {" "}
            = coins you’ll earn for completion
          </span>
        </div>
      </div>
      <div className="cards">{renderCards()}</div>
    </div>
  );
};

export default ShowCardsSection;

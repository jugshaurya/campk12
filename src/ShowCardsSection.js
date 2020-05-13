import React from "react";
import Card from "./Card";

import { ReactComponent as SkillIcon } from "./assets/skill-icon.svg";
import { ReactComponent as Coin } from "./assets/camp-k-12-coins-copy-2.svg";
import AndroidBackground from "./assets/android.jpeg";
import VirtualBackground from "./assets/virtual.jpg";
import WebBackground from "./assets/web.jpg";

const ShowCardsSection = () => {
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
      <div className="cards">
        <Card
          background={AndroidBackground}
          main_title="MOBILE APPS"
          title="Android App Development Level 1"
          classA="4"
          classB="8"
          preq="YES"
          skilla="ANDROID"
          skillb="UI/UX"
          skillc="+4"
          rs="6,000"
        />
        <Card
          background={WebBackground}
          main_title="WEB DEVELOPMENT"
          title="Web Development Level 1"
          classA="4"
          classB="12"
          preq="NO"
          skilla="HTML"
          skillb="CSS"
          skillc="+1"
          rs="6,000"
        />
        <Card
          background={VirtualBackground}
          main_title="MIXED REALITY"
          title="Virtual Reality Level 1"
          classA="5"
          classB="12"
          preq="YES"
          skilla="VR"
          skillb="JAVASCRIPT"
          skillc="+4"
          rs="8,000"
        />
      </div>
    </div>
  );
};

export default ShowCardsSection;

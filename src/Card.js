import React from 'react';
import { ReactComponent as Coin } from "./assets/camp-k-12-coins-copy-2.svg";
import { ReactComponent as Fill } from "./assets/fill-1.svg";
import { ReactComponent as Icon } from "./assets/icon.svg";
import { ReactComponent as Clock } from "./assets/clock.svg";
import { ReactComponent as Remain } from "./assets/remain.svg";
import { ReactComponent as Calender } from "./assets/calender.svg";
const Card = ({
  background,
  main_title,
  title,
  classA,
  classB,
  preq,
  skilla,
  skillb,
  skillc,
  rs,
}) => {
  return (
    <div className="card">
      <div
        className="Rectangle-6"
        style={{
          background: `url(${background})`,
          backgroundPosition: "center"
        }}
      >
        <div className="Rectangle">
          <span className="Mobile-Apps">{main_title}</span>
        </div>
      </div>
      <div className="Course-Name">{title}</div>
      <div className="grades-req">
        <div className="grades">
          <div className="one">
            <Fill className="Fill-1" /> <span className="GRADES"> GRADES </span>
          </div>
          <div className="two">
            {classA} - {classB}
          </div>{" "}
        </div>
        <div className="req">
          <div className="one">
            <Icon className="Icon" /> <span className="PRE-REQ">PRE-REQ</span>
          </div>
          <div className="two">{preq}</div>
        </div>
      </div>
      <div className="skills-coins">
        <div className="skills">
          <span className="Skill-Icon"></span>
          <span className="Background">
            <div className="TAG-TEXT">{skilla}</div>
          </span>
          <span className="Background">
            <div className="TAG-TEXT">{skillb}</div>
          </span>
          <span className="Background">
            <div className="TAG-TEXT">{skillc}</div>
          </span>
        </div>
        <div className="coins">
          <Coin />
          <span className="Background">
            <div className="TAG-TEXT">+1000</div>
          </span>
        </div>

        <div className="timetable">
          <div className="date">
            <Calender className="Calender" />
            <span className="Start-Date">17th Feb (in 4 days)</span>
          </div>
          <div className="day">
            <Remain className="Icon" />
            <span className="Icon"></span>
            <span className="Frequency">Mon, Tue & Wed</span>
          </div>
          <div className="time">
            <Clock className="Icon" />

            <span className="Icon"></span>
            <span className="Timing">6:00PM to 7:00PM</span>
          </div>
        </div>

        <div className="fees-enroll">
          <div className="Rs-6000">Rs. {rs}</div>
          <div className="enroll">ENROLL</div>
        </div>
      </div>
    </div>
  );
};

 
export default Card;
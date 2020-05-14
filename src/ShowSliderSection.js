import React from "react";

const ShowSliderSection = () => {
  return (
    <div className="slider">
      <h3 className="What-do-you-want-to">What do you want to learn?</h3>
      <div className="items">
        <div className="Background-Color">
          <div className="Shape"></div>
        </div>
        <div className="Rectangle-16">
          <div className="Group-14 a"></div>
          <div className="name">Web Development</div>
        </div>
        <div className="Rectangle-16">
          <div className="Group-14 b"></div>
          <div className="name">Mobile App Development</div>
        </div>
        <div className="Rectangle-16">
          <div className="Group-14 c"></div>
          <div className="name">Mixed Reality (AR/VR)</div>
        </div>
        <div className="Rectangle-16">
          <div className="Group-14 d"></div>
          <div className="name">Machine Learning (AI)</div>
        </div>
        <div className="Background-Color">
          <div className="Shape rot"></div>
        </div>
      </div>
    </div>
  );
};

export default ShowSliderSection;

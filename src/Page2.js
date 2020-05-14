import React from "react";
import "./Page2.scss";

const ShowCourseCardsSection = () => {
  return (
    <div className="Rectangle-Copy-5">
      <div className="search">
        <div className="Showing-All-courses">
          Showing <span className="text-style-1">All</span> courses for{" "}
          <span className="text-style-1">Grades 5-8</span>
        </div>
        <div className="Rectangle-Copy-3">
          <div className="All-Courses">All Courses</div>
          <div className="Shape"></div>
        </div>
      </div>
      <div className="cards">
        <div className="Card-2-Copy-8 A"></div>
        <div className="Card-2-Copy-8 B"></div>
        <div className="Card-2-Copy-8 C"></div>
        <div className="Card-2-Copy-8 A"></div>
        <div className="Card-2-Copy-8 B"></div>
        <div className="Card-2-Copy-8 C"></div>
      </div>
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="Page2">
      <div className="BG_Header">
        <div className="wrapper">
          <nav>
            <div className="CampK12-Logo"></div>
            <div className="ONLINE-COURSES">
              ONLINE COURSES <div className="Line-4"></div>
            </div>
            <div className="OFFLINE-CAMPS">OFFLINE CAMPS</div>
            <div className="REFER-EARN">REFER EARN</div>

            <div className="Leaderboard"></div>
            <div className="Rectangle-17">
              <span className="FREE-TRIAL">FREE TRIAL</span>
            </div>
            <div className="Rectangle-17">
              <span className="LOG-IN">LOG IN</span>
            </div>
          </nav>

          <header>
            <div className="ONLINE-COURSES">ONLINE COURSES</div>
            <div className="online-section">
              <div className="a">
                <div className="Group-40"></div>
                <div className="Learn-interactively">Learn interactively.</div>
                <div className="LIVE-online-sessions">
                  LIVE online sessions with our expert mentors.{" "}
                  <span>See a demo</span>.
                </div>
              </div>
              <div className="b">
                <div className="Group-40"></div>
                <div className="Learn-interactively">Learn from anywhere.</div>
                <div className="LIVE-online-sessions">
                  Convenience and safety for you and your child.
                </div>
              </div>
              <div className="c">
                <div className="Group-40"></div>
                <div className="Learn-interactively">
                  Learn from the pioneers.
                </div>
                <div className="LIVE-online-sessions">
                  We’ve been teaching kids to code since 2010.{" "}
                  <span>Read more</span>.
                </div>
              </div>
              <div className="d">
                <div className="Group-40"></div>
                <div className="Learn-interactively">Learn by doing.</div>
                <div className="LIVE-online-sessions">
                  100% project-based curriculum. Solve real-world problems.
                </div>
              </div>
            </div>

            <div className="Color-Copy-2">
              <div className="BOOK-A-FREE-TRIAL">BOOK A FREE TRIAL</div>
            </div>
          </header>

          <main>
            <section className="one">
              <div className="grades">
                <div className="Rectangle ">
                  <div className="Grades-Sub">Grades 1-4</div>
                </div>
                <div className="Rectangle selected">
                  <div className="Grades-Sub">Grades 5-8</div>
                </div>
                <div className="Rectangle ">
                  <div className="Grades-Sub">Grades 8-12</div>
                </div>
              </div>
              <ShowCourseCardsSection />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page2;

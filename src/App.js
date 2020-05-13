import React from "react";
import "./App.scss";
import ShowCardsSection from "./ShowCardsSection";
import { ReactComponent as Coin } from "./assets/camp-k-12-coins-copy-2.svg";

function App() {
  return (
    <div className="App">
      <div className="BG_Header">
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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
              libero harum quam recusandae, sit unde non corrupti impedit
              repellat, illo est labore atque dolor reiciendis.
            </p>
            {/* <section className="one">
              <ShowSliderSection />
            </section> */}
            <section className="two">
              <ShowCardsSection />
            </section>
          </main>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
            libero harum quam recusandae, sit unde non corrupti impedit
            repellat, illo est labore atque dolor reiciendis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium dolore, voluptatibus necessitatibus blanditiis ipsum
            libero harum quam recusandae, sit unde non corrupti impedit
            repellat, illo est labore atque dolor reiciendis.
          </p>
        </div>
        <footer className="Rectangle">
          <span className="Questions-Contact-u">
            Questions? Contact us at{" "}
            <span className="text-style-1">info@campk12.com</span>
          </span>
        </footer>
        {/* <div className="Rectangle-24"></div> */}
      </div>
    </div>
  );
}

export default App;

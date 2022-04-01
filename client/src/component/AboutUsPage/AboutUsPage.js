import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import "./AboutUsPage.sass";
import { Parallax } from "react-parallax";
import ReferenceCard from "../References/ReferenceCard";
import nirjal from "../../nirjal.png";
import team from "../../team.jpg";
export default function AboutUsPage() {
  return (
    <div className="AboutUsPage">
      <div className="Page1">
        <div className="Header">
          <h1>Digi-Papyrus</h1>
          <p>Think Opening Imagination as you turn the pages of book !</p>
        </div>
        <div className="Bottom">
          <p>Swipe Down To Know More About Digi-Papyrus</p>
          <BsChevronDoubleDown />
        </div>
      </div>
      <div className="Page2">
        <Parallax
          renderLayer={(offset) => (
            <h1 style={{ transform: `translatex(${offset * 100 - 30}%)` }}>
              ABOUT US
            </h1>
          )}
        />
        <div className="ParallaxDiv">
          <p>
            I want you close your eyes and think about the last book you have
            read. Now imagine how would that reading experience be different if
            it were designed in a web-based platform. A traditional book fails
            miserably to capture the complexity of modern life, putting it at a
            serious disadvantage when compared to alternative forms of outlets.
            At Digi-Papyrus, we look forward to creating an ecosystem that will
            empower writers and content creators to deliver stronger emotions,
            weave threads of modern lives, and re-engineer the reading to reach
            new heights of experience.{" "}
          </p>
        </div>
      </div>
      <div className="Page3">
        <Parallax
          renderLayer={(offset) => (
            <h1 style={{ transform: `translatex(${-offset * 100 + 100}%)` }}>
              REFERENCES
            </h1>
          )}
        />
        <div className="ParallaxDiv">
          <ReferenceCard
            src={nirjal}
            statement="Such a nice app had a great experience using it"
            name="Nirjal Bhurtel"
            post="Nirjal"
          />
          <ReferenceCard
            src={nirjal}
            statement="Such a nice app had a great experience using it"
            name="Nirjal Bhurtel"
            post="Nirjal"
          />
          <ReferenceCard
            src={nirjal}
            statement="Such a nice app had a great experience using it"
            name="Nirjal Bhurtel"
            post="Nirjal"
          />
        </div>
      </div>
      <div className="Page4">
        <Parallax
          renderLayer={(offset) => (
            <h1 style={{ transform: `translatex(${offset * 100 - 30}%)` }}>
              OUR TEAM
            </h1>
          )}
        />
        <div className="ParallaxDiv">
          <div>
            <p>
              I want you close your eyes and think about the last book you have
              read. Now imagine how would that reading experience be different
              if it were designed in a web-based platform. A traditional book
              fails miserably to capture the complexity of modern life, putting
              it at a serious disadvantage when compared to alternative forms of
              outlets. At Digi-Papyrus, we look forward to creating an ecosystem
              that will empower writers and content creators to deliver stronger
              emotions, weave threads of modern lives, and re-engineer the
              reading to reach new heights of experience.{" "}
            </p>
            <img src={team} />
          </div>
        </div>
      </div>
    </div>
  );
}

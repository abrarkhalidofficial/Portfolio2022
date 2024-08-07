import React from "react";
import HTMLFlipBook from "react-pageflip";

export default function Book({}) {
  return (
    <HTMLFlipBook
      width={400}
      maxWidth={800}
      height={500}
      style={{
        margin: "0em auto",
        marginBottom: "9em",
        boxShadow: "0px 10px 30px rgba(0,0,0,.1)",
      }}
    >
      <div className="experience__page">
        <div className="experience__page__heading">My Education</div>
        <div className="experience__page__sub__heading">Matric</div>
        <div className="experience__page__info">2018 - 2020</div>
        <div className="experience__page__content">Biology Science</div>
        <div className="experience__page__sub__heading">Intermediate</div>
        <div className="experience__page__info">2020 - 2022</div>
        <div className="experience__page__content">Fsc (Pre Engineering)</div>
        <div className="experience__page__sub__heading">Bachelor's</div>
        <div className="experience__page__info">2022 - till now</div>
        <div className="experience__page__content">Computer Science</div>
      </div>
      <div className="experience__page">
        <div className="experience__page__heading">My Experiences</div>
        <div className="experience__page__sub__heading">
          CrazyBeings Studio (onsite)
        </div>
        <div className="experience__page__info">2022 - 2023</div>
        <div className="experience__page__content">Frontend Developer</div>
        <div className="experience__page__sub__heading">
          Devscot Solutions (onsite)
        </div>
        <div className="experience__page__info">2022 - Till now</div>
        <div className="experience__page__content">Frontend Developer</div>
        <div className="experience__page__sub__heading">
          Refly Agency (Hybrid)
        </div>
        <div className="experience__page__info">2023 - Till now</div>
        <div className="experience__page__content">Frontend Developer</div>
      </div>
      <div className="experience__page">
        <div className="experience__page__heading">PROFILE SUMMARY </div>
        <div className="experience__page__sub__heading">Devscot</div>
        <div className="experience__page__info">2022</div>
        <div className="experience__page__content">I'm a Web Developer based in Pakistan. I enjoy turning complex problems into simple, beautiful and intuitive solutions. Working at this time for "Devscot Solutions"
        </div>
        {/* <div className="experience__page__sub__heading">AutoCad</div>
        <div className="experience__page__info">2207</div>
        <div className="experience__page__content">Cad designing</div> */}
      </div>
      <div className="experience__page__special">
        <div className="experience__page__heading">The end</div>
        <div className="experience__page__info">
          Lets build and grow together
        </div>
      </div>
    </HTMLFlipBook>
  );
}

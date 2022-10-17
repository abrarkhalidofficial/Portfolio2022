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
        <div className="experience__page__sub__heading">Buy Tech Zone</div>
        <div className="experience__page__info">2021 - 2022</div>
        <div className="experience__page__content">Amazon product finder</div>
        <div className="experience__page__sub__heading">Creatv Hub</div>
        <div className="experience__page__info">2021 - Till now</div>
        <div className="experience__page__content">
          Frontend Developer & Ui Ux Designer
        </div>
      </div>
      <div className="experience__page">
        <div className="experience__page__heading">My Certificates</div>
        {/* <div className="experience__page__sub__heading">CCA</div>
        <div className="experience__page__info">2022</div>
        <div className="experience__page__content">Office Applications</div>
        <div className="experience__page__sub__heading">AutoCad</div>
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

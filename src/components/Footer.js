import React from "react";
import { Facebook, GitHub, Instagram, Linkedin } from "react-feather";

export default function Footer() {
  return (
    <div className="footer__section__wapper">
      <section id="footer__section" className="footer__section">
        <div className="footer__section__left">
          <a
            href="https://github.com/abrarkhalidofficial"
            className="header__content__actions__link"
            title="github"
          >
            <GitHub size={18} color="currentColor" />
            <span>github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/iabrarkhalidofficial/"
            className="header__content__actions__link"
            title="linkedin"
          >
            <Linkedin size={18} color="currentColor" />
            <span>linkedin</span>
          </a>
          <a
            href="https://www.instagram.com/abrarkhalidofficial/"
            className="header__content__actions__link"
            title="instagram"
          >
            <Instagram size={18} color="currentColor" />
            <span>instagram</span>
          </a>
          <a
            href="https://www.facebook.com/Abrarkhalidoffical/"
            className="header__content__actions__link"
            title="facebook"
          >
            <Facebook size={18} color="currentColor" />
            <span>facebook</span>
          </a>
        </div>
        <div className="footer__section__right">
          © 2024 - Abrar-khalid-official. All Rights Reserved
        </div>
      </section>
    </div>
  );
}

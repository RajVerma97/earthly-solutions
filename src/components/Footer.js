import React from "react";
import "./Footer.css";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="box">
        <h4 className="box__title">company</h4>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">
              privacy policy
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              terms and co..
            </a>
          </li>
          <li className="footer__item">
            <a href="#about" className="footer__link">
              about us
            </a>
          </li>
        </ul>
      </div>
      <div className="box">
        <h4 className="box__title">customer care</h4>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#contactUs" className="footer__link">
              contact us
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              shipping
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              returns
            </a>
          </li>
        </ul>
      </div>

      <div className="social">
        <a className="icon" href="https://www.facebook.com/wix">
          <BsFacebook />
        </a>
        <a
          className="icon"
          href="https://il.linkedin.com/company/wix-com?trk=public_jobs_topcard_logo"
        >
          <BsLinkedin />
        </a>
        <a className="icon" href="https://www.instagram.com/wix/">
          <BsInstagram />
        </a>
        <a className="icon" href="https://twitter.com/wix">
          <BsTwitter />
        </a>
      </div>
    </footer>
  );
}

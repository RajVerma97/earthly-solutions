import React from "react";
import { useEffect } from "react";
import "./Details.css";
import QuantityInput from "../components/QuantityInput";
import Button from "../components/Button";
import {BsArrowRightCircleFill} from "react-icons/bs";
import BackArrow from "../components/BackArrow";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Details() {

     useEffect(() => {
       AOS.init();
     }, []);
  return (
    <div>
      <div className="arrowContainer">
        <BackArrow style={{padding: "2em"}} />
      </div>
      <section className="showcase">
        <div
          className="showcase__left"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img src="../assets/straws.jpg" alt="" className="product__image" />
        </div>
        <div
          className="showcase__right"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <h2 className="product__name">bamboo straws</h2>
          <h3 className="product__price">$ 500</h3>
          <Button text={"buy now"} bgColor={"#3D5A80"} textColor={"#FFFFFF"} />
          <Button
            text={"add to  cart"}
            bgColor={"#C0C0C0"}
            textColor={"#FFFFFF"}
          />
        </div>
      </section>
      <section className="info">
        <div className="description">
          <h4 className="description__title">description</h4>
          <p className="description__lead">
            Earthly Bamboo Toothbrush are BPA free, Biodegradable and have
            charcoal infused bristles that help remove stains effectively. We
            guarantee your satisfaction. See for yourself!
          </p>
        </div>
        <div className="features">
          <h4 className="features__title">features</h4>
          <ul className="features__list">
            <li className="features__item">
              <BsArrowRightCircleFill />
              <span>100% natural and toxic-free</span>
            </li>
            <li className="features__item">
              <BsArrowRightCircleFill />
              <span> Vegan product</span>
            </li>
            <li className="features__item">
              <BsArrowRightCircleFill />
              <span> Eco friendly and sustainable</span>
            </li>
            <li className="features__item">
              <BsArrowRightCircleFill />
              <span> Made by Indian Artisans</span>
            </li>
            <li className="features__item">
              <BsArrowRightCircleFill />
              <span> Aesthetically pleasing design</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

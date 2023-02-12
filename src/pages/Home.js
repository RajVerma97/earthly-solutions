import React from "react";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import AOS from "aos";
import "./Home.css";

import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home">
      <section className="wrapper center">
        <div className="wrapper__left">
          <div className="wrapper__info">
            <h1 className="info__title">eco friendly</h1>
            <h4 className="info__lead">
              sustainable products at affordable prices
            </h4>
          </div>
        </div>
        <div
          className=" wrapper__right"
          data-aos="fade-left"
          data-aos-duration="400"
          data-aos-delay="200"
        >
          <img
            className="wrapper__image"
            src="../assets/ecofriendly.jpg"
            alt="eco friendly"
          />
        </div>
      </section>
      <section className="wrapper center">
        <div className="wrapper__left" style={{order: 1}}>
          <div className="wrapper__info">
            <h1 className="info__title">Sustainable starter kit</h1>
            <h4 className="info__lead">
              most selling and complete set of products
            </h4>
          </div>
        </div>
        <div
          className="wrapper__right"
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-delay="200"
        >
          <img
            className="wrapper__image"
            src="../assets/sustainablekit.jpg"
            alt="eco friendly"
          />
        </div>
      </section>

      <section id="products" className="productsWrapper center">
        <h1 className="products__title">products</h1>
        <div className="products">
          <Link
            to={"/1"}
            className="product"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <img
              src="../assets\bambooStraws.webp"
              alt=""
              className="product__image"
            />
            <h4 className="product__name">mboo straws</h4>
          </Link>
          <Link
            to={"/2"}
            className="product"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay="150"
          >
            <img
              src="../assets\cottonbuds.jpg"
              alt=""
              className="product__image"
            />
            <h4 className="product__name">earbuds</h4>
          </Link>
          <Link
            to={"/3"}
            className="product"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <img
              src="../assets/reusable cup.jpg"
              alt=""
              className="product__image"
            />
            <h4 className="product__name">reusable cup</h4>
          </Link>
          <Link
            to={"/4"}
            className="product"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <img
              src="../assets/toothbrush.jpg"
              alt=""
              className="product__image"
            />
            <h4 className="product__name">toothbrush</h4>
          </Link>
          <Link
            to={"/5"}
            className="product"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay="250"
          >
            <img src="../assets/loofah.jpg" alt="" className="product__image" />
            <h4 className="product__name">loofah</h4>
          </Link>
          <Link
            to={"/6"}
            className="product"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay="250"
          >
            <img
              src="../assets\blueCup.webp"
              alt=""
              className="product__image"
            />
            <h4 className="product__name">dual lid cup</h4>
          </Link>
        </div>
      </section>
      <section id="about" className="aboutUs center">
        <h1 className="aboutUs__title">about us</h1>
        <div className="aboutUsInfo">
          a spot for businesses that need to be a part of the
          <span className="green"> green movement</span>. We do an amazing job
          to give you the information and alternative sustainable products for
          your cafes and food business.
        </div>
      </section>
      <section id="contactUs" className="contactUs center">
        <h1 className="contactUs__title">contact us</h1>
        <div className="contactUsInfo">
          16 Liffey Ave, Liffey Valley Park, Lucan, Co. Dublin, K78 HW50,
          Ireland hello@earthly.ie +353 1552 4908
        </div>
      </section>
    </div>
  );
};

export default Home;

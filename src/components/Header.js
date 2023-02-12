import React from "react";
import { useState } from "react";
import "./Header.css";
import {HiMenu} from 'react-icons/hi'


const Header = () => {
  const [isactive, setIsActive] = useState(false);


  return (
    <div className="header">
      <div className="navbar">
        <a href="/" className="logo">
          earthly
        </a>
     
        <ul className="list">
          <li className="item">
            <a href="#about" className="item__link">
              about
            </a>
          </li>
          <li className="item">
            <a href="#contactUs" className="item__link">
              contact us
            </a>
          </li>
          <li className="item">
            <a href="#products" className="item__link">
              products
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

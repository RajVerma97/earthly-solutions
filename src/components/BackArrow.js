import React from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import './BackArrow.css';
export default function BackArrow() {
    const location = useLocation();
    const navigate = useNavigate();

  return (
      <Link to={'/'}  className="arrow">
      <BsFillArrowLeftCircleFill />
    </Link>
  );
}

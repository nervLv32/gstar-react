import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FloatingMenuWrapper } from "./styles";
import FloatingPoint from "../../../assets/images/floating/floating-point.png";
import FloatingLight from "../../../assets/images/floating/floating-light.png";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 페이지 진입 시 애니메이션 자동 실행
    const timer = setTimeout(() => setIsOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <FloatingMenuWrapper className={`aion-box ${isOpen ? "open" : ""}`}>
      <i className="light-image">
        <img src={FloatingLight} alt="" />
      </i>
      <div className="inner">
        <div className="title-text">
          <p>출품작 안내</p>
        </div>
        <ul>
          <li className="active">
            <Link to="/">
              <i className="point-image">
                <img src={FloatingPoint} alt="" />
              </i>
              <span>AION2</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="point-image">
                <img src={FloatingPoint} alt="" />
              </i>
              <span>CINDER CITY</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="point-image">
                <img src={FloatingPoint} alt="" />
              </i>
              <span>타임 테이커즈</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="point-image">
                <img src={FloatingPoint} alt="" />
              </i>
              <span>브레이커스</span>
            </Link>
          </li>
          <li>
            <Link to="/">COMING SOON</Link>
          </li>
        </ul>
        <p className="home">HOME</p>
      </div>
    </FloatingMenuWrapper>
  );
};

export default FloatingMenu;

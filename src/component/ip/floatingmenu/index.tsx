import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FloatingMenuWrapper } from "./styles";
import FloatingPoint from "../../../assets/images/floating/floating-point.png";
import FloatingLight from "../../../assets/images/floating/floating-light.png";
import FloatingHomeIcon from "../../../assets/images/floating/floating-home-icon.png";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // 메뉴 목록 정의
  const menuList = [
    { name: "AION2", to: "/work/aion2" },
    { name: "CINDER CITY", to: "/work/cinder" },
    { name: "타임 테이커즈", to: "/work/timetakers" },
    { name: "브레이커스", to: "/work/breakers" },
    { name: "COMING SOON", to: "/" },
  ];

  // 초기 오픈 애니메이션
  useEffect(() => {
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
          {menuList.map((menu) => (
            <li
              key={menu.to}
              className={location.pathname === menu.to ? "active" : ""}
            >
              <Link to={menu.to}>
                {menu.name !== "COMING SOON" && (
                  <i className="point-image">
                    <img src={FloatingPoint} alt="" />
                  </i>
                )}
                <span>{menu.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="home">
          <div className="icon-wrap">
            <Link to="/">
              <i>
                <img src={FloatingHomeIcon} alt="" />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </FloatingMenuWrapper>
  );
};

export default FloatingMenu;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FloatingMenuWrapper } from "./styles";

import FloatingHomeIcon from "../../../assets/images/floating/floating-home-icon.png";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // 메뉴 목록 정의
  const menuList = [
    { name: "AION2", to: "/work/aion2" },
    { name: "CINDER CITY", to: "/work/cinder" },
    { name: "타임 테이커즈", to: "/work/timetakers" },
    { name: "리밋 제로 브레이커스", to: "/work/breakers" },
    { name: "COMING SOON", to: "/" },
  ];

  // 초기 오픈 애니메이션
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <FloatingMenuWrapper className={`aion-box ${isOpen ? "open" : ""}`}>
      <ul>
        <li className="home">
          <Link to="/">
            <i className="point-image">
              <span></span>
            </i>

            <i>
              <img src={FloatingHomeIcon} alt="" />
            </i>
          </Link>
        </li>
        {menuList.map((menu) => (
          <li
            key={menu.to}
            className={location.pathname === menu.to ? "active" : ""}
          >
            <Link
              to={menu.to}
              className={`${menu.name === "COMING SOON" ? "cm" : ""}`}
              onClick={(e) => {
                if (menu.to === "/") e.preventDefault();
              }}
            >
              <i className="point-image">
                <span></span>
              </i>

              <span>{menu.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </FloatingMenuWrapper>
  );
};

export default FloatingMenu;

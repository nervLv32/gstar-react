import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FloatingMenuWrapper } from "./styles";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 페이지 진입 시 애니메이션 자동 실행
    const timer = setTimeout(() => setIsOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <FloatingMenuWrapper className={`aion-box ${isOpen ? "open" : ""}`}>
      <div className="inner">
        <div className="title-text">
          <p>출품작 안내</p>
        </div>
        <ul>
          <li className="active">
            <Link to="/">AION2</Link>
          </li>
          <li>
            <Link to="/">CINDER CITY</Link>
          </li>
          <li>
            <Link to="/">타임 테이커즈</Link>
          </li>
          <li>
            <Link to="/">브레이커스</Link>
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

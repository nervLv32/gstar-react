import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderWrapper, SideMenuWrapper } from "./styles";
import MoPoint from "../../assets/images/mobile/mobile-menu-point.png";
import MoMenuLogo from "../../assets/images/mobile/mobile-menu-logo.png";

import XLogo from "../../assets/images/common/header-x-icon.png";
import FacebookLogo from "../../assets/images/common/header-facebook-icon.png";
import LinkLogo from "../../assets/images/common/header-link-icon.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuList = [
    { name: "AION2", to: "/work/aion2" },
    { name: "CINDER CITY", to: "/work/cinder" },
    { name: "타임 테이커즈", to: "/work/timetakers" },
    { name: "브레이커스", to: "/work/breakers" },
    { name: "COMING SOON", to: "/" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const target = document.querySelector(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `/${sectionId}`);
      }
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // ✅ 링크 복사 함수
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText("https://naver.com");
      alert("링크가 복사되었습니다!");
    } catch (err) {
      console.error("클립보드 복사 실패:", err);
      alert("복사에 실패했습니다. 직접 복사해주세요.");
    }
  };

  // ✅ body 스크롤 제어
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <HeaderWrapper className={isOpen ? "mo-open" : ""}>
        <ul className="nav">
          <li>
            <button onClick={() => scrollToSection("#video")}>
              출품작 안내
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("#gstar")}>행사 안내</button>
          </li>
          <h1 className="logo">
            <a href="/" onClick={handleLogoClick}>
              <i></i>
            </a>
          </h1>
          <li>
            <button onClick={() => scrollToSection("#event")}>이벤트</button>
          </li>
          <li>
            <Link to="/media">MEDIA</Link>
          </li>
        </ul>

        {/* ✅ 여기 수정 부분 */}
        <ul className="link-wrap">
          <li>
            <i onClick={handleCopyLink}>
              <img src={LinkLogo} alt="링크 복사" />
            </i>
          </li>
        </ul>

        <div
          className={`mo-ham-wrap ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </HeaderWrapper>

      <SideMenuWrapper className={isOpen ? "open" : ""}>
        <div className="inner">
          <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
            <i>
              <img src={MoMenuLogo} alt="" />
            </i>
          </Link>
          <div className="menu-wrap">
            <i className="point-icon">
              <img src={MoPoint} alt="" />
            </i>
            <ul>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("#video");
                    setIsOpen(false);
                  }}
                >
                  출품작 안내
                </button>
              </li>
              <li>
                <button>게임 소개</button>
                <div className="dep2">
                  {menuList.map((menu) => (
                    <Link
                      to={menu.to}
                      key={menu.to}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{menu.name}</span>
                    </Link>
                  ))}
                </div>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("#gstar");
                    setIsOpen(false);
                  }}
                >
                  행사 안내
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("#event");
                    setIsOpen(false);
                  }}
                >
                  이벤트
                </button>
              </li>
              <li>
                <Link to="/media" onClick={() => setIsOpen(false)}>
                  MEDIA
                </Link>
              </li>
            </ul>
            <i className="point-icon">
              <img src={MoPoint} alt="" />
            </i>
          </div>
        </div>
      </SideMenuWrapper>
    </>
  );
};

export default Header;

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderWrapper, SideMenuWrapper } from "./styles";
import MoPoint from "../../assets/images/mobile/mobile-menu-point.png";
import MoMenuLogo from "../../assets/images/mobile/mobile-menu-logo.png";
import LinkLogo from "../../assets/images/common/header-link-icon.png";

interface IProps {
  className?: string;
}

const Header = ({ className }: IProps) => {
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

  /** ✅ 수정된 부분 */
  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/GSTAR2025") {
      const target = document.querySelector(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        // ✅ 절대경로로 안전하게 replaceState 수행
        const newUrl = `${window.location.origin}${window.location.pathname}${sectionId}`;
        window.history.replaceState(null, "", newUrl);
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

  const handleCopyLink = (text = "https://about.ncsoft.com/gstar2025") => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => alert("링크가 복사되었습니다!"))
        .catch(() => fallbackCopyTextToClipboard(text));
    } else {
      fallbackCopyTextToClipboard(text);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    textarea.style.left = "-9999px";
    textarea.setAttribute("readonly", "");
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, text.length); // iOS 대응

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        alert("링크가 복사되었습니다!");
      } else {
        alert("복사 실패 — 직접 복사해주세요.");
      }
    } catch {
      alert("복사 실패 — 직접 복사해주세요.");
    }

    document.body.removeChild(textarea);
  };

  /** ✅ body 스크롤 제어 */
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
      <HeaderWrapper
        className={`${isOpen ? "mo-open" : ""} ${className ? className : ""}`}
      >
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
            <button
            // onClick={() => scrollToSection("#event")}
            >
              이벤트
            </button>
          </li>
          <li>
            <Link to="/media">MEDIA</Link>
          </li>
        </ul>

        {/* 링크 복사 버튼 */}
        <ul className="link-wrap">
          <li>
            <i onClick={() => handleCopyLink()}>
              <img src={LinkLogo} alt="링크 복사" />
            </i>
          </li>
        </ul>

        {/* 모바일 햄버거 버튼 */}
        <div
          className={`mo-ham-wrap ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </HeaderWrapper>

      {/* 사이드 메뉴 */}
      <SideMenuWrapper className={isOpen ? "open" : ""}>
        <div className="inner">
          <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
            <i>
              <img src={MoMenuLogo} alt="모바일 로고" />
            </i>
          </Link>
          <div className="menu-wrap">
            <i className="point-icon top">
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
                      onClick={(e) => {
                        if (menu.to === "/") {
                          e.preventDefault();
                        } else {
                          setIsOpen(false);
                        }
                      }}
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
            <i className="point-icon bottom">
              <img src={MoPoint} alt="" />
            </i>
          </div>

          <ul className="small-icon-wrap">
            <li>
              <i onClick={() => handleCopyLink()}>
                <img src={LinkLogo} alt="링크 복사" />
              </i>
            </li>
          </ul>
        </div>
      </SideMenuWrapper>
    </>
  );
};

export default Header;

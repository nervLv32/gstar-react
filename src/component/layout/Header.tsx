import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderWrapper } from "./styles";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ 특정 섹션으로 스크롤 이동 함수 (video / event 등)
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

  return (
    <HeaderWrapper>
      <ul>
        <li>
          {/* ✅ 출품작 안내 → id="video" */}
          <button onClick={() => scrollToSection("#video")}>출품작 안내</button>
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
          {/* ✅ 이벤트 → id="event" */}
          <button onClick={() => scrollToSection("#event")}>이벤트</button>
        </li>
        <li>
          <Link to="/media">MEDIA</Link>
        </li>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;

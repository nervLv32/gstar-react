import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderWrapper } from "./styles";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToBooth = () => {
    if (location.pathname === "/") {
      const target = document.querySelector("#booth");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", "/#booth");
      }
    } else {
      navigate("/", { state: { scrollTo: "#booth" } });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // ✅ 이미 메인 페이지일 경우 맨 위로 스크롤
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // ✅ 다른 페이지라면 메인으로 이동
      navigate("/");
    }
  };

  return (
    <HeaderWrapper>
      <ul>
        <li>
          <button onClick={handleScrollToBooth}>출품작 안내</button>
        </li>
        <li>
          <Link to="/info">행사 안내</Link>
        </li>
        <h1 className="logo">
          {/* ✅ Link 대신 직접 onClick 제어 */}
          <a href="/" onClick={handleLogoClick}>
            <i></i>
          </a>
        </h1>
        <li>
          <Link to="/">이벤트</Link>
        </li>
        <li>
          <Link to="/media">MEDIA</Link>
        </li>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;

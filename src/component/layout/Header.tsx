import { Link } from "react-router-dom";
import { HeaderWrapper } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <ul>
        <li>
          <Link to="/">출품작 안내</Link>
        </li>
        <li>
          <Link to="/info">행사 안내</Link>
        </li>
        <h1 className="logo">
          <Link to="/">
            <i></i>
          </Link>
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

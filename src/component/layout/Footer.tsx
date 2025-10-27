import { FooterWrapper } from "./styles";
import FooterLogo from "../../assets/images/common/footer-logo.png";
import ScrollTopIcon from "../../assets/images/media/media-scoll-top.png";

import InstagramIcon from "../../assets/images/common/footer-instagram-logo.svg";
import FacebookIcon from "../../assets/images/common/footer-facebook-logo.svg";
import YoutubeIcon from "../../assets/images/common/footer-youtube-logo.svg";

import SmallLogo01 from "../../assets/images/common/footer-logo01.png";
import SmallLogo02 from "../../assets/images/common/footer-logo02.png";
import SmallLogo03 from "../../assets/images/common/footer-logo03.png";
import SmallLogo04 from "../../assets/images/common/footer-logo04.png";
import SmallLogo05 from "../../assets/images/common/footer-logo05.png";
import SmallLogo06 from "../../assets/images/common/footer-logo06.png";
import SmallLogo07 from "../../assets/images/common/footer-logo07.png";
import SmallLogo08 from "../../assets/images/common/footer-logo08.png";

import { Link } from "react-router-dom";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <FooterWrapper>
      <div className="footer-inner">
        <div className="footer-wrapper">
          <div className="logo-wrap">
            <ul>
              <li className="w-123px">
                <i>
                  <img src={SmallLogo01} alt="" />
                </i>
              </li>
              <li className="w-146px">
                <i>
                  <img src={SmallLogo02} alt="" />
                </i>
              </li>
              <li className="w-72px">
                <i>
                  <img src={SmallLogo03} alt="" />
                </i>
              </li>
              <li className="w-348px">
                <i>
                  <img src={SmallLogo04} alt="" />
                </i>
              </li>
              <li className="w-175px">
                <i>
                  <img src={SmallLogo05} alt="" />
                </i>
              </li>
              <li className="w-162px">
                <i>
                  <img src={SmallLogo06} alt="" />
                </i>
              </li>
              <li className="w-88px">
                <i>
                  <img src={SmallLogo07} alt="" />
                </i>
              </li>
              <li className="w-103px">
                <i>
                  <img src={SmallLogo08} alt="" />
                </i>
              </li>
            </ul>
          </div>
          <div className="info-wrap">
            <div className="text-sns-wrap">
              <div className="text-wrap">
                <p className="vitro-pride">
                  대표번호 : 02-2186-3300
                  <br />© NCSOFT Corporation. All Rights Reserved.
                </p>
              </div>
              <ul className="sns-wrap">
                <li>
                  <Link
                    to="https://www.facebook.com/NCSOFT.Korea"
                    target="_blank"
                  >
                    <i>
                      <img src={FacebookIcon} alt="" />
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/ncsoft.official/"
                    target="_blank"
                  >
                    <i>
                      <img src={InstagramIcon} alt="" />
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.youtube.com/user/ncsoft"
                    target="_blank"
                  >
                    <i>
                      <img src={YoutubeIcon} alt="" />
                    </i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-logo-wrap">
              <h4 className="footer-logo">
                <i>
                  <img src={FooterLogo} alt="" />
                </i>
              </h4>
              <div
                className={`scroll-top`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
              >
                <i>
                  <img src={ScrollTopIcon} alt="" />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

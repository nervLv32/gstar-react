import { useState } from "react";
import MaterialSection from "./materialsection";
import MediaSection from "./mediasection";
import { MediaWrapper } from "./styles";
import ScrollTopIcon from "../assets/images/media/media-scoll-top.png";
import Header from "../component/layout/Header";
const Media = () => {
  const [isMedia, setIsMedia] = useState<"material" | "media">("material");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <MediaWrapper>
        <div className="sub-visual-wrap">
          <h2 className="vitro">MEDIA</h2>
          <ul className="sub-tab">
            <li
              className={`${isMedia === "material" ? "active" : ""} vitro`}
              onClick={() => setIsMedia("material")}
            >
              보도 자료
            </li>
            <li
              className={`${isMedia === "media" ? "active" : ""} vitro`}
              onClick={() => setIsMedia("media")}
            >
              영상
            </li>
          </ul>
        </div>
        {isMedia === "material" ? <MaterialSection /> : <MediaSection />}
        <div className={`scroll-top`} aria-label="Scroll to top">
          <i onClick={scrollToTop}>
            <img src={ScrollTopIcon} alt="" />
          </i>
        </div>
      </MediaWrapper>
    </>
  );
};

export default Media;

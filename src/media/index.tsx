import { useState } from "react";
import MaterialSection from "./materialsection";
import MediaSection from "./mediasection";

import { MediaWrapper } from "./styles";
import ScrollTopIcon from "../assets/images/media/media-scoll-top.png";
import Header from "../component/layout/Header";
import AllSection from "./allsection";

const Media = () => {
  const [tab, setTab] = useState<"all" | "material" | "media">("all");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <MediaWrapper>
        <div className="sub-visual-wrap">
          <h2 className="vitro">MEDIA</h2>
          <ul className="sub-tab">
            <li
              className={`${tab === "all" ? "active" : ""} vitro`}
              onClick={() => setTab("all")}
            >
              전체
            </li>
            <li
              className={`${tab === "material" ? "active" : ""} vitro`}
              onClick={() => setTab("material")}
            >
              보도 자료
            </li>
            <li
              className={`${tab === "media" ? "active" : ""} vitro`}
              onClick={() => setTab("media")}
            >
              영상
            </li>
          </ul>
        </div>

        {tab === "all" && <AllSection />}
        {tab === "material" && <MaterialSection />}
        {tab === "media" && <MediaSection />}

        <div className="scroll-top" aria-label="Scroll to top">
          <i onClick={scrollToTop}>
            <img src={ScrollTopIcon} alt="top" />
          </i>
        </div>
      </MediaWrapper>
    </>
  );
};

export default Media;

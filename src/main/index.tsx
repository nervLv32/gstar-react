import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import BoothSection from "../component/main/boothsection";
import GstarBoothSection from "../component/main/gstarboothsection";
import GstarSection from "../component/main/gstarsection";
import VideoSection from "../component/main/videosection";
import { TapeWrapper } from "./styles";
import Intro from "../component/main/intro";
import TicketSection from "../component/main/ticektsection";
import MainSection from "../component/main/mainsection";
import TapeImage01 from "../assets/images/main/main-tape-image01.png";
import TapeImage02 from "../assets/images/main/main-tape-image02.png";
import Header from "../component/layout/Header"; // ✅ 추가

const Main = () => {
  const location = useLocation();
  const [introStep, setIntroStep] = useState<"video" | "dim" | "done">(
    Cookies.get("isVideoView") ? "done" : "video"
  );
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const videoSectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  // ✅ 스크롤 위치 감지
  useEffect(() => {
    const handleScroll = () => {
      if (!videoSectionRef.current) return;
      const videoBottom =
        videoSectionRef.current.getBoundingClientRect().bottom;

      if (videoBottom <= 0) {
        setIsHeaderFixed(true);
        setIsHeaderVisible(true);
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        return;
      }

      setIsHeaderFixed(false);
      setIsHeaderVisible(true);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => setIsHeaderVisible(false), 1200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  // ✅ scrollTo 및 쿠키 관련 기존 로직 유지
  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.querySelector(location.state.scrollTo);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
      window.history.replaceState(null, "", "/#booth");
    }
  }, [location.state]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (window.location.pathname === "/") {
        e.preventDefault();
        e.returnValue = "";
        Cookies.remove("isVideoView");
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleVideoEnd = () => {
    setIntroStep("dim");
  };

  const handleDimEnd = () => {
    Cookies.set("isVideoView", "true", { path: "/" });
    setIntroStep("done");
  };

  return (
    <div>
      {/* 🔹 Header */}
      <Header
        className={`${!isHeaderVisible ? "hide" : ""} ${
          isHeaderFixed ? "fixed" : ""
        }`}
      />

      {/* 🔹 인트로 */}
      {location.pathname === "/" && introStep !== "done" && (
        <Intro
          step={"dim"}
          onVideoEnd={handleVideoEnd}
          onDimEnd={handleDimEnd}
          videoRef={videoRef}
        />
      )}

      {/* 🔹 메인 컨텐츠 */}
      {introStep === "done" && (
        <>
          <MainSection />

          <div ref={videoSectionRef}>
            <VideoSection />
          </div>

          <GstarSection />
          <GstarBoothSection />
          <BoothSection />
          <TicketSection />

          <TapeWrapper>
            <div className="tape">
              {Array(8)
                .fill(null)
                .flatMap(() => [TapeImage01, TapeImage02])
                .map((img, i) => (
                  <img key={i} src={img} alt={`tape${i}`} />
                ))}
            </div>
          </TapeWrapper>
        </>
      )}
    </div>
  );
};

export default Main;

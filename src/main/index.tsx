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
import Header from "../component/layout/Header";

const BASENAME = "/GSTAR2025"; // BrowserRouter basename과 동일하게 설정

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

  /** ✅ Header 스크롤 감지 */
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

  /** ✅ 페이지 이동 시 scrollTo 처리 */
  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.querySelector(location.state.scrollTo);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
      window.history.replaceState(null, "", `${BASENAME}/#booth`);
    }
  }, [location.state]);

  /** ✅ 인트로 쿠키 초기화 — basename 대응 */
  useEffect(() => {
    const isRootPath =
      location.pathname === "/" ||
      location.pathname === BASENAME ||
      location.pathname === `${BASENAME}/`;

    if (isRootPath) {
      Cookies.remove("isVideoView", { path: BASENAME });
    }
  }, [location.pathname]);

  /** ✅ 새로고침 감지 — sessionStorage 플래그 */
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("refreshTriggered", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  /** ✅ 새로고침 후 쿠키 삭제 */
  useEffect(() => {
    const isRootPath =
      window.location.pathname === "/" ||
      window.location.pathname === BASENAME ||
      window.location.pathname === `${BASENAME}/`;

    if (sessionStorage.getItem("refreshTriggered") === "true" && isRootPath) {
      Cookies.remove("isVideoView", { path: BASENAME });
      sessionStorage.removeItem("refreshTriggered");
      setIntroStep("video");
    }
  }, []);

  /** ✅ pageshow 이벤트 (Safari 등 BFCache 대응) */
  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) return;
      const currentPath = window.location.pathname;
      if (
        currentPath === "/" ||
        currentPath === BASENAME ||
        currentPath === `${BASENAME}/`
      ) {
        Cookies.remove("isVideoView", { path: BASENAME });
        setIntroStep("video");
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  /** ✅ 라우트 변경 시 스크롤 상단으로 */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  /** ✅ 인트로 단계 제어 */
  const handleVideoEnd = () => {
    setIntroStep("dim");
  };

  const handleDimEnd = () => {
    Cookies.set("isVideoView", "true", { path: BASENAME });
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

      {/* 🔹 Intro (인트로 영상 + 딤) */}
      {location.pathname === "/" && introStep !== "done" && (
        <Intro
          // step={introStep}
          step={"dim"}
          onVideoEnd={handleVideoEnd}
          onDimEnd={handleDimEnd}
          videoRef={videoRef}
        />
      )}

      {/* 🔹 메인 콘텐츠 */}
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

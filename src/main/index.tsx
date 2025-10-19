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

const Main = () => {
  const location = useLocation();
  const [introStep, setIntroStep] = useState<"video" | "dim" | "done">(
    Cookies.get("isVideoView") ? "done" : "video"
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.querySelector(location.state.scrollTo);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // 약간의 delay로 렌더 완료 후 스크롤
      }
      // ✅ state를 제거해서 새로고침 시 다시 스크롤 안되게
      window.history.replaceState(null, "", "/#booth");
    }
  }, [location.state]);

  // ✅ 새로고침 시 쿠키 제거
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

  // ✅ 경로 바뀔 때 스크롤 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // ✅ 인트로 영상 종료 후
  const handleVideoEnd = () => {
    setIntroStep("dim");
  };

  // ✅ dim 애니메이션 종료 후
  const handleDimEnd = () => {
    Cookies.set("isVideoView", "true", { path: "/" });
    setIntroStep("done");
  };

  useEffect(() => {
    handleDimEnd();
  }, []);

  const textList = ["NC 2025 G-STAR", "무한한 세계, 하나의 여정"];

  const repeated = [
    ...textList,
    ...textList,
    ...textList,
    ...textList,
    ...textList,
    ...textList,
    ...textList,
  ];

  return (
    <div>
      {/* 🔹 인트로 전체 */}
      {location.pathname === "/" && introStep !== "done" && (
        <Intro
          step={introStep}
          onVideoEnd={handleVideoEnd}
          onDimEnd={handleDimEnd}
          videoRef={videoRef}
        />
      )}

      {/* 🔹 메인 컨텐츠 */}
      {introStep === "done" && (
        <>
          <MainSection />

          <VideoSection />
          <GstarSection />

          {/* 제외 <TicketParallaxSection /> */}

          <GstarBoothSection />
          <BoothSection />
          <TicketSection />
          <TapeWrapper>
            <div className="tape vitro">
              {repeated.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          </TapeWrapper>
        </>
      )}
    </div>
  );
};

export default Main;

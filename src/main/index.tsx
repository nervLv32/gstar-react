import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import MainSection from "../component/main/mainsection";

import BoothSection from "../component/main/boothsection";
import GstarBoothSection from "../component/main/gstarboothsection";
import GstarSection from "../component/main/gstarsection";
import VideoSection from "../component/main/videosection";
import { TapeWrapper } from "./styles";
import Intro from "../component/main/intro";

const Main = () => {
  const location = useLocation();
  const [introStep, setIntroStep] = useState<"video" | "dim" | "done">(
    Cookies.get("isVideoView") ? "done" : "video"
  );

  const videoRef = useRef<HTMLVideoElement>(null);

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

  // useEffect(() => {
  //   handleDimEnd();
  // }, []);

  //  tape
  const textList = ["NC 2025 G-STAR", "무한한 세계, 하나의 여정"];

  // 2배로 복제해서 자연스럽게 무한 반복
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
          {/* <TicketParallaxSection /> */}

          <GstarBoothSection />
          <BoothSection />
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

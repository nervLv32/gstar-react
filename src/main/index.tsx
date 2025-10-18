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
import TicketSection from "../component/main/ticektsection";

import AionImage from "../assets/images/main/main-aion-slide-image.png";
import CinderImage from "../assets/images/main/main-cinder-slide-image.png";
import CmImage from "../assets/images/main/main-cm-slide-image.png";
import LimitImage from "../assets/images/main/main-limit-slide-image.png";
import TimeImage from "../assets/images/main/main-time-slide-image.png";
import TitleImage from "../assets/images/main/main-title.png";

import LogoAionImage from "../assets/images/main/main-aion-logo-slide-image.png";
import LogoCinderImage from "../assets/images/main/main-cinder-logo-slide-image.png";
import LogoLimitImage from "../assets/images/main/main-limit-logo-slide-image.png";
import LogoTimeImage from "../assets/images/main/main-time-logo-slide-image.png";

import ActiveShadowImage from "../assets/images/main/main-slide-active-shadow.png";
import HardLeftDim from "../assets/images/main/main-slide-hard-left-dim.png";
import HardRightDim from "../assets/images/main/main-slide-hard-right-dim.png";
import SoftLeftDim from "../assets/images/main/main-slide-soft-left-dim.png";

import AionLogo from "../assets/images/ip/aion/ip-aion-logo.png";
import TimeTakersLogo from "../assets/images/ip/timetakers/ip-timetakers-logo.png";
import BreakersLogo from "../assets/images/ip/breakers/ip-breakers-logo.png";
import CinderLogo from "../ssets/images/ip/cinder/ip-cinder-logo.png";

import AionBg from "../assets/images/ip/aion/ip-aion-default-bg.png";
import CinderBg from "../assets/images/ip/cinder/ip-cinder-default-bg.png";
import TimeTakersBg from "../assets/images/ip/timetakers/ip-timetakers-default-bg.png";
import BreakersBg from "../assets/images/ip/breakers/ip-breakers-default-bg.png";
import IntroBg from "../assets/images/intro/intro-bg.png";

const Main = () => {
  useEffect(() => {
    const preloadImages = [
      TitleImage,
      // 메인 슬라이드
      AionImage,
      CinderImage,
      CmImage,
      LimitImage,
      TimeImage,
      TitleImage,
      LogoAionImage,
      LogoCinderImage,
      LogoLimitImage,
      LogoTimeImage,
      ActiveShadowImage,
      HardLeftDim,
      HardRightDim,
      SoftLeftDim,
      // ip 상세 배경, 로고이미지도 preload 필요
      AionLogo,
      TimeTakersLogo,
      BreakersLogo,
      CinderLogo,
      AionBg,
      CinderBg,
      TimeTakersBg,
      BreakersBg,
      IntroBg,
    ];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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

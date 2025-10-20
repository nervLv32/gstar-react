import { Route, Routes } from "react-router-dom";
import "./App.css";
import IpLayout from "./component/layout/IpLayout";
import PublicLayout from "./component/layout/PublicLayout";
import ScrollToTop from "./component/scrolltop";
import { ipRoutes, routes } from "./routes";

// S ::: Preload IMages ::: S
import AionImage from "./assets/images/main/main-aion-slide-image.webp";
import CinderImage from "./assets/images/main/main-cinder-slide-image.webp";
import CmImage from "./assets/images/main/main-cm-slide-image.webp";
import LimitImage from "./assets/images/main/main-limit-slide-image.webp";
import TimeImage from "./assets/images/main/main-time-slide-image.webp";
import TitleImage from "./assets/images/main/main-title.webp";

import LogoAionImage from "./assets/images/main/main-aion-logo-slide-image.webp";
import LogoCinderImage from "./assets/images/main/main-cinder-logo-slide-image.webp";
import LogoLimitImage from "./assets/images/main/main-limit-logo-slide-image.webp";
import LogoTimeImage from "./assets/images/main/main-time-logo-slide-image.webp";

import ActiveShadowImage from "./assets/images/main/main-slide-active-shadow.png";
import HardLeftDim from "./assets/images/main/main-slide-hard-left-dim.png";
import HardRightDim from "./assets/images/main/main-slide-hard-right-dim.png";
import SoftLeftDim from "./assets/images/main/main-slide-soft-left-dim.png";

import AionLogo from "./assets/images/ip/aion/ip-aion-logo.webp";
import TimeTakersLogo from "./assets/images/ip/timetakers/ip-timetakers-logo.webp";
import BreakersLogo from "./assets/images/ip/breakers/ip-breakers-logo.webp";
import CinderLogo from "./assets/images/ip/cinder/ip-cinder-logo.webp";

import AionBg from "./assets/images/ip/aion/ip-aion-default-bg.webp";
import AionMoBg from "./assets/images/ip/aion/ip-aion-mo-bg.webp";

import CinderBg from "./assets/images/ip/cinder/ip-cinder-default-bg.webp";
import CinderMoBg from "./assets/images/ip/cinder/ip-cinder-mo-bg.webp";

import TimeTakersBg from "./assets/images/ip/timetakers/ip-timetakers-default-bg.webp";
import TimeTakersMoBg from "./assets/images/ip/timetakers/ip-timetakers-mo-bg.webp";

import BreakersBg from "./assets/images/ip/breakers/ip-breakers-default-bg.webp";
import BreakersMoBg from "./assets/images/ip/breakers/ip-breakers-mo-bg.webp";
import IntroBg from "./assets/images/intro/intro-bg.webp";
import { useEffect } from "react";
// E ::: Preload IMages ::: E

function App() {
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
      AionMoBg,
      CinderBg,
      CinderMoBg,
      TimeTakersBg,
      TimeTakersMoBg,
      BreakersBg,
      BreakersMoBg,
      IntroBg,
    ];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      {/* <ScrollToHash /> */}
      <Routes>
        <Route element={<PublicLayout />}>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Route>

        <Route element={<IpLayout />}>
          {ipRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

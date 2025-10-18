import { Route, Routes } from "react-router-dom";
import "./App.css";
import IpLayout from "./component/layout/IpLayout";
import PublicLayout from "./component/layout/PublicLayout";
import ScrollToTop from "./component/scrolltop";
import { ipRoutes, routes } from "./routes";

// S ::: Preload IMages ::: S
import AionImage from "./assets/images/main/main-aion-slide-image.png";
import CinderImage from "./assets/images/main/main-cinder-slide-image.png";
import CmImage from "./assets/images/main/main-cm-slide-image.png";
import LimitImage from "./assets/images/main/main-limit-slide-image.png";
import TimeImage from "./assets/images/main/main-time-slide-image.png";
import TitleImage from "./assets/images/main/main-title.png";

import LogoAionImage from "./assets/images/main/main-aion-logo-slide-image.png";
import LogoCinderImage from "./assets/images/main/main-cinder-logo-slide-image.png";
import LogoLimitImage from "./assets/images/main/main-limit-logo-slide-image.png";
import LogoTimeImage from "./assets/images/main/main-time-logo-slide-image.png";

import ActiveShadowImage from "./assets/images/main/main-slide-active-shadow.png";
import HardLeftDim from "./assets/images/main/main-slide-hard-left-dim.png";
import HardRightDim from "./assets/images/main/main-slide-hard-right-dim.png";
import SoftLeftDim from "./assets/images/main/main-slide-soft-left-dim.png";

import AionLogo from "./assets/images/ip/aion/ip-aion-logo.png";
import TimeTakersLogo from "./assets/images/ip/timetakers/ip-timetakers-logo.png";
import BreakersLogo from "./assets/images/ip/breakers/ip-breakers-logo.png";
import CinderLogo from "./assets/images/ip/cinder/ip-cinder-logo.png";

import AionBg from "./assets/images/ip/aion/ip-aion-default-bg.png";
import CinderBg from "./assets/images/ip/cinder/ip-cinder-default-bg.png";
import TimeTakersBg from "./assets/images/ip/timetakers/ip-timetakers-default-bg.png";
import BreakersBg from "./assets/images/ip/breakers/ip-breakers-default-bg.png";
import IntroBg from "./assets/images/intro/intro-bg.png";
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

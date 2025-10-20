import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper as SwiperCore } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IpWrapper } from "../styles";
import { useFullpage } from "../../hooks/useFullpage";

import Header from "../../component/layout/Header";
import FloatingMenu from "../../component/ip/floatingmenu";

import ButtonIcon from "../../assets/images/ip/aion/ip-aion-button-icon.png";
import CinderLogo from "../../assets/images/ip/cinder/ip-cinder-logo.webp";

import Slide01 from "../../assets/images/ip/cinder/ip-cinder-slide01.webp";
import Slide02 from "../../assets/images/ip/cinder/ip-cinder-slide02.webp";
import Slide03 from "../../assets/images/ip/cinder/ip-cinder-slide03.webp";
import Slide04 from "../../assets/images/ip/cinder/ip-cinder-slide04.webp";
import Slide05 from "../../assets/images/ip/cinder/ip-cinder-slide05.webp";
import { useViewportHeight } from "../../hooks/useViewportHeight";

const Cinder = () => {
  const { currentSection, isFullpageEnabled } = useFullpage();
  const swiperRef = useRef<SwiperCore | null>(null);
  const [, setMoActiveIndex] = useState(0);

  // ✅ 헤더 자연스러운 숨김 제어
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    if (isFullpageEnabled && currentSection === 1) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
  }, [currentSection, isFullpageEnabled]);

  useViewportHeight(); // ✅ 훅 호출

  const [isVh, setIsVh] = useState("0");
  useEffect(() => {
    const vh = getComputedStyle(document.documentElement).getPropertyValue(
      "--vh"
    );
    setIsVh(vh);
  }, []);

  return (
    <IpWrapper className="cinder" $isVh={isVh}>
      <Header />
      <FloatingMenu />

      {/* SECTION 1 */}
      <section className="section ip-section">
        <div className="logo-text-wrap">
          <div className="logo-wrap">
            <i data-anim>
              <img src={CinderLogo} alt="CINDER CITY 로고" />
            </i>
          </div>

          <div className="text-button-wrapper">
            <div className="text-info-wrap">
              <div className="text-wrap">
                <h2>
                  <p data-anim>파괴된 세상을 구하라</p>
                </h2>
                <span data-anim>
                  메가시티 서울을 무대로 <br className="mo-br" />
                  펼쳐지는 오픈월드 택티컬 슈터
                </span>
              </div>

              <div className="info-text" data-anim>
                NC G-STAR 2025에서 신더시티를 더 빠르게 만나보세요.
              </div>
            </div>

            <div className="button-wrap" data-anim>
              <Link
                to="https://cinder-city.com/"
                className="default"
                target="_blank"
              >
                <p>공식홈페이지 바로가기</p>
              </Link>
              <Link
                to="https://www.youtube.com/@CINDERCITYGAME"
                className="point"
                target="_blank"
              >
                <i>
                  <img src={ButtonIcon} alt="버튼 아이콘" />
                </i>
                <p>공식 유튜브 바로가기</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="section info-section">
        <div className="big-inner">
          <div className="section-wrapper">
            <div className="text-wrap">
              <h2 data-anim>CINDER CITY</h2>
              <span data-anim>오픈월드 택티컬 슈터</span>
              <p data-anim>
                엔씨소프트 산하 Big fire Games에서 자체 개발한 CINDER CITY는
                오픈월드 택티컬 슈터 게임으로,
                <br />
                AAA 내러티브를 즐길 수 있는 오픈월드 기반 멀티 플레이 게임을
                지향합니다. <br className="mo-br" />
                21세기 현대 서울을 배경으로, <br />
                23세기의 미래 기술이 공존하는 가상의 세계를 표현하고 있으며,
                What if 세계관의 깊이 있는 <br />
                내러티브로 플레이어는 광활한 오픈월드에서 미션을 수행하면서
                자연스럽게 협력하도록 개발 중입니다. <br className="mo-br" />
                <br />
                또한 캠페인 모드를 통해 각 영웅의 이야기 속으로 몰입하여 파괴된
                서울의 세계를 직접 체험하게 됩니다.
              </p>
            </div>

            <div className="swiper-box" data-anim>
              <Swiper
                modules={[Pagination]}
                pagination={{ type: "progressbar" }}
                onSwiper={(swiper: SwiperCore) => (swiperRef.current = swiper)}
                onSlideChange={(swiper: SwiperCore) =>
                  setMoActiveIndex(swiper.activeIndex)
                }
                spaceBetween={14}
                slidesPerView={1.05}
                breakpoints={{
                  1200: { slidesPerView: 2, spaceBetween: 22 },
                  768: { slidesPerView: 1.4, spaceBetween: 14 },
                  500: { slidesPerView: 1.05, spaceBetween: 10 },
                }}
              >
                {[Slide01, Slide02, Slide03, Slide04, Slide05].map((img, i) => (
                  <SwiperSlide key={i}>
                    <i>
                      <img src={img} alt={`CINDER CITY 슬라이드 ${i + 1}`} />
                    </i>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </IpWrapper>
  );
};

export default Cinder;

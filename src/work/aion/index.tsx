import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper as SwiperCore } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useFullpage } from "../../hooks/useFullpage";
import { IpWrapper } from "../styles";

import FloatingMenu from "../../component/ip/floatingmenu";
import Header from "../../component/layout/Header";

import ButtonIcon from "../../assets/images/ip/aion/ip-aion-button-icon.png";
import AionLogo from "../../assets/images/ip/aion/ip-aion-logo.png";

import Slide01 from "../../assets/images/ip/aion/ip-aion-slide01.png";
import Slide02 from "../../assets/images/ip/aion/ip-aion-slide02.png";
import Slide03 from "../../assets/images/ip/aion/ip-aion-slide03.jpg";
import Slide04 from "../../assets/images/ip/aion/ip-aion-slide04.jpg";
import Slide05 from "../../assets/images/ip/aion/ip-aion-slide05.jpg";

const Aion = () => {
  const { currentSection, isFullpageEnabled } = useFullpage();
  const swiperRef = useRef<SwiperCore | null>(null);
  const [, setMoActiveIndex] = useState(0);
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    if (isFullpageEnabled && currentSection === 1) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
  }, [currentSection, isFullpageEnabled]);
  return (
    <IpWrapper className="aion">
      <Header />
      <FloatingMenu />

      {/* SECTION 1 */}
      <section className="section ip-section">
        <div className="logo-text-wrap">
          <i data-anim>
            <img src={AionLogo} alt="AION2 로고" />
          </i>

          <div className="text-button-wrapper">
            <div className="text-info-wrap">
              <div className="text-wrap">
                <h2 className="atreia">
                  <p data-anim>두 개의 하늘,</p>
                  <p data-anim>하나의 영광</p>
                </h2>
                <span className="atreia" data-anim>
                  2025. 11. 19 GRAND OPEN
                </span>
              </div>

              <div className="info-text" data-anim>
                NC G-STAR 2025에서 <br className="mo-br" />
                AION2를 더욱 빠르게 만나보세요.
              </div>
            </div>

            <div className="button-wrap" data-anim>
              <Link
                to="https://aion2.plaync.com/"
                className="default"
                target="_blank"
              >
                <p>공식홈페이지 바로가기</p>
              </Link>
              <Link
                to="https://www.youtube.com/@AION2"
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
              <h2 data-anim>AION2</h2>
              <span data-anim>MMORPG</span>
              <p data-anim>
                하나의 게임을 넘어, 수많은 추억이 살아 숨 쉬는 세계 AION <br />
                그 유산 위에, 마침내 완전판으로 돌아온 AION2가 그려낸 새로운
                하늘이 펼쳐집니다.
                <br />
                <br className="mo-br" />
                각자의 개성이 더욱 뚜렷해진 {"<"}8종의 오리지널 클래스{">"},
                무한한 가능성을 담아낸 {"<"}극한의 커스터마이징{">"}, <br />
                원작 대비 36배 확장된 거대한 월드에서 펼쳐지는 {"<"}경계 없는
                탐험{">"}, 그리고 훨씬 {"<"}풍부해진 콘텐츠{">"}와, <br />
                세대를 이어온 전투의 심장 {"<"}대규모 RvR전장 어비스{">"}까지
                완전한 MMORPG의 세계가 눈앞에 펼쳐집니다.
                <br />
                <br className="mo-br" />
                11월 19일, AION2의 새로운 여정을 준비하세요.
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
                slidesPerView={1}
                breakpoints={{
                  1200: { slidesPerView: 2, spaceBetween: 22 },
                  768: { slidesPerView: 1.4, spaceBetween: 14 },
                  500: { slidesPerView: 1.1, spaceBetween: 10 },
                }}
              >
                {[Slide01, Slide02, Slide03, Slide04, Slide05].map((img, i) => (
                  <SwiperSlide key={i}>
                    <i>
                      <img src={img} alt={`AION2 슬라이드 ${i + 1}`} />
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

export default Aion;

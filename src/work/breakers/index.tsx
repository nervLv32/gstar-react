import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper as SwiperCore } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IpWrapper } from "../styles";
import { useFullpage } from "../../hooks/useFullpage"; // ✅ 공용 훅

import FloatingMenu from "../../component/ip/floatingmenu";
import Header from "../../component/layout/Header";

import ButtonIcon from "../../assets/images/ip/aion/ip-aion-button-icon.png";
import BreakersLogo from "../../assets/images/ip/breakers/ip-breakers-logo.png";

import Slide01 from "../../assets/images/ip/breakers/ip-breakers-slide01.jpg";
import Slide02 from "../../assets/images/ip/breakers/ip-breakers-slide02.png";
import Slide03 from "../../assets/images/ip/breakers/ip-breakers-slide03.jpg";
import Slide04 from "../../assets/images/ip/breakers/ip-breakers-slide04.png";
import Slide05 from "../../assets/images/ip/breakers/ip-breakers-slide05.jpg";
import { useViewportHeight } from "../../hooks/useViewportHeight";

const Breakers = () => {
  const { currentSection, isFullpageEnabled } = useFullpage(); // ✅ 풀페이지 훅 사용

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

  useViewportHeight(); // ✅ 훅 호출

  const [isVh, setIsVh] = useState("0");
  useEffect(() => {
    const vh = getComputedStyle(document.documentElement).getPropertyValue(
      "--vh"
    );
    setIsVh(vh);
  }, []);

  return (
    <IpWrapper className="breakers" $isVh={isVh}>
      <Header />
      <FloatingMenu />

      {/* SECTION 1 */}
      <section className="section ip-section">
        <div className="logo-text-wrap">
          <div className="logo-wrap">
            <i data-anim>
              <img src={BreakersLogo} alt="LIMIT ZERO BREAKERS 로고" />
            </i>
          </div>

          <div className="text-button-wrapper">
            <div className="text-info-wrap">
              <div className="text-wrap">
                <h2>
                  <p data-anim>
                    세상을 구하지 않는다, <br className="tablet-br" />
                    나를 구하는 이야기
                  </p>
                </h2>
                <span data-anim>2026년 상반기 출시</span>
              </div>
            </div>

            <div className="button-wrap" data-anim>
              <Link
                to="https://breakers.plaync.com/ko-kr/conts/teasing?redirect=false&newsletter=true"
                className="default"
                target="_blank"
              >
                <p>공식홈페이지 바로가기</p>
              </Link>
              <Link
                to="https://www.youtube.com/@BREAKERS_KRofficial"
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
      <section className={`section info-section`}>
        <div className="big-inner">
          <div className="section-wrapper">
            <div className="text-wrap">
              <h2 data-anim>리밋 제로 브레이커스</h2>
              <span data-anim>애니메이션 액션 RPG</span>
              <p data-anim>
                다채로운 판타지 세계를 무대로 한 애니메이션 액션 RPG『LIMIT ZERO
                BREAKERS』.
                <br />
                다양한 액션 스타일의 캐릭터를 조합하여 던전과 거대 마물을
                공략하는 스릴 넘치는 전투를 즐길 수 있습니다.
                <br />
                모든 소원을 이룰 수 있다는 "신들의 서고"를 목표로 수많은 섬들로
                이루어진 세계 "세라피아"를 모험하세요.
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
                      <img
                        src={img}
                        alt={`LIMIT ZERO BREAKERS 슬라이드 ${i + 1}`}
                      />
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

export default Breakers;

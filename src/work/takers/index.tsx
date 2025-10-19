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
import TimeTakersLogo from "../../assets/images/ip/timetakers/ip-timetakers-logo.png";

import Slide01 from "../../assets/images/ip/timetakers/ip-timetakers-slide01.png";
import Slide02 from "../../assets/images/ip/timetakers/ip-timetakers-slide02.png";
import Slide03 from "../../assets/images/ip/timetakers/ip-timetakers-slide03.png";
import Slide04 from "../../assets/images/ip/timetakers/ip-timetakers-slide04.png";

const TimeTakers = () => {
  const { currentSection, isFullpageEnabled } = useFullpage();
  const swiperRef = useRef<SwiperCore | null>(null);
  const [, setMoActiveIndex] = useState(0);

  // ✅ 헤더 자연스럽게 숨기기
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
    <IpWrapper className="timetakers">
      <Header />
      <FloatingMenu />

      {/* SECTION 1 */}
      <section className="section ip-section">
        <div className="logo-text-wrap">
          <i data-anim>
            <img src={TimeTakersLogo} alt="타임 테이커즈 로고" />
          </i>

          <div className="text-button-wrapper">
            <div className="text-info-wrap">
              <div className="text-wrap">
                <h2>
                  <p data-anim>1초의 시간이,</p>
                </h2>
                <h2>
                  <p data-anim>한 발의 총알보다 강력한 전장</p>
                </h2>
              </div>
            </div>

            <div className="button-wrap" data-anim>
              <Link to="/" className="default">
                <p>공식홈페이지 바로가기</p>
              </Link>
              <Link to="/" className="point">
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
              <h2 data-anim>타임 테이커즈</h2>
              <span data-anim>타임 서바이벌 슈터</span>
              <p data-anim>
                타임 테이커즈는 미스틸게임즈가 개발하고 엔씨소프트가 서비스
                예정인 차세대 타임 서바이벌 슈터입니다. <br />
                <br className="mo-br" />
                타임 에너지를 모아 생존과 성장을 동시에 관리하는 독창적인 전투
                시스템을 갖췄으며, 적을 처치해 상대의 수명을 탈취할 수 있습니다.{" "}
                <br />
                빠른 템포의 전투, 개성적인 캐릭터 스킬, 다양한 효과를 지닌 앱의
                조합이 어우러져 매 순간 다른 전략과 결과를 만들어냅니다. <br />
                시공을 넘나드는 세계관을 배경으로, PC와 콘솔 간 크로스플레이를
                지원하며, 2026년 글로벌 출시를 목표로 개발 중입니다.
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
                {[Slide01, Slide02, Slide03, Slide04].map((img, i) => (
                  <SwiperSlide key={i}>
                    <i>
                      <img src={img} alt={`타임 테이커즈 슬라이드 ${i + 1}`} />
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

export default TimeTakers;

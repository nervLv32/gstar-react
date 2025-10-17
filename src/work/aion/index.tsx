import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { IpWrapper } from "../styles";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Autoplay } from "swiper/modules";

import AionLogo from "../../assets/images/ip/aion/ip-aion-logo.png";
import ButtonIcon from "../../assets/images/ip/aion/ip-aion-button-icon.png";
import FloatingMenu from "../../component/ip/floatingmenu";

import Slide01 from "../../assets/images/ip/aion/ip-aion-slide01.png";
import Slide02 from "../../assets/images/ip/aion/ip-aion-slide02.png";
import Slide03 from "../../assets/images/ip/aion/ip-aion-slide03.jpg";
import Slide04 from "../../assets/images/ip/aion/ip-aion-slide04.jpg";
import Slide05 from "../../assets/images/ip/aion/ip-aion-slide05.jpg";

import { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollToPlugin);

const Aion = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const isFirstRender = useRef(true);
  const initialAnimPlayed = useRef(false); // ✅ 초기 애니메이션 2회 방지용

  // ✅ 섹션 등록 및 초기 세팅
  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll(".section"));
    const y = window.scrollY;
    const index = Math.round(y / window.innerHeight);
    setCurrentSection(index);

    // 초기 상태 세팅
    sectionsRef.current.forEach((sec, i) => {
      const items = sec.querySelectorAll("[data-anim]");
      gsap.set(items, { opacity: 0, y: 40 });

      if (i === index && !initialAnimPlayed.current) {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2,
        });
        sec.classList.add("active");
        initialAnimPlayed.current = true; // ✅ 초기 렌더 시 1회만 실행
      }
    });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current = Array.from(document.querySelectorAll(".section"));
      const y = window.scrollY;
      const index = Math.round(y / window.innerHeight);
      setCurrentSection(index);

      sectionsRef.current.forEach((sec, i) => {
        const items = sec.querySelectorAll("[data-anim]");
        gsap.set(items, { opacity: 0, y: 40 });

        if (i === index) {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.2,
          });
          sec.classList.add("active");
        }
      });
    });

    return () => ctx.revert(); // ✅ cleanup 시점에 기존 트윈 제거
  }, []);

  // ✅ 휠 이벤트 제어
  useEffect(() => {
    let ticking = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating || ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        if (e.deltaY > 0) setCurrentSection((prev) => Math.min(prev + 1, 1));
        else setCurrentSection((prev) => Math.max(prev - 1, 0));
        ticking = false;
      });
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: true,
    });
    return () => window.removeEventListener("wheel", handleWheel, true);
  }, [isAnimating]);

  // ✅ 섹션 전환 시 애니메이션
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const allSections = sectionsRef.current;
    const targetY = window.innerHeight * currentSection;
    const prevSections = allSections.filter((_, i) => i !== currentSection);
    const next = allSections[currentSection];

    if (!next) return;

    setIsAnimating(true);
    gsap.killTweensOf(window);

    // 🔥 이전 섹션 전부 초기화 (진행중 트윈 포함)
    prevSections.forEach((sec) => {
      const items = sec.querySelectorAll("[data-anim]");
      gsap.killTweensOf(items);
      gsap.set(items, { opacity: 0, y: 40 });
    });

    // scrollTo 부드럽게 이동
    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: targetY },
      ease: "power3.inOut",
      onComplete: () => {
        const nextItems = next.querySelectorAll("[data-anim]");
        gsap.killTweensOf(nextItems);
        gsap.fromTo(
          nextItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.1,
          }
        );
        setIsAnimating(false);
      },
    });

    // active class 토글
    allSections.forEach((sec, i) =>
      sec.classList.toggle("active", i === currentSection)
    );
  }, [currentSection]);

  // ✅ Swiper
  const [moActiveIndex, setMoActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <IpWrapper className="aion">
      <FloatingMenu />

      {/* SECTION 1 */}
      <section className="section ip-section">
        <div className="logo-text-wrap">
          <i data-anim>
            <img src={AionLogo} alt="" />
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
                2025 NC G-STAR에서 AION2를 더욱 빠르게 만나보세요.
              </div>
            </div>

            <div className="button-wrap" data-anim>
              <Link to="/" className="default">
                <p>공식홈페이지 바로가기</p>
              </Link>
              <Link to="/" className="point">
                <i>
                  <img src={ButtonIcon} alt="" />
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
              <h2 data-anim>AION 2</h2>
              <span data-anim>MMORPG</span>
              <p data-anim>
                하나의 게임을 넘어, 수많은 추억이 살아 숨 쉬는 세계 AION
                <br />
                그 유산 위에, 마침내 완전판으로 돌아온 AION2가 그려낸 새로운
                하늘이 펼쳐집니다.
                <br />
                각자의 개성이 더욱 뚜렷해진 {"<"}8종의 오리지널 클래스{">"},
                무한한 가능성을 담아낸 {"<"}극한의 커스터마이징{">"}, <br />
                원작 대비 36배 확장된 거대한 월드에서 펼쳐지는 {"<"}경계 없는
                탐험{">"}, 그리고 훨씬 {"<"}풍부해진 콘텐츠{">"}와, <br />
                세대를 이어온 전투의 심장 {"<"}대규모 RvR전장 어비스{">"}까지
                완전한 MMORPG의 세계가 눈앞에 펼쳐집니다.
                <br />
                11월 19일, AION2의 새로운 여정을 준비하세요.
              </p>
            </div>

            {/* ✅ Swiper에 감싸는 div 추가 + data-anim 적용 */}
            <div className="swiper-box" data-anim>
              <Swiper
                modules={[Pagination]}
                pagination={{ type: "progressbar" }}
                onSwiper={(swiper: SwiperCore) => (swiperRef.current = swiper)}
                onSlideChange={(swiper: SwiperCore) =>
                  setMoActiveIndex(swiper.activeIndex)
                }
                spaceBetween={22}
                slidesPerView={2}
              >
                <SwiperSlide>
                  <i>
                    <img src={Slide01} alt="" />
                  </i>
                </SwiperSlide>
                <SwiperSlide>
                  <i>
                    <img src={Slide02} alt="" />
                  </i>
                </SwiperSlide>
                <SwiperSlide>
                  <i>
                    <img src={Slide03} alt="" />
                  </i>
                </SwiperSlide>
                <SwiperSlide>
                  <i>
                    <img src={Slide04} alt="" />
                  </i>
                </SwiperSlide>
                <SwiperSlide>
                  <i>
                    <img src={Slide05} alt="" />
                  </i>
                </SwiperSlide>
                <div className="swiper-pagination-progressbar" />
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </IpWrapper>
  );
};

export default Aion;

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IpWrapper } from "../styles";

import ButtonIcon from "../../assets/images/ip/aion/ip-aion-button-icon.png";
import CinderLogo from "../../assets/images/ip/cinder/ip-cinder-logo.png";
import FloatingMenu from "../../component/ip/floatingmenu";

import Slide01 from "../../assets/images/ip/cinder/ip-cinder-slide01.png";
import Slide02 from "../../assets/images/ip/cinder/ip-cinder-slide02.png";
import Slide03 from "../../assets/images/ip/cinder/ip-cinder-slide03.png";
import Slide04 from "../../assets/images/ip/cinder/ip-cinder-slide04.png";
import Slide05 from "../../assets/images/ip/cinder/ip-cinder-slide05.png";

import { Swiper as SwiperCore } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

gsap.registerPlugin(ScrollToPlugin);

const Cinder = () => {
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
  const [, setMoActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <IpWrapper className="cinder">
      <FloatingMenu />

      {/* SECTION 1 */}
      <section className="section ip-section">
        <div className="logo-text-wrap">
          <i data-anim>
            <img src={CinderLogo} alt="" />
          </i>

          <div className="text-button-wrapper">
            <div className="text-info-wrap">
              <div className="text-wrap">
                <h2 className="">
                  <p data-anim>파괴된 세상을 구하라</p>
                </h2>
                <span className="" data-anim>
                  메가시티 서울을 무대로 펼쳐지는 오픈월드 택티컬 슈터
                </span>
              </div>

              <div className="info-text" data-anim>
                2025 NC G-STAR에서 신더시티를 더 빠르게 만나보세요
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
              <h2 data-anim>CINDER CITY</h2>
              <span data-anim>오픈월드 택티컬 슈터</span>
              <p data-anim>
                엔씨소프트 산하 Big fire Games에서 자체 개발한 CINDER CITY는
                오픈월드 택티컬 슈터 게임으로,
                <br />
                AAA 내러티브를 즐길 수 있는 오픈월드 기반 멀티 플레이 게임을
                지향합니다. 21세기 현대 서울을 배경으로 <br />
                23세기의 미래 기술이 공존하는 가상의 세계를 표현하고 있으며,
                What if 세계관의 깊이 있는 <br />
                내러티브로 플레이어는 광활한 오픈월드에서 미션을 수행하면서
                자연스럽게 협력하도록 개발 중입니다. <br />
                또한 캠페인 모드를 통해 각 영웅의 이야기 속으로 몰입하여 파괴된
                서울에서의 세계를 직접 체험하게 됩니다.
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

export default Cinder;

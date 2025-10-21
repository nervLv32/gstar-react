import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { MainSwiperWrapper } from "./styles";

import AionImage from "../../../assets/images/main/main-aion-slide-image.webp";
import CinderImage from "../../../assets/images/main/main-cinder-slide-image.webp";
import CmImage from "../../../assets/images/main/main-cm-slide-image.webp";
import LimitImage from "../../../assets/images/main/main-limit-slide-image.webp";
import TimeImage from "../../../assets/images/main/main-time-slide-image.webp";
import TitleImage from "../../../assets/images/main/main-title.webp";

const list = [
  {
    link: "aion2",
    uid: 1,
    img: AionImage,
    title: "AION2",
    subTitle: "두 개의 하늘, 하나의 영광",
  },
  {
    link: "breakers",
    uid: 2,
    img: LimitImage,
    title: "리밋 제로 브레이커스",
    subTitle: "애니메이션 속으로 스며들 순간, 애니메이션 액션 RPG",
  },
  { link: "", uid: 3, img: CmImage },
  {
    link: "timetakers",
    uid: 4,
    img: TimeImage,
    title: "타임 테이커즈",
    subTitle: "“시간”으로 진화한 차세대 서바이벌 슈터",
  },

  {
    link: "cinder",
    uid: 5,
    img: CinderImage,
    title: "신더시티",
    subTitle: "새로운 슈터 장르의 시작",
  },

  {
    link: "aion2",
    uid: 6,
    img: AionImage,
    title: "AION2",
    subTitle: "두 개의 하늘, 하나의 영광",
  },
  {
    link: "breakers",
    uid: 7,
    img: LimitImage,
    title: "리밋 제로 브레이커스",
    subTitle: "애니메이션 속으로 스며들 순간, 애니메이션 액션 RPG",
  },
  { link: "", uid: 8, img: CmImage },
  {
    link: "timetakers",
    uid: 9,
    img: TimeImage,
    title: "타임 테이커즈",
    subTitle: "“시간”으로 진화한 차세대 서바이벌 슈터",
  },

  {
    link: "cinder",
    uid: 10,
    img: CinderImage,
    title: "신더시티",
    subTitle: "새로운 슈터 장르의 시작",
  },
];

const MainSwiper = () => {
  const [moActiveIndex, setMoActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsFirstRender(false), 1500);
    return () => clearTimeout(t);
  }, []);

  /** ✅ 마우스 위치에 따른 강한 3D 회전 효과 */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (window.innerWidth < 1024) return; // 🔹 1024px 미만에서는 아무 동작 안 함

    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const rotateY = percentX * -7;
    const rotateX = percentY * 7;

    target.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1)
  `;
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (window.innerWidth < 1024) return; // 🔹 모바일에서는 초기화도 스킵
    e.currentTarget.style.transform = `
    perspective(1000px)
    rotateX(0deg)
    rotateY(0deg)
    scale(1)
  `;
  };
  return (
    <MainSwiperWrapper className={isFirstRender ? "intro" : ""}>
      <h2 className="title-text">
        <i>
          <img src={TitleImage} alt="" className="pc-image" />
        </i>
      </h2>

      <div className="swiper-box">
        <Swiper
          onSwiper={(s: SwiperCore) => (swiperRef.current = s)}
          onSlideChange={(s: SwiperCore) => {
            setMoActiveIndex(s.realIndex);

            // ✅ 모든 회전 초기화
            const images = document.querySelectorAll(
              ".char-image"
            ) as NodeListOf<HTMLDivElement>;
            images.forEach((el) => {
              el.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        rotateZ(0deg)
        scale(1)
      `;
            });
          }}
          slidesPerView={2.2}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          speed={800}
          breakpoints={{
            1200: { slidesPerView: 5, spaceBetween: 16 },
            1024: { slidesPerView: 4.5, spaceBetween: 14 },
            900: { slidesPerView: 3.9, spaceBetween: 14 },
            768: { slidesPerView: 3.1, spaceBetween: 12 },
            500: { slidesPerView: 2.7, spaceBetween: 10 },
          }}
        >
          {list.map((item, idx) => {
            const total = list.length;
            const stepsRight = (idx - moActiveIndex + total) % total; // 0..total-1
            let side: "center" | "left" | "right" = "center";
            let dist = 0;

            if (stepsRight === 0) {
              side = "center";
              dist = 0;
            } else if (stepsRight <= total / 2) {
              side = "right";
              dist = Math.min(stepsRight, 2); // 1: 가까움(soft), 2: 멀리(hard)
            } else {
              side = "left";
              dist = Math.min(total - stepsRight, 2);
            }

            return (
              <SwiperSlide
                key={item.uid}
                className={`contents-0${idx + 1} ${side} dist-${dist}`}
              >
                <Link to={item.link ? `/work/${item.link}` : "/"}>
                  <i
                    className="char-image"
                    onMouseMove={
                      moActiveIndex === idx // ✅ active 슬라이드일 때만 작동
                        ? handleMouseMove
                        : undefined
                    }
                    onMouseLeave={
                      moActiveIndex === idx ? handleMouseLeave : undefined
                    }
                  >
                    <img src={item.img} alt="" />
                  </i>

                  {/* dim 레이어를 고정(배경 교체 없음) */}
                  <div className="dim-wrap">
                    <span className="dim left soft" />
                    <span className="dim left hard" />
                    <span className="dim right soft" />
                    <span className="dim right hard" />
                  </div>

                  {/* {item.logoImg && (
                    <i className="logo-image">
                      <img src={item.logoImg} alt="" />
                    </i>
                  )} */}

                  {item.title && item.subTitle && (
                    <div className="text-wrap">
                      <h2>{item.title}</h2>
                      <h4>{item.subTitle}</h4>
                    </div>
                  )}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </MainSwiperWrapper>
  );
};

export default MainSwiper;

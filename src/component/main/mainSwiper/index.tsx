import React, { useState, useEffect, useRef } from "react";
import { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import { MainSwiperWrapper } from "./styles";

import CmImage from "../../../assets/images/main/main-cm-slide-image.png";
import LimitImage from "../../../assets/images/main/main-limit-slide-image.png";
import CinderImage from "../../../assets/images/main/main-cinder-slide-image.png";
import AionImage from "../../../assets/images/main/main-aion-slide-image.png";
import TimeImage from "../../../assets/images/main/main-time-slide-image.png";
import TitleImage from "../../../assets/images/main/main-title.png";

import LogoAionImage from "../../../assets/images/main/main-aion-logo-slide-image.png";
import LogoLimitImage from "../../../assets/images/main/main-limit-logo-slide-image.png";
import { Link } from "react-router-dom";

const list = [
  {
    id: "aion",
    img: LimitImage,
    logoImg: LogoAionImage,
  },
  {
    id: "limit",
    img: CmImage,
    logoImg: LogoLimitImage,
  },
  {
    id: "aion",
    img: AionImage,
    logoImg: LogoAionImage,
  },
  {
    id: "limit",
    img: CmImage,
    logoImg: LogoLimitImage,
  },
  {
    id: "aion",
    img: CmImage,
    logoImg: LogoAionImage,
  },
  {
    id: "limit",
    img: LimitImage,
    logoImg: LogoLimitImage,
  },
  {
    id: "aion",
    img: CmImage,
    logoImg: LogoAionImage,
  },
  {
    id: "limit",
    img: AionImage,
    logoImg: LogoLimitImage,
  },
  {
    id: "aion",
    img: CmImage,
    logoImg: LogoAionImage,
  },
  {
    id: "aion",
    img: CmImage,
    logoImg: LogoAionImage,
  },
];
const MainSwiper = () => {
  const [moActiveIndex, setMoActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperCore | null>(null);
  const handleNext = () => {
    if (!swiperRef.current) return;

    if (moActiveIndex < list.length - 1) {
      const nextIndex = moActiveIndex + 1;
      swiperRef.current.slideTo(nextIndex);
      setMoActiveIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;

    if (moActiveIndex > 0) {
      const prevIndex = moActiveIndex - 1;
      swiperRef.current.slideTo(prevIndex);
      setMoActiveIndex(prevIndex);
    }
  };

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirstRender(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainSwiperWrapper className={isFirstRender ? "intro" : ""}>
      <h2 className="title-text">
        <i>
          <img src={TitleImage} alt="" />
        </i>
        {/* <span className="dim"></span> */}
      </h2>
      <div className="swiper-box">
        <Swiper
          onSwiper={(swiper: SwiperCore) => (swiperRef.current = swiper)}
          onSlideChange={(swiper: SwiperCore) =>
            setMoActiveIndex(swiper.activeIndex)
          }
          slidesPerView={5}
          spaceBetween={16}
          centeredSlides={true}
          loop={true}
          speed={800}

          // loopAdditionalSlides={10}
          // grapCursor={true}
        >
          {list.map((item, idx) => (
            <SwiperSlide key={idx} className={`contents-0${idx + 1}`}>
              <Link to="/work/aion2">
                <i className="char-image">
                  <img src={item.img} alt="" />
                </i>
                <i className={`${item.id} logo-image`}>
                  <img src={item.logoImg} alt="" />
                </i>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </MainSwiperWrapper>
  );
};

export default MainSwiper;

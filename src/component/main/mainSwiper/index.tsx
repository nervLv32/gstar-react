import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { MainSwiperWrapper } from "./styles";

import AionImage from "../../../assets/images/main/main-aion-slide-image.png";
import CinderImage from "../../../assets/images/main/main-cinder-slide-image.png";
import CmImage from "../../../assets/images/main/main-cm-slide-image.png";
import LimitImage from "../../../assets/images/main/main-limit-slide-image.png";
import TimeImage from "../../../assets/images/main/main-time-slide-image.png";
import TitleImage from "../../../assets/images/main/main-title.png";

import { Link } from "react-router-dom";
import LogoAionImage from "../../../assets/images/main/main-aion-logo-slide-image.png";
import LogoCinderImage from "../../../assets/images/main/main-cinder-logo-slide-image.png";
import LogoLimitImage from "../../../assets/images/main/main-limit-logo-slide-image.png";
import LogoTimeImage from "../../../assets/images/main/main-time-logo-slide-image.png";
const list = [
  { uid: 1, img: AionImage, logoImg: LogoAionImage },
  { uid: 2, img: CinderImage, logoImg: LogoCinderImage },
  { uid: 3, img: CmImage, logoImg: null },
  { uid: 4, img: TimeImage, logoImg: LogoTimeImage },
  { uid: 5, img: LimitImage, logoImg: LogoLimitImage },

  { uid: 6, img: AionImage, logoImg: LogoAionImage },
  { uid: 7, img: CinderImage, logoImg: LogoCinderImage },
  { uid: 8, img: CmImage, logoImg: null },
  { uid: 10, img: TimeImage, logoImg: LogoTimeImage },
  { uid: 9, img: LimitImage, logoImg: LogoLimitImage },
];

const MainSwiper = () => {
  const [moActiveIndex, setMoActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperCore | null>(null);

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
            setMoActiveIndex(swiper.realIndex)
          }
          slidesPerView={5}
          spaceBetween={16}
          centeredSlides={true}
          loop={true}
          speed={800}

          // loopAdditionalSlides={10}
          // grapCursor={true}
        >
          {list.map((item, idx) => {
            let positionClass = "";
            const total = list.length;
            const diff = (idx - moActiveIndex + total) % total;

            if (diff === 0) positionClass = "center";
            else if (diff <= total / 2) positionClass = "right";
            else positionClass = "left";

            return (
              <SwiperSlide
                key={item.uid}
                className={`contents-0${idx + 1} ${positionClass}`}
              >
                <Link to="/work/aion2">
                  <i className="char-image">
                    <img src={item.img} alt="" />
                  </i>
                  <span className="dim"></span>
                  {item.logoImg && (
                    <i className={`logo-image`}>
                      <img src={item.logoImg} alt="" />
                    </i>
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

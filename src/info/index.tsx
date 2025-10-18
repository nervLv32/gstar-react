import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { InfoWrapper } from "./styles";

import "swiper/css";
import "swiper/css/pagination";

import BoothImage from "../assets/images/info/info-booth.png";
import MainImage01 from "../assets/images/info/info-main-slide-image01.png";
import MainImage02 from "../assets/images/info/info-main-slide-image02.png";
import MainImage03 from "../assets/images/info/info-main-slide-image03.png";
import MainImage04 from "../assets/images/info/info-main-slide-image04.png";

import RestImage01 from "../assets/images/info/info-rest-slide-image01.png";
import RestImage02 from "../assets/images/info/info-rest-slide-image02.png";

import BoothImage01 from "../assets/images/info/info-booth-slide-image01.png";
import BoothImage02 from "../assets/images/info/info-booth-slide-image02.png";

import NextIcon from "../assets/images/info/info-slide-next-arrow.png";
import PrevIcon from "../assets/images/info/info-slide-prev-arrow.png";

// ✅ 카테고리별 슬라이드 데이터
const slideData = {
  main: [
    { img: MainImage01 },
    { img: MainImage02 },
    { img: MainImage03 },
    { img: MainImage04 },
  ],
  rest: [{ img: RestImage01 }, { img: RestImage02 }],
  booth: [{ img: BoothImage01 }, { img: BoothImage02 }],
};

const Info = () => {
  const [isCategory, setIsCategory] = useState<"main" | "rest" | "booth">(
    "main"
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleNext = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const slides = slideData[isCategory];
    if (activeIndex < slides.length - 1) {
      const next = activeIndex + 1;
      swiper.slideTo(next);
      setActiveIndex(next);
    }
  };

  const handlePrev = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (activeIndex > 0) {
      const prev = activeIndex - 1;
      swiper.slideTo(prev);
      setActiveIndex(prev);
    }
  };

  // ✅ 카테고리 변경 시 인덱스 초기화 + 첫 슬라이드로 이동
  useEffect(() => {
    setActiveIndex(0);
    swiperRef.current?.slideTo(0);
  }, [isCategory]);

  const currentSlides = slideData[isCategory];

  return (
    <InfoWrapper>
      <div className="info-visual-section">
        <div className="info-inner">
          <h3 className="vitro">부스 위치 안내</h3>
          <div className="img-text-wrap">
            <i>
              <img src={BoothImage} alt="" />
            </i>
            <p>
              NC 부스는 제1 전시장 메인부스 A06, 휴게공간 C13,
              <br />
              벡스코 2홀 정문 앞에 야외부스가 마련되어 있습니다.
            </p>
          </div>
        </div>
      </div>

      <div className="nc-section">
        <div className="big-inner">
          <div className="tab-wrapper">
            <ul>
              {(["main", "rest", "booth"] as const).map((key) => (
                <li
                  key={key}
                  className={`${isCategory === key ? "active" : ""} vitro`}
                  onClick={() => setIsCategory(key)}
                >
                  {key === "main"
                    ? "메인 부스"
                    : key === "rest"
                    ? "휴게 공간"
                    : "야외 부스"}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="slide-wrapper">
          <div className="slide-inner">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              onSwiper={(swiper: SwiperCore) => (swiperRef.current = swiper)}
              onSlideChange={(swiper: SwiperCore) =>
                setActiveIndex(swiper.activeIndex)
              }
              slidesPerView={1}
              spaceBetween={0}
            >
              {currentSlides.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <i>
                    <img src={item.img} alt="" />
                  </i>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="arrow-btn-wrap">
              <button
                className="slide-arrow prev"
                onClick={handlePrev}
                disabled={activeIndex === 0}
              >
                <i>
                  <img src={PrevIcon} alt="" />
                </i>
              </button>
              <button
                className="slide-arrow next"
                onClick={handleNext}
                disabled={activeIndex === currentSlides.length - 1}
              >
                <i>
                  <img src={NextIcon} alt="" />
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </InfoWrapper>
  );
};

export default Info;

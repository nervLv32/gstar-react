import React, { useEffect, useRef, useState } from "react";
import { GstarBoothSectionWrapper } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import GstarListBg01HoverImage01 from "../../../assets/images/main/gstar-booth-list01-hover-img01.png";
import GstarListBg01HoverImage02 from "../../../assets/images/main/gstar-booth-list01-hover-img02.png";
import GstarListBg02HoverImage01 from "../../../assets/images/main/gstar-booth-list02-hover-img01.png";
import GstarListBg02HoverImage02 from "../../../assets/images/main/gstar-booth-list02-hover-img02.png";

import GstarListBg01Hover from "../../../assets/images/main/gstar-booth-list01-hover-bg.png";
import GstarListBg02Hover from "../../../assets/images/main/gstar-booth-list02-hover-bg.png";
import GstarListBg03Hover from "../../../assets/images/main/gstar-booth-list03-hover-bg.png";

const ENTER_RATIO = 0.5;

function setHash(hash: string) {
  const base = window.location.pathname + window.location.search;
  if (hash) {
    if (window.location.hash !== hash) {
      window.history.replaceState(null, "", base + hash);
    }
  } else {
    if (window.location.hash) {
      window.history.replaceState(null, "", base);
    }
  }
}

const GstarBoothSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1440);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const preloadImages = [
      GstarListBg01Hover,
      GstarListBg02Hover,
      GstarListBg03Hover,
    ];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= ENTER_RATIO) {
          setHash("#gstar");
        } else if (!entry.isIntersecting && window.location.hash === "#gstar") {
          setHash("");
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
        rootMargin: "0px 0px -15% 0px",
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const boothList = [
    {
      id: "cinder",
      title: "신더시티 시연존",
      desc: "파괴된 서울에서 펼쳐지는 또 하나의 21세기.\n[신더시티] 세계의 시작을 경험하라!",
      img1: GstarListBg01HoverImage01,
      img2: GstarListBg01HoverImage02,
      hoverText: (
        <>
          Part 1,2로 나뉘어진 캠페인 공략
          <br />
          <b>G-STAR CINDER CITY</b> 시연 플레이
        </>
      ),
    },
    {
      id: "nc",
      title: "NC CINEMA",
      desc: "G-STAR 최초 파노라마 상영관에서\n경험하는 NC 신작 트레일러의 짜릿한 몰입감!",
    },
    {
      id: "aion",
      title: "AION2 시연존",
      desc: "11월 19일 AION2 출시 전 경험할 수 있는 기회!\n두 개의 하늘을 선점하라!",
      img1: GstarListBg02HoverImage01,
      img2: GstarListBg02HoverImage02,
      hoverText: (
        <>
          커스터마이징부터 우루구구 던전 플레이까지
          <br />
          <b>G-STAR AION2</b> 시연 플레이
        </>
      ),
    },
  ];

  const [activeId, setActiveId] = useState<string | null>(null);
  const handleClick = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id)); // 같은 id 클릭 시 토글
  };

  return (
    <GstarBoothSectionWrapper
      ref={sectionRef}
      id="gstar"
      className={isVisible ? "active" : ""}
    >
      <div className="inner">
        <div className="section-wrapper">
          <div className="title-wrap">
            <h4 className="vitro">
              NC G-STAR <br className="mo-br" />
              행사 안내
            </h4>
            <p className="pc-text">
              G-STAR 2025 메인 스폰서 NCSOFT 부스에서
              <br />
              AION2와 신더시티를 직접 플레이하고,
              <br />
              NC CINEMA에서 최초 공개되는 신작 트레일러들을 만나보세요!
            </p>
            <p className="mo-text">
              NC G-STAR 2025 <br />
              Main Sponsor NCSOFT
              <br />
              시연존에서 AION2와 신더시티를 플레이 하고,
              <br />
              NC CINEMA에서 처음 공개되는
              <br />
              신작 트레일러를 만나보세요!
            </p>
          </div>

          {/* ✅ 1440px 이상에서는 기존 리스트 */}
          {!isMobile && (
            <div className="list-wrap">
              <ul>
                {boothList.map((item) => (
                  <li key={item.id} className={`${item.id} hover-list`}>
                    <div className="text-box">
                      <h6 className="vitro">{item.title}</h6>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.desc.replace(/\n/g, "<br />"),
                        }}
                      />
                    </div>

                    {item.img1 && (
                      <div className="hover-image-wrap">
                        <i>
                          <img src={item.img1} alt="" />
                        </i>
                        <i>
                          <img src={item.img2} alt="" />
                        </i>
                        <p>{item.hoverText}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {isMobile && (
        <div className={`mo-list-wrapper ${isVisible ? "active" : ""}`}>
          <div className="mo-list-inner">
            <div className="list-swiper">
              <Swiper
                spaceBetween={8}
                slidesPerView={1.05}
                className="mySwiper"
                breakpoints={{
                  1024: { slidesPerView: 2, spaceBetween: 20 },
                  800: { slidesPerView: 1.7, spaceBetween: 16 },
                  640: { slidesPerView: 1.3, spaceBetween: 16 },
                  500: { slidesPerView: 1.2, spaceBetween: 14 },
                }}
              >
                {boothList.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className={`${item.id} click-list ${
                        activeId === item.id ? "active" : ""
                      }`}
                      onClick={() => handleClick(item.id)}
                    >
                      <div className="text-box">
                        <h6 className="vitro">{item.title}</h6>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.desc.replace(/\n/g, "<br />"),
                          }}
                        />
                      </div>

                      {item.img1 && (
                        <div className="click-image-wrap">
                          <i>
                            <img src={item.img1} alt="" />
                          </i>
                          <i>
                            <img src={item.img2} alt="" />
                          </i>
                          <p>{item.hoverText}</p>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </GstarBoothSectionWrapper>
  );
};

export default GstarBoothSection;

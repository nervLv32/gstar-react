import React, { useEffect, useRef, useState } from "react";
import { GstarBoothSectionWrapper } from "./styles";
import GstarListBg01HoverImage01 from "../../../assets/images/main/gstar-booth-list01-hover-img01.png";
import GstarListBg01HoverImage02 from "../../../assets/images/main/gstar-booth-list01-hover-img02.png";

import GstarListBg02HoverImage01 from "../../../assets/images/main/gstar-booth-list02-hover-img01.png";
import GstarListBg02HoverImage02 from "../../../assets/images/main/gstar-booth-list02-hover-img02.png";

// preload
import GstarListBg01Hover from "../../../assets/images/main/gstar-booth-list01-hover-bg.png";
import GstarListBg02Hover from "../../../assets/images/main/gstar-booth-list02-hover-bg.png";
import GstarListBg03Hover from "../../../assets/images/main/gstar-booth-list03-hover-bg.png";

const GstarBoothSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false); // ✅ 이미 애니메이션이 실행된 적 있는지 저장

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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            // ✅ 처음 진입 시 한 번만 실행
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

  return (
    <GstarBoothSectionWrapper
      ref={sectionRef}
      className={isVisible ? "active" : ""}
    >
      <div className="inner">
        <div className="section-wrapper">
          <div className="title-wrap">
            <h4 className="vitro">NC G-STAR 행사 안내</h4>
            <p>
              NC G-STAR 2025 Main Sponsor NCSOFT
              <br />
              시연존에서 AION2와 신더시티를 플레이 하고,
              <br />
              NC CINEMA에서 처음 공개되는 신작 트레일러를 만나보세요!
            </p>
          </div>

          <div className="list-wrap">
            <ul>
              <li className="cinder hover-list">
                <div className="text-box">
                  <h6 className="vitro">신더시티 시연존</h6>
                  <p>
                    파괴된 서울에서 펼쳐지는 또 하나의 21세기.
                    <br />
                    [신더시티] 세계의 시작을 경험하라!
                  </p>
                </div>
                <div className="hover-image-wrap">
                  <i>
                    <img src={GstarListBg01HoverImage01} alt="" />
                  </i>
                  <i>
                    <img src={GstarListBg01HoverImage02} alt="" />
                  </i>
                  <p>
                    Part 1,2로 나뉘어진 캠페인 공략
                    <br />
                    <b>G-STAR CINDER CITY</b> 시연 플레이
                  </p>
                </div>
              </li>
              <li className="nc hover-list">
                <div className="text-box">
                  <h6 className="vitro">NC CINEMA</h6>
                  <p>
                    G-STAR 최초 파노라마 상영관에서
                    <br />
                    경험하는  NC 신작 트레일러의 짜릿한 몰입감!
                  </p>
                </div>
              </li>

              <li className="aion hover-list">
                <div className="text-box">
                  <h6 className="vitro">AION2 시연존</h6>
                  <p>
                    11월 19일 AION2 출시 전 경험할 수 있는 기회!
                    <br />두 개의 하늘을 선점하라!
                  </p>
                </div>
                <div className="hover-image-wrap">
                  <i>
                    <img src={GstarListBg02HoverImage01} alt="" />
                  </i>
                  <i>
                    <img src={GstarListBg02HoverImage02} alt="" />
                  </i>
                  <p>
                    커스터마이징부터 우루구구 던전 플레이까지
                    <br />
                    <b>G-STAR AION2</b> 시연 플레이
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </GstarBoothSectionWrapper>
  );
};

export default GstarBoothSection;

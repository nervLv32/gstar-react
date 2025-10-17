import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TicketParallaxSectionWrapper } from "./styles";
import TicketImage from "../../../assets/images/main/main-ticket-section-image.png";

gsap.registerPlugin(ScrollTrigger);

const TicketParallaxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const titleTopRef = useRef<HTMLHeadingElement>(null);
  const titleBottomRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const visual = visualRef.current;
    if (!section || !visual) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const imgAspectRatio = 3998 / 2003; // 2:1 비율

    // ✅ 화면 기준 최종 크기(px)
    const finalWidth = vw * 0.26; // 1920 기준 500px → 약 26vw
    const finalHeight = finalWidth / imgAspectRatio;

    // ✅ scale 비율 계산
    const fullWidth = vw * 1.8; // 초기 꽉 찬 상태
    const fullScale = fullWidth / finalWidth; // 약 3.5배
    const finalScale = 1;
    const textTriggerScale = 600 / 500; // 약 1.2 배일 때 텍스트 시작

    // ✅ y 오프셋 보정 (티켓 중심을 항상 viewport 중앙에 맞춤)
    const initialYOffset = (finalHeight * fullScale - vh) / 2; // 시작 시 위쪽 offset
    const finalYOffset = 0; // 끝나면 중앙 고정

    // 초기 세팅
    gsap.set([titleTopRef.current, titleBottomRef.current], {
      opacity: 0,
      yPercent: (i) => (i === 0 ? 60 : -60),
    });

    // ✅ 메인 타임라인
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      visual,
      {
        scale: fullScale,
        y: -initialYOffset,
        transformOrigin: "center center",
      },
      {
        scale: finalScale,
        y: finalYOffset,
        transformOrigin: "center center",
        ease: "power2.out",
      }
    );

    // ✅ 텍스트 애니메이션 트리거 (scale ≈ 1.2일 때)
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const scaleValue = fullScale - (fullScale - finalScale) * progress;
        if (scaleValue <= textTriggerScale) {
          gsap.to(titleTopRef.current, {
            opacity: 1,
            yPercent: 0,
            duration: 1.2,
            ease: "power3.out",
          });
          gsap.to(titleBottomRef.current, {
            opacity: 1,
            yPercent: 0,
            duration: 1.2,
            ease: "power3.out",
          });
        }
      },
    });

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <TicketParallaxSectionWrapper ref={sectionRef}>
      <div className="screen">
        <div className="holder">
          <div className="visual" ref={visualRef}>
            <img src={TicketImage} alt="ticket visual" />
          </div>

          <div className="title-wrap">
            <h2 ref={titleTopRef} className="title top">
              무한한 세계
            </h2>
            <h2 ref={titleBottomRef} className="title bottom">
              하나의 여정
            </h2>
          </div>
        </div>
      </div>
    </TicketParallaxSectionWrapper>
  );
};

export default TicketParallaxSection;

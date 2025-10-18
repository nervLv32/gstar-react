import React, { useEffect, useRef, useState } from "react";
import { GstarSectionWrapper } from "./styles";
import TicketImage from "../../../assets/images/main/main-ticket-section-image.png";

const GstarSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false); // ✅ 한 번만 실행하도록 제어

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // ✅ 화면에 들어오고 아직 애니메이션이 실행되지 않았다면
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true; // ✅ 다시 실행되지 않게 막음
          observer.unobserve(target); // ✅ 관찰 종료 (성능 최적화)
        }
      },
      {
        threshold: 0.3, // 30% 정도 보일 때 트리거
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <GstarSectionWrapper ref={sectionRef} className={isVisible ? "active" : ""}>
      <div className="text-wrap">
        <h2 className="top-text vitro">무한한 세계</h2>

        <div className="ticket-wrap">
          <img src={TicketImage} alt="ticket" />
        </div>

        <h2 className="bottom-text vitro">하나의 여정</h2>
      </div>
    </GstarSectionWrapper>
  );
};

export default GstarSection;

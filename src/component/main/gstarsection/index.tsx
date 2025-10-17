import React, { useEffect, useRef, useState } from "react";
import { GstarSectionWrapper } from "./styles";
import TicketImage from "../../../assets/images/main/main-ticket-section-image.png";

const GstarSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;

          // ✅ 화면의 10%라도 보이면 활성화
          if (ratio >= 0.3) {
            setIsVisible(true);
          }

          // ✅ 화면에서 90% 이상 사라졌을 때만 초기화
          if (ratio < 0.3) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100), // 세밀한 감지
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

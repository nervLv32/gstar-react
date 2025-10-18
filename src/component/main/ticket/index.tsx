import React, { useEffect, useRef, useState } from "react";
import { TicketWrapper } from "./styles";
import TicketImage from "../../../assets/images/main/main-ticket.png";

const Ticket = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false); // ✅ 이미 애니메이션이 실행되었는지 체크

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
            observer.unobserve(target); // ✅ 더 이상 감시 안 함 (한 번만)
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <TicketWrapper ref={sectionRef} className={isVisible ? "active" : ""}>
      <div className="ticket-wrap">
        <img src={TicketImage} alt="ticket" className="ticket left" />
        <img src={TicketImage} alt="ticket" className="ticket right" />
      </div>
    </TicketWrapper>
  );
};

export default Ticket;

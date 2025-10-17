import React, { useEffect, useRef, useState } from "react";
import { TicketWrapper } from "./styles";
import TicketImage from "../../../assets/images/main/main-ticket.png";

const Ticket = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 화면에 들어오면 애니메이션 실행
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // 화면에서 벗어나면 리셋 (다시 내려올 때 재실행됨)
            setIsVisible(false);
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

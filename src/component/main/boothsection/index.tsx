import React, { useEffect, useRef } from "react";
import { BoothSectionWrapper } from "./styles";
import { useNavigate, useLocation, Link } from "react-router-dom";

const BoothSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Intersection Observer: 해시 붙이기/제거하기
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (location.hash !== "#booth") {
              navigate("#booth", { replace: true });
            }
          } else {
            if (location.hash === "#booth") {
              navigate("", { replace: true });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [navigate, location]);

  // ✅ 뒤로가기나 새로고침 시 #booth가 있으면 자동 스크롤
  useEffect(() => {
    if (location.hash === "#booth" && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100); // 약간의 딜레이를 줘야 렌더 완료 후 동작
    }
  }, [location.hash]);

  return (
    <BoothSectionWrapper ref={sectionRef} id="booth">
      <div className="booth-banner-wrap">
        <div className="banner-title-wrap">
          <span className="vitro">NC 2025 G- STAR</span>
          <h6 className="vitro">부스 위치 안내</h6>
        </div>
        <div className="button-wrap">
          <Link to="/info">자세히 보기</Link>
        </div>
      </div>
      <div className="contents-wrap">
        <div className="small-inner">
          <div className="contents-wrapper">
            <div className="text-wrap">
              <h4>2025 G-STAR는 NC와 함께!</h4>
              <p>
                NC G-STAR 사전 이벤트 참여자 중<br />
                200명을 추첨하여 G-STAR 초대권(1일권) 2매를 드립니다.
              </p>
            </div>
            <div className="ticket-wrap">
              <div className="info-wrap"></div>
              <div className="button-wrap"></div>
            </div>
            <div className="policy-wrap">dd</div>
          </div>
        </div>
      </div>
    </BoothSectionWrapper>
  );
};

export default BoothSection;

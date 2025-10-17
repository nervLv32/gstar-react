import React, { useEffect } from "react";
import { InfoWrapper } from "./styles";
import BoothImage from "../assets/images/info/info-booth.png";

const Info = () => {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // 사용자에게 경고 메시지를 보여줌

      e.preventDefault();
      e.returnValue = ""; // 일부 브라우저는 이 값이 있어야 경고창이 뜸
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <InfoWrapper>
      <div className="info-visual-section">
        <div className="title-wrap">
          <h3 className="vitro">부스 위치 안내</h3>
          <p>
            NC 부스는 제1 전시장 메인부스 A06, 휴게공간 C13,
            <br />
            벡스코 2홀 정문 앞에 야외부스가 마련되어 있습니다.
          </p>
        </div>
        <div className="img-wrap">
          <i>
            <img src={BoothImage} alt="" />
          </i>
        </div>
      </div>
      <div className="nc-section">
        <div className="big-inner">
          <div className="section-wrapper">
            <h3 className="vitro">NC 조감도</h3>
            <div className="tab-wrapper">
              <ul>
                <li className="vitro">메인 부스</li>
                <li className="active vitro">휴게 공간</li>
                <li className="vitro">야외 부스</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </InfoWrapper>
  );
};

export default Info;

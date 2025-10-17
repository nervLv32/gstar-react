import React from "react";
import TitleImage from "../../../assets/images/main/main-title.png";
import { DimOverlay, IntroVideoWrapper } from "./styles";

const Intro = ({
  step,
  onVideoEnd,
  onDimEnd,
  videoRef,
}: {
  step: "video" | "dim";
  onVideoEnd: () => void;
  onDimEnd: () => void;
  videoRef: React.RefObject<HTMLVideoElement | null>;
}) => {
  return (
    <IntroVideoWrapper>
      {/* 🔸 이 부분은 나중에 다시 쓸 거니까 유지 */}
      {step === "video" && (
        <video
          ref={videoRef}
          src="/video/gstar-intro.mp4"
          muted
          playsInline
          autoPlay
          onEnded={onVideoEnd}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}

      {step === "dim" && (
        <DimOverlay onAnimationEnd={onDimEnd}>
          <h2 className="intro-text">
            <i className="title">
              <img src={TitleImage} alt="title" />
            </i>
          </h2>
        </DimOverlay>
      )}
    </IntroVideoWrapper>
  );
};

export default Intro;

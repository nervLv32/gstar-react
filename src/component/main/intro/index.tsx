import React from "react";
import TitleImage from "../../../assets/images/main/main-title.webp";
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

      {/* {step === "dim" && ( */}
      <DimOverlay onAnimationEnd={onDimEnd}>
        <div className="dim-box">
          <h2 className="intro-text">
            <i className="title">
              <img src={TitleImage} alt="title" />
            </i>
          </h2>
        </div>
      </DimOverlay>
      {/* )} */}
    </IntroVideoWrapper>
  );
};

export default Intro;

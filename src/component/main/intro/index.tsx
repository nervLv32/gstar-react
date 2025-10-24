import React, { useEffect, useState } from "react";
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
  const [videoReady, setVideoReady] = useState(false); // ✅ preload 완료 여부
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // ✅ 실제 로드 완료 여부

  // 🔹 비디오 미리 로드 (preload)
  useEffect(() => {
    const preloadVideo = document.createElement("video");
    preloadVideo.src = "/GSTAR2025/video/gstar-intro.mp4";
    preloadVideo.preload = "auto";
    preloadVideo.muted = true;
    preloadVideo.addEventListener("loadeddata", () => {
      setVideoReady(true);
    });

    return () => preloadVideo.remove();
  }, []);

  // 🔹 비디오가 준비되면 자동 재생
  useEffect(() => {
    if (videoReady && step === "video") {
      videoRef.current?.play().catch(() => {});
    }
  }, [videoReady, step]);

  return (
    <IntroVideoWrapper>
      {step === "video" && (
        <video
          ref={videoRef}
          src={videoReady ? "/GSTAR2025/video/gstar-intro.mp4" : undefined}
          muted
          playsInline
          autoPlay
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
          onEnded={onVideoEnd}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: isVideoLoaded ? 1 : 0, // ✅ 로딩 전 살짝 숨기기
            transition: "opacity 0.3s ease",
          }}
        />
      )}

      {step === "dim" && (
        <DimOverlay onAnimationEnd={onDimEnd}>
          <div className="dim-box">
            <h2 className="intro-text">
              <i className="title">
                <img src={TitleImage} alt="title" />
              </i>
            </h2>
          </div>
        </DimOverlay>
      )}
    </IntroVideoWrapper>
  );
};

export default Intro;

import React, { useEffect, useRef, useState } from "react";
import { VideoSectionWrapper } from "./styles";
import TitleImage from "../../../assets/images/main/main-title.webp";

const VideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // 🔹 비디오 미리 로드 (preload)
  useEffect(() => {
    const preloadVideo = document.createElement("video");
    preloadVideo.src = "/GSTAR2025/video/production-gstar.mp4";
    preloadVideo.preload = "auto";
    preloadVideo.muted = true;
    preloadVideo.addEventListener("loadeddata", () => {
      setVideoReady(true);
    });

    // 메모리 누수 방지
    return () => preloadVideo.remove();
  }, []);

  // 🔹 IntersectionObserver: 화면에 들어올 때만 재생 시작 (한 번만)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // ✅ 화면에 처음 들어올 때만 재생
          if (entry.isIntersecting) {
            setIsActive(true);
            setTimeout(() => {
              videoRef.current?.play().catch(() => {});
            }, 100);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "-10% 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // 🔹 혹시 로드 완료 시 자동 재생 보장
  useEffect(() => {
    if (videoReady) {
      videoRef.current?.play().catch(() => {});
    }
  }, [videoReady]);

  return (
    <VideoSectionWrapper
      id="video"
      ref={sectionRef}
      className={`${isActive ? "active" : ""} ${isVideoLoaded ? "loaded" : ""}`}
    >
      <div className="video-inner">
        {/* 비디오 로딩 전 보여줄 이미지 */}
        <img
          src={TitleImage}
          alt="video placeholder"
          className="video-placeholder"
          draggable={false}
        />

        {/* 실제 비디오 */}
        <video
          ref={videoRef}
          src={videoReady ? "/GSTAR2025/video/production-gstar.mp4" : undefined}
          muted
          playsInline
          preload="auto"
          loop
          onLoadedData={() => setIsVideoLoaded(true)}
        />
      </div>
    </VideoSectionWrapper>
  );
};

export default VideoSection;

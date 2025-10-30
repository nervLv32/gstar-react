import React, { useEffect, useRef, useState } from "react";
import { VideoSectionWrapper } from "./styles";

const VideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // 🔹 iOS 감지 (모바일 Safari 포함)
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  // 🔹 비디오 preload — 실제 videoRef 기준으로 로드
  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    video.src = "/GSTAR2025/video/gstar.mp4";
    video.load();

    const handleLoadedData = () => setVideoReady(true);
    video.addEventListener("loadeddata", handleLoadedData);

    return () => video.removeEventListener("loadeddata", handleLoadedData);
  }, []);

  // 🔹 IntersectionObserver로 섹션 활성화 감지
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);

            // ✅ iOS에서는 autoplay만으로 안 될 수 있으므로 보조 play 호출
            setTimeout(() => {
              videoRef.current?.play().catch(() => {});
            }, 200);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-10% 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // 🔹 로드 완료 시 자동 재생 시도 (iOS fallback)
  useEffect(() => {
    if (videoReady && videoRef.current) {
      const video = videoRef.current;

      // iOS에서 autoplay 허용을 위해 mute + playsInline + autoplay 모두 적용
      if (isIOS) {
        video.muted = true;
        video.playsInline = true;
      }

      video
        .play()
        .then(() => setIsVideoLoaded(true))
        .catch(() => {
          // 실패 시 iOS는 유저 제스처 필요 → 재생 버튼 표시 등 가능
        });
    }
  }, [videoReady, isIOS]);

  return (
    <VideoSectionWrapper
      id="video"
      ref={sectionRef}
      className={`${isActive ? "active" : ""} ${isVideoLoaded ? "loaded" : ""}`}
    >
      <div className="video-inner">
        {/* 실제 비디오 */}
        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          preload="auto"
          loop
          onLoadedData={() => setIsVideoLoaded(true)}
        />
      </div>
    </VideoSectionWrapper>
  );
};

export default VideoSection;

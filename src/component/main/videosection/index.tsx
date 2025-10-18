import React, { useEffect, useRef, useState } from "react";
import { VideoSectionWrapper } from "./styles";
import TitleImage from "../../../assets/images/main/main-title.png";
const VideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const preloadVideo = document.createElement("video");
    preloadVideo.src = "/video/production-gstar.mp4";
    preloadVideo.preload = "auto";
    preloadVideo.muted = true;
    preloadVideo.addEventListener("loadeddata", () => {
      setVideoReady(true);
    });
    // 메모리 누수 방지
    return () => preloadVideo.remove();
  }, []);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
            setTimeout(() => {
              videoRef.current?.play().catch(() => {});
            }, 100);
          } else {
            setIsActive(false);
            videoRef.current?.pause();
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

  return (
    <VideoSectionWrapper
      ref={sectionRef}
      className={`${isActive ? "active" : ""} ${isVideoLoaded ? "loaded" : ""}`}
    >
      <div className="video-inner">
        <img
          src={TitleImage}
          alt="video placeholder"
          className="video-placeholder"
          draggable={false}
        />

        <video
          ref={videoRef}
          src={videoReady ? "/video/production-gstar.mp4" : undefined}
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

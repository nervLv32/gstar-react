import React, { useEffect, useRef, useState } from "react";
import { MainCarouselWrapper } from "./styles";

const SLIDES = [0, 1, 2, 3, 4];
const TOTAL = SLIDES.length;
const VISIBLE = 5;
const SLIDE_WIDTH = 20; // 5개니까 20%

const MainCarousel = () => {
  const [index, setIndex] = useState(TOTAL); // 중간 시작
  const trackRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [...SLIDES, ...SLIDES, ...SLIDES];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => prev - 1);
  };

  // ✅ 드래그 관련 상태
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isAnimating) return;
    isDragging.current = true;
    trackRef.current!.style.transition = "none";
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || isAnimating) return;
    currentX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
    const delta = currentX.current - startX.current;
    const track = trackRef.current!;
    const movePercent = (delta / track.clientWidth) * 100;
    track.style.transform = `translateX(calc(-${
      index * SLIDE_WIDTH
    }% + ${movePercent}%))`;
  };

  const onDragEnd = () => {
    if (!isDragging.current || isAnimating) return;
    isDragging.current = false;

    const delta = currentX.current - startX.current;
    const threshold = 50; // px 기준 거리
    trackRef.current!.style.transition = "transform 0.6s ease";

    if (delta > threshold) handlePrev();
    else if (delta < -threshold) handleNext();
    else {
      // 복귀
      trackRef.current!.style.transform = `translateX(-${
        index * SLIDE_WIDTH
      }%)`;
    }
  };

  // 트랜지션 끝나면 무한 루프 처리
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const total = slides.length;
    const mid = TOTAL;

    track.style.transition = "transform 0.6s ease";
    track.style.transform = `translateX(-${index * SLIDE_WIDTH}%)`;

    const handleEnd = () => {
      setIsAnimating(false);
      if (index >= total - VISIBLE) {
        track.style.transition = "none";
        setIndex(mid);
        track.style.transform = `translateX(-${mid * SLIDE_WIDTH}%)`;
      } else if (index <= 0) {
        track.style.transition = "none";
        setIndex(mid + TOTAL);
        track.style.transform = `translateX(-${(mid + TOTAL) * SLIDE_WIDTH}%)`;
      }
    };

    track.addEventListener("transitionend", handleEnd);
    return () => track.removeEventListener("transitionend", handleEnd);
  }, [index, slides.length]);

  const active = (index + 2) % TOTAL;

  return (
    <MainCarouselWrapper>
      <div
        className="carousel"
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={onDragStart}
        onTouchMove={onDragMove}
        onTouchEnd={onDragEnd}
      >
        <div ref={trackRef} className="track">
          {slides.map((num, i) => (
            <div key={i} className={`slide ${num === active ? "active" : ""}`}>
              slide-{num}
            </div>
          ))}
        </div>
      </div>

      <div className="controls">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </MainCarouselWrapper>
  );
};

export default MainCarousel;

import { styled, keyframes } from "styled-components";
import IntroBg from "../../../assets/images/intro/intro-bg.png";

/* 🔹 dim 유지 후 서서히 사라짐 (5초 유지, 2초 페이드아웃) */
const dimFadeOut = keyframes`
  0% { opacity: 1; }
  70% { opacity: 1; } /* 약 5초간 유지 */
  100% { opacity: 0; } /* 마지막 2초 동안 서서히 사라짐 */
`;

/* 🔹 intro-text 이동 애니메이션 (중앙 → 상단, 크기 축소) */
const textMove = keyframes`
  0% {
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    top: 11rem;
    transform: translate(-50%, 0) scale(0.79);
  }
`;

export const IntroVideoWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 2000;
  video {
    width: 100%;
    height: 100%;
  }
`;

/* 🔹 dim 오버레이 */
export const DimOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 1) url(${IntroBg}) no-repeat center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${dimFadeOut} 3s ease forwards;
  pointer-events: none;
  z-index: 600;
  .left {
    display: block;
    width: 80rem;
    height: 80rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .intro-text {
    position: fixed;
    width: 145rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${textMove} 2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    animation-delay: 1s;
    will-change: transform, top;

    i {
      display: block;
      width: 100%;
      position: relative;

      img {
        display: block;
        width: 100%;
      }
    }
  }
`;

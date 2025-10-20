import { styled, keyframes } from "styled-components";
import IntroBg from "../../../assets/images/intro/intro-bg.webp";

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
    top: -3.5rem;
    transform: translate(-50%, 0) scale(0.79);
  }
`;

const pcTextMove = keyframes`
  0% {
    width: 90vw;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    top: -2.431vw;
    transform: translate(-50%, 0);
    width: 79.167vw;
  }
`;

const smallPcTextMove = keyframes`
  0% {
    width: 90vw;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    width: 79.167vw;
    top: -3.5vw;
    transform: translate(-50%, 0);
  }
`;

const tinyPcTextMove = keyframes`
  0% {
    width: 95vw;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    width: 79.167vw;
    top: -4.5vw;
    transform: translate(-50%, 0);
  }
`;

const tabletTextMove = keyframes`
  0% {
    width: 90vw;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    width: 79.167vw;
    top: -1vw;
    transform: translate(-50%, 0);
  }
`;

const smallTabletTextMove = keyframes`
  0% {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    top: -2.5vw;
    transform: translate(-50%, 0);
  }
  `;
const moTextMove = keyframes`
  0% {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    top: -3.5vw;
    transform: translate(-50%, 0);
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
  .dim-box {
    width: 144rem;
    margin: 14rem auto 0;
    position: relative;
    height: 83rem;
  }
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
    position: absolute;
    width: 144rem;
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
  @media all and (max-width: 1440px) {
    .dim-box {
      width: 100%;
      margin: 7.639vw auto 0;
      position: relative;
      height: 58.542vw;
    }
    .intro-text {
      width: 90vw;
      /* width: 79.167vw; */
      animation: ${pcTextMove} 2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }
  }
  @media all and (max-width: 1200px) {
    .dim-box {
      margin-top: 5.833vw;
      height: 66.083vw;
    }
    .intro-text {
      animation: ${smallPcTextMove} 2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }
  }
  @media all and (max-width: 1023px) {
    .dim-box {
      margin-top: 0.977vw;
      height: 79.941vw;
    }
    .intro-text {
      animation: ${tinyPcTextMove} 2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }
  }
  @media all and (max-width: 899px) {
    .dim-box {
      margin-top: 8.889vw;
      height: 99.221vw;
    }
    .intro-text {
      animation: ${tabletTextMove} 2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
      animation-delay: 1s;
    }
  }
  @media all and (max-width: 767px) {
    .dim-box {
      margin-top: 10.813vw;
      margin-bottom: 7.813vw;
      height: 111.473vw;
    }
    .intro-text {
      width: 95vw;
      animation: ${smallTabletTextMove} 2s cubic-bezier(0.25, 1, 0.5, 1)
        forwards;
      animation-delay: 1s;
    }
  }
  @media all and (max-width: 499px) {
    .dim-box {
      margin-top: 8vw;
      margin-bottom: 12vw;
      height: 132.465vw;
    }
    .intro-text {
      width: 95vw;
      animation: ${moTextMove} 2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
      animation-delay: 1s;
    }
  }
`;

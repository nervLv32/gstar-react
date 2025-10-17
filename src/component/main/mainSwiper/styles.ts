import { keyframes, styled } from "styled-components";
import SlideBorderImage from "../../../assets/images/main/main-border-slide-image.png";
import ActiveShadowImage from "../../../assets/images/main/main-slide-active-shadow.png";
import HardLeftDim from "../../../assets/images/main/main-slide-hard-left-dim.png";
import HardRightDim from "../../../assets/images/main/main-slide-hard-right-dim.png";
import SoftLeftDim from "../../../assets/images/main/main-slide-soft-left-dim.png";
import RightBg from "../../../assets/images/main/right-bg.png";
// import SoftDim from "../../../assets/images/main/main-slide-soft-dim.png";
const titleFadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const smoothPop = keyframes`
  0% { transform: scale(1.0); }
  40% { transform: scale(1.27); }
  100% { transform: scale(1.24); }
`;

export const MainSwiperWrapper = styled.div`
  width: 144rem;

  margin: 6.8rem auto 0;
  /* height: 60rem; */
  position: relative;
  /* &::before {
    content: "";
    display: block;
    width: 30rem;
    height: 80%;
    background: blue;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0) 5.38%,
      rgba(0, 0, 0, 0.3) 35.08%,
      rgba(0, 0, 0, 0.5) 63.24%,
      rgba(0, 0, 0, 0.7) 85.28%
    );
    background-blend-mode: multiply;

    z-index: 100;
  }
  &::after {
    content: "";
    display: block;
    width: 30rem;
    height: 80%;
    background: blue;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 5.38%,
      rgba(0, 0, 0, 0.3) 35.08%,
      rgba(0, 0, 0, 0.5) 63.24%,
      rgba(0, 0, 0, 0.7) 85.28%
    );

    background-blend-mode: multiply;

    z-index: 100;
  } */

  &.intro {
    /* background: red; */
    .swiper {
      .swiper-slide {
        opacity: 0;
        transform: translateY(10%);
        animation: ${slideUp} 1s ease forwards;
        animation-delay: 0.2s;

        &:nth-child(6) {
          animation-delay: 0.2s;
        }
        &:nth-child(5),
        &:nth-child(7) {
          animation-delay: 0.5s;
        }
        &:nth-child(4),
        &:nth-child(8) {
          animation-delay: 0.8s;
        }
      }
    }
  }
  @keyframes dimReveal {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .title-text {
    width: 114rem;

    position: absolute;
    top: -3.5rem;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    opacity: 0; /* 초기값 */
    animation: ${titleFadeIn} 1s ease forwards;

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

  .swiper-box {
    position: relative;
  }
  .swiper {
    .swiper-wrapper {
      padding-top: 12rem;
      padding-bottom: 8rem;
    }
    .swiper-slide {
      width: 100%;
      display: flex;
      opacity: 1;
      &.left {
        .dim {
          background: url(${HardLeftDim}) no-repeat center / cover;
        }
      }
      &.right {
        .dim {
          background: url(${HardRightDim}) no-repeat center / cover;
        }
      }

      &.swiper-slide-prev {
        .dim {
          /* background: url(${SoftLeftDim}) no-repeat center / cover; */
          width: 100%;
          left: unset;
          right: 0;
          background: linear-gradient(
            to left,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.2) 50%
          );
        }
      }

      &.swiper-slide-next {
        .dim {
          /* background: url(${RightBg}) no-repeat center / cover; */
          width: 100%;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.2) 50%
          );
        }
      }

      &.swiper-slide-active {
        z-index: 10 !important;
        .logo-image {
          bottom: -3.4rem;
        }
        .dim {
          display: none;
        }
        .char-image {
          animation: ${smoothPop} 0.9s ease forwards;
          /* filter: blur(0); */
          opacity: 1;
          position: relative;
          &::before {
            content: "";
            display: block;
            width: calc(100% + 8rem);
            height: calc(100% + 9rem);
            background: url(${ActiveShadowImage}) no-repeat center / cover;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          &::after {
            clip-path: circle(75% at 50% 50%);
          }
          img {
            height: 100%;
          }
        }
        .logo-image {
          transform: translateX(-50%) scale(1.2); /* 살짝 커지기 */
          /* filter: brightness(1) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));  */
          opacity: 1;
        }
      }
      .dim {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }
      .char-image {
        display: block;
        width: 100%;
        position: relative;
        /* transition: transform 0.9s cubic-bezier(0.25, 0.1, 0.25, 1),
          filter 0.8s ease, opacity 0.8s ease; */
        will-change: transform, filter, opacity;
        backface-visibility: hidden;

        &::after {
          content: "";
          width: 100%;
          mix-blend-mode: plus-lighter;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: url(${SlideBorderImage}) no-repeat center / cover;
          clip-path: circle(0% at 50% 50%);
          transition: clip-path 0.5s ease-in-out;
        }
        img {
          display: block;
          width: 100%;
          position: relative;
        }
      }
      .logo-image {
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 22.2rem;
        transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1),
          filter 0.6s ease, opacity 0.6s ease;
        /* opacity: 0.6; */
        /* filter: brightness(0.8); */
        z-index: 10;
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
`;

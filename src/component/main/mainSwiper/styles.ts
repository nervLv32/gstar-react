import { keyframes, styled } from "styled-components";
import SlideBorderImage from "../../../assets/images/main/main-border-slide-image.webp";
import ActiveShadowImage from "../../../assets/images/main/main-slide-active-shadow.webp";

const titleFadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20%); }
  to   { opacity: 1; transform: translateY(0); }
`;

const smoothPop = keyframes`
  0%   { transform: scale(1.0); }
  40%  { transform: scale(1.27); }
  100% { transform: scale(1.24); }
`;

// const smoothPop = keyframes`
//   0%   { width: 27.5rem }
//   40%  { width: 32rem }
//   100% { width: 34.1rem }
// `;

const textUp = keyframes`
  0%   { opacity: 0; transform: translateY(4rem); }
  40%  { opacity: 0; }
  100% { opacity: 1; transform: translateY(0); }
`;

export const MainSwiperWrapper = styled.div`
  width: 144rem;
  margin: 14rem auto 0;
  position: relative;

  /* 초기 등장 애니메이션 */
  &.intro {
    .swiper .swiper-slide {
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

  .title-text {
    .mo-image {
      display: none;
    }
    width: 114rem;
    position: absolute;
    top: -3.5rem;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    opacity: 0;
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
      padding-bottom: 16rem;
      display: flex;
      align-items: center;
    }

    .swiper-slide {
      width: 100%;
      display: flex;
      position: relative;
      opacity: 1;

      /* ===================================================
         DIM 레이어 (고정 이미지 + gradient 오버레이)
      =================================================== */
      .dim-wrap {
        position: absolute;
        inset: 0;
        z-index: 1; /* 이미지 뒤 */
        pointer-events: none;

        .dim {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.35s ease;
          will-change: opacity;
          backface-visibility: hidden;
          transform: translateZ(0);

          /* 각 방향·강도별 이미지 */
          &.left.soft {
            background: linear-gradient(
              to left,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.1) 50%,
              rgba(0, 0, 0, 0) 100%
            );
          }
          &.left.hard {
            background: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.8) 0%,
              rgba(0, 0, 0, 0.5) 40%,
              rgba(0, 0, 0, 0.3) 75%,
              rgba(0, 0, 0, 0.05) 100%
            );
          }
          &.right.soft {
            background: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.1) 50%,
              rgba(0, 0, 0, 0) 100%
            );
          }
          &.right.hard {
            background: linear-gradient(
              to left,
              rgba(0, 0, 0, 0.8) 0%,
              rgba(0, 0, 0, 0.5) 40%,
              rgba(0, 0, 0, 0.3) 75%,
              rgba(0, 0, 0, 0.05) 100%
            );
          }

          /* ✅ 방향성 gradient를 덮는 pseudo-layer */
          &::after {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 0.35s ease;
            pointer-events: none;
          }
        }
      }

      /* ========== 거리·방향별 dim 표시 규칙 ========== */
      &.left.dist-1 .dim.left.soft {
        opacity: 1;
      }
      &.left.dist-1 .dim.left.soft::after {
        opacity: 1;
        background: linear-gradient(
          to left,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.2) 50%,
          rgba(0, 0, 0, 0) 100%
        );
      }

      &.left.dist-2 .dim.left.hard {
        opacity: 1;
      }
      /* &.left.dist-2 .dim.left.hard::after {
        opacity: 1;
        background: linear-gradient(
          to left,
          rgba(0, 0, 0, 0.85) 0%,
          rgba(0, 0, 0, 0.5) 40%,
          rgba(0, 0, 0, 0.1) 100%
        );
      } */

      &.right.dist-1 .dim.right.soft {
        opacity: 1;
      }
      &.right.dist-1 .dim.right.soft::after {
        opacity: 1;
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.2) 50%,
          rgba(0, 0, 0, 0) 100%
        );
      }

      &.right.dist-2 .dim.right.hard {
        opacity: 1;
      }
      /* &.right.dist-2 .dim.right.hard::after {
        opacity: 1;
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.85) 0%,
          rgba(0, 0, 0, 0.5) 40%,
          rgba(0, 0, 0, 0.1) 100%
        );
      } */

      /* ========== ACTIVE 슬라이드 (drop-shadow만 뒤로) ========== */
      &.swiper-slide-active {
        z-index: 10 !important;

        .dim.left,
        .dim.right {
          opacity: 0;
        }
        > a {
          animation: ${smoothPop} 0.9s ease forwards;
        }
        .char-image {
          position: relative;
          /* background: red; */
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
          will-change: transform;
          &:hover {
            transition: transform 0.1s ease-out;
            transform-style: preserve-3d;
            will-change: transform;
            cursor: pointer;
            &::after {
              opacity: 1;
            }
          }
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: calc(100% + 8rem);
            height: calc(100% + 9rem);
            background: url(${ActiveShadowImage}) no-repeat center / cover;
            z-index: 0;
            pointer-events: none;
          }
          img {
            position: relative;
            z-index: 1;
            display: block;
            height: 100%;
          }
        }

        .logo-image {
          transform: translateX(-50%) scale(1.2) translateZ(0);
          opacity: 1;
          bottom: -3.4rem;
        }

        .text-wrap {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
          h2,
          h4 {
            animation: ${textUp} 0.8s cubic-bezier(0.25, 1, 0.5, 1) both;
          }
          h2 {
            animation-delay: 0.2s;
          }
          h4 {
            animation-delay: 0.4s;
          }
        }
      }

      /* ===================================================
         이미지, 로고, 텍스트 공통 구조
      =================================================== */
      .char-image {
        display: block;
        width: 100%;
        position: relative;
        will-change: transform, filter, opacity;
        backface-visibility: hidden;
        transform: translateZ(0);

        &::after {
          content: "";
          width: 100%;
          height: 100%;
          mix-blend-mode: plus-lighter;
          position: absolute;
          top: 0;
          left: 0;
          background: url(${SlideBorderImage}) no-repeat center / cover;

          opacity: 0;

          transition: opacity 0.3s ease;
          z-index: 2;
          pointer-events: none;
        }
        img {
          display: block;
          width: 100%;
          position: relative;
          z-index: 1;
        }
      }

      .logo-image {
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) translateZ(0);
        width: 100%;

        transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1),
          opacity 0.6s ease;
        will-change: transform, opacity;
        backface-visibility: hidden;
        z-index: 10;
        opacity: 0.9999;
        img {
          display: block;
          width: 100%;
        }
      }

      .text-wrap {
        position: absolute;
        width: 300%;
        bottom: -14rem;
        left: 50%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        opacity: 0;
        transform: translateX(-50%) translateY(4rem);
        h2 {
          font-size: 2.8rem;
          line-height: 1;
          font-weight: 900;
          color: #fff;
        }
        h4 {
          font-size: 2.1rem;
          line-height: 1;
          color: #fff;
        }
      }
    }
  }

  /* =================== 반응형 =================== */
  @media all and (max-width: 1440px) {
    width: 100%;
    margin: 7.639vw auto 0;
    .title-text {
      width: 79.167vw;
      top: -2.431vw;
    }
    .swiper {
      .logo-image {
        height: 15.417vw;
      }
      .swiper-wrapper {
        padding-top: 8.333vw;
        padding-bottom: 12.111vw;
      }
      .swiper-slide.swiper-slide-active .char-image::before {
        width: calc(100% + 5.556vw);
        height: calc(100% + 6.25vw);
      }
    }
  }

  @media all and (max-width: 1200px) {
    margin-top: 5.833vw;
    .title-text {
      top: -3.5vw;
    }
    .swiper {
      .logo-image {
        height: auto;
      }
      .swiper-wrapper {
        padding-bottom: 15.333vw;
      }
      .swiper-slide.swiper-slide-active .text-wrap {
        bottom: -15rem;
      }
    }
  }

  @media all and (max-width: 1024px) {
    margin-top: 0.977vw;
    .title-text {
      top: -4.5vw;
    }
    .swiper {
      .swiper-wrapper {
        padding-bottom: 22.531vw;
      }
      .swiper-slide.swiper-slide-active {
        .char-image {
          &::before {
            width: calc(100% + 6.836vw);
            height: calc(100% + 6.641vw);
          }
        }
        .text-wrap {
          bottom: -16.5vw;
        }
        .char-image::before {
          width: calc(100% + 5.556vw);
          height: calc(100% + 6.25vw);
        }
      }
    }
  }
  @media all and (max-width: 900px) {
    margin-top: 8.889vw;

    .title-text {
      top: -1vw;
    }
    .swiper {
      .swiper-wrapper {
        padding-bottom: 23.333vw;
        padding-top: 13.333vw;
      }
      .swiper-slide.swiper-slide-active {
        .char-image {
          &::before {
            width: calc(100% + 6.667vw);
            height: calc(100% + 10vw);
          }
        }
      }
    }
  }
  @media all and (max-width: 768px) {
    margin-top: 10.813vw;
    margin-bottom: 7.813vw;
    .swiper {
      .swiper-wrapper {
        padding-bottom: 26.042vw;
      }
      .swiper-slide {
        &.swiper-slide-active {
          .text-wrap {
            bottom: -20.833vw;
            h2 {
              font-size: 2.6rem;
            }
            h4 {
              font-size: 2rem;
            }
          }
        }
      }
    }
    .title-text {
      width: 95vw;
      top: -2.5vw;
    }
  }
  @media all and (max-width: 500px) {
    margin-top: 8vw;
    margin-bottom: 12vw;
    .swiper {
      .swiper-wrapper {
        padding-top: 16vw;
        padding-bottom: 28vw;
      }
      .swiper-slide {
        &.swiper-slide-active {
          .char-image {
            &::before {
              width: calc(100% + 12vw);
              height: calc(100% + 13vw);
            }
          }
          .text-wrap {
            bottom: -28vw;
            h2 {
              font-size: 2.4rem;
            }
            h4 {
              font-size: 1rem;
            }
          }
        }
      }
    }
    .title-text {
      width: 97vw;
      top: -3.5vw;
    }
  }
`;

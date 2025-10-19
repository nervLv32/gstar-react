import { keyframes, styled } from "styled-components";
import GstarListBg01 from "../../../assets/images/main/gstar-booth-list01.png";
import GstarListBg02 from "../../../assets/images/main/gstar-booth-list02.png";
import GstarListBg03 from "../../../assets/images/main/gstar-booth-list03.png";

import GstarListBg01Hover from "../../../assets/images/main/gstar-booth-list01-hover-bg.png";
import GstarListBg02Hover from "../../../assets/images/main/gstar-booth-list02-hover-bg.png";
import GstarListBg03Hover from "../../../assets/images/main/gstar-booth-list03-hover-bg.png";

const fadeUp = keyframes`
  0% { opacity: 0; transform: translateY(4rem); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeUpText = keyframes`
  0% { opacity: 0; transform: translateX(-50%) translateY(3rem); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0); }
`;

export const GstarBoothSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 15rem 0 24.7rem;
  overflow: hidden;

  .section-wrapper {
    display: flex;
    flex-direction: column;
    gap: 13.8rem;

    .title-wrap {
      display: flex;
      flex-direction: column;
      gap: 7.3rem;
      opacity: 0;

      h4 {
        font-size: 6.8rem;
        line-height: 8rem;
        letter-spacing: -0.12rem;
        color: #005aff;
        opacity: 0;
        transform: translateY(3rem);
        .mo-br {
          display: none;
        }
      }

      p {
        font-size: 2.4rem;
        font-weight: 500;
        color: #00162a;
        line-height: 4.2rem;
        opacity: 0;
        transform: translateY(3rem);
        &.mo-text {
          display: none;
        }
      }
    }

    .list-wrap {
      ul {
        display: flex;
        gap: 2rem;

        li {
          position: relative;
          width: calc(33.333% - (4rem / 3));
          padding: 3.6rem;
          border-radius: 1.2rem;
          min-height: 52rem;
          overflow: hidden;
          opacity: 0;
          transform: translateY(6rem);
          transition: transform 0.6s ease;

          /* ✅ 모든 li 기본 배경 */
          &.cinder {
            background: url(${GstarListBg01}) no-repeat center / cover;
          }
          &.nc {
            background: url(${GstarListBg02}) no-repeat center / cover;
          }
          &.aion {
            background: url(${GstarListBg03}) no-repeat center / cover;
          }

          /* ✅ hover용 dim (배경 교체 대신 ::before로 overlay) */
          &.hover-list::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 0.6s ease;
            z-index: 1;
          }

          &.cinder.hover-list::before {
            background: url(${GstarListBg01Hover}) no-repeat center / cover;
          }

          &.nc::before {
            background: url(${GstarListBg02Hover}) no-repeat center / cover;
          }
          &.aion.hover-list::before {
            background: url(${GstarListBg03Hover}) no-repeat center / cover;
          }

          &:hover::before {
            opacity: 1;
          }

          /* ✅ hover 이미지 컨테이너 */
          .hover-image-wrap {
            position: absolute;
            inset: 0;
            z-index: 2;
            pointer-events: none;

            i {
              position: absolute;
              width: 21.2rem;
              opacity: 0;
              transition: opacity 0.6s ease,
                transform 1s cubic-bezier(0.25, 1, 0.5, 1);

              /* ✅ 기존 효과 복원: after로 contrast & blur 효과 유지 */
              &::after {
                content: "";
                display: block;
                width: 22rem;
                height: calc(100% + 1rem);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: -1;

                background: linear-gradient(
                  to bottom,
                  rgba(20, 50, 110, 0.55) 0%,
                  rgba(60, 100, 200, 0.25) 45%,
                  rgba(120, 160, 255, 0.15) 100%
                );
                mix-blend-mode: overlay;
                opacity: 0.9;
                filter: brightness(1.2) contrast(1.1) blur(6px);
                transition: opacity 0.6s ease, filter 0.6s ease;
              }

              img {
                width: 100%;
                display: block;
              }

              &:first-of-type {
                bottom: 12rem;
                left: 6.6rem;
                transform: translateY(3rem) scale(0.96);
              }

              &:last-of-type {
                bottom: 19rem;
                right: 6.4rem;
                transform: translateY(-3rem) scale(0.96);
              }
            }

            p {
              position: absolute;
              opacity: 0;
              bottom: 4rem;
              left: 50%;
              transform: translateX(-50%) translateY(2rem);
              font-size: 2.2rem;
              line-height: 2.8rem;
              text-align: center;
              color: #0051ff;
              width: 100%;
              b {
                font-weight: 700;
              }
            }
          }

          /* ✅ hover 시 dim + 이미지 + 텍스트 순차 등장 */
          &:hover .hover-image-wrap i:first-of-type {
            opacity: 1;
            transform: translateY(0) scale(1);
            transition-delay: 0.1s;
          }

          &:hover .hover-image-wrap i:last-of-type {
            opacity: 1;
            transform: translateY(0) scale(1);
            transition-delay: 0.25s;
          }

          &:hover .hover-image-wrap p {
            animation: ${fadeUpText} 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
            animation-delay: 0.6s;
          }

          .text-box {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
            position: relative;
            z-index: 3;

            h6 {
              height: 8rem;
              font-size: 3.8rem;
              color: #fff;
            }
            p {
              font-size: 2rem;
              font-weight: 500;
              line-height: 1.4;
              color: #fff;
            }
          }
        }
      }
    }
  }

  /* ✅ active 상태일 때 등장 애니메이션 */
  &.active {
    .title-wrap {
      opacity: 1;
      h4 {
        animation: ${fadeUp} 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards;
      }
      p {
        animation: ${fadeUp} 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        animation-delay: 0.4s;
      }
    }

    .list-wrap {
      ul {
        li {
          animation: ${fadeUp} 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        li:nth-child(2) {
          animation-delay: 1.2s;
        }
        li:nth-child(1),
        li:nth-child(3) {
          animation-delay: 1.5s;
        }
      }
    }
  }
  .list-swiper {
    display: none;
  }
  @media all and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 12rem;
    padding: 13rem 0 21rem;
    .section-wrapper {
      .title-wrap {
        gap: 6rem;
        h4 {
          font-size: 6rem;
          line-height: 6.8rem;
        }
        p {
          font-size: 2.2rem;
          line-height: 3.8rem;
        }
      }
    }
    .list-wrap {
      display: none;
    }

    .mo-list-wrapper {
      opacity: 0;
      transform: translateY(4rem);
      /* transition은 유지해도 되지만, 등장은 animation이 담당하도록 합니다 */
      transition: opacity 0.2s linear; /* (선택) 미세한 보정용 */
      will-change: opacity, transform;

      &.active {
        /* ✅ 등장 애니메이션 (fadeUp 재사용) */
        animation: ${fadeUp} 0.9s cubic-bezier(0.25, 1, 0.5, 1) both;
        animation-delay: 0.8s;
      }
    }

    .mo-list-inner {
      max-width: 1024px;
      margin: 0 auto;
      width: 100%;
    }

    .list-swiper {
      display: block;
      width: 100%;
      .swiper {
        overflow: visible;
      }

      .swiper-slide {
        display: flex;
        justify-content: center;

        .click-list {
          width: 100%;
          position: relative;
          padding: 3.6rem;
          border-radius: 1.2rem;
          min-height: 52rem;
          overflow: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
          cursor: pointer;

          /* ✅ 기본 배경 */
          &.cinder {
            background: url(${GstarListBg01}) no-repeat center / cover;
          }
          &.nc {
            background: url(${GstarListBg02}) no-repeat center / cover;
          }
          &.aion {
            background: url(${GstarListBg03}) no-repeat center / cover;
          }

          /* ✅ hover/active용 오버레이 배경 */
          &::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 0.45s ease;
            will-change: opacity;
            backface-visibility: hidden;
            transform: translateZ(0);
          }

          &.cinder::before {
            background: url(${GstarListBg01Hover}) no-repeat center / cover;
          }
          &.nc::before {
            background: url(${GstarListBg02Hover}) no-repeat center / cover;
          }
          &.aion::before {
            background: url(${GstarListBg03Hover}) no-repeat center / cover;
          }

          &.active::before {
            opacity: 1;
          }

          /* ✅ 이미지 래퍼 (기존 hover 로직 그대로) */
          .click-image-wrap {
            position: absolute;
            inset: 0;
            z-index: 2;
            pointer-events: none;

            i {
              position: absolute;
              width: 21.2rem;
              opacity: 0;
              transition: opacity 0.6s ease,
                transform 1s cubic-bezier(0.25, 1, 0.5, 1);
              will-change: opacity, transform;
              backface-visibility: hidden;
              transform: translateZ(0);

              &::after {
                content: "";
                display: block;
                width: 22rem;
                height: calc(100% + 1rem);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: -1;

                background: linear-gradient(
                  to bottom,
                  rgba(20, 50, 110, 0.55) 0%,
                  rgba(60, 100, 200, 0.25) 45%,
                  rgba(120, 160, 255, 0.15) 100%
                );
                mix-blend-mode: overlay;
                opacity: 0.9;
                filter: brightness(1.2) contrast(1.1) blur(6px);
                transition: opacity 0.6s ease, filter 0.6s ease;
              }

              img {
                width: 100%;
                display: block;
              }

              &:first-of-type {
                bottom: 12rem;
                left: 6.6rem;
                transform: translateY(3rem) scale(0.96);
              }

              &:last-of-type {
                bottom: 19rem;
                right: 6.4rem;
                transform: translateY(-3rem) scale(0.96);
              }
            }

            p {
              position: absolute;
              opacity: 0;
              bottom: 4rem;
              left: 50%;
              transform: translateX(-50%) translateY(2rem);
              font-size: 2.2rem;
              line-height: 2.8rem;
              text-align: center;
              color: #0051ff;
              width: 100%;
              b {
                font-weight: 700;
              }
            }
          }

          /* ✅ active 시 순차 등장 애니메이션 */
          &.active .click-image-wrap {
            i:first-of-type {
              opacity: 1;
              transform: translateY(0) scale(1);
              transition-delay: 0.1s;
            }

            i:last-of-type {
              opacity: 1;
              transform: translateY(0) scale(1);
              transition-delay: 0.25s;
            }

            p {
              animation: ${fadeUpText} 0.8s cubic-bezier(0.25, 1, 0.5, 1)
                forwards;
              animation-delay: 0.6s;
            }
          }

          /* ✅ 텍스트 기본 */
          .text-box {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
            position: relative;
            z-index: 3;

            h6 {
              height: 8rem;
              font-size: 3.8rem;
              color: #fff;
            }
            p {
              font-size: 2rem;
              font-weight: 500;
              line-height: 1.4;
              color: #fff;
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 1024px) {
    .mo-list-wrapper {
      width: 100%;

      /* (접근성) 모션 최소화 설정 시에는 애니메이션 끄기 */
      @media (prefers-reduced-motion: reduce) {
        &,
        &.active {
          animation: none !important;
          transition: none !important;
          opacity: 1;
          transform: none;
        }
      }

      .mo-list-inner {
        padding: 0 2.4rem;
        .swiper {
          overflow: visible;
          .swiper-slide {
            .click-list {
              min-height: 58rem;
              .text-box {
                h6 {
                  height: 6rem;
                }
              }
            }
          }
          .click-image-wrap {
            i {
              width: 22rem;

              &::after {
                width: 22.4rem;
              }

              &:first-of-type {
                bottom: 16rem;
                left: 2.3rem;
                transform: translateY(6rem) scale(0.96);
              }
              &:last-of-type {
                bottom: 24rem;
                right: 2.3rem;
                transform: translateY(-6rem) scale(0.96);
              }
            }
          }
        }
      }
    }
  }

  @media all and (max-width: 900px) {
    gap: 8rem;
    padding: 10rem 0 18rem;
    .section-wrapper {
      .title-wrap {
        gap: 4rem;
      }
    }
  }
  @media all and (max-width: 768px) {
    gap: 10.375vw;
    padding: 18.021vw 0 23.438vw;
    .section-wrapper {
      .title-wrap {
        gap: 5.3vw;
        h4 {
          font-size: 11.017vw;
          line-height: 1.25;
          .mo-br {
            display: block;
          }
        }
        p {
          font-size: 4.6vw !important;
          line-height: 1.4;
          &.pc-text {
            display: none;
          }
          &.mo-text {
            display: block;
          }
        }
      }
    }
    .mo-list-wrapper {
      .mo-list-inner {
        padding: 0 3.125vw;

        .swiper {
          .swiper-slide {
            .click-list {
              padding: 4.688vw;
              min-height: 78.125vw;

              .text-box {
                h6 {
                  height: 7.8125vw;
                  font-size: 4.427vw;
                }
                p {
                  font-size: 3.385vw;
                }
              }

              .click-image-wrap {
                p {
                  bottom: 5.208vw;
                  font-size: 3.385vw;
                  line-height: 4.167vw;
                }

                i {
                  position: absolute;
                  width: 36.458vw;
                  opacity: 0;
                  will-change: transform, opacity;
                  transition: opacity 0.6s ease,
                    transform 1s cubic-bezier(0.25, 1, 0.5, 1);

                  &::after {
                    content: "";
                    display: block;
                    width: 37.109vw;
                    height: calc(100% + 1.302vw);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: -1;

                    background: linear-gradient(
                      to bottom,
                      rgba(20, 50, 110, 0.55) 0%,
                      rgba(60, 100, 200, 0.25) 45%,
                      rgba(120, 160, 255, 0.15) 100%
                    );
                    mix-blend-mode: overlay;
                    opacity: 0.9;
                    filter: brightness(1.2) contrast(1.1) blur(6px);
                    transition: opacity 0.6s ease, filter 0.6s ease;
                  }

                  img {
                    width: 100%;
                    display: block;
                  }

                  /* ✅ 교차 애니메이션용 초기 transform */
                  &:first-of-type {
                    bottom: 28.646vw;
                    left: 3.125vw;
                    transform: translateY(10.417vw) scale(0.96); /* 아래에서 위로 */
                  }

                  &:last-of-type {
                    bottom: 23.438vw;
                    right: 3.125vw;
                    transform: translateY(-10.417vw) scale(0.96); /* 위에서 아래로 */
                  }
                }
              }

              /* ✅ active 시 교차 애니메이션 */
              &.active .click-image-wrap {
                i:first-of-type {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                  transition-delay: 0.1s;
                }

                i:last-of-type {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                  transition-delay: 0.25s;
                }

                p {
                  animation: ${fadeUpText} 0.8s cubic-bezier(0.25, 1, 0.5, 1)
                    forwards;
                  animation-delay: 0.6s;
                }
              }
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 500px) {
    .section-wrapper {
      .title-wrap {
        p {
          font-size: 1.4rem;
          letter-spacing: -0.12px;
        }
      }
    }
    .mo-list-wrapper {
      .mo-list-inner {
        .swiper {
          .swiper-slide {
            .click-list {
              padding: 6vw;
              min-height: 108vw;
              .text-box {
                h6 {
                  height: 12vw;
                  font-size: 6.4vw;
                }
                p {
                  font-size: 4vw;
                }
              }
              .click-image-wrap {
                p {
                  bottom: 8vw;
                  font-size: 3.6vw;
                  line-height: 4.4vw;
                }
                i {
                  width: 52vw;

                  &::after {
                    width: 52.4vw;
                  }

                  &:first-of-type {
                    bottom: 26vw;
                    left: 4.8vw;
                    transform: translateY(8vw) scale(0.96);
                  }

                  &:last-of-type {
                    bottom: 44vw;
                    right: 4.8vw;
                    transform: translateY(-8vw) scale(0.96);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

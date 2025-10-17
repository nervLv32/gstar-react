import { keyframes, styled } from "styled-components";
import GstarListBg01 from "../../../assets/images/main/gstar-booth-list01.png";
import GstarListBg02 from "../../../assets/images/main/gstar-booth-list02.png";
import GstarListBg03 from "../../../assets/images/main/gstar-booth-list03.png";

import GstarListBg01Hover from "../../../assets/images/main/gstar-booth-list01-hover-bg.png";
import GstarListBg02Hover from "../../../assets/images/main/gstar-booth-list02-hover-bg.png";
import GstarListBg03Hover from "../../../assets/images/main/gstar-booth-list03-hover-bg.png";

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(4rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* 텍스트 전용 fadeUp */
const fadeUpText = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(3rem);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

export const GstarBoothSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 10rem 0 24.7rem;
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
      }

      p {
        font-size: 2.4rem;
        font-weight: 500;
        color: #00162a;
        line-height: 4.2rem;
        opacity: 0;
        transform: translateY(3rem);
      }
    }

    .list-wrap {
      ul {
        display: flex;
        gap: 2rem;

        li {
          width: calc(33.333% - (4rem / 3));
          padding: 3.6rem;
          border-radius: 1.2rem;
          min-height: 52rem;
          opacity: 0;
          transform: translateY(6rem);
          position: relative;
          overflow: hidden;
          transition: background 0.6s ease;

          &.hover-list {
            &.cinder {
              background: url(${GstarListBg01}) no-repeat center / cover;

              &:hover {
                background: url(${GstarListBg01Hover}) no-repeat center / cover;
              }
            }

            &.aion {
              background: url(${GstarListBg03}) no-repeat center / cover;
              &:hover {
                background: url(${GstarListBg03Hover}) no-repeat center / cover;
              }
            }

            /* ✅ hover 이미지 컨테이너 */
            .hover-image-wrap {
              position: absolute;
              inset: 0;
              z-index: 3;
              pointer-events: none;

              i {
                position: absolute;
                display: block;
                width: 21.2rem;
                opacity: 0;
                transition: opacity 0.6s ease,
                  transform 1s cubic-bezier(0.25, 1, 0.5, 1);
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

                  /* ✨ 핵심 포인트: 좀 더 투명하게, contrast가 살아나게 */
                  background: linear-gradient(
                    to bottom,
                    rgba(20, 50, 110, 0.55) 0%,
                    rgba(60, 100, 200, 0.25) 45%,
                    rgba(120, 160, 255, 0.15) 100%
                  );

                  mix-blend-mode: overlay; /* ✅ overlay는 contrast(명암대비)를 살림 */
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

            /* ✅ hover 시 애니메이션 (부드럽게 교차로 올라옴) */
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
              animation: ${fadeUpText} 0.8s cubic-bezier(0.25, 1, 0.5, 1)
                forwards;
              animation-delay: 0.6s;
            }
          }

          &.nc {
            background: url(${GstarListBg02}) no-repeat center / cover;
            &:hover {
              background: url(${GstarListBg02Hover}) no-repeat center / cover;
            }
          }

          .text-box {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
            position: relative;
            z-index: 2;

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
`;

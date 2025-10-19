import { styled } from "styled-components";
import AionBg from "../assets/images/ip/aion/ip-aion-default-bg.png";
import CinderBg from "../assets/images/ip/cinder/ip-cinder-default-bg.png";
import TimeTakersBg from "../assets/images/ip/timetakers/ip-timetakers-default-bg.png";
import BreakersBg from "../assets/images/ip/breakers/ip-breakers-default-bg.png";

export const IpWrapper = styled.div`
  width: 100vw;
  height: 200vh;
  overflow: hidden;

  section {
    width: 100vw;
    height: 100vh;

    transition: all 0.6s ease;
    /* &.section:not(.active) {
      pointer-events: none;
    } */
  }
  &.aion {
    .ip-section {
      background: url(${AionBg}) no-repeat left bottom / cover;
    }
    @media (max-width: 1024px) {
      .ip-section {
        background-position-x: 9%;
        background-position-y: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed; /* 🔥 뷰포트 기준으로 고정 */
      }
    }
  }
  &.cinder {
    .ip-section {
      background: url(${CinderBg}) no-repeat left bottom / cover;
    }
  }
  &.timetakers {
    .ip-section {
      background: url(${TimeTakersBg}) no-repeat center / 110%;
      background-position-y: 55%;
    }
  }
  &.breakers {
    .ip-section {
      background: url(${BreakersBg}) no-repeat bottom / cover;
    }
  }

  .ip-section {
    color: #fff;
    .logo-text-wrap {
      position: absolute;
      top: 50%;
      right: 15rem;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;

      i {
        display: block;

        max-width: 70rem;
        img {
          width: 100%;
          display: block;
        }
      }
      .text-button-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8rem;
        .text-info-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4rem;
          .text-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.4rem;
            h2 {
              text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
              font-weight: bold;
              font-size: 5.8rem;
              letter-spacing: -0.87px;
              color: #fff;
              display: flex;
              justify-content: center;
              gap: 1.6rem;
            }
            span {
              font-weight: bold;
              font-size: 3.2rem;
              letter-spacing: -0.48px;
              text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
            }
          }
          .info-text {
            font-size: 1.8rem;
            letter-spacing: -0.27px;
            font-weight: 400;
          }
        }
        .button-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2.8rem;
          a {
            display: flex;
            width: 24rem;
            height: 4.4rem;
            justify-content: center;
            gap: 0.8rem;
            align-items: center;
            border-radius: 10rem;
            transition: all 0.3s ease;

            &:hover {
              transform: translateY(-3px);
            }

            p {
              font-size: 1.6rem;
              font-weight: 600;
            }
            &.default {
              background: #fff;
              p {
                color: rgba(1, 0, 0, 1);
              }
            }
            &.point {
              background: #ff0000;
              i {
                display: block;
                width: 1.6rem;
                height: 2rem;
                img {
                  display: block;
                  height: 100%;
                }
              }
              p {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }

  .info-section {
    background: #003769;
    padding-top: 14rem;
    .big-inner {
      height: 100%;
      padding: 0 8rem;
    }
    .section-wrapper {
      height: 100%;

      .text-wrap {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.6rem;
        h2 {
          font-size: 6.8rem;
          letter-spacing: -1.02px;
          color: #fff;
          font-weight: 700;
        }
        span {
          font-size: 2.4rem;
          letter-spacing: -0.36px;
          font-weight: 700;
          color: #1bb3ff;
          line-height: 3.4rem;
        }
        p {
          text-align: left;
          font-size: 1.8rem;
          line-height: 1.75;
          font-weight: 300;
          color: #fff;
        }
      }
      .swiper {
        margin-top: 4rem;
        overflow: visible;
        z-index: 10;
        .swiper-slide {
          transition: transform 0.6s ease, box-shadow 0.6s ease;
          i {
            display: block;
            height: 100%;
            img {
              display: block;
              width: 100%;
            }
          }
        }

        /* .swiper-slide-active {
          transform: scale(1.05); 
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
          z-index: 2;
        } */
        .swiper-pagination-progressbar {
          top: unset;
          bottom: -5.8rem;
          background: #fff;
          border-radius: 50rem;
          height: 0.3rem;
          .swiper-pagination-progressbar-fill {
            border-radius: 50rem;
            height: 0.3rem;
            background: rgba(43, 188, 255, 1);
          }
        }
      }
    }
  }
  @media all and (max-width: 1660px) {
    .ip-section {
      .logo-text-wrap {
        right: 10rem;
      }
    }
  }
  @media all and (max-width: 1540px) {
    .ip-section {
      .logo-text-wrap {
        right: 8rem;
        gap: 3rem;
        top: 60%;
        i {
          max-width: 45rem;
        }
        .text-button-wrapper {
          gap: 6rem;
          .text-info-wrap {
            .text-wrap {
              h2 {
                font-size: 4.4rem;
                gap: 1.2rem;
              }
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 1440px) {
    .ip-section {
      .logo-text-wrap {
        right: 5rem;
        .text-button-wrapper {
          gap: 4rem;
          .text-info-wrap {
            gap: 3rem;
          }
          .button-wrap {
            gap: 2rem;
          }
        }
      }
    }
  }
  @media all and (max-width: 1200px) {
    .ip-section {
      .logo-text-wrap {
        top: unset;
        bottom: 6rem;
        left: 50%;
        transform: translateY(0) translateX(-50%);
        i {
          max-width: 40rem;
        }
      }
    }
  }
`;

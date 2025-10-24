import { styled } from "styled-components";
import AionBg from "../assets/images/ip/aion/ip-aion-default-bg.webp";
import AionMoBg from "../assets/images/ip/aion/ip-aion-mo-bg.webp";
import CinderBg from "../assets/images/ip/cinder/ip-cinder-default-bg.webp";
import CinderMoBg from "../assets/images/ip/cinder/ip-cinder-mo-bg.webp";
import TimeTakersBg from "../assets/images/ip/timetakers/ip-timetakers-default-bg.webp";
import TimeTakersMoBg from "../assets/images/ip/timetakers/ip-timetakers-mo-bg.webp";
import BreakersBg from "../assets/images/ip/breakers/ip-breakers-default-bg.webp";
import BreakersMoBg from "../assets/images/ip/breakers/ip-breakers-mo-bg.webp";
interface IpWrapperProps {
  $isVh?: string;
}
export const IpWrapper = styled.div<IpWrapperProps>`
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
  /* .ip-section {
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        
        opacity: 0;
        transition: opacity 0.6s ease;
        will-change: opacity;
        z-index: 0;
        pointer-events: none;
      }
      @media (max-width: 1024px) {
        &::after {
          opacity: 1;
        }
      }
  } */
      .ip-section {
        position: relative;
      }
  &.aion {
    .ip-section {
      /* position: relative; */
      background: url(${AionBg}) no-repeat center / cover;
      @media all and (max-width: 1024px) {
        background: url(${AionMoBg}) no-repeat center / cover;
      }
      /* transition: background-position 0.4s ease, background-size 0.4s ease;
      overflow: hidden; */
      /* &::after {
        background: url(${AionMoBg}) no-repeat center / cover;
      } */
    }
  }
  &.cinder {
    .ip-section {
      background: url(${CinderBg}) no-repeat left bottom / cover;
      @media all and (max-width: 1024px) {
        background: url(${CinderMoBg}) no-repeat center / cover;
      }
        /* position: relative;
      transition: background-position 0.4s ease, background-size 0.4s ease;
      overflow: hidden;
      background: url(${CinderBg}) no-repeat left bottom / cover;
      &::after {
        background: url(${CinderMoBg}) no-repeat top / cover;
      } */
    }
  }
  &.timetakers {
    .ip-section {
            background: url(${TimeTakersBg}) no-repeat center / 110%;
      @media all and (max-width: 1024px) {
        background: url(${TimeTakersMoBg}) no-repeat center / cover;
      }
      /* position: relative;
      transition: background-position 0.4s ease, background-size 0.4s ease;
      overflow: hidden;
      background: url(${TimeTakersBg}) no-repeat center / 110%;
      background-position-y: 55%;
      
       &::after {
        background: url(${TimeTakersMoBg}) no-repeat top / cover;
      } */
    }
  }
  &.breakers {
      .ip-section {
        background: url(${BreakersBg}) no-repeat bottom / cover;
      @media all and (max-width: 1024px) {
        background: url(${BreakersMoBg}) no-repeat bottom / cover;
      }
      .tablet-br {
        display: none;
      }
      .logo-text-wrap {
        top: 55%;
      }
    }
    /* .ip-section {
        position: relative;
      transition: background-position 0.4s ease, background-size 0.4s ease;
      overflow: hidden;
      background: url(${BreakersBg}) no-repeat center / cover;
      
       &::after {
        background: url(${BreakersMoBg}) no-repeat bottom / cover;
      }

      
    } */
  }

  .ip-section {
    color: #fff;
    .logo-text-wrap {
      position: absolute;
      z-index: 10;
      top: 50%;
      right: 15rem;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
      min-width: 70rem;
      .logo-wrap {
        width: 100%;
        height: 40rem;
        position: relative;
        > i {
          display: block;
          width: 82rem;
          position: absolute;
          top: -40%;
          left: 50%;
          margin-left: -41rem; 
          right: 0;
          img {
            width: 100%;
            display: block;
          }
        }
      }

      i {
        display: block;
        img {
          width: 100%;
          display: block;
        }
      }
      .text-button-wrapper {
        position: relative;
        z-index; 10;
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
              p {
                .mo-br {
                  display: none;
                }
              }
            }
            span {
              font-weight: bold;
              font-size: 3.2rem;
              letter-spacing: -0.48px;
              text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
              .mo-br {
                display: none;
              }
            }
          }
          .info-text {
            font-size: 1.8rem;
            letter-spacing: -0.27px;
            font-weight: 400;
            .mo-br {
              display: none;
            }
          }
        }
        .button-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2.8rem;
          position: relative;
          z-index: 10;
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
    padding-top: 8rem;
    /* padding-top: 14rem; */
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
          word-break: keep-all;
          font-weight: 300;
          color: #fff;
          .mo-br {
                display: none;
              }
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
        min-width: 50rem;
        right: 8rem;
        gap: 3rem;
        top: 60%;
        .logo-wrap {
          height: 26rem;
          > i {
            width: 54rem;
            margin-left: -27rem;
          }
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
    &.breakers {
  .ip-section {
      
     .logo-text-wrap {
      top: unset;
      .text-button-wrapper {
        .text-info-wrap {
          .text-wrap {
            h2 {
              p {
                line-height: 1.2;
                .tablet-br {
                  display: block;
                }
              }
            }
          }
        }
      }
     }
      
    }
    .logo-text-wrap {
      
      top: unset;
      right: unset;
      bottom: 12%;
      left: 50%;
      transform: translateY(0) translateX(-50%);
      .logo-wrap {
        height: 23rem;
        > i {
          width: 49rem;
          margin-left: -24.5rem;
        }
      }
    }
  }
  .info-section {
    .section-wrapper {
      .text-wrap {
        gap: 1.4rem;
      }
      .swiper {
        .swiper-pagination-progressbar {
          bottom: -4rem;
        }
      }
    }
    .big-inner {
      padding: 0 5rem;
    }
  }
}
  @media all and (max-width: 1024px) {
    height: auto;
    .ip-section {
      .logo-text-wrap {
        right: 0;
        width: 100%;
        gap: 3rem;
       .logo-wrap {
          height: 21rem;
          > i {
            width: 44rem;
            margin-left: -22rem;
          }
        }
        .text-button-wrapper {
          .button-wrap {
            a {
              width: 20rem;
              height: 3.8rem;
            }
          }
          .text-info-wrap {
            .text-wrap {
              
              h2 {
                font-size: 4.4rem;
              }
              p {
                text-shadow: 5px 5px 7px rgba(0, 0, 0, 1);
              }
              span {
                text-shadow: 5px 5px 7px rgba(0, 0, 0, 1);
              }
            }
           
          }
        }
      }
    }
   .info-section {
    height: auto;
    padding: 12rem 0 16rem;
    .section-wrapper {
      .text-wrap {
        p {
          br {
            display: none;
          }
          .mo-br {
            display: block;
          }
        }
      }
    }
   }
  }

  @media all and (max-width: 768px) {
    &.cinder {
      .ip-section {
        .logo-text-wrap {
          .text-button-wrapper {
            .text-info-wrap {
              .text-wrap {
                span {
                  line-height: 1.2;
                  .mo-br {
                    display: block;
                  }
                }
              }
            }
          }
        } 
      }
    }
    &.breakers {
       .ip-section {
        .logo-text-wrap {
          .text-button-wrapper {
            .text-info-wrap {
              h2 {
                line-height: 1.3;
                p {
                  .mo-br {
                  display: block;
                }
                }
              }
            }
          }
        } 
      }
    }
    .info-section {
      padding: 15.625vw 0 20.833vw;
      .big-inner {
        padding: 0 2rem;
      }
      .section-wrapper {
        .text-wrap {
          p {
            word-break: keep-all;
          }
        }
      }
    }
  }
  @media all and (max-width: 640px) {
    .ip-section {
      height: calc(${(props) => props.$isVh || "100vh"}) !important;
      .logo-text-wrap {
        top: unset;
                left: 50%;
        transform: translateX(-50%);
        bottom: 5rem;
        gap: 6.25vw;

        .logo-wrap {
          height: 32.813vw;
          > i {
            width: 68.75vw;
            margin-left: -34.375vw;
          }
        }
        .text-button-wrapper {
          gap: 6.25vw;
          .text-info-wrap {
            gap: 4.688vw;
            .text-wrap {
              gap: 3.75vw;
              h2 {
                font-size: 7.813vw;
              }
              span {
                font-size: 5.313vw;
              }
            }
            .info-text {
              font-size: 4.063vw;
              text-align: center;
              line-height: 1.3;
              .mo-br {
                display: block;
              }
            }
          }
           .button-wrap {
            gap: 1rem;
            a {
              
              width: 40.625vw;
              height: 7.187vw;
              &.point {
                i {
                  width: 1.3rem;
                  height: auto;
                }
              }
              p {
                font-size: 2.5vw;
              }
            }
          }
        }
      }
      
    }
    .info-section {
      padding: 18.75vw 0 28.438vw;
      .section-wrapper {
        .text-wrap {
          gap: 3.438vw;
          h2 {
            font-size: 10.625vw;
          }
          span {
            font-size: 4.688vw;
            line-height: 6.563vw;
          }
          p {
            font-size: 4.063vw;
          }
        }
        .swiper {
          margin-top: 7.813vw;
         .swiper-pagination-progressbar {
            bottom: -3.125vw;
            height: 0.2rem;
          } 
        }
      }
    }
  }
  @media all and (max-width: 500px) {
    .ip-section {
        
      .logo-text-wrap {
        min-width: 1rem;
        .text-button-wrapper {
          .button-wrap {
            a {
              width: 17rem;
              height: 3.8rem;
              &.point {
                i {
                  display: none;
                }
              }
              p {
                font-size: 1.4rem;
                
              }
            }
          }
        }
      }
    }
    .info-section {
      .section-wrapper {
        .swiper {
          .swiper-pagination-progressbar {
            width: calc(100% - 4.4vw)
          }
        }
      }
    }
  }


`;

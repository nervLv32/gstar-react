import { styled } from "styled-components";
import EventBg from "../../../assets/images/main/main-event-bg.png";
import EventTicketBg from "../../../assets/images/main/main-event-ticket-bg.png";
import TicketBg from "../../../assets/images/main/main-event-ticket-blue-bg.png";
import BigTicket from "../../../assets/images/main/event/main-slide-bigticket.png";
import BigTicketShadow from "../../../assets/images/main/event/main-slide-bigticket-shadow.png";
import DimBg from "../../../assets/images/main/event/mo-ticekt-dim.png";

export const EventSectionWrapper = styled.div`
  padding: 12rem 0;
  /* background: url(${EventBg}) no-repeat center / cover; */
  background: #fff;
  display: flex;
  flex-direction: column;
  .event-inner {
    margin: 0 auto;
    max-width: 120rem;
    width: 100%;
  }
  .mo-slide-wrap {
    display: none;
  }
  .event-section-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    .title-tab-wrapper {
      display: flex;
      flex-direction: column;
      gap: 5.8rem;
      .title-wrap {
        display: flex;
        flex-direction: column;
        gap: 4.2rem;
        color: #005aff;
        h5 {
          font-size: 6.8rem;
        }
        p {
          font-size: 2.6rem;
          font-weight: 500;
          text-align: center;
          line-height: 1.3;
          word-break: keep-all;
          b {
            font-weight: 700;
          }
        }
      }
      .title-tab {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;
        li {
          width: 22rem;
          height: 5rem;
          border-radius: 10rem;
          background: rgba(202, 202, 202, 0.3);
          font-size: 2.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(122, 157, 217, 0.7);

          cursor: pointer;
          &.active {
            background: linear-gradient(
              268.75deg,
              #1942f4 -6.44%,
              #2bbcff 99.57%
            );
            color: #fff;
            transition: all 0.2s linear;
          }
        }
      }
    }
    .slide-wrap {
      /* margin-bottom: -4rem; */
      display: flex;
      flex-direction: column;
      gap: 3.6rem;
      .slide {
        width: 100%;
        height: 45rem;
        /* background: url(${EventTicketBg}) no-repeat center / cover; */
        background: url(${TicketBg}) no-repeat center / cover;
        display: flex;
        /* padding: 5rem 3.2rem 2.6rem 10rem; */
        /* padding: 5rem 8rem 2.6rem 10rem; */
        gap: 2.5rem;
        position: relative;
        &.bigticket {
          background: url(${BigTicket}) no-repeat center / cover;
          position: relative;
          /* &::after {
            content: "";
            display: block;
            width: 154rem;
            z-index: -1;
            height: 64rem;
            background: red;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: url(${BigTicketShadow}) no-repeat center / cover;
          } */
        }

        .slide-image {
          padding: 1.2rem 0 1.2rem 5rem;
          height: 100%;
          i {
            display: block;
            width: 50rem;
            img {
              display: block;
              width: 100%;
            }
          }
        }

        .slide-text-wrap {
          padding-top: 4rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2.2rem;
          .point {
            color: #0a309a;
            font-size: 2rem;
            line-height: 3.4rem;
          }
          .text-wrap {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2.2rem;
            .ticket-title-wrap {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
              gap: 1.2rem;
              h6 {
                font-size: 4.6rem;
                color: #fff;
                line-height: 1.2;
                letter-spacing: -2px;
              }
              p {
                font-size: 2.2rem;
                font-weight: 600;
                line-height: 1.3;
                color: rgba(255, 255, 255, 0.82);
              }
            }
            .dl-wrap {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              dl {
                display: flex;
                align-items: center;
                gap: 2.4rem;
                dt {
                  min-width: 4.2rem;
                  color: #fff;
                  font-size: 2rem;
                  font-weight: 800;
                }
                dd {
                  font-size: 2rem;
                  font-weight: 500;
                  color: #fff;
                  text-align: left;
                  line-height: 1.2;
                  word-break: keep-all;
                  letter-spacing: -0.6px;
                  b {
                    font-weight: 700;
                  }
                }
              }
            }
          }
        }
      }
    }
    .slide-wrapper {
      position: relative;
      /* margin-top: 7rem; */
      .swiper {
        /* padding-bottom: 4rem; */
      }
      .custom-pagination,
      .custom-pagination-mo {
        position: absolute;
        bottom: -5rem;
        left: 50%;
        transform: translateX(-50%);

        &.active {
          /* bottom: 54rem; */
        }
        .swiper-pagination-bullet {
          background: rgba(0, 136, 255, 0.3);
          cursor: pointer;
          width: 1.1rem;
          height: 1.1rem;
          opacity: 1;

          margin: 0 1.3rem;
          border-radius: 0.6rem;
          &.swiper-pagination-bullet-active {
            background: rgba(0, 136, 255, 1);
          }
        }
      }
      .arrow-btn-wrap {
        .slide-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          i {
            display: block;
            width: 2.2rem;
            height: 9.7rem;

            img {
              display: block;
              width: 100%;
            }
          }
          &.prev {
            left: -10rem;
          }
          &.next {
            right: -10rem;
          }
        }
      }
    }
  }
  @media all and (max-width: 1200px) {
    .event-inner {
      padding: 0 2rem;
    }
    .event-section-wrapper {
      .slide-wrap {
        gap: 2.4rem;
        .slide {
          height: 36.167vw;
          .slide-image {
            padding-left: 3rem;
            i {
              width: 41.667vw;
              img {
                width: 41.667vw;
              }
            }
          }
          .slide-text-wrap {
            padding-right: 2rem;
            gap: 2rem;
            padding-top: 3rem;
            .text-wrap {
              gap: 2.2rem;
              .ticket-title-wrap {
                gap: 1.2rem;
                h6 {
                  font-size: 3.6rem;
                }
                p {
                  font-size: 2rem;
                }
              }
              .dl-wrap {
                gap: 1rem;
                dl {
                  dt {
                    font-size: 1.8rem;
                  }
                  dd {
                    font-size: 1.8rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media all and (max-width: 1024px) {
    .event-section-wrapper {
      .slide-wrap {
        gap: 1.8rem;
        .slide {
          gap: 2rem;
          .slide-image {
            display: flex;
            align-items: center;

            padding-top: 0;
            padding-left: 1.4rem;
            i {
              width: 35.156vw;
              img {
                width: 35.156vw;
              }
            }
          }
          .slide-text-wrap {
            gap: 1.2rem;
            .point {
              font-size: 1.6rem;
              line-height: 2.2rem;
            }
            .text-wrap {
              gap: 1.6rem;
              .ticket-title-wrap {
                h6 {
                  font-size: 3.2rem;
                }
                p {
                  font-size: 1.8rem;
                }
              }
              .dl-wrap {
                gap: 0.6rem;
                dl {
                  gap: 2rem;
                  dt {
                    font-size: 1.6rem;
                  }
                  dd {
                    font-size: 1.6rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 900px) {
    gap: 8rem;
    .pc-slide-wrap {
      display: none;
    }
    .mo-slide-wrap {
      display: block;
      .mo-mission-slide,
      .mo-event-slide {
        .swiper-slide {
          position: relative;
          &::after {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background: url(${DimBg}) no-repeat center / cover;
            opacity: 0.5;
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.3s linear;
          }
          &.swiper-slide-active {
            &::after {
              opacity: 0;
            }
          }

          i {
            display: block;
            width: 100%;
            img {
              display: block;
              width: 100%;
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 768px) {
    gap: 8.073vw;
    padding: 6rem 0;
    .event-section-wrapper {
      .title-tab-wrapper {
        gap: 5.469vw;
        .title-wrap {
          gap: 4.427vw;
          h5 {
            font-size: 4.4rem;
          }
          p {
            font-size: 4.6vw;
          }
        }
        .title-tab {
          gap: 1.4rem;
        }
      }
    }
  }
  @media all and (max-width: 500px) {
    .event-section-wrapper {
      .title-tab-wrapper {
        .title-wrap {
          h5 {
            font-size: 3.8rem;
          }
        }
        .title-tab {
          gap: 0.8rem;
          li {
            width: 14rem;
            height: 4rem;
            font-size: 1.6rem;
          }
        }
      }
    }
  }
`;

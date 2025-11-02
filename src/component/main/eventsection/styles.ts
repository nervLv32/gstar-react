import { styled } from "styled-components";
import EventBg from "../../../assets/images/main/main-event-bg.png";
import EventTicketBg from "../../../assets/images/main/main-event-ticket-bg.png";
import TicketBg from "../../../assets/images/main/main-event-ticket-blue-bg.png";
import BigTicket from "../../../assets/images/main/event/main-slide-bigticket.png";

export const EventSectionWrapper = styled.div`
  padding: 24rem 0;
  /* background: url(${EventBg}) no-repeat center / cover; */
  background: #fff;
  .event-inner {
    margin: 0 auto;
    max-width: 144rem;
    width: 100%;
  }
  .event-section-wrapper {
    display: flex;
    flex-direction: column;
    gap: 7rem;
    .title-tab-wrapper {
      display: flex;
      flex-direction: column;
      gap: 5.8rem;
      .title-wrap {
        display: flex;
        flex-direction: column;
        gap: 6.4rem;
        color: #005aff;
        h5 {
          font-size: 6.8rem;
        }
        p {
          font-size: 3.2rem;
          font-weight: 500;
          text-align: center;
          line-height: 1.3;
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
      gap: 5rem;
      .slide {
        width: 100%;
        height: 53.9rem;
        /* background: url(${EventTicketBg}) no-repeat center / cover; */
        background: url(${TicketBg}) no-repeat center / cover;
        display: flex;
        /* padding: 5rem 3.2rem 2.6rem 10rem; */
        /* padding: 5rem 8rem 2.6rem 10rem; */
        gap: 4.5rem;
        position: relative;
        &.bigticket {
          background: url(${BigTicket}) no-repeat center / cover;
        }

        .slide-image {
          padding: 1.2rem 0 1.2rem 5rem;
          height: 100%;
          i {
            display: block;
            width: 60rem;
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
          gap: 3.4rem;
          .point {
            color: #0a309a;
            font-size: 2.4rem;
            line-height: 3.8rem;
          }
          .text-wrap {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2.8rem;
            .ticket-title-wrap {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
              gap: 1.6rem;
              h6 {
                font-size: 5.8rem;
                color: #fff;
                line-height: 1.2;
              }
              p {
                font-size: 2.6rem;
                font-weight: 600;
                line-height: 1.3;
                color: rgba(255, 255, 255, 0.82);
              }
            }
            .dl-wrap {
              display: flex;
              flex-direction: column;
              gap: 1.8rem;
              dl {
                display: flex;
                gap: 3.5rem;
                dt {
                  min-width: 4.2rem;
                  color: #fff;
                  font-size: 2.4rem;
                  font-weight: 800;
                }
                dd {
                  font-size: 2.4rem;
                  font-weight: 400;
                  color: #fff;
                  text-align: left;
                  line-height: 1.2;
                  word-break: keep-all;
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
      .custom-pagination {
        position: absolute;
        bottom: -5rem;
        left: 50%;
        transform: translateX(-50%);

        &.active {
          bottom: 54rem;
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
`;

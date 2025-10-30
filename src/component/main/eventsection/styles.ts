import { styled } from "styled-components";
import EventBg from "../../../assets/images/main/main-event-bg.png";
import EventTicketBg from "../../../assets/images/main/main-event-ticket-bg.png";

export const EventSectionWrapper = styled.div`
  padding: 24rem 0;
  background: url(${EventBg}) no-repeat center / cover;
  .event-inner {
    margin: 0 auto;
    max-width: 146rem;
    width: 100%;
  }
  .event-section-wrapper {
    .title-tab-wrapper {
      display: flex;
      flex-direction: column;
      gap: 5.8rem;
      .title-wrap {
        display: flex;
        flex-direction: column;
        gap: 6.4rem;
        color: #fff;
        h5 {
          font-size: 6.8rem;
        }
        p {
          font-size: 3.2rem;
          font-weight: 500;
          text-align: center;
          line-height: 1.3;
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
          color: rgba(255, 255, 255, 0.7);

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
      .slide {
        width: 100%;
        height: 59rem;
        background: url(${EventTicketBg}) no-repeat center / cover;
        display: flex;
        padding: 5rem 3.2rem 2.6rem 5rem;
        gap: 4.5rem;
        .slide-image {
          width: 60rem;
          height: 51.4rem;
          background: grey;
        }
        .slide-text-wrap {
          padding-top: 6rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3.4rem;
          .point {
            --from: #2bbcff;
            --to: #005aff;
            --dir: 90deg;

            background: linear-gradient(var(--dir), var(--from), var(--to));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
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
                font-size: 6.5rem;
                color: #fff;
              }
              p {
                font-size: 3rem;
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
                }
              }
            }
          }
        }
      }
    }
  }
`;

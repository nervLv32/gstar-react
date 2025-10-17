import { styled } from "styled-components";
import BoothBg from "../../../assets/images/main/main-booth-bg.png";

export const BoothSectionWrapper = styled.div`
  width: 100vw;

  background: #fff;
  .booth-banner-wrap {
    padding: 12.3rem;
    background: url(${BoothBg}) no-repeat center / cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 5rem;
    .banner-title-wrap {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      span {
        font-size: 3.4rem;
        font-weight: 900;
        color: #fff;
        letter-spacing: -0.51px;
        display: block;
        height: 4rem;
      }
      h6 {
        font-size: 6.8rem;
        font-weight: 900;
        color: #fff;
        letter-spacing: -1.02px;
        height: 9rem;
      }
    }
    .button-wrap {
      a {
        border-radius: 10rem;
        background: linear-gradient(88.27deg, #2bbcff 0%, #005aff 99.52%);
        display: flex;
        width: 25.2rem;
        height: 5.8rem;
        align-items: center;
        justify-content: center;
        font-size: 2.4rem;
        line-height: 3.8rem;
        color: #fff;
        font-weight: 500;
      }
    }
  }
  .contents-wrap {
    padding: 23.6rem 0 17.3rem;
    .contents-wrapper {
      .text-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        h4 {
          font-size: 6.8rem;
          color: #1942f4;
          letter-spacing: -1.02px;
          font-weight: 900;
          height: 11.2rem;
        }
        p {
          font-size: 3.4rem;
          font-weight: 700;
          color: #00162a;
          line-height: 1.6;
        }
      }

      .ticket-info-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        .info-wrap {
          padding: 4.2rem 9.1rem;
          background: #e3e3e3;
          border-radius: 1.2rem 1.2rem 0 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          .title-info-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            padding-bottom: 4.4rem;
            border-bottom: 0.1rem solid #003769;
            margin-bottom: 3rem;
            h5 {
              width: fit-content;
              font-size: 4.8rem;
              font-weight: 900;
              line-height: 7rem;
              letter-spacing: -0.72px;
              color: #003769;
              .point {
                color: #1942f4;
              }
            }
            > span {
              font-size: 1.8rem;
              font-weight: 500;
              line-height: 4.4rem;
              color: #003769;
              position: absolute;
              bottom: 0;
              right: 8rem;
            }
          }
          .dl-info-wrap {
            padding: 0 3.4rem;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            dl {
              display: flex;
              align-items: center;
              text-align: left;
              dt {
                min-width: 20rem;
                font-size: 2.4rem;
                font-weight: 800;
                color: #003769;
              }
              dd {
                min-width: calc(100% - 20rem);
                font-size: 2.4rem;
                font-weight: 500;
                color: #003769;
              }
            }
          }
        }
        .button-wrap {
          border-radius: 0 0 1.2rem 1.2rem;

          background: #005aff;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          a {
            padding: 2.8rem;
            display: block;
            width: 100%;
            font-size: 3.4rem;
            line-height: 4.4rem;
            letter-spacing: -0.51px;
            color: #fff;
          }
        }
      }
    }
  }
  .policy-wrap {
    background: #e3e3e3;
    padding: 8rem 0 12rem;
    .policy-wrapper {
      .title-wrap {
        padding-bottom: 3.2rem;
        border-bottom: 0.1rem solid #000;
        margin-bottom: 3.4rem;
        h6 {
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 2.9rem;
          color: #000;
        }
      }
      .text-wrap {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.6rem;
        p {
          font-size: 1.4em;
          font-weight: 500;

          color: #000;
          padding-left: 1rem;
          position: relative;

          &::after {
            content: "";
            display: block;
            width: 0.4rem;
            height: 0.1rem;
            background: #000;
            position: absolute;
            top: 0.7rem;
            left: 0;
          }
        }
      }
    }
  }
`;

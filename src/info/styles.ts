import { styled } from "styled-components";
import Bg from "../assets/images/info/info-bg.png";

export const InfoWrapper = styled.div`
  .info-visual-section {
    /* height: 108rem; */
    background: url(${Bg}) no-repeat center / cover;

    padding: 15.7rem 0 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .info-inner {
      color: #fff;

      max-width: 78rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 6.2rem;
    }
    h3 {
      text-align: center;
      font-size: 4.2rem;
      letter-spacing: -0.063px;
    }

    .img-text-wrap {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
      i {
        display: block;
        width: 72.6rem;
        img {
          display: block;
          width: 100%;
        }
      }
      p {
        text-align: center;
        width: 100%;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 1.5;
      }
    }
  }
  .nc-section {
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .tab-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5.7rem;
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;
        li {
          width: 23.5rem;
          height: 6.5rem;
          border-radius: 10rem;
          background: #cacaca;
          font-size: 2.8rem;
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
    .slide-inner {
      max-width: 152rem;
      margin: 0 auto;
      width: 100%;
      background: #000;
    }
    .slide-wrapper {
      .slide-inner {
        position: relative;
      }
      .swiper-slide {
        width: 100%;
        i {
          display: block;
          width: 100%;
          background: #000;
          img {
            display: block;
            width: 100%;
          }
        }
      }
      .swiper-pagination-bullets {
        top: unset;
        bottom: 7rem;

        .swiper-pagination-bullet {
          width: 1.1rem;
          height: 1.1rem;
          margin: 0 1.3rem;
          background: rgba(217, 217, 217, 0.3);
          opacity: 1;
          border-radius: 0.7rem;
          &.swiper-pagination-bullet-active {
            background: rgba(217, 217, 217, 1);
          }
        }
      }
      .arrow-btn-wrap {
        .slide-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: block;
          width: 2.8rem;
          height: 3rem;
          cursor: pointer;
          img {
            display: block;
            width: 100%;
          }
          &.prev {
            left: -7.3rem;
          }
          &.next {
            right: -7.3rem;
          }
        }
      }
    }
  }
  @media all and (max-width: 1800px) {
    .nc-section {
      .slide-wrapper {
        .arrow-btn-wrap {
          .slide-arrow {
            z-index: 10;
            &.prev {
              left: 8rem;
            }
            &.next {
              right: 8rem;
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 1520px) {
    .nc-section {
      overflow: hidden;
      .swiper-wrapper {
      }
      .slide-inner {
        padding: 0 2rem;
        margin: 0 -2rem;
        width: calc(100% + 4rem);
      }
    }
  }
  @media all and (max-width: 1200px) {
    .nc-section {
      .slide-wrapper {
        .arrow-btn-wrap {
          .slide-arrow {
            display: none;
          }
        }
        .swiper-pagination-bullets {
          swiper-pagination-bullet {
            margin: 0 0.8rem;
          }
          bottom: 5rem;
        }
      }
    }
  }
  @media all and (max-width: 1024px) {
    .nc-section {
      gap: 2rem;
      .tab-wrapper {
        ul {
          gap: 1.8rem;
          li {
            font-size: 2.4rem;
            height: 5.4rem;
            width: 18rem;
          }
        }
      }
    }
  }
  @media all and (max-width: 780px) {
    .info-visual-section {
      padding: 12rem 0 0;
      h3 {
        font-size: 3.6rem;
      }
      .info-inner {
        gap: 4rem;
        padding: 0 2rem;
        width: 100%;
        .img-text-wrap {
          gap: 3rem;
          i {
            width: 100%;
          }
          p {
            font-size: 1.6rem;
          }
        }
      }
    }
    .nc-section {
      padding: 12.821vw 0 15.385vw;
      gap: 3.59vw;
      .tab-wrapper {
        ul {
          gap: 2.821vw;
          li {
            font-size: 3.59vw;
            height: 8.205vw;
            width: 24.359vw;
          }
        }
      }
      .swiper-wrapper {
        padding-bottom: 5.128vw;
      }
      .slide-wrapper {
        .swiper-pagination-bullets {
          bottom: 0;
          .swiper-pagination-bullet {
            width: 2.051vw;
            height: 2.051vw;
            margin: 0 1.538vw;
          }
        }
      }
    }
  }
`;

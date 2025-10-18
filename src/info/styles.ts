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
    padding: 10rem 14rem;
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
`;

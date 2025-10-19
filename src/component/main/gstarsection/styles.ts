import { keyframes, styled } from "styled-components";

const ticketZoom = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.2);
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-40%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const GstarSectionWrapper = styled.section`
  width: 100%;
  text-align: center;
  padding: 24rem 0 5rem;
  background: #fff;
  overflow: hidden;

  .text-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    justify-content: center;

    .top-text,
    .bottom-text {
      font-size: 25rem;
      font-weight: 900;
      color: #0050ff;
      opacity: 0;
      transform: translateY(0);
      transition: opacity 0.4s ease, transform 0.3s ease;
      line-height: 1;
    }

    .ticket-wrap {
      position: relative;
      z-index: 5;
      width: 100rem;
      height: 50rem;
      opacity: 0;
      transform: scale(1.2);
      transition: transform 1s cubic-bezier(0.25, 1, 0.5, 1), opacity 1s ease;

      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    .top-text {
      position: relative;
      z-index: 2;
      margin-bottom: -2.4rem;
    }

    .bottom-text {
      position: relative;
      z-index: 2;
      margin-top: -2.4rem;
    }
  }

  &.active {
    .ticket-wrap {
      animation: ${ticketZoom} 1.8s ease forwards;
    }

    .top-text {
      animation: ${fadeUp} 0.8s ease forwards;
      animation-delay: 0.7s;
    }

    .bottom-text {
      animation: ${fadeDown} 0.8s ease forwards;
      animation-delay: 1s;
    }
  }
  @media all and (max-width: 1680px) {
    .text-wrap {
      .ticket-wrap {
        width: 90rem;
        height: 45rem;
      }
      .top-text {
        font-size: 20rem;
      }
      .bottom-text {
        font-size: 20rem;
      }
    }
  }
  @media all and (max-width: 1200px) {
    padding: 20rem 0 4rem;
    .text-wrap {
      .ticket-wrap {
        width: 80rem;
        height: 40rem;
      }
      .top-text {
        font-size: 16rem;
      }
      .bottom-text {
        font-size: 16rem;
      }
    }
  }
  @media all and (max-width: 900px) {
    padding: 22.222vw 0 4.444vw;
    .text-wrap {
      .ticket-wrap {
        width: 83.33vw;
        height: 41.667vw;
      }
      .top-text {
        margin-bottom: -2vw;
        font-size: 16.667vw;
      }
      .bottom-text {
        font-size: 16.667vw;
        margin-top: -2vw;
      }
    }
  }
`;

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
    transform: translateY(12rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-12rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const GstarSectionWrapper = styled.section`
  width: 100%;
  text-align: center;
  padding: 24rem 0 10rem;
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
      transition: opacity 0.4s ease, transform 0.4s ease;
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

    /* 🔹 위 텍스트: 티켓 뒤쪽에 겹치기 */
    .top-text {
      position: relative;
      z-index: 2;
      margin-bottom: -2.4rem; /* 티켓과 겹치도록 위쪽으로 밀착 */
    }

    /* 🔹 아래 텍스트: 티켓 앞쪽에 겹치기 */
    .bottom-text {
      position: relative;
      z-index: 2;
      margin-top: -2.4rem; /* 티켓과 겹치도록 아래쪽으로 밀착 */
    }
  }

  &.active {
    .ticket-wrap {
      animation: ${ticketZoom} 1.8s ease forwards;
    }

    .top-text {
      animation: ${fadeUp} 1s ease forwards;
      animation-delay: 1.2s;
    }

    .bottom-text {
      animation: ${fadeDown} 1s ease forwards;
      animation-delay: 2s;
    }
  }
`;

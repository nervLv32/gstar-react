import { keyframes, styled } from "styled-components";

const moveLeft = keyframes`
  0% {
    transform: translateX(0) rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: translateX(-2rem) rotate(-8deg);
    opacity: 1;
  }
`;

const moveRight = keyframes`
  0% {
    transform: translateX(0) rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: translateX(2rem) rotate(8deg);
    opacity: 1;
  }
`;

export const TicketWrapper = styled.div`
  position: relative;
  width: 54rem;
  height: 77rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .ticket-wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .ticket {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform-origin: center center;
    opacity: 0;
  }

  &.active {
    .ticket.left {
      animation: ${moveLeft} 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards;
      z-index: 2;
    }

    .ticket.right {
      animation: ${moveRight} 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards;
      animation-delay: 0.1s;
      z-index: 1;
    }
  }
`;

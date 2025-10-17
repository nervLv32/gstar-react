import { keyframes, styled } from "styled-components";

/* 왼쪽 티켓이 확 퍼지면서 회전 */
const moveLeft = keyframes`
  0% {
    transform: translateX(0) rotate(0deg) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(-2rem) rotate(-18deg) scale(1.05);
    opacity: 1;
  }
`;

/* 오른쪽 티켓이 확 퍼지면서 회전 */
const moveRight = keyframes`
  0% {
    transform: translateX(0) rotate(0deg) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(2rem) rotate(18deg) scale(1.05);
    opacity: 1;
  }
`;

export const TicketWrapper = styled.div`
  position: relative;
  width: 54rem;
  height: 65rem;
  margin: 7rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px; /* 약간의 입체감 */

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
    filter: drop-shadow(0 1rem 2rem rgba(0, 0, 0, 0.25));
    transform-origin: center bottom;
    opacity: 0;
  }

  &.active {
    .ticket.left {
      animation: ${moveLeft} 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      z-index: 2;
    }

    .ticket.right {
      animation: ${moveRight} 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: 0.1s;
      z-index: 1;
    }
  }

  /* ✅ active가 해제될 때 다시 가운데로 복귀 */
  &:not(.active) .ticket {
    transform: translateX(0) rotate(0deg) scale(1);
    opacity: 0;
    transition: all 0.6s ease;
  }
`;

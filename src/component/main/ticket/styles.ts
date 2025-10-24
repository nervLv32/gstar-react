import { keyframes, styled } from "styled-components";

/* ================================
   🎬 PC용 애니메이션
================================ */
const moveLeft = keyframes`
  0% {
    transform: translateX(0) rotate(0deg) scale(1);
    opacity: 0;
  }
  50% { opacity: 1; }
  100% {
    transform: translateX(-2rem) rotate(-18deg) scale(1.05);
    opacity: 1;
  }
`;

const moveRight = keyframes`
  0% {
    transform: translateX(0) rotate(0deg) scale(1);
    opacity: 0;
  }
  50% { opacity: 1; }
  100% {
    transform: translateX(2rem) rotate(18deg) scale(1.05);
    opacity: 1;
  }
`;

/* ================================
   📱 모바일용 애니메이션
================================ */
const moveLeftMo = keyframes`
  0% {
    transform: translateX(0) rotate(0deg) scale(1);
    opacity: 0;
  }
  50% { opacity: 1; }
  100% {
    transform: translateX(-3vw) rotate(-14deg) scale(1.05);
    opacity: 1;
  }
`;

const moveRightMo = keyframes`
  0% {
    transform: translateX(0) rotate(0deg) scale(1);
    opacity: 0;
  }
  50% { opacity: 1; }
  100% {
    transform: translateX(3vw) rotate(14deg) scale(1.05);
    opacity: 1;
  }
`;

/* ================================
   🎟️ 티켓 컴포넌트 스타일
================================ */
export const TicketWrapper = styled.div`
  position: relative;
  width: 46rem;
  /* width: 54rem; */
  height: 52rem;
  /* height: 65rem; */
  /* margin: 7rem auto; */
  margin: 2rem auto 7rem;
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

  /* ✅ active 상태일 때만 애니메이션 실행 */
  &.active {
    .ticket.left {
      animation: ${moveLeft} 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      z-index: 3; /* 항상 위 (PC + Mobile 동일) */
    }

    .ticket.right {
      animation: ${moveRight} 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: 0.1s;
      z-index: 2; /* 항상 아래 */
    }
  }

  /* ✅ active 해제 시 초기 상태 복귀 */
  &:not(.active) .ticket {
    transform: translateX(0) rotate(0deg) scale(1);
    opacity: 0;
    transition: all 0.6s ease;
  }

  /* ================================
     💻 PC 반응형
  ================================= */
  @media all and (max-width: 1024px) {
    width: 40rem;
    height: 53rem;
    margin: 1.4rem auto 2rem;
  }

  /* ================================
     📱 모바일 반응형
  ================================= */
  @media all and (max-width: 768px) {
    width: 66.406vw;
    height: 80.729vw;
    margin: 5.208vw auto;

    &.active {
      .ticket.left {
        animation: ${moveLeftMo} 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        z-index: 3; /* 모바일에서도 왼쪽이 위 */
      }

      .ticket.right {
        animation: ${moveRightMo} 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        animation-delay: 0.1s;
        z-index: 2; /* 모바일에서도 오른쪽이 아래 */
      }
    }
  }
`;

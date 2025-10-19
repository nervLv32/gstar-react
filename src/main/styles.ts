import { keyframes, styled } from "styled-components";

export const IntroVideoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const moveTape = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const TapeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background: #005aff;
  padding: 2.8rem 0;
  position: relative;

  .tape {
    display: flex;
    white-space: nowrap;
    animation: ${moveTape} 20s linear infinite;
    gap: 5.7rem;
    img {
      height: 1.9rem;
      display: block;
    }
  }
  @media all and (max-width: 500px) {
    padding: 2.2rem 0;
    .tape {
      gap: 4.5rem;
      img {
        height: 1.7rem;
      }
    }
  }
`;

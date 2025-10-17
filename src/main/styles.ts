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
  background: #2020ff; /* 네이비나 블루 계열 */
  padding: 2.8rem 0;
  position: relative;

  .tape {
    display: flex;
    white-space: nowrap;
    animation: ${moveTape} 20s linear infinite;

    p {
      font-weight: 700;
      font-size: 1.6rem;
      color: #fff;
      margin-right: 5rem; /* 텍스트 간격 */
    }
  }
`;

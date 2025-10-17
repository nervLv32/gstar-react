import { styled } from "styled-components";

export const TicketParallaxSectionWrapper = styled.section`
  position: relative;
  height: 200vh;
  width: 100%;
  overflow: hidden;
  background: #000;

  .screen {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    overflow: visible;
  }

  .holder {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .visual {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
    transform-origin: center center;
    width: 52vw; /* 기본 크기 (2:1 비율) */
    aspect-ratio: 3998 / 2003;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
  }

  .title-wrap {
    position: absolute;
    inset: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    pointer-events: none;

    .title {
      font-weight: 900;
      font-size: clamp(3rem, 6vw, 8rem);
      line-height: 1.1;
      opacity: 0;
      color: #fff;
    }

    .bottom {
      color: #82baff;
      margin-top: 1rem;
    }
  }
`;

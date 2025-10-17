import { styled } from "styled-components";

export const VideoSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 150vh;
  background: #000;

  .video-inner {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transform-origin: center center;
    transform: scale(0.9);
    opacity: 0.85;
    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease;

    /* 👇 경계 블러 효과용 마스크 */
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      /* 중앙은 투명하고, 가장자리는 블러 + 어둡게 */
      background: radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0) 65%,
        rgba(0, 0, 0, 0.25) 80%,
        rgba(0, 0, 0, 0.8) 100%
      );
      filter: blur(20px); /* 👈 이게 핵심: 경계만 흐릿하게 */
      opacity: 1;
      transition: opacity 0.6s ease;
    }
  }

  &.active .video-inner {
    transform: scale(1);
    opacity: 1;
    z-index: 10;
  }

  /* 활성화되면 경계 blur 서서히 사라짐 */
  &.active .video-inner::after {
    opacity: 0;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

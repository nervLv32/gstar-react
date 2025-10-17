import { styled } from "styled-components";
import FloatingBgImage from "../../../assets/images/floating/floating-bg-image.png";
import FloatingBgTransparentImage from "../../../assets/images/floating/floating-bg-transparent-image.png";

export const FloatingMenuWrapper = styled.div`
  position: fixed;
  top: 40rem;
  left: -100px;
  width: 20rem;
  height: 37.6rem;
  margin: 0 auto;
  z-index: 21;
  overflow: hidden;

  transition: left 1s cubic-bezier(0.25, 1, 0.5, 1), opacity 1s ease;

  &.open {
    left: 2rem;

    .inner {
      opacity: 1;

      .title-text {
        &::after {
          transform: translateX(-50%) scaleX(1); /* 💡 가로 확장 */
        }
      }
    }
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${FloatingBgTransparentImage}) no-repeat center / cover;
    z-index: -1;
    opacity: 0;
    animation: fadeInBg 0.8s ease forwards;
    animation-delay: 1s;
  }
  /* 
  &::before {
    content: "";
    display: block;
    width: calc(100% - 0.4rem);
    height: 37.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${FloatingBgImage}) no-repeat center / cover;
    z-index: -1;
    opacity: 0;
    animation: fadeInBg 0.8s ease forwards;
    animation-delay: 1s;
  } */

  @keyframes fadeInBg {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .inner {
    position: relative;
    opacity: 0;
    transition: opacity 0.8s ease 0.4s;
    color: #fff;
    text-align: center;

    .title-text {
      height: 6.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 100%;
        height: 0.2rem;
        background: #fff;
        transform: translateX(-50%) scaleX(0); /* 💡 처음엔 0으로 접혀있음 */
        transform-origin: center; /* 💡 중앙 기준으로 양쪽 확장 */
        transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.4s; /* 딜레이로 자연스럽게 */
      }

      p {
        font-size: 2.2rem;
        font-weight: 800;
        letter-spacing: -0.33px;
        color: #fff;
      }
    }
  }

  ul {
    list-style: none;

    opacity: 0.8;
    padding: 3rem 2.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    li {
      &.active {
        a {
          font-weight: 800;
          color: #fff;
          text-shadow: 0px 0px 5px #2bbcff;
          opacity: 1;
        }
      }
      &:hover {
        a {
          font-weight: 800;
          color: #fff;
          text-shadow: 0px 0px 5px #2bbcff;
          opacity: 1;
        }
      }
      a {
        display: block;
        font-size: 2rem;
        letter-spacing: -0.3px;
        color: #fff;
        opacity: 0.5;
        height: 2.8rem;
        font-weight: 400;
        transition: all 0.3s;
      }
    }

    .home {
      margin-top: 2rem;
      font-weight: 900;
      font-size: 1.2rem;
    }
  }
`;

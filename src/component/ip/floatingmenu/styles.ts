import { styled } from "styled-components";
import FloatingBgImage from "../../../assets/images/floating/floating-bg-image.png";

export const FloatingMenuWrapper = styled.div`
  @keyframes fadeInBg {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes pointFadeIn {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  position: fixed;
  top: 40rem;
  left: -100%;
  width: 21.9rem;
  height: 34.6rem;
  margin: 0 auto;
  z-index: 21;

  transition: left 2s cubic-bezier(0.25, 1, 0.5, 1), opacity 1s ease;

  background: url(${FloatingBgImage}) no-repeat center / cover;
  z-index: 1;

  &.open {
    left: -1rem;

    .light-image {
      opacity: 1;
    }
    .inner {
      opacity: 1;
    }
  }

  .light-image {
    display: block;
    width: 7.8rem;
    height: 7.8rem;
    position: absolute;
    top: -2.2rem;
    right: -2.2rem;
    opacity: 0;
    transition: opacity 1s ease;
    transition-delay: 1.8s;

    img {
      display: block;
      width: 100%;
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
    padding: 3rem 0 3rem 3.2rem;
    display: flex;
    flex-direction: column;

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
          &::after {
            opacity: 1;
            z-index: -1;
            background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.6) 0%,
              rgba(255, 255, 255, 0) 100%
            );
          }
          .point-image {
            display: block;
            width: 2.6rem;
            height: 2.7rem;
            opacity: 0;
            transform: scale(0.8);
            animation: pointFadeIn 0.4s ease forwards;
          }
        }
      }
      a {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 2.2rem;
        line-height: 4rem;
        letter-spacing: -0.3px;
        color: #fff;
        opacity: 0.8;
        font-weight: 800;

        font-weight: 400;
        transition: all 0.3s;
        position: relative;

        &::after {
          content: "";
          display: block;
          width: calc(100% + 4rem);
          height: 100%;
          left: -4rem;
          top: 0;
          position: absolute;
          background: red;
          opacity: 0;
          z-index: -1;
        }

        .point-image {
          display: none;
          img {
            display: block;
            width: 100%;
          }
        }
        span {
          display: block;
          position: relative;
        }
      }
    }

    .home {
      margin-top: 2rem;
      font-weight: 900;
      font-size: 1.2rem;
    }
  }
`;

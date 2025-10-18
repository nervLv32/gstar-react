import { styled } from "styled-components";
import FloatingBgImage from "../../../assets/images/floating/floating-bg-image.png";
import FloatingAfterBorder from "../../../assets/images/floating/floating-after-border.png";

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
  width: 22rem;
  height: 34.8rem;
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
      .title-text {
        p {
          opacity: 1;
          &::after {
            width: 100%;
          }
        }
      }
    }
    ul {
      li {
        opacity: 1;
      }
    }
    .home {
      .icon-wrap {
        &::after {
          width: 100%;
        }
        i {
          opacity: 1;
        }
      }
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
      width: 13rem;
      padding: 2.4rem 3.2rem 1.6rem;
      width: 100%;

      position: relative;

      p {
        text-align: left;
        font-size: 2.2rem;
        font-weight: 800;
        letter-spacing: -0.33px;
        color: #fff;
        position: relative;
        opacity: 0;
        transition: opacity 0.5s ease;
        transition-delay: 1.4s;
        &::after {
          content: "";
          display: block;
          width: 0;
          height: 0.2rem;
          background: url(${FloatingAfterBorder}) no-repeat center / cover;
          position: absolute;
          bottom: -1.6rem;
          left: 0;
          transition: all 1s linear 1.6s;
        }
      }
    }
  }

  ul {
    list-style: none;

    padding: 1.4rem 0 1.6rem 3.2rem;
    display: flex;
    flex-direction: column;

    li {
      opacity: 0;
      transition: opacity 0.7s ease;
      &:first-child {
        transition-delay: 1.2s;
      }
      &:nth-child(2) {
        transition-delay: 1.35s;
      }
      &:nth-child(3) {
        transition-delay: 1.5s;
      }
      &:nth-child(4) {
        transition-delay: 1.65s;
      }
      &:last-child {
        transition-delay: 1.8s;
      }
      &.active {
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
  }
  .home {
    padding: 1.4rem 3.2rem 0;
    .icon-wrap {
      display: flex;
      justify-content: center;
      position: relative;
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 0.2rem;
        background: url(${FloatingAfterBorder}) no-repeat center / cover;
        position: absolute;
        top: -1.6rem;
        left: 0;
        transition: all 1s linear 1.6s;
      }
      i {
        display: block;
        width: 2.9rem;
        height: 2.7rem;
        opacity: 0;
        transition: opacity 1s ease;
        transition-delay: 1.2s;
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
`;

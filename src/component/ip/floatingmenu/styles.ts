import { styled } from "styled-components";

import FloatingPoingBg from "../../../assets/images/floating/floating-point-bg.png";
import FloatingBarBg from "../../../assets/images/floating/floating-bar-bg.png";
import FloatingStarIcon from "../../../assets/images/floating/floating-star-icon.png";
import FloatingStarPointIcon from "../../../assets/images/floating/floating-star-point-icon.png";

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
    }
    100% {
      opacity: 1;
    }
  }

  position: fixed;
  top: 40rem;
  left: -100%;
  width: 30rem;
  /* background: rgba(0, 0, 0, 0.5); */

  margin: 0 auto;

  transition: left 2s cubic-bezier(0.25, 1, 0.5, 1), opacity 1s ease;
  z-index: 21;

  &.open {
    left: -1rem;

    .light-image {
      opacity: 1;
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

  ul {
    list-style: none;
    padding-left: 7.2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: relative;
    &::after {
      content: "";
      display: block;
      width: 1.5rem;
      height: 100%;
      position: absolute;
      top: 0;
      left: 3.3rem;
      z-index: -1;
      background: url(${FloatingBarBg}) no-repeat center / cover;
    }

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
      &:nth-child(5) {
        transition-delay: 1.8s;
      }
      &:nth-child(6) {
        transition-delay: 1.95s;
      }
      &:last-child {
        transition-delay: 2.1s;
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
            background: url(${FloatingPoingBg});
          }
          .point-image {
            animation: pointFadeIn 0.4s ease forwards;
            background: url(${FloatingStarPointIcon}) no-repeat center / cover;
            span {
              display: none;
            }
          }
        }
      }
      .cm {
        cursor: default;
      }
      &:hover {
        a:not(.cm) {
          font-weight: 800;
          color: #fff;
          text-shadow: 0px 0px 5px #2bbcff;
          opacity: 1;
          &::after {
            opacity: 1;
            z-index: -1;
            background: url(${FloatingPoingBg});
          }
          .point-image {
            animation: pointFadeIn 0.4s ease forwards;
            background: url(${FloatingStarPointIcon}) no-repeat center / cover;

            span {
              display: none;
            }
          }
        }
      }
      .point-image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3.8rem;
        height: 3.8rem;
        /* background: red; */
        transition: all 0.3s linear;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -5rem;
        span {
          display: block;
          width: 1rem;
          height: 1rem;
          background: url(${FloatingStarIcon}) no-repeat center / cover;
          opacity: 1;
        }
      }
      a {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 1.9rem;
        letter-spacing: -0.3px;
        color: #fff;
        opacity: 0.6;
        font-weight: 500;
        transition: all 0.3s;
        position: relative;
        color: rgba(255, 255, 255, 0.6);

        &::after {
          content: "";
          display: block;
          width: 14rem;
          height: 9rem;
          left: -2.6rem;
          top: -4rem;
          position: absolute;
          pointer-events: none; /* ✅ 추가 */

          opacity: 0;
          z-index: -1;
        }

        span {
          display: block;
          position: relative;
        }
      }
    }
  }
  .home {
    a {
      &::after {
        display: none !important;
      }
    }

    i {
      display: block;
      width: 2.4rem;
      height: 2.5rem;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  @media all and (max-width: 1440px) {
    top: 34rem;
  }
  @media all and (max-width: 1024px) {
    top: 20rem;
  }
  @media all and (max-width: 768px) {
    display: none;
  }
`;

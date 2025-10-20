import { styled } from "styled-components";
import MainHeaderLogo from "../../assets/images/common/main-header-logo.png";
import MoBg from "../../assets/images/mobile/mobile-menu-bg.png";
import MoPoint from "../../assets/images/floating/floating-point.png";

export const HeaderWrapper = styled.header`
  position: fixed;
  transition: all 0.2s linear;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(7px);
  height: 10.4rem;
  display: flex;
  justify-content: center;
  transition: opacity 0.6s ease, transform 0.6s ease;
  will-change: opacity, transform;

  &.hide {
    opacity: 0;
    transform: translateY(-40px);
    pointer-events: none; /* 클릭 막기 */
  }
  .logo {
    i {
      display: block;
      width: 11.9rem;
      height: 6rem;
      background: url(${MainHeaderLogo}) no-repeat center / cover;
    }
  }
  .nav {
    display: flex;
    align-items: center;
    gap: 5.7rem;
    li {
      a,
      button {
        display: block;
        font-weight: 700;
        font-size: 2.2rem;
        color: #fff;
        min-width: 10.3rem;
      }
    }
  }
  .link-wrap {
    position: absolute;
    top: 50%;
    right: 5rem;
    transform: translateY(-50%);
    gap: 3rem;
    li {
      i {
        display: block;
        width: 2.5rem;
        height: 2.5rem;
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
  .mo-ham-wrap {
    display: none;
  }
  @media all and (max-width: 1024px) {
    height: 9.4rem;
    .link-wrap {
      right: 2rem;
    }
    .nav {
      gap: 2.4rem;
    }
  }
  @media all and (max-width: 768px) {
    height: 7.4rem;
    &.mo-open {
      background: none;
      backdrop-filter: none;
      ul {
        display: none;
      }
    }

    ul {
      li {
        display: none;
      }
      .logo {
        i {
          display: block;
          width: 8.8rem;
          height: 4.4rem;
          background: url(${MainHeaderLogo}) no-repeat center / cover;
        }
      }
    }
    .mo-ham-wrap {
      display: block;
      position: absolute;
      top: 50%;
      right: 2.6rem;
      transform: translateY(-50%);
      width: 3.3rem;
      height: 1.9rem;
      cursor: pointer;
      &.active {
        span {
          &:nth-child(1) {
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(3) {
            bottom: 50%;
            transform: translateY(50%) rotate(-45deg);
          }
        }
      }
      span {
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        height: 0.2rem;
        background: #fff;
        border-radius: 1rem;
        transition: all 0.4s ease;
        &:nth-child(1) {
          top: 0;
        }

        &:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }

        &:nth-child(3) {
          bottom: 0;
        }
      }
    }
  }
`;

export const FooterWrapper = styled.footer`
  background: #003769;
  padding: 12.8rem 0 8.7rem;
  .footer-inner {
    position: relative;
    max-width: 166rem;
    margin: 0 auto;
    width: 100%;
    .footer-wrapper {
      display: flex;
      flex-direction: column;
      gap: 14rem;
      .logo-wrap {
        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          gap: 3rem;
          li {
            i {
              display: block;
              img {
                display: block;
                width: 100%;
              }
            }
            &.w-123px {
              i {
                width: 123px;
              }
            }
            &.w-146px {
              i {
                width: 146px;
              }
            }
            &.w-72px {
              i {
                width: 72px;
              }
            }
            &.w-348px {
              i {
                width: 348px;
              }
            }
            &.w-175px {
              i {
                width: 175px;
              }
            }
            &.w-162px {
              i {
                width: 162px;
              }
            }
            &.w-88px {
              i {
                display: block;
                width: 88px;
              }
            }
            &.w-103px {
              i {
                display: block;
                width: 103px;
              }
            }
          }
        }
      }
      .info-wrap {
        display: flex;
        flex-direction: column;
        gap: 8rem;
        .text-sns-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.8rem;
          border-bottom: 0.1rem solid #fff;
          .text-wrap {
            p {
              line-height: 2.2rem;
              font-size: 1.2rem;
              color: #fff;
              text-align: left;
            }
          }
          .sns-wrap {
            align-items: center;
            gap: 1.6rem;
            display: flex;
            a {
              transition: all 0.2s;
              &:hover {
                opacity: 0.7;
              }
              i {
                display: block;
                width: 2.4rem;
                height: 2.4rem;
                img {
                  display: block;
                  width: 100%;
                }
              }
            }
          }
        }
        .footer-logo-wrap {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          .footer-logo {
            i {
              display: block;
              width: 14.2rem;
              height: 7.6rem;
              img {
                display: block;
                width: 100%;
              }
            }
          }
          .scroll-top {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            background: #003769;

            i {
              display: block;
              width: 3.1rem;
              height: 4.7rem;
              cursor: pointer;
              img {
                display: block;
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 1660px) {
    .footer-inner {
      padding: 0 2.4rem;
    }
  }
  @media all and (max-width: 1200px) {
    padding: 10.8rem 0 6.7rem;
    .footer-inner {
      .footer-wrapper {
        gap: 10rem;
        .logo-wrap {
          ul {
            gap: 2.4rem;
            li {
              &.w-123px i {
                width: calc(123px * 0.9);
              }
              &.w-146px i {
                width: calc(146px * 0.9);
              }
              &.w-72px i {
                width: calc(72px * 0.9);
              }
              &.w-348px i {
                width: calc(348px * 0.9);
              }
              &.w-175px i {
                width: calc(175px * 0.9);
              }
              &.w-162px i {
                width: calc(162px * 0.9);
              }
              &.w-88px i {
                width: calc(88px * 0.9);
              }
              &.w-103px i {
                width: calc(103px * 0.9);
              }
              i {
                display: block;
                img {
                  width: 100%;
                  display: block;
                }
              }
            }
          }
        }
        .info-wrap {
          gap: 6rem;
        }
      }
    }
  }
  @media all and (max-width: 768px) {
    padding: 8.8rem 0 4.7rem;
    .footer-inner {
      .footer-wrapper {
        gap: 6.4rem;
        .logo-wrap {
          ul {
            gap: 1.6rem;
            li {
              &.w-123px i {
                width: calc(123px * 0.8);
              }
              &.w-146px i {
                width: calc(146px * 0.8);
              }
              &.w-72px i {
                width: calc(72px * 0.8);
              }
              &.w-348px i {
                width: calc(348px * 0.8);
              }
              &.w-175px i {
                width: calc(175px * 0.8);
              }
              &.w-162px i {
                width: calc(162px * 0.8);
              }
              &.w-88px i {
                width: calc(88px * 0.8);
              }
              &.w-103px i {
                width: calc(103px * 0.8);
              }
            }
          }
        }
        .info-wrap {
          gap: 4rem;
          .text-sns-wrap {
            gap: 2.4rem;
            flex-direction: column-reverse;
            align-items: flex-start;
            .sns-wrap {
              a {
                i {
                  width: 2.2rem;
                  height: 2.2rem;
                }
              }
            }

            .text-wrap {
              p {
                font-size: 1.1rem;
                line-height: 2rem;
              }
            }
          }
          .footer-logo-wrap {
            .footer-logo {
              i {
                width: 10rem;
                height: 4.7rem;
              }
            }
            .scroll-top {
              i {
                width: 2.4rem;
                height: 3.6rem;
              }
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 480px) {
    padding: 6.8rem 0 3.7rem;
    .footer-inner {
      .footer-wrapper {
        .logo-wrap {
          ul {
            gap: 2rem;
            li {
              &.w-123px i {
                width: calc(123px * 0.7);
              }
              &.w-146px i {
                width: calc(146px * 0.7);
              }
              &.w-72px i {
                width: calc(72px * 0.7);
              }
              &.w-348px i {
                width: calc(348px * 0.7);
              }
              &.w-175px i {
                width: calc(175px * 0.7);
              }
              &.w-162px i {
                width: calc(162px * 0.7);
              }
              &.w-88px i {
                width: calc(88px * 0.7);
              }
              &.w-103px i {
                width: calc(103px * 0.7);
              }
              i {
              }
            }
          }
        }
      }
    }
  }
`;

export const OutletWrapper = styled.div``;

export const SideMenuWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: #000 url(${MoBg}) no-repeat top / cover;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 40;
  pointer-events: none; /* 숨겨진 상태에서는 클릭 불가 */

  &.open {
    opacity: 1;
    pointer-events: auto;
  }
  .logo {
    display: block;
    width: 11rem;
    i {
      display: block;
      width: 100%;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .inner {
    padding-bottom: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;

    .menu-wrap {
      max-width: 31.5rem;
      margin: 0 auto;
      width: 100%;
      padding: 2.4rem 0;
      margin-bottom: 2.4rem;
      position: relative;

      .point-icon {
        display: block;
        width: 31.5rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        &.top {
          top: -2.8rem;
        }
        &.bottom {
          bottom: -2.8rem;
        }
        img {
          display: block;
          width: 100%;
        }
      }
      ul {
        margin: 1.4rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1.6rem;
        li {
          display: flex;
          flex-direction: column;
          > a,
          button {
            font-size: 2.2rem;
            font-weight: 700;
            color: #fff;
            position: relative;
            transition: all 0.2s ease;
            &::before {
              content: "";
              display: block;
              width: 4rem;
              height: 4rem;
              background: url(${MoPoint}) no-repeat center / cover;
              position: absolute;
              top: 50%;
              left: -5rem;
              transform: translateY(-50%);
              opacity: 0;
            }
            &::after {
              content: "";
              display: block;
              width: 4rem;
              height: 4rem;
              background: url(${MoPoint}) no-repeat center / cover;
              position: absolute;
              top: 50%;
              right: -5rem;
              transform: translateY(-50%);
              opacity: 0;
              transition: all 0.3s linear;
            }
            &:hover {
              font-weight: 800;
              color: rgb(255, 255, 255);
              text-shadow: rgb(43, 188, 255) 0px 0px 5px;
              opacity: 1;
              &::before,
              &::after {
                opacity: 1;
              }
            }
          }
        }
      }
      .dep2 {
        margin-top: 1.4rem;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        span {
          font-size: 1.6rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          position: unset;
          &:hover {
            color: rgba(255, 255, 255, 0.8);
          }
        }
      }
    }
    .small-icon-wrap {
      li {
        i {
          display: block;
          width: 2.5rem;
          height: 2.5rem;
          opacity: 0.6;
          cursor: pointer;
          img {
            display: block;
            width: 100%;
          }
        }
      }
    }
  }
`;

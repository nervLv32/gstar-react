import { styled } from "styled-components";
import MainHeaderLogo from "../../assets/images/common/main-header-logo.png";

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  /* background: linear-gradient(to bottom, #00000080, #0000); */
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(7px);
  height: 10.4rem;
  display: flex;
  justify-content: center;
  .logo {
    i {
      display: block;
      width: 11.9rem;
      height: 6rem;
      background: url(${MainHeaderLogo}) no-repeat center / cover;
    }
  }
  ul {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    li {
      a,
      button {
        display: block;
        font-weight: 700;
        font-size: 2.2rem;
        color: #fff;
        width: 16.2rem;
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
          .scoll-top {
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
`;

export const OutletWrapper = styled.div``;

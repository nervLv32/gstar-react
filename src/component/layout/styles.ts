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

export const FooterWrapper = styled.footer``;

export const OutletWrapper = styled.div``;

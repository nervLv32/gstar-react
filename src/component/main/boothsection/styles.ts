import { styled } from "styled-components";
import BoothBg from "../../../assets/images/main/main-booth-bg.png";

export const BoothSectionWrapper = styled.div`
  width: 100vw;

  background: #fff;
  .booth-banner-wrap {
    padding: 12.3rem;
    background: url(${BoothBg}) no-repeat center / cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 5rem;
    .banner-title-wrap {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      span {
        font-size: 3.4rem;
        font-weight: 900;
        color: #fff;
        letter-spacing: -0.51px;
        display: block;
        height: 4rem;
      }
      h6 {
        font-size: 6.8rem;
        font-weight: 900;
        color: #fff;
        letter-spacing: -1.02px;
        height: 9rem;
      }
    }
    .button-wrap {
      a {
        border-radius: 10rem;
        background: linear-gradient(88.27deg, #2bbcff 0%, #005aff 99.52%);
        display: flex;
        width: 25.2rem;
        height: 5.8rem;
        align-items: center;
        justify-content: center;
        font-size: 2.4rem;
        line-height: 3.8rem;
        color: #fff;
        font-weight: 500;
      }
    }
  }
`;

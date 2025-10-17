import { styled } from "styled-components";
import Bg from "../assets/images/info/info-bg.png";

export const InfoWrapper = styled.div`
  .info-visual-section {
    /* height: 108rem; */
    background: url(${Bg}) no-repeat center / cover;
    padding: 15.7rem 0 6.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6.2rem;
    .title-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 2.2rem;
      width: 100%;
      color: #fff;
      h3 {
        width: fit-content;
        font-size: 4.2rem;
        letter-spacing: -0.063px;
      }
      p {
        width: fit-content;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 1.5;
      }
    }
    .img-wrap {
      i {
        display: block;
        width: 72.6rem;
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
  .nc-section {
    padding: 18rem 21rem;
    .section-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 7.8rem;
      h3 {
        font-size: 6.8rem;
        letter-spacing: -0.1rem;
        color: #005aff;
      }
      .tab-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5.7rem;
        ul {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          li {
            width: 23.5rem;
            height: 6.5rem;
            border-radius: 10rem;
            background: #cacaca;
            font-size: 2.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(255, 255, 255, 0.7);
            cursor: pointer;
            &.active {
              background: linear-gradient(
                268.75deg,
                #1942f4 -6.44%,
                #2bbcff 99.57%
              );
              color: #fff;
            }
          }
        }
      }
    }
  }
`;

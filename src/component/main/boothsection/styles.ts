import { keyframes, styled } from "styled-components";
import BoothBg from "../../../assets/images/main/main-booth-bg.png";

/* ✅ fade-in 애니메이션 정의 */
const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BoothSectionWrapper = styled.div`
  width: 100vw;
  background: #fff;

  /* ✅ 초기 상태 */
  .fade-item {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  /* ✅ 활성화되면 페이드 인 */
  .fade-item.active {
    animation: ${fadeUp} 0.8s ease forwards;
  }

  /* ✅ 자식 요소 순차 등장 */
  .fade-child {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .fade-item.active .fade-child {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-child.delay-0 {
    transition-delay: 0s;
  }
  .fade-child.delay-1 {
    transition-delay: 0.2s;
  }
  .fade-child.delay-2 {
    transition-delay: 0.4s;
  }

  /* ✅ 기본 레이아웃 */
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

  /* ✅ 반응형 */
  @media all and (max-width: 1200px) {
    .booth-banner-wrap {
      padding: 10rem;
      gap: 4rem;
    }
  }

  @media all and (max-width: 900px) {
    .booth-banner-wrap {
      padding: 9rem;
      gap: 3.4rem;
      .banner-title-wrap {
        span {
          font-size: 3.2rem;
        }
        h6 {
          font-size: 6rem;
          height: 8rem;
        }
      }
    }
  }

  @media all and (max-width: 768px) {
    .booth-banner-wrap {
      padding: 6rem 2.4rem;
      gap: 3.4rem;
      .banner-title-wrap {
        gap: 0.2rem;
        span {
          font-size: 2.2rem;
          height: 3.4rem;
        }
        h6 {
          font-size: 4.4rem;
          height: 4rem;
        }
      }
      .button-wrap {
        a {
          font-size: 2rem;
          line-height: 3.2rem;
          width: 18rem;
        }
      }
    }
  }

  @media all and (max-width: 480px) {
    .booth-banner-wrap {
      .banner-title-wrap {
        gap: 1.2rem;
        span {
          font-size: 2rem;
          height: auto;
        }
        h6 {
          font-size: 3.8rem;
          height: auto;
        }
      }
      .button-wrap {
        a {
          font-size: 1.8rem;
          line-height: 1;
          width: 15rem;
          height: 5.2rem;
        }
      }
    }
  }
`;

import { styled } from "styled-components";

export const MediaWrapper = styled.div`
  .sub-visual-wrap {
    padding: 20rem 0 12.5rem;
    display: flex;
    flex-direction: column;
    gap: 8rem;
    background: #003769;

    h2 {
      font-size: 6.8rem;
      color: #fff;
    }

    .sub-tab {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3.5rem;

      li {
        &.active {
          background: linear-gradient(88.27deg, #2bbcff 0%, #005aff 99.52%);
          opacity: 1;
          transition: all 0.2s linear;
        }

        transition: all 0s ease;
        cursor: pointer;
        width: 29rem;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
        background: rgba(255, 255, 255, 0.35);
        color: #fff;
        font-size: 2.4rem;
        border-radius: 10rem;
      }
    }
  }
  .scoll-top {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5rem 24rem 5rem 0;
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
`;

export const ContentsWrapper = styled.div`
  padding: 16rem 0;
  background: #fff;

  .list-wrapper {
    /* ✅ 메인 영역 */
    .main {
      padding-bottom: 16rem;
      border-bottom: 0.1rem solid #a5a5a5;

      dl {
        display: flex;
        gap: 4rem;
        cursor: pointer; /* 마우스 포인터 */
        transition: transform 0.4s ease;

        dt {
          width: calc(100% - 52.3rem);

          i {
            display: block;
            width: 100%;
            overflow: hidden;
            border-radius: 0.8rem;

            img {
              display: block;
              width: 100%;
              transition: transform 0.5s ease;
            }
          }
        }

        dd {
          width: 48.3rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8.7rem;

          .text-wrap {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            text-align: left;

            h4 {
              font-size: 3.6rem;
              line-height: 1.6;
              font-weight: 500;
              letter-spacing: -0.54px;
            }

            p {
              font-size: 1.8rem;
              line-height: 3.4rem;
              color: #000;
              min-height: 14rem;
            }
          }

          span {
            font-size: 1.8rem;
            line-height: 3.4rem;
            color: #a5a5a5;
          }
        }

        /* ✅ hover 시 메인 이미지 확대 효과 */
        &:hover {
          i img {
            transform: scale(1.08);
          }
        }
      }
    }

    /* ✅ 리스트 영역 */
    .list-wrap {
      padding-top: 12.7rem;

      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 2.8rem;

        li {
          width: calc(33.333% - (5.6rem / 3));
          cursor: pointer;
          margin-top: 5rem;

          &:nth-child(-n + 3) {
            margin-top: 0;
          }

          /* ✅ 이미지 hover 효과 */
          .img-wrap {
            overflow: hidden;
            border-radius: 0.8rem;

            i {
              display: block;
              width: 100%;

              img {
                display: block;
                width: 100%;
                transition: transform 0.4s ease;
              }
            }
          }

          /* ✅ hover 시 확대 */
          &:hover {
            .img-wrap img {
              transform: scale(1.15);
            }

            /* .text-wrap .title {
              color: #005aff;
              transition: color 0.3s ease;
            } */
          }

          .text-wrap {
            display: flex;
            flex-direction: column;
            gap: 1.6rem;
            align-items: flex-start;
            padding-top: 1.9rem;

            .title {
              width: 100%;
              text-align: left;
              font-size: 2rem;
              line-height: 3.4rem;
              color: #000;
              font-weight: 500;
              transition: color 0.3s ease;
            }

            span {
              font-size: 1.8rem;
              line-height: 3.4rem;
              color: #a5a5a5;
            }
          }
        }
      }

      /* ✅ VIEW MORE 버튼 */
      .viewmore-wrap {
        margin-top: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        font-size: 2.4rem;
        line-height: 5.8rem;
        font-weight: 700;

        .button-wrap {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        button {
          font-size: 2.4rem;
          line-height: 5.8rem;
          font-weight: 700;
        }
      }
    }
  }
`;

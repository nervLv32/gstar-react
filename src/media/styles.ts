import { styled } from "styled-components";

export const MediaWrapper = styled.div`
  .sub-visual-wrap {
    padding: 15rem 0 5rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
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
    }
    .tab-wrapper {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    .all-tab-wrapper {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    .tab-contents {
      &:hover {
        background: #164774;
      }
      &.active {
        background: linear-gradient(88.27deg, #2bbcff 0%, #005aff 99.52%);
        opacity: 1;
        transition: all 0.2s linear;
        border: 0;
      }
      &.all-tab {
        width: 23rem;
        height: 5.8rem;
        font-size: 2.4rem;
      }
      border: 0.3rem solid rgba(255, 255, 255, 0.73);
      background: transparent;
      transition: all 0s ease;
      cursor: pointer;
      width: 18rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.7;

      color: #fff;
      font-size: 2rem;
      border-radius: 10rem;
    }
  }
  .scroll-top {
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
        height: 100%;
      }
    }
  }
  @media all and (max-width: 1600px) {
    .scroll-top {
      padding: 4rem 8rem 4rem;
    }
  }
  @media all and (max-width: 1024px) {
    .sub-visual-wrap {
      padding: 18rem 0 4.2rem;
      gap: 5rem;
      h2 {
        font-size: 6rem;
      }
      .sub-tab {
        gap: 3rem;
      }
      .tab-contents {
        font-size: 2rem;
        width: 20rem;
        height: 5rem;
      }
    }
  }
  @media all and (max-width: 780px) {
    .sub-visual-wrap {
      padding: 25.641vw 0 3.846vw;
      gap: 10.256vw;
      h2 {
        font-size: 8.205vw;
      }
      .sub-tab {
        gap: 2.051vw;
      }
      .all-tab-wrapper {
        gap: 2.551vw;
      }
      .tab-contents {
        &.all-tab {
          width: 43.59vw;
          font-size: 4.359vw;
          height: 9.231vw;
        }
        font-size: 3.59vw;
        width: 41.026vw;
        height: 8.205vw;
      }
    }
    .scroll-top {
      padding: 4rem;
      i {
        width: 2.4rem;
        height: 3.6rem;
      }
    }
  }
`;

export const ContentsWrapper = styled.div`
  padding: 8rem 0 16rem;
  background: #fff;

  .list-wrapper {
    /* ✅ 메인 영역 */
    .main {
      padding-bottom: 16rem;
      border-bottom: 0.1rem solid #a5a5a5;
      &.empty {
        border-bottom: 0 none;
        padding-bottom: 0 !important;
      }

      dl {
        display: flex;
        gap: 4rem;

        transition: transform 0.4s ease;

        dt {
          width: calc(100% - 52.3rem);

          i {
            display: block;
            width: 100%;
            overflow: hidden;
            border-radius: 0.8rem;
            cursor: pointer;

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
              line-height: 1.45;
              font-weight: 500;
              letter-spacing: -0.54px;
              word-break: keep-all;
            }

            p {
              word-break: keep-all;
              font-size: 1.8rem;
              line-height: 1.75;

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
        i {
          &:hover {
            img {
              transform: scale(1.08);
            }
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
            width: 100%;
            position: relative;
            padding-top: 56.25%; /* ✅ 16:9 비율 = 9/16*100 */

            i {
              position: absolute;
              inset: 0;
            }

            img {
              width: 100%;
              height: 100%;
              object-fit: cover; /* ✅ 비율 유지하며 꽉 채움 */
              object-position: center;
              transition: all 0.3s linear;
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
              min-height: 6.8rem;
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
          color: #000;
        }
      }
    }
  }
  @media all and (max-width: 1440px) {
    .list-wrapper {
      .list-wrap {
        ul {
          li {
            .text-wrap {
              .title {
                display: -webkit-box;
                -webkit-line-clamp: 2; /* 표시할 최대 줄 수 */
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: keep-all;
                min-height: 6.8rem;
                br {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 1200px) {
    padding: 7rem 0 13rem;
    .list-wrapper {
      .main {
        padding-bottom: 13rem;
        dl {
          dd {
            gap: 4rem;
          }
        }
      }
      .list-wrap {
        padding-top: 11rem;
        ul {
          gap: 1.6rem;
          li {
            width: calc(50% - 0.8rem);
            margin-top: 2rem !important;
            &:nth-child(-n + 2) {
              margin-top: 0 !important;
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 1024px) {
    padding: 6.4rem 0 12rem;
    .list-wrapper {
      .main {
        padding-bottom: 12rem;
        dl {
          flex-direction: column;
          align-items: center;
          dt {
            width: 100%;
          }
          dd {
            width: 100%;
            .text-wrap {
              h4 {
                word-break: keep-all;

                br {
                  display: none;
                }
              }
              p {
                word-break: keep-all;
                min-height: 1rem;
                br {
                  display: none;
                }
              }
            }
          }
        }
      }
      .list-wrap {
        padding-top: 10rem;
      }
    }
  }
  @media all and (max-width: 768px) {
    padding: 6.51vw 0 10.417vw;
    .list-wrapper {
      .main {
        padding-bottom: 10.417vw;
        dl {
          gap: 5.208vw;
          dd {
            gap: 6.51vw;
            .text-wrap {
              h4 {
                font-size: 5.469vw;
                line-height: 1.5;
              }
              p {
                font-size: 3.646vw;
                line-height: 1.6;
              }
            }
            span {
              font-size: 3.385vw;
              line-height: 1;
            }
          }
        }
      }
      .list-wrap {
        padding-top: 10.417vw;
        ul {
          li {
            width: 100%;
            margin-top: 0 !important;
            padding-bottom: 3.906vw;
            .img-wrap {
              i {
                height: auto;
              }
            }
            .text-wrap {
              padding-top: 3.385vw;
              gap: 3.125vw;
              .title {
                min-height: 1.302vw;
                font-size: 4.167vw;
                line-height: 1.7;
              }
              span {
                font-size: 3.125vw;
                line-height: 1;
              }
            }
          }
        }
        .viewmore-wrap {
          margin-top: 7.813vw;
          gap: 2.604vw;
          font-size: 3.906vw;
          line-height: 1;

          button {
            font-size: 3.906vw;
            line-height: 1;
          }
        }
      }
    }
  }
`;

import { styled } from "styled-components";

export const TicketSectionWrapper = styled.div`
  background: #fff;

  padding: 23.6rem 0 17.3rem;
  .contents-wrap {
    overflow: hidden;
  }
  .contents-wrapper {
    .text-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      h4 {
        font-size: 6.8rem;
        color: #1942f4;
        letter-spacing: -1.02px;
        font-weight: 900;
        height: 11.2rem;
        .mo-br {
          display: none;
        }
      }
      p {
        font-size: 3.4rem;
        font-weight: 700;
        color: #00162a;
        line-height: 1.6;
        .mo-br {
          display: none;
        }
      }
    }

    .ticket-info-wrapper {
      display: flex;
      flex-direction: column;

      .ticket-info-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        .info-wrap {
          padding: 4.2rem 9.1rem;
          background: #e3e3e3;
          border-radius: 1.2rem 1.2rem 0 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          .title-info-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            padding-bottom: 4.4rem;
            border-bottom: 0.1rem solid #003769;
            margin-bottom: 3rem;
            h5 {
              width: fit-content;
              font-size: 4.8rem;
              font-weight: 900;
              line-height: 7rem;
              letter-spacing: -0.72px;
              color: #003769;
              .mo-br {
                display: none;
              }
              .point {
                color: #1942f4;
              }
            }
            > span {
              font-size: 1.8rem;
              font-weight: 500;
              line-height: 4.4rem;
              color: #003769;
              position: absolute;
              bottom: 0;
              right: 8rem;
            }
          }
          .dl-info-wrap {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            dl {
              display: flex;
              align-items: center;
              text-align: left;
              dt {
                min-width: 17rem;
                font-size: 2.4rem;
                font-weight: 800;
                color: #003769;
              }
              dd {
                min-width: calc(100% - 17rem);
                font-size: 2.4rem;
                font-weight: 500;
                color: #003769;

                .mo-br {
                  display: none;
                }
              }
            }
          }
        }
        .button-wrap {
          border-radius: 0 0 1.2rem 1.2rem;

          background: #005aff;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          a {
            padding: 2.8rem;
            display: block;
            width: 100%;
            font-size: 3.4rem;
            line-height: 4.4rem;
            letter-spacing: -0.51px;
            color: #fff;
          }
        }
      }
    }
    .modal-event-wrap {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: center;
      gap: 2.4rem;

      margin-top: 4.8rem;
      p {
        color: rgba(0, 0, 0, 0.35);
        font-size: 2rem;
        font-weight: 500;
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15.2rem;
        height: 3.7rem;
        background: #ececeb;
        border: 0.1rem solid rgba(0, 0, 0, 0.35);
        border-radius: 10rem;
        font-size: 2rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.35);
      }
    }
  }

  .local-modal {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-bg {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
    }

    .modal-content {
      position: relative;
      background: #fff;
      border-radius: 1.2rem;
      padding: 3rem 4rem;
      width: 60rem;
      max-width: 90%;
      z-index: 1;
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
      text-align: left;
      animation: fadeIn 0.3s ease forwards;

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 2.6rem;
        border-bottom: 0.1rem solid #000;
        margin-bottom: 2.1rem;
        position: relative;

        i {
          position: absolute;
          top: 0;
          right: 0;
          display: block;
          width: 2.4rem;
          height: 2.4rem;
          img {
            display: block;
            width: 100%;
          }
        }
        h6 {
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 2.9rem;
          color: #000;
        }
      }

      .text-wrap {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.6rem;
        p {
          font-size: 1.4em;
          font-weight: 500;

          color: #000;
          padding-left: 1rem;
          position: relative;
          letter-spacing: -0.21px;
          &::after {
            content: "";
            display: block;
            width: 0.4rem;
            height: 0.1rem;
            background: #000;
            position: absolute;
            top: 0.7rem;
            left: 0;
          }
        }
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(2rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 🔹 공통 fade 효과 */
  .fade-opacity {
    opacity: 0;
    transition: opacity 1s ease;
  }

  .fade-opacity.active {
    opacity: 1;
  }
  .fade-item {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 1s ease, transform 1s ease;
  }
  .fade-item.active {
    opacity: 1;
    transform: translateY(0);
  }

  /* 🔹 내부 자식 순차 애니메이션 */
  .fade-child {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .fade-item.active .fade-child {
    opacity: 1;
    transform: translateY(0);
  }

  /* 🔹 순차 딜레이 (필요에 따라 개수 추가 가능) */
  .fade-child.delay-0 {
    transition-delay: 0.2s;
  }
  .fade-child.delay-1 {
    transition-delay: 0.5s;
  }
  .fade-child.delay-2 {
    transition-delay: 0.8s;
  }

  @media all and (max-width: 1440px) {
    padding: 20rem 0 16rem;
    .contents-wrapper {
      .text-wrap {
        h4 {
          font-size: 6rem;
          height: 10rem;
        }
        p {
          font-size: 3.2rem;
        }
      }
    }
  }
  @media all and (max-width: 1024px) {
    padding: 18rem 0 15rem;
    .contents-wrapper {
      .text-wrap {
        h4 {
          font-size: 4.8rem;
          height: 8rem;
        }
        p {
          font-size: 3rem;
        }
      }
      .ticket-info-wrapper {
        .ticket-info-wrap {
          .info-wrap {
            padding: 4rem 6rem;
            .title-info-wrap {
              > span {
                right: 4rem;
              }
            }
            .dl-info-wrap {
              padding: 0;
              gap: 1.8rem;
              dl {
                align-items: flex-start;
                dt {
                  padding-top: 0.7rem;
                }
                dd {
                  line-height: 1.5;
                  word-break: keep-all;
                  .pc-text {
                    display: none;
                  }
                  .mo-br {
                    display: block;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 900px) {
    .contents-wrapper {
      .ticket-info-wrapper {
        .ticket-info-wrap {
          .info-wrap {
            .title-info-wrap {
              h5 {
                font-size: 4.2rem;
              }
              > span {
                right: 2rem;
              }
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 768px) {
    padding: 19.531vw 0 18.229vw;
    .contents-wrapper {
      .text-wrap {
        gap: 5.3vw;
        h4 {
          font-size: 11.017vw;
          line-height: 1.25;
          height: auto;
        }
        p {
          font-size: 4.6vw !important;
          line-height: 1.4;
          .mo-br {
            display: block;
          }
        }
      }
      .ticket-info-wrapper {
        .ticket-info-wrap {
          .info-wrap {
            padding: 3.906vw 6.51vw;

            .title-info-wrap {
              padding-bottom: 3.906vw;
              margin-bottom: 3.906vw;
              h5 {
                line-height: 1.5;
                font-size: 5.729vw;
                .mo-br {
                  display: block;
                }
              }
              > span {
                right: 9.115vw;
                bottom: 4.948vw;
                font-size: 3.125vw;
                line-height: 4.427vw;
              }
            }
            .dl-info-wrap {
              gap: 1.823vw;
              dl {
                flex-direction: column;
                align-items: center;
                gap: 2.344vw;
                &:first-child {
                  dd {
                    .mo-br {
                      display: block;
                    }
                  }
                }
                dt {
                  text-align: center;
                  font-size: 3.385vw;
                }
                dd {
                  text-align: center;
                  min-width: 100%;
                  word-break: keep-all;
                  font-size: 3.385vw;
                  .mo-br {
                    display: none;
                  }
                }
              }
            }
          }
          .button-wrap {
            a {
              padding: 3.125vw;
              font-size: 3.646vw;
              line-height: 4.427vw;
            }
          }
        }
      }
      .modal-event-wrap {
        flex-direction: column;
        margin-top: 6.771vw;
        gap: 3.906vw;
        p {
          font-size: 3.385vw;
        }
        button {
          font-size: 3.646vw;
          width: 24.74vw;
          height: 6.25vw;
        }
      }
    }
    .local-modal {
      .modal-content {
        padding: 3rem 2rem 4rem;
      }
    }
  }
`;

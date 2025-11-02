import React, { useEffect, useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { EventSectionWrapper } from "./styles";
import NextIcon from "../../../assets/images/main/event/main-slide-next-arrow.png";
import PrevIcon from "../../../assets/images/main/event/main-slide-prev-arrow.png";

import SlideImage0101 from "../../../assets/images/main/event/main-slide-01-01.png";
import SlideImage0102 from "../../../assets/images/main/event/main-slide-01-02.png";
import SlideImage0103 from "../../../assets/images/main/event/main-slide-01-03.png";

import SlideImage0201 from "../../../assets/images/main/event/main-slide-02-01.png";
import SlideImage0202 from "../../../assets/images/main/event/main-slide-02-02.png";

import SlideImage0301 from "../../../assets/images/main/event/main-slide-03-01.png";
import SlideImage0302 from "../../../assets/images/main/event/main-slide-03-02.png";

import SlideImage0401 from "../../../assets/images/main/event/main-slide-04-01.png";
import SlideImage0402 from "../../../assets/images/main/event/main-slide-04-02.png";

import BigTicket from "../../../assets/images/main/event/main-slide-bigticket.png";
const EventSection = () => {
  const [isEvent, setIsEvent] = useState<"stamp" | "event">("stamp");
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  useEffect(() => {
    setActiveIndex(0);
    swiperRef.current?.slideTo(0);
  }, [isEvent]);

  return (
    <EventSectionWrapper>
      <div className="event-inner">
        <div className="event-section-wrapper">
          <div className="title-tab-wrapper">
            <div className="title-wrap">
              <h5 className="vitro">현장 프로그램</h5>
              <p>
                NC 부스 투어하고 총 5개 이상 스탬프 모으면
                <b> 100% 당첨 이벤트 참여 가능!</b>
                <br />
                G-STAR 현장에서만 즐길 수 있는 <b>스페셜 이벤트</b>
              </p>
            </div>
            <ul className="title-tab">
              <li
                className={`${isEvent === "stamp" ? "active" : ""} vitro`}
                onClick={() => setIsEvent("stamp")}
              >
                스탬프 미션
              </li>
              <li
                className={`${isEvent === "event" ? "active" : ""} vitro`}
                onClick={() => setIsEvent("event")}
              >
                야외부스 이벤트
              </li>
            </ul>
          </div>

          {isEvent === "stamp" ? (
            <div className="slide-wrapper">
              <div className="slide-inner">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ el: ".custom-pagination", clickable: true }}
                  onSwiper={(swiper: SwiperCore) =>
                    (swiperRef.current = swiper)
                  }
                  onSlideChange={(swiper: SwiperCore) =>
                    setActiveIndex(swiper.activeIndex)
                  }
                  slidesPerView={1}
                  spaceBetween={20}
                >
                  {/* ✅ 슬라이드 1 */}
                  <SwiperSlide>
                    <ul className="slide-wrap">
                      <li className="slide">
                        <div className="slide-image">
                          <i>
                            <img src={SlideImage0101} alt="" />
                          </i>
                        </div>
                        <div className="slide-text-wrap">
                          <span className="point vitro">EVENT 01</span>
                          <div className="text-wrap">
                            <div className="ticket-title-wrap">
                              <h6 className="vitro">NC CINEMA</h6>
                              <p>
                                초대형 파노라마 상영관에서 만나는 NC 신작
                                <br />
                                트레일러 최초 공개!
                              </p>
                            </div>
                            <div className="dl-wrap">
                              <dl>
                                <dt>대상</dt>
                                <dd>NC 메인부스 상영관 관람객</dd>
                              </dl>
                              <dl>
                                <dt>방식</dt>
                                <dd>상영관 관람 후 스탬프 획득 및 경품 수령</dd>
                              </dl>
                              <dl>
                                <dt>보상</dt>
                                <dd>
                                  추첨용 한정 티켓, NC 디렉터스 체어, 타포린백,
                                  볼펜, 팝콘, 물티슈
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="slide">
                        <div className="slide-image">
                          <i>
                            <img src={SlideImage0102} alt="" />
                          </i>
                        </div>
                        <div className="slide-text-wrap">
                          <span className="point vitro">EVENT 02</span>

                          <div className="text-wrap">
                            <div className="ticket-title-wrap">
                              <h6 className="vitro">AION2 시연 이벤트</h6>
                              <p>
                                11월 19일 00시 정식 출시 전<br />
                                AION2를 먼저 경험할 수 있는 기회!
                                <br />
                                G-STAR 한정 장패드와 스페셜 쿠폰 증정
                              </p>
                            </div>
                            <div className="dl-wrap">
                              <dl>
                                <dt>대상</dt>
                                <dd>AION2 시연 참가자</dd>
                              </dl>
                              <dl>
                                <dt>방식</dt>
                                <dd>게임 시연 후 스탬프 획득 및 경품 수령</dd>
                              </dl>
                              <dl>
                                <dt>보상</dt>
                                <dd>
                                  AION2 장패드, 스페셜 쿠폰, 타포린백, AION2
                                  볼펜, 팝콘, 물티슈
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="slide">
                        <div className="slide-image">
                          <i>
                            <img src={SlideImage0103} alt="" />
                          </i>
                        </div>
                        <div className="slide-text-wrap">
                          <span className="point vitro">EVENT 03</span>
                          <div className="text-wrap">
                            <div className="ticket-title-wrap">
                              <h6 className="vitro">신더시티 시연 이벤트</h6>
                              <p>
                                파괴된 서울에서 펼쳐지는 또 하나 21세기,
                                <br />
                                [신더시티]세계의 시작을 경험하라!
                              </p>
                            </div>
                            <div className="dl-wrap">
                              <dl>
                                <dt>대상</dt>
                                <dd>신더시티 시연 참가자</dd>
                              </dl>
                              <dl>
                                <dt>방식</dt>
                                <dd>게임 시연 후 스탬프 획득 및 경품 수령</dd>
                              </dl>
                              <dl>
                                <dt>보상</dt>
                                <dd>
                                  보조배터리, 삼다수, 타포린백, 신더시티 볼펜,
                                  팝콘, 물티슈
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </SwiperSlide>

                  {/* ✅ 슬라이드 2 */}
                  <SwiperSlide>
                    <ul className="slide-wrap">
                      <li className="slide">
                        <div className="slide-image">
                          <i>
                            <img src={SlideImage0201} alt="" />
                          </i>
                        </div>
                        <div className="slide-text-wrap">
                          <span className="point vitro">EVENT 04</span>
                          <div className="text-wrap">
                            <div className="ticket-title-wrap">
                              <h6 className="vitro">AION2 사전예약</h6>
                              <p>AION2 사전예약 인증만 해도 팝콘 증정!</p>
                            </div>
                            <div className="dl-wrap">
                              <dl>
                                <dt>대상</dt>
                                <dd>AION2 사전예약자</dd>
                              </dl>
                              <dl>
                                <dt>방식</dt>
                                <dd>
                                  운영요원에게 사전예약 인증 시 스탬프 획득 및
                                  경품 수령
                                </dd>
                              </dl>
                              <dl>
                                <dt>보상</dt>
                                <dd>AION2 X 다르다 팝콘</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="slide">
                        <div className="slide-image">
                          <i>
                            <img src={SlideImage0202} alt="" />
                          </i>
                        </div>
                        <div className="slide-text-wrap">
                          <span className="point vitro">EVENT 05</span>
                          <div className="text-wrap">
                            <div className="ticket-title-wrap">
                              <h6 className="vitro">NC 부스 인증샷</h6>
                              <p>NC G-STAR 현장의 특별한 순간을 공유 하세요!</p>
                            </div>
                            <div className="dl-wrap">
                              <dl>
                                <dt>대상</dt>
                                <dd>NC 부스 인증샷 이벤트 참가자</dd>
                              </dl>
                              <dl>
                                <dt>방식</dt>
                                <dd>
                                  SNS에 해시태그와 함께 NC 부스 사진 업로드 시{" "}
                                  <br />
                                  스탬프 획득 및 레드불 수령
                                </dd>
                              </dl>
                              <dl>
                                <dt>보상</dt>
                                <dd>레드불</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </SwiperSlide>

                  {/* ✅ 슬라이드 3 */}
                  <SwiperSlide>
                    <ul className="slide-wrap">
                      <li className="slide">
                        <div className="slide-image">
                          <i>
                            <img src={SlideImage0301} alt="" />
                          </i>
                        </div>
                        <div className="slide-text-wrap">
                          <span className="point vitro">EVENT 06</span>
                          <div className="text-wrap">
                            <div className="ticket-title-wrap">
                              <h6 className="vitro">
                                AION2 <br />
                                공식 유튜브 구독 이벤트
                              </h6>
                              <p>새로운 하늘을 만나보세요!</p>
                            </div>
                            <div className="dl-wrap">
                              <dl>
                                <dt>대상</dt>
                                <dd>AION2 유튜브 채널 구독자</dd>
                              </dl>
                              <dl>
                                <dt>방식</dt>
                                <dd>운영요원에게 구독 인증 시 스탬프 획득</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="slide">
                        <div className="slide-image">
                          <i>
                            <img src={SlideImage0302} alt="" />
                          </i>
                        </div>
                        <div className="slide-text-wrap">
                          <span className="point vitro">EVENT 07 & 08</span>
                          <div className="text-wrap">
                            <div className="ticket-title-wrap">
                              <h6 className="vitro">
                                신더시티
                                <br />
                                구독&좋아요 이벤트
                              </h6>
                              <p>또 하나의 21세기, 신더시티 전장에 합류하라</p>
                            </div>
                            <div className="dl-wrap">
                              <dl>
                                <dt>대상</dt>
                                <dd>신더시티 유튜브 채널 구독자</dd>
                              </dl>
                              <dl>
                                <dt>방식</dt>
                                <dd>
                                  운영요원에게 구독 & 좋아요 인증 시 스탬프 2개
                                  획득
                                </dd>
                              </dl>
                              <dl>
                                <dt>보상</dt>
                                <dd>레드불</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="slide bigticket"></li>
                    </ul>
                  </SwiperSlide>
                </Swiper>

                <div
                  className={`${
                    activeIndex === 1 ? "active" : ""
                  } custom-pagination`}
                >
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      className={`bullet ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => swiperRef.current?.slideTo(index)}
                    ></button>
                  ))}
                </div>

                <div className="arrow-btn-wrap">
                  <button
                    className="slide-arrow prev"
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                  >
                    <i>
                      <img src={PrevIcon} alt="이전" />
                    </i>
                  </button>
                  <button
                    className="slide-arrow next"
                    onClick={handleNext}
                    disabled={activeIndex === 2}
                  >
                    <i>
                      <img src={NextIcon} alt="다음" />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <ul className="slide-wrap">
              <li className="slide">
                <div className="slide-image">
                  <i>
                    <img src={SlideImage0401} alt="" />
                  </i>
                </div>
                <div className="slide-text-wrap">
                  <span className="point vitro">EVENT 01</span>
                  <div className="text-wrap">
                    <div className="ticket-title-wrap">
                      <h6 className="vitro">NC X 다르다 핀볼 게임</h6>
                      <p>
                        NC 야외부스에서 즐기는 핀볼 챌린지
                        <br />
                        다르다 팝칩 신상 라인업!
                      </p>
                    </div>
                    <div className="dl-wrap">
                      <dl>
                        <dt>대상</dt>
                        <dd>NC 야외부스 핀볼 게임 참가자</dd>
                      </dl>
                      <dl>
                        <dt>방식</dt>
                        <dd>핀볼 게임 참여 후 현장 경품 수령</dd>
                      </dl>
                      <dl>
                        <dt>보상</dt>
                        <dd>
                          소금우유칩, 블랙베이컨칩, 피자칩 중 1종 랜덤 증정
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </li>
              <li className="slide">
                <div className="slide-image">
                  <i>
                    <img src={SlideImage0402} alt="" />
                  </i>
                </div>
                <div className="slide-text-wrap">
                  <span className="point vitro">EVENT 01</span>
                  <div className="text-wrap">
                    <div className="ticket-title-wrap">
                      <h6 className="vitro">NC 포토존 이벤트</h6>
                      <p>
                        무한한 세계, 하나의 여정, 한 장의 사진으로 남기세요!
                      </p>
                    </div>
                    <div className="dl-wrap">
                      <dl>
                        <dt>대상</dt>
                        <dd>NC 포토존 이벤트 참가자</dd>
                      </dl>
                      <dl>
                        <dt>방식</dt>
                        <dd>NC 야외부스에서 촬영 후 현장 경품 수령</dd>
                      </dl>
                      <dl>
                        <dt>보상</dt>
                        <dd>G-STAR 한정 NC 포토 홀더</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </EventSectionWrapper>
  );
};

export default EventSection;

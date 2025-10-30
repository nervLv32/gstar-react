import React, { useEffect, useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { EventSectionWrapper } from "./styles";
import NextIcon from "../../../assets/images/info/info-slide-next-arrow.png";
import PrevIcon from "../../../assets/images/info/info-slide-prev-arrow.png";

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
                NC 부스 탐험하고 스탬프를 모으면 특별한 경품 획득!
                <br />
                야외부스에서만 즐길 수 있는 스페셜 이벤트
              </p>
            </div>
            <ul className="title-tab">
              <li
                className={`${isEvent === "stamp" ? "active" : ""} vitro`}
                onClick={() => setIsEvent("stamp")}
              >
                스탬프 랠리
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
                  pagination={{ clickable: true }}
                  onSwiper={(swiper: SwiperCore) =>
                    (swiperRef.current = swiper)
                  }
                  onSlideChange={(swiper: SwiperCore) =>
                    setActiveIndex(swiper.activeIndex)
                  }
                  slidesPerView={1}
                  spaceBetween={0}
                >
                  {/* ✅ 슬라이드 1 */}
                  <SwiperSlide>
                    <ul className="slide-wrap">
                      <li className="slide">
                        <div className="slide-image"></div>
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
                    </ul>
                  </SwiperSlide>

                  {/* ✅ 슬라이드 2 */}
                  <SwiperSlide>
                    <ul className="slide-wrap">
                      <li className="slide">
                        <div className="slide-image"></div>
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
                    </ul>
                  </SwiperSlide>

                  {/* ✅ 슬라이드 3 */}
                  <SwiperSlide>
                    <ul className="slide-wrap">
                      <li className="slide">
                        <div className="slide-image"></div>
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
                    </ul>
                  </SwiperSlide>
                </Swiper>

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
                <div className="slide-image"></div>
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
                          추첨용 한정 티켓, NC 디렉터스 체어, 타포린백, 볼펜,
                          팝콘, 물티슈
                        </dd>
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

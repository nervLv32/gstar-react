import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import NextIcon from "../../../assets/images/main/event/main-slide-next-arrow.png";
import PrevIcon from "../../../assets/images/main/event/main-slide-prev-arrow.png";
import { EventSectionWrapper } from "./styles";

import SlideImage0101 from "../../../assets/images/main/event/main-slide-01-01.png";
import SlideImage0102 from "../../../assets/images/main/event/main-slide-01-02.png";
import SlideImage0103 from "../../../assets/images/main/event/main-slide-01-03.png";
import SlideImage0201 from "../../../assets/images/main/event/main-slide-02-01.png";
import SlideImage0202 from "../../../assets/images/main/event/main-slide-02-02.png";
import SlideImage0203 from "../../../assets/images/main/event/main-slide-02-03.png";
import SlideImage0401 from "../../../assets/images/main/event/main-slide-04-01.png";
import SlideImage0402 from "../../../assets/images/main/event/main-slide-04-02.png";

import MoTicketSlideImage01 from "../../../assets/images/main/event/mo-ticket-slide-image01.png";
import MoTicketSlideImage02 from "../../../assets/images/main/event/mo-ticket-slide-image02.png";
import MoTicketSlideImage03 from "../../../assets/images/main/event/mo-ticket-slide-image03.png";
import MoTicketSlideImage04 from "../../../assets/images/main/event/mo-ticket-slide-image04.png";
import MoTicketSlideImage05 from "../../../assets/images/main/event/mo-ticket-slide-image05.png";
import MoTicketSlideImage06 from "../../../assets/images/main/event/mo-ticket-slide-image06.png";
import MoTicketSlideImage07 from "../../../assets/images/main/event/mo-ticket-slide-image07.png";

import MoEventSlideImage01 from "../../../assets/images/main/event/mo-event-slide-image01.png";
import MoEventSlideImage02 from "../../../assets/images/main/event/mo-event-slide-image02.png";

import { useLocation } from "react-router-dom";

const ENTER_RATIO = 0.3; // ✅ 감지 비율 낮춤 (화면에 조금만 보여도 감지)

function setHash(hash: string) {
  const base = window.location.pathname + window.location.search;
  if (hash) {
    if (window.location.hash !== hash) {
      window.history.replaceState(null, "", base + hash);
    }
  } else {
    if (window.location.hash) {
      window.history.replaceState(null, "", base);
    }
  }
}

// ✅ 빠른 반응용 fade-in observer
const useFadeInObserver = (threshold = 0.15, once = true) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (once && !hasAnimated.current) {
            setVisible(true);
            hasAnimated.current = true;
            observer.unobserve(target);
          } else if (!once) {
            setVisible(true);
          }
        }
      },
      { threshold } // ✅ 더 일찍 트리거됨
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, visible };
};

const EventSection = () => {
  const [isEvent, setIsEvent] = useState<"stamp" | "event">("stamp");
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const [moMissionActiveIndex, setMoMissionActiveIndex] = useState(0);
  const moMissionSwiperRef = useRef<SwiperCore | null>(null);

  const [moEventActiveIndex, setMoEventActiveIndex] = useState(0);
  const moEventSwiperRef = useRef<SwiperCore | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  useEffect(() => {
    setActiveIndex(0);
    swiperRef.current?.slideTo(0);
  }, [isEvent]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ fade-in hooks (각 영역별)
  const { ref: eventInnerRef, visible: eventInnerVisible } =
    useFadeInObserver();
  const { ref: sectionWrapperRef, visible: sectionWrapperVisible } =
    useFadeInObserver();
  const { ref: pcSlideRef, visible: pcSlideVisible } = useFadeInObserver();
  const { ref: moSlideRef, visible: moSlideVisible } = useFadeInObserver();

  // ✅ hash 관리 (#event)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= ENTER_RATIO) {
          setHash("#event");
        } else if (!entry.isIntersecting && window.location.hash === "#event") {
          setHash("#booth");
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
        rootMargin: "0px 0px -15% 0px",
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ✅ 페이지 복귀 시 스크롤 이동
  useEffect(() => {
    if (location.hash === "#event" && sectionRef.current) {
      const id = window.setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
      return () => window.clearTimeout(id);
    }
  }, [location.hash]);

  // ✅ 모달 스크롤 제어
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <EventSectionWrapper ref={sectionRef} id="event">
      {/* ---------------- PC ---------------- */}
      <div
        className="event-inner"
        ref={eventInnerRef}
        style={{
          opacity: eventInnerVisible ? 1 : 0,
          transform: eventInnerVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div
          className="event-section-wrapper"
          ref={sectionWrapperRef}
          style={{
            opacity: sectionWrapperVisible ? 1 : 0,
            transform: sectionWrapperVisible
              ? "translateY(0)"
              : "translateY(30px)",
            transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
          }}
        >
          <div
            className="title-tab-wrapper"
            style={{
              opacity: sectionWrapperVisible ? 1 : 0,
              transform: sectionWrapperVisible
                ? "translateY(0)"
                : "translateY(20px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
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

          <div
            className="pc-slide-wrap"
            ref={pcSlideRef}
            style={{
              opacity: pcSlideVisible ? 1 : 0,
              transform: pcSlideVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
            }}
          >
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
                                  초대형 파노라마 상영관에서 신작 트레일러
                                  관람하면 <br />
                                  NC 디렉터스 체어와 랜덤 포토 카드 증정!
                                </p>
                              </div>
                              <div className="dl-wrap">
                                <dl>
                                  <dt>대상</dt>
                                  <dd>NC 메인부스 상영관 관람객</dd>
                                </dl>
                                <dl>
                                  <dt>방식</dt>
                                  <dd>
                                    상영관 관람 후 스탬프 획득 및 경품 수령
                                  </dd>
                                </dl>
                                <dl>
                                  <dt>보상</dt>
                                  <dd>
                                    NC 디렉터스 체어, 타포린백, 랜덤 포토카드,
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
                            <span className="point vitro">EVENT 04 & 05</span>
                            <div className="text-wrap">
                              <div className="ticket-title-wrap">
                                <h6 className="vitro">
                                  AION2
                                  <br />
                                  사전예약&유튜브 구독 이벤트
                                </h6>
                                <p>AION2 사전예약 인증만 해도 팝콘 증정!</p>
                              </div>
                              <div className="dl-wrap">
                                <dl>
                                  <dt>대상</dt>
                                  <dd>AION2 사전예약자, AION2 유튜브 구독자</dd>
                                </dl>
                                <dl>
                                  <dt>방식</dt>
                                  <dd>
                                    사전예약, 구독 인증 시 스탬프 획득 및 경품
                                    수령
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
                            <span className="point vitro">EVENT 06 & 07</span>
                            <div className="text-wrap">
                              <div className="ticket-title-wrap">
                                <h6 className="vitro">
                                  신더시티
                                  <br />
                                  유튜브 구독&좋아요 이벤트
                                </h6>
                                <p>
                                  또 하나의 21세기, 신더시티 전장에 합류하라
                                </p>
                              </div>
                              <div className="dl-wrap">
                                <dl>
                                  <dt>대상</dt>
                                  <dd>신더시티 유튜브 구독자</dd>
                                </dl>
                                <dl>
                                  <dt>방식</dt>
                                  <dd>
                                    구독, 좋아요 인증 시 스탬프 획득 및 경품
                                    수령
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
                              <img src={SlideImage0203} alt="" />
                            </i>
                          </div>
                          <div className="slide-text-wrap">
                            <span className="point vitro">EVENT 08</span>
                            <div className="text-wrap">
                              <div className="ticket-title-wrap">
                                <h6 className="vitro">NC 부스 인증샷</h6>
                                <p>
                                  NC G-STAR 현장의 특별한 순간을 공유 하세요!
                                </p>
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
      </div>

      {/* ---------------- MOBILE ---------------- */}
      <div
        className="mo-slide-wrap"
        ref={moSlideRef}
        style={{
          opacity: moSlideVisible ? 1 : 0,
          transform: moSlideVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s",
        }}
      >
        {isEvent === "stamp" ? (
          <div className="mo-ticket-slide-wrap">
            <div className="mo-mission-slide">
              <Swiper
                modules={[Pagination]}
                pagination={{ el: ".custom-pagination-mo", clickable: true }}
                onSwiper={(swiper: SwiperCore) =>
                  (moMissionSwiperRef.current = swiper)
                }
                onSlideChange={(swiper: SwiperCore) =>
                  setMoMissionActiveIndex(swiper.activeIndex)
                }
                slidesPerView={1.3}
                spaceBetween={10}
                centeredSlides={true}
                breakpoints={{
                  768: { slidesPerView: 1.75, spaceBetween: 20 },
                  500: { slidesPerView: 1.5, spaceBetween: 18 },
                }}
              >
                <SwiperSlide>
                  <i>
                    <img src={MoTicketSlideImage01} alt="" />
                  </i>
                </SwiperSlide>

                <SwiperSlide>
                  <i>
                    <img src={MoTicketSlideImage02} alt="" />
                  </i>
                </SwiperSlide>

                <SwiperSlide>
                  <i>
                    <img src={MoTicketSlideImage03} alt="" />
                  </i>
                </SwiperSlide>
                <SwiperSlide>
                  <i>
                    <img src={MoTicketSlideImage04} alt="" />
                  </i>
                </SwiperSlide>
                <SwiperSlide>
                  <i>
                    <img src={MoTicketSlideImage05} alt="" />
                  </i>
                </SwiperSlide>
                <SwiperSlide>
                  <i>
                    <img src={MoTicketSlideImage06} alt="" />
                  </i>
                </SwiperSlide>
                <SwiperSlide>
                  <i>
                    <img src={MoTicketSlideImage07} alt="" />
                  </i>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        ) : (
          <div className="mo-ticket-slide-wrap">
            <div className="mo-event-slide">
              <Swiper
                modules={[Pagination]}
                pagination={{ el: ".custom-pagination-mo", clickable: true }}
                onSwiper={(swiper: SwiperCore) =>
                  (moEventSwiperRef.current = swiper)
                }
                onSlideChange={(swiper: SwiperCore) =>
                  setMoEventActiveIndex(swiper.activeIndex)
                }
                slidesPerView={1.3}
                spaceBetween={10}
                centeredSlides={true}
                breakpoints={{
                  768: { slidesPerView: 1.75, spaceBetween: 20 },
                  500: { slidesPerView: 1.5, spaceBetween: 18 },
                }}
              >
                <SwiperSlide>
                  <i>
                    <img src={MoEventSlideImage02} alt="" />
                  </i>
                </SwiperSlide>
                <SwiperSlide>
                  <i>
                    <img src={MoEventSlideImage01} alt="" />
                  </i>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </EventSectionWrapper>
  );
};

export default EventSection;

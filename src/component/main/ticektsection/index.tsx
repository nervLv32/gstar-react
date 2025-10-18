import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Ticket from "../ticket";
import { TicketSectionWrapper } from "./styles";
import ModalClose from "../../../assets/images/common/modal-close.png";

const ENTER_RATIO = 0.5;

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

const useFadeInObserver = (threshold = 0.4, once = false) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (once) {
            if (!hasAnimated.current) {
              setVisible(true);
              hasAnimated.current = true;
              observer.unobserve(target);
            }
          } else {
            setVisible(true);
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, visible };
};

const TicketSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // fade-in observers
  const { ref: textRef, visible: textVisible } = useFadeInObserver(0.5, true);
  const { ref: infoRef, visible: infoVisible } = useFadeInObserver(0.5, true);

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
    <TicketSectionWrapper ref={sectionRef} id="event">
      <div className="contents-wrap">
        <div className="small-inner">
          <div className="contents-wrapper">
            <div
              ref={textRef}
              className={`text-wrap fade-item ${textVisible ? "active" : ""}`}
            >
              <h4 className="vitro fade-child delay-1">
                2025 G-STAR는 NC와 함께!
              </h4>
              <p className="fade-child delay-2">
                NC G-STAR 사전 이벤트 참여자 중<br />
                200명을 추첨하여 G-STAR 초대권(1일권) 2매를 드립니다.
              </p>
            </div>

            <Ticket />

            <div
              ref={infoRef}
              className={`ticket-info-wrapper fade-item ${
                infoVisible ? "active" : ""
              }`}
            >
              <div className="ticket-info-wrap">
                <div className="info-wrap">
                  <div className="title-info-wrap">
                    <h5 className="vitro">
                      2025 <span className="point">G-STAR 초대권</span> 400장
                    </h5>
                    <span>
                      {"("}200명 X 20장{")"}
                    </span>
                  </div>
                  <div className="dl-info-wrap">
                    <dl>
                      <dt>기간</dt>
                      <dd>10/20(월) 10:00:00 ~ 10/31(금) 23:59:59</dd>
                    </dl>
                    <dl>
                      <dt>당첨자 발표</dt>
                      <dd>11/3(월) 12:00:00 , 개별 SMS 안내</dd>
                    </dl>
                    <dl>
                      <dt>티켓 발송</dt>
                      <dd>
                        당첨자 발표 후 개별 SMS를 통해 초대권 난수 번호 전달
                      </dd>
                    </dl>
                    <dl>
                      <dt>사용 방법</dt>
                      <dd>개별 문자 안내</dd>
                    </dl>
                  </div>
                </div>
                <div className="button-wrap">
                  <Link to="/" className="vitro">
                    이벤트 참여하기
                  </Link>
                </div>
              </div>

              <div className="modal-event-wrap fade-item">
                <p>
                  초대권 이벤트 참여 및 이벤트 안내를 위한 개인정보 수집/이용
                  동의
                </p>
                <button onClick={() => setIsModalOpen(true)}>유의사항</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ 로컬 모달 */}
      {isModalOpen && (
        <div className="local-modal">
          <div className="modal-bg" onClick={() => setIsModalOpen(false)} />
          <div className="modal-content">
            <div className="modal-header">
              <span></span>
              <h6>[유의사항]</h6>
              <i>
                <img
                  src={ModalClose}
                  alt=""
                  onClick={() => setIsModalOpen(false)}
                />
              </i>
            </div>
            <div className="text-wrap">
              <p>본 이벤트는 1인 1회 참여 가능합니다.</p>
              <p>이벤트 기간 외 참여 시 추첨 대상에서 제외됩니다.</p>
              <p>
                당사의 사정에 따라 본 이벤트는 변경되거나 조기 종료될 수
                있습니다.
              </p>
              <p>당첨자는 기입한 휴대폰 번호로 안내 드립니다.</p>
              <p>이벤트 참여 시 개인정보 제공에 동의하는 것으로 간주합니다.</p>
              <p>네트워크 환경 등에 따라 MMS 수신이 지연될 수 있습니다.</p>
              <p>
                연락처 오류 등으로 안내가 불가할 경우 당첨이 취소될 수 있습니다.
              </p>
              <p>수집된 개인정보는 목적 달성 후 즉시 파기됩니다.</p>
            </div>
          </div>
        </div>
      )}
    </TicketSectionWrapper>
  );
};

export default TicketSection;

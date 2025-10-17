import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Ticket from "../ticket";
import { BoothSectionWrapper } from "./styles";
import ModalClose from "../../../assets/images/common/modal-close.png";

const ENTER_RATIO = 0.5;
const EXIT_RATIO = 0.1;

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

const BoothSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const rafId = useRef<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 페이지 복귀/직접 접근 시 부드럽게 이동
  useEffect(() => {
    if (location.hash === "#booth" && sectionRef.current) {
      const id = window.setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
      return () => window.clearTimeout(id);
    }
  }, [location.hash]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio >= ENTER_RATIO) {
          setHash("#booth");
        } else if (!entry.isIntersecting && window.location.hash === "#booth") {
          setHash("");
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
        root: null,
        rootMargin: "0px 0px -15% 0px",
      }
    );
    io.observe(el);

    const calcRatio = () => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const visible = Math.max(
        0,
        Math.min(rect.bottom, vh) - Math.max(rect.top, 0)
      );
      const denom = Math.max(1, Math.min(rect.height, vh));
      return visible / denom;
    };

    const onScroll = () => {
      if (rafId.current != null) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        const ratio = calcRatio();
        if (ratio >= ENTER_RATIO) {
          setHash("#booth");
        } else if (ratio <= EXIT_RATIO) {
          setHash("");
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("orientationchange", onScroll);
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("orientationchange", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <BoothSectionWrapper ref={sectionRef} id="booth">
      <div className="booth-banner-wrap">
        <div className="banner-title-wrap">
          <span className="vitro">NC 2025 G- STAR</span>
          <h6 className="vitro">부스 위치 안내</h6>
        </div>
        <div className="button-wrap">
          <Link to="/info">자세히 보기</Link>
        </div>
      </div>

      <div className="contents-wrap">
        <div className="small-inner">
          <div className="contents-wrapper">
            <div className="text-wrap">
              <h4 className="vitro">2025 G-STAR는 NC와 함께!</h4>
              <p>
                NC G-STAR 사전 이벤트 참여자 중<br />
                200명을 추첨하여 G-STAR 초대권(1일권) 2매를 드립니다.
              </p>
            </div>
            <Ticket />
            <div className="ticket-info-wrapper">
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

              <div className="modal-event-wrap">
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
              <p>
                이벤트 참여 시 경품 발송을 위해 개인 정보 제공에 동의하는 것으로
                간주합니다.
              </p>
              <p>네트워크 환경 등에 따라 MMS 수신이 지연될 수 있습니다.</p>
              <p>
                연락처 오류, 수신 거부 등으로 안내가 불가할 경우 당첨이 취소될
                수 있습니다.
              </p>
              <p>
                마케팅 정보 수신 미동의 혹은 SMS 수취 거절 시 대상자에서 제외될
                수 있습니다.
              </p>
              <p>
                수집된 개인정보는 당첨자 확인 및 경품 발송 용도로만 사용되며,
                목적 달성 후 즉시 파기됩니다.
              </p>
              <p>당첨자분께 제공되는 초대권은 양도 및 재판매가 불가합니다.</p>
              <p>G-STAR 초대권은 1인 2매 제공되며, 동일 일자로 발송됩니다.</p>
            </div>
          </div>
        </div>
      )}
    </BoothSectionWrapper>
  );
};

export default BoothSection;

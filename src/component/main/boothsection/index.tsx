import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Ticket from "../ticket";
import { BoothSectionWrapper } from "./styles";

const ENTER_RATIO = 0.5; // 섹션이 50% 이상 보이면 해시 추가
const EXIT_RATIO = 0.1; // 10% 미만 남으면 해시 제거

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

  // ページ復帰/直リンク: #booth 있으면 부드럽게 이동
  useEffect(() => {
    if (location.hash === "#booth" && sectionRef.current) {
      // 렌더 끝난 뒤 스크롤
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

    // ---- ① IntersectionObserver (우선) ----
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // IO가 줄 때는 intersectionRatio가 정확하지 않을 수 있으니 보수적으로 판단
        if (entry.isIntersecting && entry.intersectionRatio >= ENTER_RATIO) {
          setHash("#booth");
        } else if (!entry.isIntersecting && window.location.hash === "#booth") {
          // 완전히 벗어난 경우: 일단 제거 후보
          setHash(""); // 제거
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0,0.1,...,1.0
        root: null,
        rootMargin: "0px 0px -15% 0px", // 아래쪽 15% 여유 (조금 더 늦게 벗어났다고 판단)
      }
    );
    io.observe(el);

    // ---- ② RAF 가시율 보정(모든 스크롤/리사이즈에서 정확히 계산) ----
    const calcRatio = () => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // 보이는 영역(px)
      const visible = Math.max(
        0,
        Math.min(rect.bottom, vh) - Math.max(rect.top, 0)
      );

      // 분모는 섹션 높이와 뷰포트 높이 중 더 작은 값(가시율 왜곡 방지)
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

    // 스크롤/리사이즈/오리엔테이션 변경 모두 추적
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("orientationchange", onScroll);

    // 초기 1회 평가
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("orientationchange", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

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
                    <dd>11/3(월) 12:00:00 , 개별 SMS 안내</dd>
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
          </div>
        </div>
      </div>
      <div className="policy-wrap">
        <div className="small-inner">
          <div className="policy-wrapper">
            <div className="title-wrap">
              <h6>[유의사항]</h6>
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
      </div>
    </BoothSectionWrapper>
  );
};

export default BoothSection;

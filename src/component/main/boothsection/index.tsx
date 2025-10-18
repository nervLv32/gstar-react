import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BoothSectionWrapper } from "./styles";

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

// ✅ fade-in IntersectionObserver 훅
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

const BoothSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const rafId = useRef<number | null>(null);

  const { ref: bannerRef, visible: bannerVisible } = useFadeInObserver(
    0.5,
    false
  );

  // ✅ hash 관리 (#booth)
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

  // ✅ hash로 직접 접근 시 부드럽게 이동
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

  return (
    <BoothSectionWrapper ref={sectionRef} id="booth">
      <div
        ref={bannerRef}
        className={`booth-banner-wrap fade-item ${
          bannerVisible ? "active" : ""
        }`}
      >
        <div className="banner-title-wrap">
          <span className="vitro fade-child delay-0">NC 2025 G-STAR</span>
          <h6 className="vitro fade-child delay-1">부스 위치 안내</h6>
        </div>
        <div className="button-wrap fade-child delay-2">
          <Link to="/info">자세히 보기</Link>
        </div>
      </div>
    </BoothSectionWrapper>
  );
};

export default BoothSection;

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const useFullpage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFullpageEnabled, setIsFullpageEnabled] = useState(
    window.innerWidth > 1024
  );

  const sectionsRef = useRef<HTMLElement[]>([]);
  const isFirstRender = useRef(true);
  const prevFullpageState = useRef(isFullpageEnabled);
  const ioRef = useRef<IntersectionObserver | null>(null);

  /** ✅ 섹션 캐싱 */
  const collectSections = () => {
    sectionsRef.current = Array.from(document.querySelectorAll(".section"));
  };

  /** ✅ 모바일: IntersectionObserver로 data-anim 순차 등장 */
  const setupMobileIO = () => {
    if (ioRef.current) {
      ioRef.current.disconnect();
      ioRef.current = null;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            if (section.dataset.animated === "1") {
              io.unobserve(section);
              return;
            }
            section.dataset.animated = "1";

            const animItems = section.querySelectorAll("[data-anim]");
            gsap.fromTo(
              animItems,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.18,
                ease: "power3.out",
                delay: 0.25,
              }
            );

            io.unobserve(section);
          }
        });
      },
      { root: null, threshold: 0.25 }
    );

    sectionsRef.current.forEach((sec) => {
      gsap.set(sec.querySelectorAll("[data-anim]"), { opacity: 0, y: 40 });
      sec.dataset.animated = "0";
      io.observe(sec);
    });

    ioRef.current = io;
  };

  /** ✅ 데스크탑: 초기화 */
  const setupDesktopInitial = (index: number) => {
    sectionsRef.current.forEach((sec, i) => {
      const items = sec.querySelectorAll("[data-anim]");
      if (i === index) {
        gsap.set(items, { opacity: 1, y: 0 });
        sec.classList.add("active");
      } else {
        gsap.set(items, { opacity: 0, y: 40 });
        sec.classList.remove("active");
      }
    });
  };

  /** ✅ 새로고침 시 스크롤 복원 비활성화 */
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  /** ✅ 리사이즈 감지 및 모드 전환 */
  useEffect(() => {
    const handleResize = () => {
      const nextState = window.innerWidth > 1024;

      if (nextState !== prevFullpageState.current) {
        prevFullpageState.current = nextState;
        setIsFullpageEnabled(nextState);

        if (nextState) {
          // 풀페이지 복귀 시 맨 위로 이동
          gsap.to(window, { scrollTo: { y: 0 }, duration: 0 });
          setCurrentSection(0);

          collectSections();
          if (ioRef.current) ioRef.current.disconnect();
          setupDesktopInitial(0);
        } else {
          collectSections();
          setupMobileIO();
        }
      }

      document.body.style.overflow = nextState ? "hidden" : "auto";
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (ioRef.current) ioRef.current.disconnect();
    };
  }, []);

  /** ✅ 초기 세팅 (수정된 부분 포함) */
  useLayoutEffect(() => {
    collectSections();

    // ✅ 모든 섹션 처음엔 숨기기 (깜빡임 방지)
    sectionsRef.current.forEach((sec) => {
      const items = sec.querySelectorAll("[data-anim]");
      gsap.set(items, { opacity: 0, y: 40 });
    });

    // ✅ 항상 첫 섹션(1섹션)에서 시작하도록 강제
    window.scrollTo(0, 0);
    setCurrentSection(0);

    if (isFullpageEnabled) {
      setupDesktopInitial(0);

      // ✅ 첫 섹션 애니메이션 실행
      const first = sectionsRef.current[0];
      if (first) {
        const items = first.querySelectorAll("[data-anim]");
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }
    } else {
      setupMobileIO();
    }
  }, []); // eslint-disable-line

  /** ✅ 데스크탑: 휠 스크롤 제어 */
  useEffect(() => {
    if (!isFullpageEnabled) return;
    let ticking = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating || ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        if (e.deltaY > 0)
          setCurrentSection((prev) =>
            Math.min(prev + 1, sectionsRef.current.length - 1)
          );
        else setCurrentSection((prev) => Math.max(prev - 1, 0));
        ticking = false;
      });
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: true,
    });
    return () => window.removeEventListener("wheel", handleWheel, true);
  }, [isAnimating, isFullpageEnabled]);

  /** ✅ 데스크탑: 섹션 전환 애니메이션 */
  useEffect(() => {
    if (!isFullpageEnabled) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const allSections = sectionsRef.current;
    const targetY = window.innerHeight * currentSection;
    const prevSections = allSections.filter((_, i) => i !== currentSection);
    const next = allSections[currentSection];
    if (!next) return;

    setIsAnimating(true);
    gsap.killTweensOf(window);

    prevSections.forEach((sec) => {
      const items = sec.querySelectorAll("[data-anim]");
      gsap.killTweensOf(items);
      gsap.set(items, { opacity: 0, y: 40 });
      sec.classList.remove("active");
    });

    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: targetY },
      ease: "power3.inOut",
      onComplete: () => {
        const nextItems = next.querySelectorAll("[data-anim]");
        gsap.fromTo(
          nextItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.1,
          }
        );
        setIsAnimating(false);
      },
    });

    allSections.forEach((sec, i) =>
      sec.classList.toggle("active", i === currentSection)
    );
  }, [currentSection, isFullpageEnabled]);

  return { currentSection, isFullpageEnabled };
};

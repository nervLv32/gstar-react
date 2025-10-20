import { useEffect } from "react";

export function useViewportHeight() {
  useEffect(() => {
    const setVh = () => {
      const vh = (window.innerHeight * 0.1).toFixed(1); // 실제 보이는 화면 높이의 1%
      document.documentElement.style.setProperty("--vh", `${vh}rem`);
    };
    setVh(); // 초기 실행
    window.addEventListener("resize", setVh); // 화면 크기 바뀔 때 갱신
    return () => window.removeEventListener("resize", setVh);
  }, []);
}

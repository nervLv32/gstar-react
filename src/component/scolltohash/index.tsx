import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // 해시(#booth 등)가 있으면 해당 id로 스크롤
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150); // DOM 렌더 완료 후 약간의 지연
      }
    }
  }, [hash]);

  return null;
}

export default ScrollToHash;

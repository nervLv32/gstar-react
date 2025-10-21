import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ContentsWrapper } from "../styles";
import MainImage from "../../assets/images/media/media/media-media-main.png";
import { materialList } from "../materialsection";
import { mediaList } from "../mediasection";

const ITEMS_PER_PAGE = 9;

const AllSection = () => {
  // ✅ 리스트 병합 + 날짜 기준 정렬 (최신순)
  const mergedList = useMemo(() => {
    return [...materialList, ...mediaList].sort((a, b) => {
      // 날짜 포맷: "2025. 09. 25"
      const dateA = new Date(a.date.replace(/\./g, "-"));
      const dateB = new Date(b.date.replace(/\./g, "-"));
      return dateB.getTime() - dateA.getTime(); // 최신순
    });
  }, []);

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleViewMore = () => setVisibleCount((p) => p + ITEMS_PER_PAGE);

  const currentPage = Math.ceil(visibleCount / ITEMS_PER_PAGE);
  const totalPages = Math.ceil(mergedList.length / ITEMS_PER_PAGE);
  const visibleItems = mergedList.slice(0, visibleCount);

  return (
    <ContentsWrapper>
      <div className="inner">
        <div className="list-wrapper">
          {/* ✅ 전체 전용 메인 */}
          <div className="main">
            <Link to="/">
              <dl>
                <dt>
                  <i>
                    <img src={MainImage} alt="전체 메인" />
                  </i>
                </dt>
                <dd>
                  <div className="text-wrap">
                    <h4>
                      엔씨소프트 미디어 통합관,
                      <br />
                      보도자료 및 영상 한눈에 보기
                    </h4>
                    <p>
                      엔씨소프트의 최신 뉴스와 영상 콘텐츠를
                      <br />한 페이지에서 편리하게 확인할 수 있습니다.
                    </p>
                  </div>
                  <span>2025. 09. 25</span>
                </dd>
              </dl>
            </Link>
          </div>

          {/* ✅ 리스트 */}
          <div className="list-wrap">
            <ul>
              {visibleItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>
                    <div className="img-wrap">
                      <i>
                        <img src={item.img} alt="" />
                      </i>
                    </div>
                    <div className="text-wrap">
                      {item.textChild}
                      <span>{item.date}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="viewmore-wrap">
              {visibleCount < mergedList.length && (
                <div className="button-wrap">
                  <span>+</span>
                  <button onClick={handleViewMore}>VIEW MORE</button>
                </div>
              )}

              <div className="page-info">
                {currentPage} / {totalPages}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentsWrapper>
  );
};

export default AllSection;

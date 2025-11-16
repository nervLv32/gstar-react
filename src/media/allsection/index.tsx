import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ContentsWrapper } from "../styles";
import MainImage from "../../assets/images/media/material/media-material-image04.jpg";

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
          <div className={`main`}>
            <Link
              to="https://www.nc.com/newsroom/news/articles/?articleId=69155ecc15687f2605ced9aa&boardLanguage=ko"
              target="_blank"
            >
              <dl>
                <dt>
                  <i>
                    <img src={MainImage} alt="" />
                  </i>
                </dt>
                <dd>
                  <div className="text-wrap">
                    <h4>
                      지스타에서 엔씨의 ‘현재와 미래’를 만나다. 글로벌 신작 5종
                      공개
                    </h4>
                    <p>
                      ㈜엔씨소프트(공동대표 김택진, 박병무, 이하 엔씨(NC))가
                      ‘지스타 2025’에서 개막 행사 ‘오프닝 세션’을 개최하고,
                      출품작 5종을 공개했다.
                      <br />
                      오프닝 세션의 기조 연설을 맡은 김택진 CCO(Chief Creative
                      Officer, 최고창의력책임자)는 이번 지스타에 참여한 의미와
                      함께 엔씨(NC)의 개발 철학과 비전을 제시했다.
                    </p>
                  </div>
                  <span>2025. 11. 13</span>
                </dd>
              </dl>
            </Link>
          </div>

          <div className="list-wrap">
            <ul>
              {visibleItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} target="_blank">
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

import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ContentsWrapper } from "../styles";
import MainImage from "../../assets/images/media/material/media-material-main.jpg";

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
          <div className="main empty">
            <Link
              to="https://www.nc.com/newsroom/news/articles/?articleId=68be1c8000000000000017c6&boardLanguage=ko&snsShare=true"
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
                      엔씨소프트, 지스타 2025 참가
                      <br /> B2C관 단독 300부스 최대 규모
                    </h4>
                    <p>
                      ㈜엔씨소프트(공동대표 김택진, 박병무)가 국내 최대 게임
                      전시회 ‘지스타(G-STAR) 2025’에 참가한다.
                      <br />
                      엔씨소프트는 ‘지스타 2025’의 메인 스폰서를 맡는다.
                      B2C(기업과 소비자간 거래)관에 대규모 전시관을 마련해 게임
                      이용자들과 직접 만난다. 단독 300 부스 규모의 최대 전시
                      공간에서 신작 라인업을 공개한다.
                    </p>
                  </div>
                  <span>2025. 09. 08</span>
                </dd>
              </dl>
            </Link>
          </div>

          {/* <div className="list-wrap">
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
          </div> */}
        </div>
      </div>
    </ContentsWrapper>
  );
};

export default AllSection;

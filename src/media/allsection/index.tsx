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
          <div className={`main`}>
            <Link
              to="https://www.nc.com/newsroom/news/articles/?articleId=690aa3fdc4cd0a5069dc611d&boardLanguage=ko&snsShare=true"
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
                    <h4>엔씨소프트, ‘지스타 2025’ 현장 프로그램 공개</h4>
                    <p>
                      엔씨(NC)는 지스타 현장에 ▲메인부스 ▲휴게공간 ▲야외부스 등
                      세가지 테마의 공간을 마련했다. 지스타 관람객은 엔씨(NC)가
                      운영하는 부스를 방문해 다양한 프로그램을 진행하고 경품을
                      받을 수 있다. <br />
                      메인부스에서는 ‘아이온2’와 ‘신더시티’ 시연 및 신작
                      트레일러 상영이 진행된다. 아이온2 시연자는 게임 정식 출시
                      후 게임 내에서 사용할 수 있는 ‘G-STAR 스페셜 쿠폰’과
                      ‘마우스 장패드’를 선물로 받는다.
                    </p>
                  </div>
                  <span>2025. 11. 05</span>
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

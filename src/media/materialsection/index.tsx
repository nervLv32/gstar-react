import React, { useState } from "react";
import { Link } from "react-router-dom";

import MaterialMainImage from "../../assets/images/media/material/media-material-main.jpg";
import MaterialImage01 from "../../assets/images/media/material/media-material-image01.png";
import MaterialImage02 from "../../assets/images/media/material/media-material-image02.png";
import MaterialImage03 from "../../assets/images/media/material/media-material-image03.png";
import MaterialImage04 from "../../assets/images/media/material/media-material-image04.png";
import MaterialImage05 from "../../assets/images/media/material/media-material-image05.png";
import MaterialImage06 from "../../assets/images/media/material/media-material-image06.png";
import MaterialImage07 from "../../assets/images/media/material/media-material-image07.png";
import MaterialImage08 from "../../assets/images/media/material/media-material-image08.png";
import MaterialImage09 from "../../assets/images/media/material/media-material-image09.png";
import { ContentsWrapper } from "../styles";
const ITEMS_PER_PAGE = 9; // ✅ 한 페이지당 아이템 수

export const materialList = [
  {
    link: "/",
    img: MaterialImage01,
    textChild: (
      <h6 className="title">
        엔씨소프트 리니지 리마스터, <br />
        27주년 신규 업데이트 사전예약 개시
      </h6>
    ),
    date: "2025. 10. 28",
  },
];

const MaterialSection = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  // ✅ 페이지 계산
  const currentPage = Math.ceil(visibleCount / ITEMS_PER_PAGE);
  const totalPages = Math.ceil(materialList.length / ITEMS_PER_PAGE);

  const visibleItems = materialList.slice(0, visibleCount);
  return (
    <ContentsWrapper>
      <div className="inner">
        <div className="list-wrapper">
          <div className={`${materialList.length > 1 ? "" : "empty"} main`}>
            <Link
              to="https://www.nc.com/newsroom/news/articles/?articleId=68be1c8000000000000017c6&boardLanguage=ko&snsShare=true"
              target="_blank"
            >
              <dl>
                <dt>
                  <i>
                    <img src={MaterialMainImage} alt="" />
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

          {materialList.length > 1 && (
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
                {/* 버튼은 더 보여줄게 있을 때만 표시 */}
                {visibleCount < materialList.length && (
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
          )}
        </div>
      </div>
    </ContentsWrapper>
  );
};

export default MaterialSection;

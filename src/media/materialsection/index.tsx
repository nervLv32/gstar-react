import React, { useState } from "react";
import { Link } from "react-router-dom";

import MaterialMainImage from "../../assets/images/media/material/media-material-main.jpg";
import MaterialImage01 from "../../assets/images/media/material/media-material-image01.jpg";
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
    link: "https://www.nc.com/newsroom/news/articles/?articleId=6902bd85eb84802f49d2f495&boardLanguage=ko&snsShare=true",
    img: MaterialImage02,
    textChild: (
      <h6 className="title">
        엔씨소프트, 9년 연속 게임 스타트업 ‘지스타’ 참가 후원
      </h6>
    ),
    date: "2025. 10. 30",
  },
  {
    link: "https://www.nc.com/newsroom/news/articles/?articleId=68be1c8000000000000017c6&boardLanguage=ko&snsShare=true",
    img: MaterialImage01,
    textChild: (
      <h6 className="title">
        엔씨소프트, 지스타 2025 참가
        <br /> B2C관 단독 300부스 최대 규모
      </h6>
    ),
    date: "2025. 09. 08",
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
          <div className={`main`}>
            <Link
              to="https://www.nc.com/newsroom/news/articles/?articleId=69004f2b8b93c2788d4004e6&boardLanguage=ko"
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
                      엔씨소프트, ‘지스타 2025’ 출품작 및 부스 조감도 공개
                    </h4>
                    <p>
                      ㈜엔씨소프트(공동대표 김택진, 박병무, 이하 엔씨(NC))가
                      ‘지스타 (G-STAR) 2025’ 공식 홈페이지를 통해 5종의 신작
                      라인업과 부스 조감도를 공개했다. 엔씨(NC)는 지스타에서
                      오는 11월 19일 출시 예정인 ‘아이온2’와 MMO 택티컬 슈터
                      ‘신더시티’ 등 신작 2종의 시연 부스를 운영한다.
                    </p>
                  </div>
                  <span>2025. 10. 28</span>
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
        </div>
      </div>
    </ContentsWrapper>
  );
};

export default MaterialSection;

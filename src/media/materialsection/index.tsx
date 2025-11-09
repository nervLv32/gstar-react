import { useState } from "react";
import { Link } from "react-router-dom";

import MaterialImage01 from "../../assets/images/media/material/media-material-image01.jpg";
import MaterialImage02 from "../../assets/images/media/material/media-material-image02.png";
import MaterialImage03 from "../../assets/images/media/material/media-material-image03.jpg";
import MaterialMainImage from "../../assets/images/media/material/media-material-main.jpg";

import { ContentsWrapper } from "../styles";
const ITEMS_PER_PAGE = 9;

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
    link: "https://www.nc.com/newsroom/news/articles/?articleId=69004f2b8b93c2788d4004e6&boardLanguage=ko",
    img: MaterialImage03,
    textChild: (
      <h6 className="title">
        엔씨소프트, ‘지스타 2025’ 출품작 및 부스 조감도 공개
      </h6>
    ),
    date: "2025. 10. 28",
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
              to="https://www.nc.com/newsroom/news/articles/?articleId=690aa3fdc4cd0a5069dc611d&boardLanguage=ko&snsShare=true"
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

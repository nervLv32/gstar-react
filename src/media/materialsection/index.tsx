import { useState } from "react";
import { Link } from "react-router-dom";

import MaterialImage01 from "../../assets/images/media/material/media-material-image01.jpg";
import MaterialImage02 from "../../assets/images/media/material/media-material-image02.png";
import MaterialImage03 from "../../assets/images/media/material/media-material-image03.jpg";
import MaterialImage04 from "../../assets/images/media/material/media-material-image04.jpg";
import MaterialImage05 from "../../assets/images/media/material/media-material-image05.jpg";
import MaterialImage06 from "../../assets/images/media/material/media-material-image06.jpg";

import MaterialImage10 from "../../assets/images/media/material/media-material-image10.jpeg";
import MaterialImage11 from "../../assets/images/media/material/media-material-image11.jpeg";
import MaterialImage12 from "../../assets/images/media/material/media-material-image12.jpeg";
import MaterialMainImage from "../../assets/images/media/material/media-material-main.jpg";

import { ContentsWrapper } from "../styles";
const ITEMS_PER_PAGE = 9;

export const materialList = [
  {
    link: "https://about.ncsoft.com/news/article/cc_update_251114",
    img: MaterialImage10,
    textChild: (
      <h6 className="title">
        엔씨소프트 〈신더시티〉, 마이크로소프트와 기술 협력으로 글로벌 서비스
        역량 고도화
      </h6>
    ),
    date: "2025. 11. 14",
  },
  {
    link: "https://about.ncsoft.com/news/article/aion2_update_251114",
    img: MaterialImage11,
    textChild: (
      <h6 className="title">
        지스타 흥행 중심에 선 엔씨(NC) 〈아이온2〉 <br />
        "대기 시간만 4시간"
      </h6>
    ),
    date: "2025. 11. 14",
  },
  {
    link: "https://about.ncsoft.com/news/article/cc_update_251114_2",
    img: MaterialImage12,
    textChild: (
      <h6 className="title">
        엔씨소프트 〈신더시티〉 <br />
        “오픈월드 택티컬 슈터 장르 새 지평 연다”
      </h6>
    ),
    date: "2025. 11. 14",
  },
  {
    link: "https://www.nc.com/newsroom/news/articles/?articleId=69155f48e2c9472886f5764a&boardLanguage=ko",
    img: MaterialImage05,
    textChild: (
      <h6 className="title">
        엔씨(NC), 호라이즌 IP 신작 <br />
        ‘호라이즌 스틸 프론티어스’ 최초 공개
      </h6>
    ),
    date: "2025. 11. 13",
  },
  {
    link: "https://www.nc.com/newsroom/news/articles/?articleId=69116340169af15c336fd277&boardLanguage=ko&",
    img: MaterialImage06,
    textChild: (
      <h6 className="title">
        엔씨소프트, 삼성-엔비디아-MS 등 <br />
        지스타 2025 제휴 진행
      </h6>
    ),
    date: "2025. 11. 10",
  },
  {
    link: "https://www.nc.com/newsroom/news/articles/?articleId=690aa3fdc4cd0a5069dc611d&boardLanguage=ko&snsShare=true",
    img: MaterialMainImage,
    textChild: (
      <h6 className="title">엔씨소프트, ‘지스타 2025’ 현장 프로그램 공개</h6>
    ),
    date: "2025. 11. 05",
  },
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
              to="https://www.nc.com/newsroom/news/articles/?articleId=69155ecc15687f2605ced9aa&boardLanguage=ko"
              target="_blank"
            >
              <dl>
                <dt>
                  <i>
                    <img src={MaterialImage04} alt="" />
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

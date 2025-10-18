import React, { useState } from "react";
import { Link } from "react-router-dom";

import MaterialMainImage from "../../assets/images/media/material/media-material-main.png";
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

const list = [
  {
    link: "/",
    img: MaterialImage01,
    textChild: (
      <h6 className="title">
        엔씨소프트 리니지 리마스터, <br />
        27주년 신규 업데이트 사전예약 개시
      </h6>
    ),
    date: "2025. 09. 25",
  },
  {
    link: "/",
    img: MaterialImage02,
    textChild: (
      <h6 className="title">
        엔씨(NC) ‘리밋 제로 브레이커스’, TGS 2025 출격 ∙∙∙ <br />
        신규 홍보 영상 공개
      </h6>
    ),
    date: "2025. 09. 25",
  },
  {
    link: "/",
    img: MaterialImage09,
    textChild: (
      <h6 className="title">
        엔씨(NC) 리니지 리마스터, 27주년 생방송
        <br />
        ‘스포일러 TALK’ 진행 예고
      </h6>
    ),
    date: "2025. 09. 25",
  },
  {
    link: "/",
    img: MaterialImage03,
    textChild: (
      <h6 className="title">
        엔씨소프트, 엔씨패밀리존에서 애니메이션 OTT <br />
        ‘라프텔’ 서비스 시작
      </h6>
    ),
    date: "2025. 09. 25",
  },
  {
    link: "/",
    img: MaterialImage04,
    textChild: (
      <h6 className="title">
        엔씨(NC) 리니지M, ‘BURNING HEART’
        <br />
        업데이트 진행
      </h6>
    ),
    date: "2025. 09. 25",
  },
  {
    link: "/",
    img: MaterialImage05,
    textChild: (
      <h6 className="title">
        TL, 대규모 업데이트 ‘NEW WAVE’ 실시 ··· <br />
        신규 무기 ‘마력구’ 도입
      </h6>
    ),
    date: "2025. 09. 25",
  },
  {
    link: "/",
    img: MaterialImage06,
    textChild: (
      <h6 className="title">
        엔씨소프트 ‘아이온2’, 11월 19일 한국∙대만 출시 ∙∙∙
        <br />
        사전예약 시작
      </h6>
    ),
    date: "2025. 09. 25",
  },
  {
    link: "/",
    img: MaterialImage07,
    textChild: (
      <h6 className="title">
        엔씨소프트 ‘리밋 제로 브레이커스’,
        <br />
        TGS 2025 프로그램 정보 공개
      </h6>
    ),
    date: "2025. 09. 25",
  },
  {
    link: "/",
    img: MaterialImage08,
    textChild: (
      <h6 className="title">
        엔씨(NC) 리니지M, ‘BURNING HEART’ <br />
        업데이트 상세정보 공개
      </h6>
    ),
    date: "2025. 09. 25",
  },
  {
    link: "/",
    img: MaterialImage03,
    textChild: (
      <h6 className="title">
        엔씨소프트, 엔씨패밀리존에서 애니메이션 OTT <br />
        ‘라프텔’ 서비스 시작
      </h6>
    ),
    date: "2025. 09. 25",
  },
  {
    link: "/",
    img: MaterialImage04,
    textChild: (
      <h6 className="title">
        엔씨(NC) 리니지M, ‘BURNING HEART’
        <br />
        업데이트 진행
      </h6>
    ),
    date: "2025. 09. 25",
  },
  {
    link: "/",
    img: MaterialImage09,
    textChild: (
      <h6 className="title">
        엔씨(NC) 리니지 리마스터, 27주년 생방송
        <br />
        ‘스포일러 TALK’ 진행 예고
      </h6>
    ),
    date: "2025. 09. 25",
  },
];

const MaterialSection = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  // ✅ 페이지 계산
  const currentPage = Math.ceil(visibleCount / ITEMS_PER_PAGE);
  const totalPages = Math.ceil(list.length / ITEMS_PER_PAGE);

  const visibleItems = list.slice(0, visibleCount);
  return (
    <ContentsWrapper>
      <div className="inner">
        <div className="list-wrapper">
          <div className="main">
            <Link to="/">
              <dl>
                <dt>
                  <i>
                    <img src={MaterialMainImage} alt="" />
                  </i>
                </dt>
                <dd>
                  <div className="text-wrap">
                    <h4>
                      엔씨소프트 리니지 리마스터,
                      <br />
                      27주년 신규 업데이트
                      <br />
                      사전예약 개시
                    </h4>
                    <p>
                      ㈜엔씨소프트(공동대표 김택진, 박병무, 이하 엔씨(NC))의 PC
                      <br />
                      온라인 MMORPG(다중접속역할수행게임) ‘리니지
                      <br />
                      리마스터(이하 리니지)’가 27주년 신규 업데이트 ‘다시
                      <br />
                      시작되는 전장의 시대, 선포’의 일정을 공개하고 사전예약을{" "}
                    </p>
                  </div>
                  <span>2025. 09. 25</span>
                </dd>
              </dl>
            </Link>
          </div>

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
              {visibleCount < list.length && (
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

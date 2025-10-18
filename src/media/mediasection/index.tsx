import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainImage from "../../assets/images/media/media/media-media-main.png";
import Image01 from "../../assets/images/media/media/media-media-image01.png";
import Image02 from "../../assets/images/media/media/media-media-image02.png";
import Image03 from "../../assets/images/media/media/media-media-image03.png";
import Image04 from "../../assets/images/media/media/media-media-image04.png";
import Image05 from "../../assets/images/media/media/media-media-image05.png";
import Image06 from "../../assets/images/media/media/media-media-image06.png";
import Image07 from "../../assets/images/media/media/media-media-image07.png";
import Image08 from "../../assets/images/media/media/media-media-image08.png";
import Image09 from "../../assets/images/media/media/media-media-image09.png";
import { ContentsWrapper } from "../styles";
const ITEMS_PER_PAGE = 9; // ✅ 한 페이지당 아이템 수

const list = [
  {
    link: "/",
    img: Image01,
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
    img: Image02,
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
    img: Image09,
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
    img: Image03,
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
    img: Image04,
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
    img: Image05,
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
    img: Image06,
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
    img: Image07,
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
    img: Image08,
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
    img: Image03,
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
    img: Image04,
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
    img: Image09,
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
const MediaSection = () => {
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
                    <img src={MainImage} alt="" />
                  </i>
                </dt>
                <dd>
                  <div className="text-wrap">
                    <h4>
                      Time Takers – Official Reveal <br />
                      Trailer (2025) | Mistil Games / NCSOFT
                    </h4>
                    <p>내용작성영역</p>
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

export default MediaSection;

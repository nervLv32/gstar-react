import { useState } from "react";
import { Link } from "react-router-dom";
import Image01 from "../../assets/images/media/media/media-media-image01.png";
import MainImage from "../../assets/images/media/media/media-media-main.jpeg";
import { ContentsWrapper } from "../styles";
const ITEMS_PER_PAGE = 9; // ✅ 한 페이지당 아이템 수

// ✅ 타입 정의
interface MediaItem {
  link: string;
  img: string;
  textChild: React.ReactNode;
  date: string;
}

export const mediaList: MediaItem[] = [
  {
    link: "https://youtu.be/b_n4hpvoI0E",
    img: MainImage,
    textChild: (
      <h6 className="title">
        무한한 세계, 하나의 여정! <br />
        엔씨소프트 출품작 공개
      </h6>
    ),
    date: "2025. 10. 28",
  },
];
const MediaSection = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  // ✅ 페이지 계산
  const currentPage = Math.ceil(visibleCount / ITEMS_PER_PAGE);
  const totalPages = Math.ceil(mediaList.length / ITEMS_PER_PAGE);

  const visibleItems = mediaList.slice(0, visibleCount);
  return (
    <ContentsWrapper>
      <div className="inner">
        <div className="list-wrapper">
          <div className={`${mediaList.length > 1 ? "" : "empty"} main`}>
            <Link to="https://youtu.be/b_n4hpvoI0E" target="_blank">
              <dl>
                <dt>
                  <i>
                    <img src={MainImage} alt="" />
                  </i>
                </dt>
                <dd>
                  <div className="text-wrap">
                    <h4>무한한 세계, 하나의 여정! 엔씨소프트 출품작 공개</h4>
                    <p>
                      무한한 세계, 하나의 여정! 엔씨가 다양한 장르의 출품작과
                      함께 부산에서 여러분을 기다립니다.
                      {"<"}AION2{">"}, {"<"}CINDER CITY{">"}, {"<"}LIMIT ZERO
                      BREAKERS{">"}, {"<"}TIME TAKERS{">"}와 G-STAR 2025 B2C관의
                      랜드마크 NC CINEMA에서 공개되는 또 하나의 출품작까지!{" "}
                      <br />
                      <br />
                      11월 13일(목)~11월 16일(일) 부산 벡스코에서 만나요!
                    </p>
                  </div>
                  <span>2025. 10. 28</span>
                </dd>
              </dl>
            </Link>
          </div>

          {mediaList.length > 1 && (
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
                {visibleCount < mediaList.length && (
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

export default MediaSection;

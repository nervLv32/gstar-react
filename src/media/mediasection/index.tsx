import { useState } from "react";
import { Link } from "react-router-dom";
import Image01 from "../../assets/images/media/media/media-media-main.jpeg";
import MainImage from "../../assets/images/media/media/media-media-image01.jpeg";
import Image10 from "../../assets/images/media/media/media-media-image10.jpeg";
import Image11 from "../../assets/images/media/media/media-media-image11.png";
import Image12 from "../../assets/images/media/media/media-media-image12.jpeg";
import Image13 from "../../assets/images/media/media/media-media-image13.jpeg";
import Image14 from "../../assets/images/media/media/media-media-image14.jpeg";
import Image15 from "../../assets/images/media/media/media-media-image15.jpeg";
import Image16 from "../../assets/images/media/media/media-media-image16.png";
import { ContentsWrapper } from "../styles";
const ITEMS_PER_PAGE = 9;

interface MediaItem {
  link: string;
  img: string;
  textChild: React.ReactNode;
  date: string;
}

export const mediaList: MediaItem[] = [
  {
    link: "https://youtu.be/rwnxkQFvHlQ?si=z0AFzffroAyDQlU1",
    img: Image16,
    textChild: <h6 className="title">공식 현장 스케치 최종</h6>,
    date: "2025. 11. 25",
  },
  {
    link: "https://youtu.be/skOWR5j07xU?si=Fxbm_YlMEXxnQ358",
    img: Image15,
    textChild: <h6 className="title">공식 현장 스케치 Day 4</h6>,
    date: "2025. 11. 24",
  },
  {
    link: "https://youtu.be/I_6dh5QVod8?si=S56ByrSZzZJpElox",
    img: Image14,
    textChild: <h6 className="title">공식 현장 스케치 Day 3</h6>,
    date: "2025. 11. 24",
  },
  {
    link: "https://youtu.be/8wlVvgUrqY8?si=yAIK5OjDXazZ2fKJ",
    img: Image13,
    textChild: <h6 className="title">공식 현장 스케치 Day 2</h6>,
    date: "2025. 11. 15",
  },
  {
    link: "https://youtu.be/yqSLDqVlwh0?si=1Xbl_rfex4JfB-vA",
    img: Image12,
    textChild: <h6 className="title">공식 현장 스케치 Day 1</h6>,
    date: "2025. 11. 15",
  },
  {
    link: "https://youtu.be/T2IQuVoZ4kQ?si=vyWOb2ISdGmUe7ME",
    img: Image11,
    textChild: <h6 className="title">NC 부스 미리보기</h6>,
    date: "2025. 11. 14",
  },
  {
    link: "https://www.youtube.com/watch?v=7BQdHJWk5Ks",
    img: MainImage,
    textChild: (
      <h6 className="title">
        무한한 세계, 하나의 여정! <br />
        엔씨소프트 출품작 공개(본편)
      </h6>
    ),
    date: "2025. 11. 14",
  },
  {
    link: "https://www.youtube.com/watch?v=1ARYpgLmPnE",
    img: Image01,
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

  const currentPage = Math.ceil(visibleCount / ITEMS_PER_PAGE);
  const totalPages = Math.ceil(mediaList.length / ITEMS_PER_PAGE);

  const visibleItems = mediaList.slice(0, visibleCount);

  return (
    <ContentsWrapper>
      <div className="inner">
        <div className="list-wrapper">
          <div className={`${mediaList.length > 0 ? "" : "empty"} main`}>
            <Link
              to="https://youtu.be/0oKm8plg6Fc?si=pkyOHxFlTo3hih8m"
              target="_blank"
            >
              <dl>
                <dt>
                  <i>
                    <img src={Image10} alt="" />
                  </i>
                </dt>
                <dd>
                  <div className="text-wrap">
                    <h4>
                      Opening Session : <br />
                      NEXT SCENE
                    </h4>
                    <p>
                      엔씨가 그려나갈, 새로운 시대의 여정을 알리는 시작!
                      <br /> 모든 이상을 담은 완전한 세계, AION의 완전판!
                      [AION2]
                      <br />
                      엔씨소프트의 첫 번째 글로벌 오픈월드 슈터 게임, [CINDER
                      CITY] <br />
                      시간 그 자체가 전투의 룰이 되는 독창적인 시스템, [Time
                      Takers] <br />
                      속도감 있는 전투 액션, 애니메이션의 한 장면을 직접
                      플레이하는 경험! [Limit Zero Brakers] <br />
                      그리고, 기계와 인간이 공존하는 무한한 가능성을 가진 세계.
                      글로벌 최초 공개! [Horizon Steel Frontiers] <br />
                      <br />
                      엔씨가 빚어온, 그리고 빚어갈 게임들을 소개합니다.
                    </p>
                  </div>
                  <span>2025. 11. 15</span>
                </dd>
              </dl>
            </Link>
          </div>

          {mediaList.length > 0 && (
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

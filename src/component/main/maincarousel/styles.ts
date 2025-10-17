import { styled } from "styled-components";

export const MainCarouselWrapper = styled.div`
  .carousel {
    width: 144rem;
    overflow: hidden;
    gap: 2rem;
  }

  .track {
    display: flex;
    transition: transform 0.6s ease;
  }

  .slide {
    flex: 0 0 20%;

    height: 55rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    font-weight: 700;
    background: #333;
    border-radius: 2rem;
    opacity: 0.5;
    transform: scale(0.95);
    transition: all 0.6s ease;
  }

  .slide.active {
    background: #ff4c4c;
    opacity: 1;
    transform: scale(1.05);
    box-shadow: 0 0 3rem rgba(255, 76, 76, 0.4);
    z-index: 2;
  }

  .controls {
    margin-top: 3rem;
    display: flex;
    gap: 2rem;

    button {
      width: 10rem;
      height: 4rem;
      border: none;
      border-radius: 2rem;
      background: #444;
      color: #fff;
      font-size: 1.6rem;
      cursor: pointer;
      transition: background 0.3s;
      &:hover {
        background: #ff4c4c;
      }
    }
  }
`;

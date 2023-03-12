import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0%{
    transform: rotate(0deg)
    }
    50%{
        transform: rotate(180deg)
    }
    100%{
        transform: rotate(360deg)
    }
`;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 500px;
  background-color: rgb(32, 27, 50);
  overflow: hidden;
  padding: 20px 0;
  .container {
    height: 100%;
  }
  .title {
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 4.5rem;
    text-transform: uppercase;
    font-style: italic;
    color: RGB(255, 193, 7);
  }
  @media screen and (max-width: 1024px) {
    height: 400px;
    .title {
      font-size: 2rem;
      font-weight: 900;
      line-height: 3rem;
    }
  }
  @media screen and (max-width: 767px) {
    height: 300px;
    .title {
      font-size: 1.5rem;
      font-weight: 900;
      line-height: 2rem;
    }
  }
  @media screen and (max-width: 540px) {
    .title {
      text-align: center;
    }
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 540px) {
    justify-content: center;
  }
`;
export const Pizza = styled.img`
  position: absolute;
  height: 70%;
  width: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Carousel = styled.img`
  transition: all 0.4s linear;
  animation: ${rotate} 25s infinite linear;
  height: 100%;
  width: 100%;
`;
export const Image = styled.div`
  position: relative;
  height: 100%;
  aspect-ratio: 1 / 1;
`;
export const Banner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 540px) {
    justify-content: center;
    align-items: center;
  }
`;

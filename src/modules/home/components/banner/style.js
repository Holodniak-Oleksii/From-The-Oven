import styled from "styled-components";

export const Background = styled.div`
  background-color: rgb(32, 27, 50);
  width: 100%;
  padding: 120px 0 60px 0;
  overflow: hidden;
  position: relative;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .paragraph {
    color: #b5b2b9;
    text-align: center;
    font-size: 1rem;
    line-height: 2rem;
    width: 80%;
  }
  @media screen and (max-width: 1280px) {
    .paragraph {
      font-size: 14px;
      line-height: 20px;
    }
  }
  @media screen and (max-width: 540px) {
    .paragraph {
      width: 100%;
    }
  }
`;
export const Pizza = styled.div`
  width: 50%;
  overflow: hidden;
`;

export const Slogan = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (max-width: 540px) {
    padding: 0;

    .red-btn {
      font-size: 14px;
      padding: 6px 30px;
    }
  }
`;
export const Title = styled.h1`
  font-size: 5rem;
  color: #fff;
  text-align: center;
  font-style: italic;
  position: relative;
  width: fit-content;
  font-weight: 700;
  &::before {
    content: "Special";
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-80%);
    font-size: 2rem;
    font-weight: 600;
    background: #212121;
    background: linear-gradient(to top, #e64242c5 0%, #ff1a16 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (max-width: 1280px) {
    font-size: 3rem;
    &::before {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 540px) {
    font-size: 2.5rem;
  }
`;

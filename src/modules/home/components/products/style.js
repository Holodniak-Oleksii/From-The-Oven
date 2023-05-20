import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3 - 9px));
  grid-gap: 12px;
  width: 70%;
  height: 100%;
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, calc(100% / 2 - 9px));
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid #fff;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
  gap: 10px;

  img {
    max-width: 100px;
  }
  @media screen and (max-width: 1500px) {
    img {
      max-width: 80px;
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 8px;
  }
`;

export const CardLoader = styled(Card)`
  span {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-weight: 500;
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 6px;

    h3 {
      font-size: 14px;
    }
  }
`;

export const Banner = styled.div`
  min-width: 260px;
  width: 30%;
  height: 100%;
  img {
    height: 100%;
    border-radius: 4px;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    min-width: 200px;
    width: 20%;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  height: 540px;
  @media screen and (max-width: 1280px) {
    height: 580px;
  }
  @media screen and (max-width: 540px) {
    height: 460px;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 100px 0 50px 0;
  a {
    color: #000;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 40px 0 20px 0;
  width: 100%;
  gap: 20px;
  .product-card {
    width: calc(100% / 5 - 16px);
    @media screen and (max-width: 1440px) {
      width: calc(100% / 4 - 15px);
    }
    @media screen and (max-width: 1024px) {
      width: calc(100% / 3 - 14px);
    }
    @media screen and (max-width: 767px) {
      width: calc(100% / 2 - 12px);
    }
    @media screen and (max-width: 540px) {
      width: calc(100% / 2 - 10px);
    }
    @media screen and (max-width: 420px) {
      width: 100%;
      max-width: 250px;
      margin: 0 auto;
    }
  }
`;

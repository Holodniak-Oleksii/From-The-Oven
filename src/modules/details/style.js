import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 100px 0 50px 0;
  max-height: 600px;
  justify-content: space-between;
  gap: 16px;
  .carousel-pizza {
    width: 40%;
    overflow: hidden;
    max-width: 600px;
    max-height: 600px;
    aspect-ratio: 1 / 1;
    img {
      object-fit: contain;
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    max-height: fit-content;
    height: fit-content;
    gap: 24px;
    margin: 80px 0 50px 0;
    justify-content: flex-start;

    .carousel-pizza {
      width: 100%;
      max-width: 600px;
      max-height: 300px;
    }
  }
`;

export const Information = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  .order-list {
    margin-top: 10px;
    font-size: 16px;
    padding: 8px 22px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.5;
`;
export const Description = styled.p`
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;
export const Table = styled.table`
  width: 100%;
  max-width: 300px;
  text-align: left;
  border-spacing: 0 12px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  .head {
    display: flex;
    align-items: center;
    font-weight: 700;
    justify-content: flex-start;
    gap: 6px;
  }
`;

export const Item = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;
export const Text = styled.div`
  font-size: 16px;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;
export const Ingredient = styled.div`
  background-color: #f95644;
  padding: 6px 12px;
  font-size: 14px;
  text-transform: lowercase;
  color: #ffffff;
  border: 1px solid #fc4734;
  border-radius: 6px;
`;

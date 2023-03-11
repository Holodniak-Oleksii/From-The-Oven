import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  grid-gap: 12px;
  width: 70%;
  height: 100%;
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
`;

export const Price = styled.div`
  span {
    color: #ccc;
    text-decoration: line-through;
  }
`;
export const Banner = styled.div`
  min-width: 300px;
  width: 30%;
  height: 100%;
  img {
    height: 100%;
    border-radius: 4px;
    width: 100%;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  height: 540px;
`;

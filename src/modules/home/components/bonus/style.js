import styled from "styled-components";
import { flex_center } from "@/assets/scss/global";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #fb4733;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 40px 0 20px 0;
  @media screen and (max-width: 1024px) {
    padding: 12px 2px;
  }
  @media screen and (max-width: 767px) {
    margin: 0 0 20px 0;
  }
  @media screen and (max-width: 600px) {
    display: grid;
    padding: 10px;
    grid-template-columns: repeat(2, calc(100% / 2));
    gap: 6px;
  }
`;
export const Item = styled.div`
  ${flex_center}
  flex-direction: column;
  gap: 5px;
  h2 {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }
  p {
    font-size: 12px;
    font-weight: 300;
    text-align: center;
  }
  @media screen and (max-width: 1024px) {
    padding: 8px;
    h2 {
      font-size: 12px;
    }
    p {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 540px) {
    h2 {
      font-size: 10px;
    }
    p {
      font-size: 8px;
    }
  }
`;

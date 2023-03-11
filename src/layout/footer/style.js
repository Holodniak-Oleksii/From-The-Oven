import styled from "styled-components";
import { flex_center } from "@/assets/scss/global";

export const Wrapper = styled.footer`
  background-color: #201b32;
  position: relative;
`;

export const Content = styled.div`
  padding: 40px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  iframe {
    border: none;
    height: 200px;
    width: 500px;
    border-radius: 6px;
  }
`;

export const Item = styled.div`
  li,
  a,
  span {
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    font-weight: 400;
  }
  li {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
  }
  h2 {
    margin-bottom: 15px;
    color: #fc4734;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
  }
  .mt {
    margin-top: 15px;
  }
`;

export const Icon = styled.button`
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  width: 40px;
  ${flex_center}
  background-color: #fff;
  svg {
    path {
      fill: #000;
    }
  }
`;

export const Flex = styled.div`
  ${flex_center}
  gap: 10px;
`;

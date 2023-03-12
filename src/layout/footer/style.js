import styled from "styled-components";
import { flex_center } from "@/assets/scss/global";

export const Wrapper = styled.footer`
  background-color: #201b32;
  position: relative;
  @media screen and (max-width: 540px) {
    padding-bottom: 50px;
  }
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
    width: 100%;
    max-width: 500px;
    border-radius: 6px;
  }
  @media screen and (max-width: 1280px) {
    gap: 40px;
    max-width: 100%;
  }
  @media screen and (max-width: 1024px) {
    gap: 12px;
  }
  @media screen and (max-width: 540px) {
    display: grid;
    grid-template-columns: 65% 35%;
  }
  @media screen and (max-width: 440px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
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
    white-space: nowrap;
  }
  li {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
  }
  h2 {
    white-space: nowrap;
    margin-bottom: 15px;
    color: #fc4734;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
  }
  .mt {
    margin-top: 15px;
  }
  @media screen and (max-width: 767px) {
    svg {
      width: 12px;
    }
    li,
    a,
    span {
      color: #fff;
      font-size: 12px;
      line-height: 18px;
      cursor: pointer;
      font-weight: 400;
      white-space: nowrap;
    }
    h2 {
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 440px) {
    svg {
      width: 15px;
    }
    li,
    a,
    span {
      color: #fff;
      font-size: 14px;
      line-height: 20px;
    }
    h2 {
      font-size: 18px;
      line-height: 20px;
    }
  }
`;
export const SocialWrapper = styled(Item)`
  @media screen and (max-width: 1280px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 24px;
    /* flex-direction: column; */
  }
`;

export const SocialContent = styled.div`
  @media screen and (max-width: 1280px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 12px;
    h2 {
      margin: 0 !important;
    }
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
  @media screen and (min-width: 1024px) {
    &:hover {
      svg {
        path {
          fill: #fc4734;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    width: 25px;
    svg {
      width: 15px;
    }
  }
`;

export const Flex = styled.div`
  ${flex_center}
  gap: 10px;
  @media screen and (max-width: 540px) {
    justify-content: flex-start;
  }
`;

import { flex_center } from "@/assets/scss/global";
import { MainWrapper } from "@/components/containers";
import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  height: 72px;
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.4s ease;
  ${(props) =>
    props.scroll
      ? `
      backdrop-filter: blur(100px);
      background-color: rgba(255, 255, 255, 0.01);
      `
      : `
  background-color: rgb(255, 255, 255);`}
  backdrop-filter: blur(3px);
`;

export const Navigations = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  @media screen and (max-width: 767px) {
    gap: 16px;
  }
`;
export const Item = styled.li`
  a {
    transition: all 0.3s ease;
    ${(props) =>
      props.scroll
        ? `
      color: #fff;
      `
        : `
      color: #000;
`}
    font-weight: 500;
    font-size: 14px;
  }
  &:hover {
    a {
      color: #d00e29;
    }
  }
  @media screen and (max-width: 767px) {
    a {
      font-size: 12px;
    }
  }
`;
export const HeaderContainer = styled(MainWrapper)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.img`
  height: 50%;
  width: auto;
  object-fit: contain;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  height: 100%;
  @media screen and (max-width: 767px) {
    gap: 16px;
  }
`;
export const Market = styled.button`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  svg {
    transition: all 0.3s ease;
    height: 30px;
    width: auto;
  }
  ${({ amount }) =>
    amount &&
    css`
      &::before {
        content: "${amount}";
        position: absolute;
        top: 20px;
        z-index: 2;
        right: -2px;
        font-size: 10px;
        line-height: 10px;
        color: #fff;
        background-color: rgb(208, 14, 41);
        min-width: 16px;
        min-height: 16px;
        padding: 3px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        ${flex_center}
        @media screen and (max-width: 540px) {
          top: -3px;
          right: -1px;
          min-width: 20px;
          min-height: 20px;
        }
      }
    `}
`;
export const NumberPhone = styled.div`
  ${(props) =>
    props.scroll
      ? `
      color: #fff;
      `
      : `
      color: #191919;
`}
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

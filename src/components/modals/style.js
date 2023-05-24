import { flex_center } from "@/assets/scss/global";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flex_center}
  padding: 0 16px;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Column = styled.div`
  max-height: 100%;
  min-height: 500px;
  width: 100%;
  max-width: 700px;
  ${flex_center}
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 12px;
  max-height: 100%;
  padding: 24px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (max-width: 540px) {
    padding: 16px 0;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 540px) {
    font-size: 18px;
  }
`;

export const Head = styled.div`
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 540px) {
    padding: 0 16px;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 40px;
  @media screen and (max-width: 540px) {
    padding: 0 16px;
  }
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 510px;
  padding: 0 40px;
  overflow: auto;
  @media screen and (max-width: 540px) {
    padding: 0 16px;
  }
`;

export const Item = styled.div`
  height: 100px;
  width: 100%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  @media screen and (max-width: 540px) {
    height: 75px;
    gap: 8px;
  }
`;

export const CloseButton = styled.button`
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  ${flex_center};
  width: 40px;
  height: 40px;
  background-color: #f3f1f1ce;
  padding: 5px;
  transition: all 0.4s linear;
  transform-origin: center;
  svg {
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: #edeaeaf6;
  }
  &:active {
    transform: scale(0.8);
  }
  @media screen and (max-width: 540px) {
    width: 35px;
    height: 35px;
  }
`;

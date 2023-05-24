import { overflowText } from "@/assets/scss/global";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 5;
  justify-content: center;
  padding: 100px 0;
  min-height: 100vh;
  max-width: 1600px;
  margin: 0 auto;
`;

export const Background = styled.div`
  position: relative;
  height: 100%;
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 5fr 1fr 4fr 2fr 1fr;
  grid-gap: 16px;
  width: 100%;
  height: 50px;
  background: rgba(246, 240, 240, 0.16);
  border: 1px solid #fff;
  backdrop-filter: blur(6px);
  transition: all linear 0.4s;
  ${({ head }) =>
    head &&
    css`
      background: rgba(225, 220, 220, 0.3);
    `}
  @media screen and (min-width: 1025px) {
    &:hover {
      background: rgba(255, 255, 255, 0.711);
    }
  }
`;

export const Item = styled.div`
  ${overflowText}
  text-align: center;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.button`
  @media screen and (min-width: 1025px) {
    svg {
      path {
        transition: all linear 0.4s;
      }
    }
    &:hover {
      svg {
        path {
          stroke: #8e8e8e;
        }
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  background: rgba(246, 240, 240, 0.16);
  border: 1px solid #fff;
  backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 20px 16px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .order {
    width: 100%;
    margin: 0 auto;
    max-width: 200px;
    padding: 6px 20px;
  }
`;

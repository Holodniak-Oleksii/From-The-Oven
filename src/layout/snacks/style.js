import { flex_center } from "@/assets/scss/global";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-width: 400px;
  height: auto;
  max-width: calc(100vw - 32px);
  border-radius: 16px;
  ${flex_center}
  justify-content: flex-start;
  gap: 10px;
  padding: 12px;

  .message {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    word-wrap: break-word;
    width: calc(100% - 30px);
  }
  ${(props) =>
    props.isError
      ? css`
          background-color: #fc4734;
          color: #fff;
          border: 1px #f95d4c solid;
          .message {
            color: #ffffff;
          }
        `
      : css`
          background: rgba(246, 240, 240, 0.58);
          border: 1px solid #fff;
          box-shadow: 12px 12px 40px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(6px);
          .message {
            color: #191919;
          }
        `}
`;

export const Icon = styled.div`
  ${flex_center}
  height: 100%;
  width: 24px;
  svg {
    height: 100%;
    width: 100%;
    path {
      stroke: #459522;
    }
  }
`;

import styled, { css } from "styled-components";

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.311);
  border: 1px solid rgba(255, 255, 255);
  color: #191919;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  padding: 14px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.03);
  ${(props) =>
    props.halfBorder
      ? `
    border-radius: 6px 0 0 6px;
  `
      : `
    border-radius: 6px;
  `}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  ${({ error }) =>
    error &&
    css`
      input {
        border: 1px solid #fc4734 !important;
      }
    `}
`;

export const Error = styled.span`
  position: absolute;
  bottom: -14px;
  left: 0;
  color: #fc4734;
  font-size: 12px;
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 200px;
  width: 100%;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.311);

  border: 1px solid #fc4734;
  font-size: 14px;
  font-family: "Poppins", sans-serif !important;

  line-height: 18px;
  padding: 14px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.03);
`;

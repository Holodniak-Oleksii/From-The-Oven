import styled from "styled-components";

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

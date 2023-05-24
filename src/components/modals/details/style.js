import styled, { css } from "styled-components";

export const Row = styled.div`
  width: 100%;
  height: 40px;
  background: rgba(244, 241, 241, 1);
  border: 1px solid #fff;
  backdrop-filter: blur(6px);
  transition: all linear 0.4s;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  ${({ head }) =>
    head
      ? css`
          background: rgba(231, 231, 231, 1);
        `
      : css`
          @media screen and (min-width: 1025px) {
            &:hover {
              background: rgba(255, 255, 255, 0.5);
            }
          }
        `}
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 510px;
  padding: 0 40px;
  overflow: auto;
  @media screen and (max-width: 540px) {
    padding: 0 16px;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 420px;
  position: relative;
  @media screen and (max-width: 1024px) {
    height: 320px;
  }
`;
export const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

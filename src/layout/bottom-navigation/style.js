import styled from "styled-components";
import { flex_center } from "@/assets/scss/global";

export const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: blur(50px);
  padding: 10px;
  position: fixed;
  bottom: 0;
  z-index: 100;
  left: 0;
  width: 100%;
  border-top: 1px solid rgba(136, 135, 135, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Item = styled.button`
  ${flex_center};
  width: calc(100% / 4);
  border-radius: 50%;
  svg {
    height: 30px;
    width: 30px;
  }
`;

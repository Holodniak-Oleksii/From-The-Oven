import styled from "styled-components";
import { flex_center } from "@/assets/scss/global";

export const Wrapper = styled.div`
  /* height: 10000px; */
  /* padding-top: 800px; */
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Avatar = styled.div`
  ${flex_center}
  background-color: #201B32;
  padding: 25px;
  border-radius: 50%;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
  }
`;

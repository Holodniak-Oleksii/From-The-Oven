import styled from "styled-components";
import { flex_center } from "@/assets/scss/global";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #fb4733;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 40px 0 20px 0;
`;
export const Item = styled.div`
  ${flex_center}
  flex-direction: column;
  gap: 5px;
  h2 {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-size: 12px;
    font-weight: 300;
  }
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

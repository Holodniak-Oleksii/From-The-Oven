import styled from "styled-components";
import { flex_center } from "@/assets/scss/global";

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  ${flex_center};
  justify-content: flex-start;
  padding: 16px 20px;
  background: rgba(246, 240, 240, 0.58);
  border: 1px solid #fff;
  box-shadow: 12px 12px 40px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(6px);
  gap: 32px;
  border-radius: 16px;
`;

export const Text = styled.div`
  font-size: 14px;
  line-height: 18px;
  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  }
`;

export const Email = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  width: 100%;
  max-width: 450px;
  .submit {
    border-radius: 0 6px 6px 0;
  }
`;

import styled from "styled-components";
import { flex_center } from "@/assets/scss/global";
import { overflowText } from "@/assets/scss/global";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  ${flex_center}
  padding: 16px 20px;
  background: rgba(246, 240, 240, 0.58);
  border: 1px solid #fff;
  box-shadow: 12px 12px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  gap: 16px;
  border-radius: 16px;
  cursor: pointer;
  .title {
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    ${overflowText}
    text-align: center;
  }
  .price {
    font-size: 18px;
  }
  @media screen and (min-width: 1024px) {
    transition: all 0.4s;

    &:hover {
      transform: scale(1.05);
      border: 1px solid rgba(34, 34, 34, 0.22);
    }
  }
`;
export const Group = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .red-btn {
    font-size: 14px;
    padding: 4px 18px;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

export const Size = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .red-btn {
    font-size: 14px;
    width: 100%;
    border-radius: 0;
    padding: 4px 0;
    &:first-child {
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
    }
    &:last-child {
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
    }
  }
`;

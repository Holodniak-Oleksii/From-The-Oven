import styled from "styled-components";
import { flex_center } from "@/assets/scss/global";

export const Wrapper = styled.div`
  border-radius: 12px;
  padding: 12px 24px;
  width: 70%;
  border: 1px solid rgba(111, 109, 109, 0.22);
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
  margin: 20px auto 40px auto;
  ${flex_center}
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 10px auto 40px auto;
  }
  @media screen and (max-width: 540px) {
    padding: 14px;
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media screen and (max-width: 540px) {
    gap: 10px;
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: auto;
  gap: 5px;
  h2 {
    font-size: 22px;
    line-height: 24px;
    font-weight: 600;
  }
  span {
    font-size: 14px;
    line-height: 18px;
    font-weight: 300;
  }
  @media screen and (max-width: 540px) {
    gap: 2px;
    h2 {
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
    }
    span {
      font-size: 12px;
      line-height: 16px;
      font-weight: 300;
    }
  }
`;
export const UserRaiding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 5px;
  span {
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }
  @media screen and (max-width: 540px) {
    span {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;
export const Description = styled.p`
  margin: 10px 5px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
`;

export const Container = styled.div`
  margin: 20px 0;
  .swiper-wrapper {
    align-items: center;
  }
  .swiper-pagination-bullet {
    background-color: #ffc107;
  }
`;

import styled from "styled-components";
import { MainWrapper } from "@/components/containers";

export const Wrapper = styled.header`
  height: 72px;
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  backdrop-filter: blur(3px);
`;

export const Navigations = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;
export const Item = styled.li`
  a {
    transition: all 0.3s ease;
    color: #191919;
    font-weight: 500;
    font-size: 14px;
  }
  &:hover {
    a {
      color: #d00e29;
    }
  }
`;
export const HeaderContainer = styled(MainWrapper)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  height: 100%;
`;
export const Market = styled.button`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    transition: all 0.3s ease;
    height: 30px;
    width: auto;
  }
`;
export const NumberPhone = styled.div`
  color: #191919;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
`;

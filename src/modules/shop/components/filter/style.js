import { flex_center } from "@/assets/scss/global";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Category = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  span {
    width: 100%;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  span {
    width: 100%;
  }
  .select-wrapper {
    max-width: 320px;
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
    .select-wrapper {
      max-width: 100%;
    }
  }
`;

export const Field = styled.div`
  height: 42px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #fc4734;
  border-radius: 40px;
  overflow: hidden;
  .search-filed {
    height: 100%;
    width: 100%;
    border: none;
    padding: 4px 8px;
    outline: 0;
    &::placeholder {
      color: #3a3b3d;
    }
  }
  @media screen and (min-width: 1025px) {
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const IconSearch = styled.div`
  ${flex_center}
  padding: 8px;
  height: 100%;
  border-radius: 50%;
  background-color: #fc4734;
  aspect-ratio: 1 / 1;
`;

export const Chips = styled.button`
  width: 50px;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  ${flex_center}
  position: relative;
  margin-left: -10px;
  background-color: #fff;
  z-index: 1;
  padding: 4px;
  border: 1px solid #efeeee;
  .food-icon {
    width: 100%;
    height: 100%;
  }
  .food-name {
    transition: all 0.2s ease-in-out;
    position: absolute;
    bottom: 0;
    left: 50%;
    opacity: 0;
    color: #505050;
    border: 1px solid #efeeee;
    font-size: 10px;
    white-space: nowrap;
    text-align: center;
    width: fit-content;
    background-color: #fff;
    padding: 0px 6px;
    border-radius: 4px;
    transform: translate(-50%, calc(100% + 4px));
  }

  ${(props) =>
    props.active &&
    `
      border: 2px solid #fc4734;
      transform: scale(1.2);
      z-index: 2;
  `}

  @media screen and (min-width: 1025px) {
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      z-index: 3;
      transform: scale(1.2);
      .food-name {
        opacity: 1;
      }
    }
  }
`;

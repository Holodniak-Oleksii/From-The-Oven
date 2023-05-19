import { flex_center, overflowText } from "@/assets/scss/global";
import styled from "styled-components";

export const Item = styled.div`
  height: 100px;
  width: 100%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  @media screen and (max-width: 540px) {
    height: 75px;
    gap: 8px;
  }
`;

export const CloseButton = styled.button`
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  ${flex_center};
  width: 40px;
  height: 40px;
  background-color: #f3f1f1ce;
  padding: 5px;
  transition: all 0.4s linear;
  transform-origin: center;
  svg {
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: #edeaeaf6;
  }
  &:active {
    transform: scale(0.8);
  }
  @media screen and (max-width: 540px) {
    width: 35px;
    height: 35px;
  }
`;

export const Head = styled.div`
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 540px) {
    padding: 0 16px;
  }
`;
export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 510px;
  padding: 0 40px;
  overflow: auto;
  @media screen and (max-width: 540px) {
    padding: 0 16px;
  }
`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 540px) {
    font-size: 18px;
  }
`;
export const Image = styled.img`
  height: 100%;
  object-fit: contain;
  background-color: #f3f1f1ce;
  border-radius: 12px;
  padding: 6px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-top: 12px;
  gap: 10px;
  flex: 1 1 auto;
  width: calc(100% - 250px);
  @media screen and (max-width: 540px) {
    gap: 6px;
  }
`;
export const Name = styled.span`
  font-size: 18px;
  font-weight: 700;
  ${overflowText}
  @media screen and (max-width: 540px) {
    font-size: 14px;
  }
`;
export const Price = styled.span`
  font-size: 14px;
  font-weight: 500;
  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

export const Counter = styled.div`
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
  span {
    display: block;
    font-weight: 600;
    margin: 0 8px;
  }
  button {
    color: #000;
    font-size: 24px;
    font-weight: 600;
    ${flex_center};
    width: 34px;
    height: 34px;
    background-color: #f6f5f5ce;
    border-radius: 50%;
    transition: all 0.4s linear;
    transform-origin: center;
    &:hover {
      background-color: #edeaeaf6;
    }
    &:active {
      transform: scale(0.8);
    }
  }
  @media screen and (max-width: 540px) {
    gap: 8px;
    span {
      margin: 0px;
      font-size: 16px;
    }
    button {
      font-size: 20px;
      width: 25px;
      height: 25px;
    }
  }
`;

export const Indent = styled.div`
  width: 100%;
  min-height: 1px;
  background-color: #e5e4e4ce;
`;

export const Result = styled.div`
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .order {
    font-size: 16px;
    padding: 8px 22px;
  }
  @media screen and (max-width: 540px) {
    padding: 0 16px;
    .order {
      font-size: 14px;
      padding: 4px 18px;
    }
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    margin-left: 10px;
    font-weight: 600;
  }
  @media screen and (max-width: 540px) {
    font-size: 14px;
  }
`;

// for form
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 40px;
  @media screen and (max-width: 540px) {
    padding: 0 16px;
  }
`;

export const Form = styled.form`
  width: 100%;
  /* max-width: 600px; */
  display: flex;
  flex-direction: column;
  gap: 24px;

  .field {
    width: 100%;
    border: 1px solid #dbdbdb;
  }
`;

export const OrderSubmit = styled(Result)`
  justify-content: center;
  width: 100%;
  gap: 12px;
  .order {
    width: 100%;
    max-width: 200px;
    padding: 8px 22px;
  }
`;

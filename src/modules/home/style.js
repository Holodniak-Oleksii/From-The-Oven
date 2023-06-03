import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Avatar = styled.div`
  ${({ theme }) => theme.content.center}
  background-color: #201B32;
  padding: 25px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 1024px) {
    padding: 20px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

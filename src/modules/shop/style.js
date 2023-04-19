import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 100px 0 50px 0;
`;

export const Grid = styled.div`
  display: grid;
  padding: 40px 0 20px 0;
  width: 100%;
  grid-gap: 26px;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  @media screen and (max-width: 767px) {
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  }
  @media screen and (max-width: 540px) {
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr));
  }
`;

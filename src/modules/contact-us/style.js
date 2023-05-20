import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 5;
  justify-content: center;
  padding: 100px 0;
  a {
    color: #000;
  }
`;
export const Form = styled.form`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .field {
    border: 1px solid #fc4734;
  }
  .red-btn {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
`;
export const TextArea = styled.textarea`
  resize: none;
  height: 200px;
  width: 100%;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.311);

  border: 1px solid #fc4734;
  font-size: 14px;
  font-family: "Poppins", sans-serif !important;

  line-height: 18px;
  padding: 14px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.03);
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 10px;
`;

export const Background = styled.div`
  position: relative;
  height: 100%;
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

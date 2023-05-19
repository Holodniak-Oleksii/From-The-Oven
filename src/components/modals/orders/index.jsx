import { flex_center } from "@/assets/scss/global";
import { useBasket } from "@/store/selectors/index";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";
import styled from "styled-components";
import OrderList from "./list";
import ToOrder from "./order";
import { CloseButton, Head, Title } from "./style";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flex_center}
  padding: 0 16px;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Column = styled.div`
  max-height: 100%;
  min-height: 500px;
  width: 100%;
  max-width: 700px;
  ${flex_center}
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 12px;
  max-height: 100%;
  padding: 24px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (max-width: 540px) {
    padding: 16px 0;
  }
`;
export const ORDER_LIST = "order-list";
export const TO_ORDER = "to-order";

const OrderModal = ({ close, open }) => {
  const [step, setStep] = useState(ORDER_LIST);
  const { amount } = useBasket();

  useEffect(() => {
    if (!amount) {
      close();
    }
  }, [amount]);
  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <Wrapper onClick={close}>
        <Column>
          <Container onClick={(e) => e.stopPropagation()}>
            <Head>
              {step === ORDER_LIST && <Title>{amount} Products</Title>}
              {step === TO_ORDER && <Title>Completing your order</Title>}
              <CloseButton onClick={close}>
                <IoCloseOutline color='#191919' fill />
              </CloseButton>
            </Head>
            {step === ORDER_LIST && <OrderList setStep={setStep} />}
            {step === TO_ORDER && <ToOrder setStep={setStep} />}
          </Container>
        </Column>
      </Wrapper>
    </Modal>
  );
};

export default OrderModal;

import { useBasket } from "@/store/selectors/index";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";
import { CloseButton, Column, Container, Head, Title, Wrapper } from "../style";
import OrderList from "./list";
import ToOrder from "./order";

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

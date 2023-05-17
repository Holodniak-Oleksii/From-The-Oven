import { Field, RedButton } from "@/components/ui";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ORDER_LIST } from ".";
import { Form, Indent, OrderSubmit } from "./style";
const ToOrder = ({ setStep, close }) => {
  const handlerChangeStep = () => {
    setStep(ORDER_LIST);
  };
  return (
    <>
      <Form>
        <Field placeholder='Name' />
        <PhoneInput
          country={"ua"}
          containerClass='phone-container'
          inputClass={"phone-input"}
          buttonClass='phone-button'
        />
        <Field placeholder='Address' />
      </Form>
      <Indent />
      <OrderSubmit>
        <RedButton className='order' outline onClick={handlerChangeStep}>
          Change order
        </RedButton>
        <RedButton className='order' onClick={close}>
          Submit
        </RedButton>
      </OrderSubmit>
    </>
  );
};

export default ToOrder;

import { Input, RedButton } from "@/components/ui";
import { transformObj } from "@/helpers/transformObj";
import { clearProductsAction } from "@/store/actions/basket";
import { useBasket } from "@/store/selectors/index";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ORDER_LIST } from ".";
import { PhoneField } from "../../ui";
import { Form, FormContainer, Indent, OrderSubmit } from "./style";
// import Order from "@/api/order";
const ToOrder = ({ setStep, close }) => {
  const methods = useForm({ mode: "onSubmit" });
  const { handleSubmit, reset } = methods;
  const { pizzas, score } = useBasket();

  const handlerChangeStep = () => {
    setStep(ORDER_LIST);
  };

  const onSubmit = async (data) => {
    const orderData = {
      customerName: data.name,
      customerTelephone: data.phone,
      deliveryAddress: data.address,
      totalAmount: score,
      orderInfo: transformObj(pizzas),
    };
    // const api = new Order()
    // api.setNewOrder()
    clearProductsAction();
    reset();
  };
  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <Input
            placeholder='Name'
            rules={{
              required: true,
            }}
            name='name'
          />
          <PhoneField
            name={"phone"}
            rules={{
              required: true,
            }}
          />
          <Input
            placeholder='Address'
            rules={{
              required: true,
            }}
            name='address'
          />
        </FormContainer>
        <Indent />
        <OrderSubmit>
          <RedButton className='order' outline onClick={handlerChangeStep}>
            Change order
          </RedButton>
          <RedButton className='order' onClick={close} type='submit'>
            Submit
          </RedButton>
        </OrderSubmit>
      </Form>
    </FormProvider>
  );
};

export default ToOrder;

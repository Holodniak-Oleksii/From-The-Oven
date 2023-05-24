import { Input, RedButton } from "@/components/ui";
import { adminLogInAction } from "@/store/actions/admin";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "./styles";

const FormAuth = () => {
  const methods = useForm({ mode: "onSubmit" });
  const { handleSubmit, setError } = methods;
  const onSubmit = async (data) => {
    if (data.login !== process.env.REACT_APP_LOGIN) {
      setError("login", { type: "custom", message: "Invalid login" });
    }
    if (data.password !== process.env.REACT_APP_PASSWORD) {
      setError("password", { type: "custom", message: "Invalid password" });
    } else {
      adminLogInAction();
    }
  };
  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder='Login'
          rules={{
            required: true,
          }}
          name='login'
        />
        <Input
          placeholder='Password'
          rules={{
            required: true,
          }}
          type='password'
          name='password'
        />
        <RedButton className='order' type='submit'>
          Submit
        </RedButton>
      </Form>
    </FormProvider>
  );
};

export default FormAuth;

import Common from "@/api/common";
import { Input, RedButton } from "@/components/ui";
import { adminAuthAction, adminLogInAction } from "@/store/actions/admin";
import JWT from "expo-jwt";
import { useSnackbar } from "notistack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "./styles";

const FormAuth = () => {
  const methods = useForm({ mode: "onSubmit" });
  const { handleSubmit, setError } = methods;
  const { enqueueSnackbar } = useSnackbar();

  const api = new Common();
  const onSubmit = async (data) => {
    try {
      const message = await api.login(data);
      if (message.status !== 200) {
        enqueueSnackbar(message.result[0], {
          variant: "error",
          autoHideDuration: 4000,
        });
      } else {
        const token = JWT.encode(data, process.env.REACT_APP_SECRET_KEY);
        adminLogInAction(token);
        adminAuthAction();
      }
    } catch (e) {
      enqueueSnackbar(e.message, {
        variant: "error",
        autoHideDuration: 4000,
      });
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
          name='username'
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

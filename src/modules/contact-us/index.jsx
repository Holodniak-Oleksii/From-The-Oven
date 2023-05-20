import Contact from "@/api/contacts";
import bg from "@/assets/images/contact-bg.svg";
import Container from "@/components/containers";
import { Input, RedButton, TextArea } from "@/components/ui";
import { patterns } from "@/helpers/patterns";
import { useSnackbar } from "notistack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Background, Form, Title, Wrapper } from "./style";
const ContactUs = () => {
  const methods = useForm({ mode: "onSubmit" });
  const { handleSubmit, reset } = methods;
  const { enqueueSnackbar } = useSnackbar();
  const api = new Contact();

  const onSubmit = async (data) => {
    try {
      await api.setNewContact(data);
      enqueueSnackbar("Send successful", {
        variant: "success",
        autoHideDuration: 4000,
      });
      reset();
    } catch (e) {
      enqueueSnackbar(e.message, {
        variant: "error",
        autoHideDuration: 4000,
      });
    }
  };

  return (
    <Background>
      <img src={bg} alt='' />
      <Container>
        <Wrapper>
          <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Title>Contact us</Title>
              <Input
                rules={{
                  required: true,
                }}
                name='name'
                placeholder={"Name"}
              />
              <Input
                rules={{
                  required: true,
                  pattern: {
                    value: patterns.email,
                    message: "Email incorrect",
                  },
                }}
                name='email'
                placeholder={"Email"}
              />
              <TextArea
                placeholder='Message'
                rules={{
                  required: true,
                  maxLength: 500,
                }}
                name='message'
              />
              <RedButton className={"red-btn"} type='submit'>
                Submit
              </RedButton>
            </Form>
          </FormProvider>
        </Wrapper>
      </Container>
    </Background>
  );
};

export default ContactUs;

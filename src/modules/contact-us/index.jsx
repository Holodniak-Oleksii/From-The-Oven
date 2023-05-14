import Container from "@/components/containers";
import { Bubbles, Field, RedButton } from "@/components/ui";
import React from "react";
import { Background, Form, TextArea, Title, Wrapper } from "./style";

const ContactUs = () => {
  return (
    <Background>
      <Bubbles />
      <Container>
        <Wrapper>
          <Form>
            <Title>Contact us</Title>
            <Field placeholder={"Name"} />
            <Field placeholder={"Email"} />
            <TextArea placeholder='Message' />
            <RedButton className={"red-btn"}>Submit</RedButton>
          </Form>
        </Wrapper>
      </Container>
    </Background>
  );
};

export default ContactUs;

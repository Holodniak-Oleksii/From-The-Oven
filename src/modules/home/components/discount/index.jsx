import React from "react";
import { IconEmail } from "@/components/icons";
import { Avatar } from "../../style";
import { Wrapper, Text, Email } from "./style";
import Field from "@/components/ui/inputs/field";
import RedButton from "@/components/ui/buttons/red";

const Discount = () => {
  return (
    <Wrapper>
      <Avatar>
        <IconEmail />
      </Avatar>
      <Text>
        <h3>Newsletter</h3>
        Get free 20% discount for all products on your first order.
      </Text>
      <Email>
        <Field halfBorder placeholder='Email...' />
        <RedButton className='submit'>Submit</RedButton>
      </Email>
    </Wrapper>
  );
};

export default Discount;

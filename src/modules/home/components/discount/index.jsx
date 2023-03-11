import React from "react";

import { IconEmail } from "@/components/icons";
import { Field, RedButton } from "@/components/ui";

import { Avatar } from "../../style";
import { Wrapper, Text, Email } from "./style";

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

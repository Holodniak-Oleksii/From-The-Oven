import React from "react";

import { IconEmail } from "@/components/icons";
import { Field, RedButton } from "@/components/ui";
import { LittleMobileOff, TabletOff, TabletOn } from "@/helpers/responsive";

import { Avatar } from "../../style";
import { Wrapper, Text, Email, Flex } from "./style";

const Discount = () => {
  return (
    <Wrapper>
      <TabletOff>
        <Avatar>
          <IconEmail />
        </Avatar>
        <Text>
          <h3>Newsletter</h3>
          Get free 20% discount for all products on your first order.
        </Text>
      </TabletOff>
      <TabletOn>
        <Flex>
          <LittleMobileOff>
            <Avatar>
              <IconEmail />
            </Avatar>
          </LittleMobileOff>
          <Text>
            <h3>Newsletter</h3>
            Get free 20% discount for all products on your first order.
          </Text>
        </Flex>
      </TabletOn>
      <Email>
        <Field halfBorder placeholder='Email...' />
        <RedButton className='submit'>Submit</RedButton>
      </Email>
    </Wrapper>
  );
};

export default Discount;
